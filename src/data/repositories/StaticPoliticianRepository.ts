import type {
  Politician,
  SearchParams,
  PaginatedResult,
  Statistics,
  FilterParams,
} from '../../types';
import type { IPoliticianRepository } from './IPoliticianRepository';

/**
 * Static JSON-based implementation of IPoliticianRepository.
 * Loads politician data from the validated JSON file and provides
 * in-memory filtering and searching.
 */
export class StaticPoliticianRepository implements IPoliticianRepository {
  private politicians: Politician[];

  constructor(politicians: Politician[]) {
    this.politicians = politicians;
  }

  /**
   * Get all politicians
   */
  async getAll(): Promise<Politician[]> {
    return Promise.resolve([...this.politicians]);
  }

  /**
   * Get politician by ID
   */
  async getById(id: number): Promise<Politician | null> {
    const politician = this.politicians.find((p) => p.id === id);
    return Promise.resolve(politician ?? null);
  }

  /**
   * Search politicians with filters and pagination
   */
  async search(params: SearchParams): Promise<PaginatedResult<Politician>> {
    let filtered = this.applyFilters(this.politicians, params);

    const total = filtered.length;
    const page = params.pagination?.page ?? 1;
    const pageSize = params.pagination?.pageSize ?? filtered.length;
    const totalPages = Math.ceil(total / pageSize);

    // Apply pagination
    if (params.pagination) {
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      filtered = filtered.slice(startIndex, endIndex);
    }

    return Promise.resolve({
      data: filtered,
      total,
      page,
      pageSize,
      totalPages,
    });
  }

  /**
   * Get statistics based on filters
   */
  async getStatistics(filters?: FilterParams): Promise<Statistics> {
    const filtered = filters ? this.applyFilters(this.politicians, filters) : this.politicians;

    const byStatus = {
      rapist: filtered.filter((p) => p.status === 'rapist').length,
      garbage: filtered.filter((p) => p.status === 'garbage').length,
      clean: filtered.filter((p) => p.status === 'clean').length,
    };

    // Calculate by-state distribution
    const byState: Record<string, number> = {};
    filtered.forEach((p) => {
      if (p.state) {
        byState[p.state] = (byState[p.state] ?? 0) + 1;
      }
    });

    // Calculate by-party distribution
    const byParty: Record<string, number> = {};
    filtered.forEach((p) => {
      if (p.party) {
        byParty[p.party] = (byParty[p.party] ?? 0) + 1;
      }
    });

    return Promise.resolve({
      total: filtered.length,
      byStatus,
      byState,
      byParty,
    });
  }

  /**
   * Get random politician, optionally filtered
   */
  async getRandomPolitician(filters?: FilterParams): Promise<Politician> {
    const filtered = filters ? this.applyFilters(this.politicians, filters) : this.politicians;

    if (filtered.length === 0) {
      throw new Error('No politicians found matching the given filters');
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return Promise.resolve(filtered[randomIndex]!);
  }

  /**
   * Get total count of politicians matching filters
   */
  async getCount(filters?: FilterParams): Promise<number> {
    const filtered = filters ? this.applyFilters(this.politicians, filters) : this.politicians;
    return Promise.resolve(filtered.length);
  }

  /**
   * Apply filters to politician array
   */
  private applyFilters(politicians: Politician[], filters: FilterParams): Politician[] {
    let filtered = [...politicians];

    // Filter by search term
    if (filters.searchTerm) {
      const lowerSearchTerm = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerSearchTerm) ||
          p.party.toLowerCase().includes(lowerSearchTerm) ||
          p.position.toLowerCase().includes(lowerSearchTerm) ||
          (p.state && p.state.toLowerCase().includes(lowerSearchTerm)) ||
          (p.district && p.district.toLowerCase().includes(lowerSearchTerm))
      );
    }

    // Filter by status
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter((p) => p.status === filters.status);
    }

    // Filter by state
    if (filters.state) {
      filtered = filtered.filter((p) => p.state === filters.state);
    }

    // Filter by district
    if (filters.district) {
      filtered = filtered.filter((p) => p.district === filters.district);
    }

    // Filter by party
    if (filters.party) {
      filtered = filtered.filter((p) => p.party === filters.party);
    }

    return filtered;
  }
}
