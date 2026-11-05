/**
 * Politician status categories based on criminal record
 */
export type PoliticianStatus = 'rapist' | 'garbage' | 'clean';

/**
 * Criminal case counts
 */
export interface CriminalCaseCounts {
  sexualAssault: number;
  other: number;
}

/**
 * Detailed case information
 */
export interface CaseDetails {
  sexualAssault?: string[];
  other?: string[];
}

/**
 * Source citation for case information
 */
export interface Source {
  title: string;
  url: string;
}

/**
 * Core politician data structure
 */
export interface Politician {
  id: number;
  name: string;
  party: string;
  position: string;
  image: string | null;
  state: string;
  district: string;
  status: PoliticianStatus;
  cases: CriminalCaseCounts;
  caseDetails?: CaseDetails;
  sources?: Source[];
}

/**
 * Filter parameters for politician search
 */
export interface FilterParams {
  searchTerm?: string;
  status?: PoliticianStatus | 'all';
  state?: string;
  district?: string;
  party?: string;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
}

/**
 * Search parameters combining filters and pagination
 */
export interface SearchParams extends FilterParams {
  pagination?: PaginationParams;
}

/**
 * Paginated result wrapper
 */
export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/**
 * Statistics aggregation
 */
export interface Statistics {
  total: number;
  byStatus: {
    rapist: number;
    garbage: number;
    clean: number;
  };
  byState?: Record<string, number>;
  byParty?: Record<string, number>;
}
