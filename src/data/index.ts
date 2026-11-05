/**
 * Application initialization and dependency injection
 *
 * This file sets up the data access layer and service instances.
 * It loads the politician data and creates repository/service instances
 * that can be used throughout the application.
 */

import { politicians } from './politicians';
import { StaticPoliticianRepository } from './repositories';
import { PoliticianService } from '../services';

/**
 * Initialize the static politician repository
 */
const politicianRepository = new StaticPoliticianRepository(politicians);

/**
 * Initialize the politician service
 * This is the main interface components should use for data access
 */
export const politicianService = new PoliticianService(politicianRepository);

/**
 * Export the raw politicians array for backward compatibility
 * TODO: Remove this once all components are refactored to use the service
 */
export { politicians };
