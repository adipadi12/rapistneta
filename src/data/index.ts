/**
 * Application initialization and dependency injection
 *
 * This file sets up the data access layer and service instances.
 * It loads the politician data and creates repository/service instances
 * that can be used throughout the application.
 * Using the 15K dataset for full coverage of Indian politicians.
 */

import politicians from './static/politicians-15k.json';
import { StaticPoliticianRepository } from './repositories';
import { PoliticianService } from '../services';

/**
 * Initialize the static politician repository with 15K dataset
 * The 15K dataset contains synthetic politicians covering all Indian states and districts
 */
const politicianRepository = new StaticPoliticianRepository(politicians);

/**
 * Initialize the politician service
 * This is the main interface components should use for data access
 */
export const politicianService = new PoliticianService(politicianRepository);

/**
 * Export the raw politicians array for backward compatibility
 * Contains 15,000 politicians from the synthetic dataset
 */
export { politicians };
