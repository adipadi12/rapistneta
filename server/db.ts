/**
 * server/db.ts
 *
 * Shared Neon query logic used by both:
 *   - server/index.ts  (local Express dev server)
 *   - api/**\/*.ts     (Vercel serverless functions in production)
 */

import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

export const sql = neon(process.env.DATABASE_URL);

// ─── Types ───────────────────────────────────────────────────────────────────

export interface QueryFilters {
  search?:   string;
  status?:   string;
  state?:    string;
  district?: string;
  party?:    string;
}

// ─── Shared helpers ──────────────────────────────────────────────────────────

export function buildWhere(filters: QueryFilters): { where: string; params: unknown[] } {
  const conditions: string[] = [];
  const params: unknown[]    = [];

  if (filters.search) {
    params.push(`%${filters.search.toLowerCase()}%`);
    const idx = params.length;
    conditions.push(
      `(LOWER(name) LIKE $${idx} OR LOWER(party) LIKE $${idx} OR LOWER(position) LIKE $${idx} OR LOWER(state) LIKE $${idx} OR LOWER(district) LIKE $${idx})`
    );
  }
  if (filters.status && filters.status !== 'all') {
    params.push(filters.status);
    conditions.push(`status = $${params.length}`);
  }
  if (filters.state)    { params.push(filters.state);    conditions.push(`state = $${params.length}`);    }
  if (filters.district) { params.push(filters.district); conditions.push(`district = $${params.length}`); }
  if (filters.party)    { params.push(filters.party);    conditions.push(`party = $${params.length}`);    }

  return {
    where:  conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '',
    params,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapRow(row: any) {
  return {
    id:          row.id,
    name:        row.name,
    party:       row.party,
    position:    row.position,
    image:       row.image ?? null,
    state:       row.state,
    district:    row.district,
    status:      row.status,
    cases: {
      sexualAssault: row.sexual_assault_cases,
      other:         row.other_cases,
    },
    caseDetails: row.case_details ?? {},
    sources:     row.sources ?? [],
  };
}

// ─── Query functions ─────────────────────────────────────────────────────────

export async function queryPoliticians(filters: QueryFilters, page: number, pageSize: number) {
  const { where, params } = buildWhere(filters);

  const countRows = (await sql.query(
    `SELECT COUNT(*) AS total FROM politicians ${where}`,
    params
  )) as Array<{ total: string }>;
  const total = parseInt(countRows[0]?.total ?? '0', 10);
  const totalPages = Math.ceil(total / pageSize);

  const dataParams = [...params, pageSize, (page - 1) * pageSize];
  const rows = (await sql.query(
    `SELECT id, name, party, position, image, state, district, status,
            sexual_assault_cases, other_cases, case_details, sources
     FROM politicians ${where}
     ORDER BY id
     LIMIT $${dataParams.length - 1} OFFSET $${dataParams.length}`,
    dataParams
  )) as any[];

  return { data: rows.map(mapRow), total, page, pageSize, totalPages };
}

export async function queryById(id: number) {
  const rows = await sql`
    SELECT id, name, party, position, image, state, district, status,
           sexual_assault_cases, other_cases, case_details, sources
    FROM politicians WHERE id = ${id}
  `;
  return rows.length > 0 ? mapRow(rows[0]) : null;
}

export async function queryStats(filters: QueryFilters) {
  const { where, params } = buildWhere(filters);

  const [byStatusRows, byStateRows, byPartyRows] = await Promise.all([
    sql.query(`SELECT status, COUNT(*) AS count FROM politicians ${where} GROUP BY status`, params) as Promise<any[]>,
    sql.query(`SELECT state,  COUNT(*) AS count FROM politicians ${where} GROUP BY state  ORDER BY count DESC`, params) as Promise<any[]>,
    sql.query(`SELECT party,  COUNT(*) AS count FROM politicians ${where} GROUP BY party  ORDER BY count DESC LIMIT 20`, params) as Promise<any[]>,
  ]);

  const byStatus = { rapist: 0, garbage: 0, clean: 0 };
  for (const row of byStatusRows) {
    byStatus[row.status as keyof typeof byStatus] = parseInt(row.count, 10);
  }

  const byState: Record<string, number> = {};
  for (const row of byStateRows) {
    if (row.state) byState[row.state] = parseInt(row.count, 10);
  }

  const byParty: Record<string, number> = {};
  for (const row of byPartyRows) {
    if (row.party) byParty[row.party] = parseInt(row.count, 10);
  }

  return {
    total: byStatus.rapist + byStatus.garbage + byStatus.clean,
    byStatus,
    byState,
    byParty,
  };
}

export async function queryRandom(filters: QueryFilters) {
  const { where, params } = buildWhere(filters);
  const rows = (await sql.query(
    `SELECT id, name, party, position, image, state, district, status,
            sexual_assault_cases, other_cases, case_details, sources
     FROM politicians ${where} ORDER BY RANDOM() LIMIT 1`,
    params
  )) as any[];
  return rows.length > 0 ? mapRow(rows[0]) : null;
}
