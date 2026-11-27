/**
 * seed-neon.ts
 *
 * One-time script to migrate politicians-15k.json into your Neon PostgreSQL database.
 *
 * Usage:
 *   1.  Add DATABASE_URL to your .env file (copy from Neon dashboard → Connection string)
 *   2.  Run the schema first:  psql $DATABASE_URL -f db/schema.sql
 *   3.  npx tsx scripts/seed-neon.ts
 */

import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import data from '../src/data/static/politicians-15k.json';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('❌  DATABASE_URL is not set. Add it to your .env file.');
  process.exit(1);
}

const sql = neon(DATABASE_URL);

// Allowed enum values in the DB
const VALID_STATUSES = new Set(['rapist', 'garbage', 'clean']);

type RawPolitician = {
  id: number;
  name: string;
  party?: string;
  position?: string;
  image?: string | null;
  state?: string;
  district?: string;
  status?: string;
  cases?: { sexualAssault?: number; other?: number };
  caseDetails?: Record<string, string[]>;
  sources?: { title: string; url: string }[];
};

async function ensureSchema() {
  console.log('Checking and applying database schema...');
  
  await sql`CREATE EXTENSION IF NOT EXISTS pg_trgm`;

  await sql`
    DO $$ BEGIN
      CREATE TYPE politician_status AS ENUM ('rapist', 'garbage', 'clean');
    EXCEPTION
      WHEN duplicate_object THEN NULL;
    END $$;
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS politicians (
      id                   SERIAL PRIMARY KEY,
      name                 VARCHAR(255)       NOT NULL,
      party                VARCHAR(255)       NOT NULL DEFAULT '',
      position             VARCHAR(500)       NOT NULL DEFAULT '',
      image                TEXT,
      state                VARCHAR(150)       NOT NULL DEFAULT '',
      district             VARCHAR(150)       NOT NULL DEFAULT '',
      status               politician_status  NOT NULL DEFAULT 'clean',
      sexual_assault_cases INT                NOT NULL DEFAULT 0,
      other_cases          INT                NOT NULL DEFAULT 0,
      case_details         JSONB              NOT NULL DEFAULT '{}',
      sources              JSONB              NOT NULL DEFAULT '[]',
      created_at           TIMESTAMPTZ        NOT NULL DEFAULT NOW()
    )
  `;

  await sql`CREATE INDEX IF NOT EXISTS idx_politicians_status   ON politicians(status)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_politicians_state    ON politicians(state)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_politicians_district ON politicians(district)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_politicians_name_trgm ON politicians USING gin (name gin_trgm_ops)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_politicians_party_trgm ON politicians USING gin (party gin_trgm_ops)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_politicians_position_trgm ON politicians USING gin (position gin_trgm_ops)`;
  
  console.log('Database schema is ready.');
}

async function seed() {
  await ensureSchema();

  const politicians = data as RawPolitician[];
  console.log(`Seeding ${politicians.length} politicians into Neon...`);

  // Wipe existing data before re-seeding
  await sql`TRUNCATE TABLE politicians RESTART IDENTITY`;
  console.log('Cleared existing rows.');

  const BATCH = 100;
  let seeded = 0;

  for (let i = 0; i < politicians.length; i += BATCH) {
    const batch = politicians.slice(i, i + BATCH);

    // Build parameterised VALUES with neon tagged-template literal
    for (const p of batch) {
      const status = VALID_STATUSES.has(p.status ?? '') ? p.status! : 'clean';
      const caseDetails = p.caseDetails ?? {};
      const sources = p.sources ?? [];

      await sql`
        INSERT INTO politicians
          (id, name, party, position, image, state, district, status,
           sexual_assault_cases, other_cases, case_details, sources)
        VALUES (
          ${p.id},
          ${p.name ?? ''},
          ${p.party ?? ''},
          ${p.position ?? ''},
          ${p.image ?? null},
          ${p.state ?? ''},
          ${p.district ?? ''},
          ${status as 'rapist' | 'garbage' | 'clean'},
          ${p.cases?.sexualAssault ?? 0},
          ${p.cases?.other ?? 0},
          ${JSON.stringify(caseDetails)},
          ${JSON.stringify(sources)}
        )
        ON CONFLICT (id) DO UPDATE SET
          name                 = EXCLUDED.name,
          party                = EXCLUDED.party,
          position             = EXCLUDED.position,
          image                = EXCLUDED.image,
          state                = EXCLUDED.state,
          district             = EXCLUDED.district,
          status               = EXCLUDED.status,
          sexual_assault_cases = EXCLUDED.sexual_assault_cases,
          other_cases          = EXCLUDED.other_cases,
          case_details         = EXCLUDED.case_details,
          sources              = EXCLUDED.sources
      `;
    }

    seeded += batch.length;
    console.log(`  ✓  ${seeded} / ${politicians.length}`);
  }

  // Reset the sequence so future INSERTs auto-increment correctly
  await sql`SELECT setval('politicians_id_seq', (SELECT MAX(id) FROM politicians))`;

  console.log(`\n✅  Done! ${seeded} politicians seeded.`);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
