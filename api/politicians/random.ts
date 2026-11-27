/** GET /api/politicians/random — Vercel serverless handler (production) */
import type { IncomingMessage, ServerResponse } from 'http';
import 'dotenv/config';
import { queryRandom } from '../../server/db.js';

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
    const status   = q['status']   ?? 'all';
    const state    = q['state']    ?? '';
    const district = q['district'] ?? '';
    const party    = q['party']    ?? '';

    const politician = await queryRandom({ status, state, district, party });
    if (!politician) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No politicians found' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(politician));
  } catch (err) {
    console.error('[/api/politicians/random]', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
