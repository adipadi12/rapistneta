import type { Politician, SearchParams, PaginatedResult, Statistics } from './politician';

/**
 * Base API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  error?: string;
  timestamp: string;
}

/**
 * API error response
 */
export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

/**
 * Repository interface for politician data access
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
  getStatistics(filters?: Omit<SearchParams, 'pagination'>): Promise<Statistics>;

  /**
   * Get random politician, optionally filtered
   */
  getRandomPolitician(filters?: Omit<SearchParams, 'pagination'>): Promise<Politician>;
}
