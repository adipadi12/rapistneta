import type {
  Politician,
  SearchParams,
  PaginatedResult,
  Statistics,
  FilterParams,
} from '../../types';

/**
 * Repository interface for politician data access.
 * This abstraction allows switching between static JSON and database implementations.
 */
export interface IPoliticianRepository {
  /**
   * Get all politicians (use with caution for large datasets)
   */
  getAll(): Promise<Politician[]>;

  /**
   * Get politician by ID
   */
  getById(id: number): Promise<Politician | null>;

  /**
   * Search politicians with filters and pagination
   */
  search(params: SearchParams): Promise<PaginatedResult<Politician>>;

  /**
   * Get statistics based on filters
   */
  getStatistics(filters?: FilterParams): Promise<Statistics>;

  /**
   * Get random politician, optionally filtered
   */
  getRandomPolitician(filters?: FilterParams): Promise<Politician>;

  /**
   * Get total count of politicians matching filters
   */
  getCount(filters?: FilterParams): Promise<number>;
}
