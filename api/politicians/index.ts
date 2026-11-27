/** GET /api/politicians — Vercel serverless handler (production) */
import type { IncomingMessage, ServerResponse } from 'http';
import 'dotenv/config';
import { queryPoliticians } from '../../server/db.js';

export default async function handler(req: IncomingMessage & { query?: Record<string, string> }, res: ServerResponse) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const q        = (req as any).query as Record<string, string> ?? {};
    const search   = q['search']   ?? '';
    const status   = q['status']   ?? 'all';
    const state    = q['state']    ?? '';
    const district = q['district'] ?? '';
    const party    = q['party']    ?? '';
    const pageNum  = Math.max(1, parseInt(q['page'] ?? '1', 10) || 1);
    const size     = Math.min(200, Math.max(1, parseInt(q['pageSize'] ?? '50', 10) || 50));

    const result = await queryPoliticians({ search, status, state, district, party }, pageNum, size);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } catch (err) {
    console.error('[/api/politicians]', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
