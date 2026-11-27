/**
 * Application initialization and dependency injection
 *
 * DATA_SOURCE is controlled by the VITE_DATA_SOURCE env variable:
 *   "neon"   → NeonPoliticianRepository (Neon PostgreSQL via API routes)
 *   anything else / unset → StaticPoliticianRepository (local JSON file, default)
 *
 * To switch to Neon, copy .env.example → .env and set:
 *   VITE_DATA_SOURCE=neon
 *   DATABASE_URL=<your neon connection string>
 */

import politicians from './static/politicians-15k.json';
import { StaticPoliticianRepository, NeonPoliticianRepository } from './repositories';
import { PoliticianService } from '../services';

// Always import JSON statically (tree-shaken away when using Neon).
// This avoids top-level await which is unsupported in the ES2020 build target.
const politicianRepository =
  import.meta.env.VITE_DATA_SOURCE === 'neon'
    ? new NeonPoliticianRepository('/api/politicians')
    : new StaticPoliticianRepository(politicians);

/**
 * Singleton service used by all hooks and components
 */
export const politicianService = new PoliticianService(politicianRepository);
