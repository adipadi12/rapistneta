-- ============================================================
-- RapistNeta - Neon PostgreSQL Schema
-- Run once against your Neon database to set up the tables
-- ============================================================

-- Enable pg_trgm for fast ILIKE / full-text searching
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Status enum
DO $$ BEGIN
  CREATE TYPE politician_status AS ENUM ('rapist', 'garbage', 'clean');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Main politicians table
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
);

-- Indexes for the query patterns used by the app
CREATE INDEX IF NOT EXISTS idx_politicians_status   ON politicians(status);
CREATE INDEX IF NOT EXISTS idx_politicians_state    ON politicians(state);
CREATE INDEX IF NOT EXISTS idx_politicians_district ON politicians(district);
CREATE INDEX IF NOT EXISTS idx_politicians_name_trgm
  ON politicians USING gin (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_politicians_party_trgm
  ON politicians USING gin (party gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_politicians_position_trgm
  ON politicians USING gin (position gin_trgm_ops);
