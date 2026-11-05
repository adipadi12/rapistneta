#!/usr/bin/env node
/**
 * Dataset validation script
 * Validates the politician dataset against the Zod schema and generates a quality report
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { politicianSchema, validatePoliticianConsistency } from './politicianSchema.js';
import type { PoliticianSchemaType } from './politicianSchema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ValidationReport {
  totalEntries: number;
  validEntries: number;
  invalidEntries: number;
  schemaErrors: Array<{ id: number | string; errors: string[] }>;
  consistencyErrors: string[];
  duplicateIds: number[];
  imageStats: {
    withImages: number;
    nullImages: number;
    brokenPaths: number;
  };
  statusDistribution: {
    rapist: number;
    garbage: number;
    clean: number;
  };
  timestamp: string;
}

/**
 * Validate the politicians dataset
 */
async function validateDataset() {
  console.log('🔍 Starting dataset validation...\n');

  // Load the dataset
  const dataPath = path.join(__dirname, '../data/politicians.js');

  let politiciansData: any[] = [];

  try {
    // Dynamic import of the JS module
    const module = await import(dataPath);
    politiciansData = module.politicians;
    console.log(`✓ Loaded ${politiciansData.length} politician entries\n`);
  } catch (error) {
    console.error('✗ Failed to load politicians.js:', error);
    process.exit(1);
  }

  const report: ValidationReport = {
    totalEntries: politiciansData.length,
    validEntries: 0,
    invalidEntries: 0,
    schemaErrors: [],
    consistencyErrors: [],
    duplicateIds: [],
    imageStats: {
      withImages: 0,
      nullImages: 0,
      brokenPaths: 0,
    },
    statusDistribution: {
      rapist: 0,
      garbage: 0,
      clean: 0,
    },
    timestamp: new Date().toISOString(),
  };

  const seenIds = new Set<number>();
  const validPoliticians: PoliticianSchemaType[] = [];

  // Validate each politician
  for (const politician of politiciansData) {
    const id = politician.id ?? 'unknown';

    // Check for duplicate IDs
    if (typeof politician.id === 'number') {
      if (seenIds.has(politician.id)) {
        report.duplicateIds.push(politician.id);
      }
      seenIds.add(politician.id);
    }

    // Schema validation
    const result = politicianSchema.safeParse(politician);

    if (!result.success) {
      report.invalidEntries++;
      report.schemaErrors.push({
        id,
        errors: result.error.issues.map((err) => `${err.path.join('.')}: ${err.message}`),
      });
      continue;
    }

    // Consistency validation
    const consistencyErrors = validatePoliticianConsistency(result.data);
    if (consistencyErrors.length > 0) {
      report.consistencyErrors.push(...consistencyErrors);
    }

    // Image stats
    if (result.data.image === null) {
      report.imageStats.nullImages++;
    } else if (result.data.image.startsWith('/public/')) {
      report.imageStats.brokenPaths++;
    } else {
      report.imageStats.withImages++;
    }

    // Status distribution
    report.statusDistribution[result.data.status]++;

    validPoliticians.push(result.data);
    report.validEntries++;
  }

  // Generate report
  console.log('📊 Validation Report');
  console.log('='.repeat(50));
  console.log(`Total Entries:        ${report.totalEntries}`);
  console.log(`Valid Entries:        ${report.validEntries} (${((report.validEntries / report.totalEntries) * 100).toFixed(1)}%)`);
  console.log(`Invalid Entries:      ${report.invalidEntries}`);
  console.log(`Duplicate IDs:        ${report.duplicateIds.length}`);
  console.log();
  console.log('Status Distribution:');
  console.log(`  Rapist:             ${report.statusDistribution.rapist}`);
  console.log(`  Garbage:            ${report.statusDistribution.garbage}`);
  console.log(`  Clean:              ${report.statusDistribution.clean}`);
  console.log();
  console.log('Image Statistics:');
  console.log(`  With Images:        ${report.imageStats.withImages}`);
  console.log(`  Null Images:        ${report.imageStats.nullImages}`);
  console.log(`  Broken Paths:       ${report.imageStats.brokenPaths}`);
  console.log();

  if (report.schemaErrors.length > 0) {
    console.log('❌ Schema Errors:');
    report.schemaErrors.slice(0, 10).forEach(err => {
      console.log(`  ID ${err.id}:`);
      err.errors.forEach(e => console.log(`    - ${e}`));
    });
    if (report.schemaErrors.length > 10) {
      console.log(`  ... and ${report.schemaErrors.length - 10} more errors`);
    }
    console.log();
  }

  if (report.consistencyErrors.length > 0) {
    console.log('⚠️  Consistency Warnings:');
    report.consistencyErrors.slice(0, 10).forEach(err => {
      console.log(`  - ${err}`);
    });
    if (report.consistencyErrors.length > 10) {
      console.log(`  ... and ${report.consistencyErrors.length - 10} more warnings`);
    }
    console.log();
  }

  if (report.duplicateIds.length > 0) {
    console.log('🔄 Duplicate IDs:');
    console.log(`  ${report.duplicateIds.join(', ')}`);
    console.log();
  }

  // Save report to file
  const reportsDir = path.join(__dirname, '../../reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const reportPath = path.join(reportsDir, 'validation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`💾 Full report saved to: ${reportPath}`);

  // Export validated politicians as JSON
  if (report.invalidEntries === 0) {
    const staticDir = path.join(__dirname, '../data/static');
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true });
    }

    const jsonPath = path.join(staticDir, 'politicians.json');
    fs.writeFileSync(jsonPath, JSON.stringify(validPoliticians, null, 2));
    console.log(`✓ Validated dataset exported to: ${jsonPath}\n`);
  } else {
    console.log('⚠️  Not exporting validated JSON due to schema errors\n');
  }

  // Exit with error if validation failed
  if (report.invalidEntries > 0 || report.duplicateIds.length > 0) {
    console.log('❌ Validation failed with errors');
    process.exit(1);
  } else {
    console.log('✅ Validation completed successfully!');
  }
}

// Run validation
validateDataset().catch(error => {
  console.error('Fatal error during validation:', error);
  process.exit(1);
});
