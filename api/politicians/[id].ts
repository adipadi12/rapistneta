/** GET /api/politicians/:id — Vercel serverless handler (production) */
import type { IncomingMessage, ServerResponse } from 'http';
import 'dotenv/config';
import { queryById } from '../../server/db.js';

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
    const id = parseInt(String((req as any).query?.['id'] ?? ''), 10);
    if (isNaN(id)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid id' }));
      return;
    }
    const politician = await queryById(id);
    if (!politician) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(politician));
  } catch (err) {
    console.error('[/api/politicians/:id]', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
