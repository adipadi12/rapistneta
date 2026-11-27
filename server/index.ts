/**
 * server/index.ts
 *
 * Local development Express API server.
 * Runs on port 3001 (Vite proxies /api → localhost:3001).
 *
 * Usage:
 *   npm run dev:full   ← starts BOTH this server and Vite together (recommended)
 *   npm run dev:server ← start only this server
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { queryPoliticians, queryById, queryStats, queryRandom } from './db.js';

const app  = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ─── GET / (Root health check & information) ──────────────────────────────────
app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'RapistNeta API server is running on port 3001. Open the web UI at http://localhost:3000',
    endpoints: [
      '/api/politicians',
      '/api/politicians/stats',
      '/api/politicians/random',
      '/api/politicians/:id'
    ]
  });
});

// ─── GET /api/politicians ────────────────────────────────────────────────────
app.get('/api/politicians', async (req, res) => {
  try {
    const {
      search   = '',
      status   = 'all',
      state    = '',
      district = '',
      party    = '',
      page     = '1',
      pageSize = '50',
    } = req.query as Record<string, string>;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const size    = Math.min(200, Math.max(1, parseInt(pageSize, 10) || 50));

    const result = await queryPoliticians({ search, status, state, district, party }, pageNum, size);
    res.json(result);
  } catch (err) {
    console.error('[GET /api/politicians]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── GET /api/politicians/stats ──────────────────────────────────────────────
// Must be declared BEFORE /:id to avoid "stats" being matched as an id
app.get('/api/politicians/stats', async (req, res) => {
  try {
    const { search = '', status = 'all', state = '', district = '', party = '' } =
      req.query as Record<string, string>;
    const result = await queryStats({ search, status, state, district, party });
    res.json(result);
  } catch (err) {
    console.error('[GET /api/politicians/stats]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── GET /api/politicians/random ─────────────────────────────────────────────
app.get('/api/politicians/random', async (req, res) => {
  try {
    const { status = 'all', state = '', district = '', party = '' } =
      req.query as Record<string, string>;
    const politician = await queryRandom({ status, state, district, party });
    if (!politician) return res.status(404).json({ error: 'No politicians found' });
    res.json(politician);
  } catch (err) {
    console.error('[GET /api/politicians/random]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── GET /api/politicians/:id ────────────────────────────────────────────────
app.get('/api/politicians/:id', async (req, res) => {
  try {
    const id = parseInt(req.params['id'] ?? '', 10);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
    const politician = await queryById(id);
    if (!politician) return res.status(404).json({ error: 'Not found' });
    res.json(politician);
  } catch (err) {
    console.error('[GET /api/politicians/:id]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
