import type {
  Politician,
  SearchParams,
  PaginatedResult,
  Statistics,
  FilterParams,
} from '../../types';
import type { IPoliticianRepository } from './IPoliticianRepository';

/**
 * API-backed implementation of IPoliticianRepository.
 * Talks to the Vercel serverless API routes which query Neon PostgreSQL.
 * Drop-in replacement for StaticPoliticianRepository.
 */
export class NeonPoliticianRepository implements IPoliticianRepository {
  private readonly baseUrl: string;

  constructor(baseUrl = '/api/politicians') {
    this.baseUrl = baseUrl;
  }

  // ─── helpers ────────────────────────────────────────────────────────────────

  private buildFilterParams(filters: FilterParams): URLSearchParams {
    const params = new URLSearchParams();
    if (filters.searchTerm) params.set('search', filters.searchTerm);
    if (filters.status && filters.status !== 'all') params.set('status', filters.status);
    if (filters.state)    params.set('state',    filters.state);
    if (filters.district) params.set('district', filters.district);
    if (filters.party)    params.set('party',    filters.party);
    return params;
  }

  private async get<T>(path: string, params?: URLSearchParams): Promise<T> {
    const qs  = params?.toString();
    const url = qs ? `${this.baseUrl}${path}?${qs}` : `${this.baseUrl}${path}`;
    const res = await fetch(url);
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`API error ${res.status} from ${url}: ${body}`);
    }
    return res.json() as Promise<T>;
  }

  // ─── IPoliticianRepository ───────────────────────────────────────────────────

  /** Fetches ALL politicians (all pages). Use sparingly. */
  async getAll(): Promise<Politician[]> {
    // Fetch with a large page size to avoid multiple round-trips on typical dataset
    const result = await this.get<PaginatedResult<Politician>>('', new URLSearchParams({ pageSize: '10000' }));
    return result.data;
  }

  async getById(id: number): Promise<Politician | null> {
    try {
      return await this.get<Politician>(`/${id}`);
    } catch (err) {
      if (err instanceof Error && err.message.includes('404')) return null;
      throw err;
    }
  }

  async search(params: SearchParams): Promise<PaginatedResult<Politician>> {
    const qs = this.buildFilterParams(params);
    if (params.pagination) {
      qs.set('page',     String(params.pagination.page));
      qs.set('pageSize', String(params.pagination.pageSize));
    }
    return this.get<PaginatedResult<Politician>>('', qs);
  }

  async getStatistics(filters?: FilterParams): Promise<Statistics> {
    const qs = filters ? this.buildFilterParams(filters) : undefined;
    return this.get<Statistics>('/stats', qs);
  }

  async getRandomPolitician(filters?: FilterParams): Promise<Politician> {
    const qs = filters ? this.buildFilterParams(filters) : undefined;
    return this.get<Politician>('/random', qs);
  }

  async getCount(filters?: FilterParams): Promise<number> {
    // Reuse the stats endpoint — total is included
    const stats = await this.getStatistics(filters);
    return stats.total;
  }
}
