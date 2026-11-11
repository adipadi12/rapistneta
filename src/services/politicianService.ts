import type {
  Politician,
  SearchParams,
  PaginatedResult,
  Statistics,
  FilterParams,
} from '../types';
import type { IPoliticianRepository } from '../data/repositories';

/**
 * PoliticianService
 *
 * Service layer for politician data operations.
 * Abstracts repository access and provides business logic.
 * Components should use this service instead of accessing repositories directly.
 */
export class PoliticianService {
  private repository: IPoliticianRepository;

  constructor(repository: IPoliticianRepository) {
    this.repository = repository;
  }

  /**
   * Get all politicians
   * WARNING: Use with caution for large datasets. Consider using search() with pagination instead.
   */
  async getAll(): Promise<Politician[]> {
    return this.repository.getAll();
  }

  /**
   * Get politician by ID
   */
  async getById(id: number): Promise<Politician | null> {
    return this.repository.getById(id);
  }

  /**
   * Search politicians with filters and optional pagination
   */
  async search(params: SearchParams): Promise<PaginatedResult<Politician>> {
    return this.repository.search(params);
  }

  /**
   * Get statistics for all politicians or filtered subset
   */
  async getStatistics(filters?: FilterParams): Promise<Statistics> {
    return this.repository.getStatistics(filters);
  }

  /**
   * Get a random politician, optionally filtered
   */
  async getRandomPolitician(filters?: FilterParams): Promise<Politician> {
    return this.repository.getRandomPolitician(filters);
  }

  /**
   * Get count of politicians matching filters
   */
  async getCount(filters?: FilterParams): Promise<number> {
    return this.repository.getCount(filters);
  }

  /**
   * Get politicians by state
   */
  async getByState(state: string): Promise<Politician[]> {
    const result = await this.repository.search({ state });
    return result.data;
  }

  /**
   * Get politicians by district
   */
  async getByDistrict(state: string, district: string): Promise<Politician[]> {
    const result = await this.repository.search({ state, district });
    return result.data;
  }

  /**
   * Get politicians by party
   */
  async getByParty(party: string): Promise<Politician[]> {
    const result = await this.repository.search({ party });
    return result.data;
  }

  /**
   * Get politicians by status
   */
  async getByStatus(status: 'rapist' | 'garbage' | 'clean'): Promise<Politician[]> {
    const result = await this.repository.search({ status });
    return result.data;
  }
}
