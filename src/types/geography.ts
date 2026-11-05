/**
 * Type of administrative division
 */
export type DivisionType = 'state' | 'union_territory';

/**
 * Indian state or union territory
 */
export interface State {
  name: string;
  type: DivisionType;
}

/**
 * District within a state
 */
export interface District {
  name: string;
  state: string;
}

/**
 * States and Union Territories collection
 */
export interface StatesAndUTs {
  states: string[];
  unionTerritories: string[];
}
