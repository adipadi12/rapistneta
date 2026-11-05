#!/usr/bin/env node
/**
 * Generate synthetic politician dataset for performance testing
 * Creates 15,000 realistic politician entries with proper distribution
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_COUNT = 15000;

// Indian states and districts
const states = [
  'Uttar Pradesh',
  'Maharashtra',
  'Bihar',
  'West Bengal',
  'Madhya Pradesh',
  'Tamil Nadu',
  'Rajasthan',
  'Karnataka',
  'Gujarat',
  'Andhra Pradesh',
  'Odisha',
  'Telangana',
  'Kerala',
  'Jharkhand',
  'Assam',
  'Punjab',
  'Chhattisgarh',
  'Haryana',
  'Delhi',
  'Jammu and Kashmir',
];

const parties = [
  'Bharatiya Janata Party (BJP)',
  'Indian National Congress (INC)',
  'Aam Aadmi Party (AAP)',
  'Samajwadi Party (SP)',
  'Bahujan Samaj Party (BSP)',
  'Shiv Sena',
  'Trinamool Congress (TMC)',
  'Dravida Munnetra Kazhagam (DMK)',
  'Janata Dal (United)',
  'Rashtriya Janata Dal (RJD)',
  'Communist Party of India (Marxist)',
  'Nationalist Congress Party (NCP)',
  'Telugu Desam Party (TDP)',
  'Independent',
];

const positions = [
  'Member of Parliament',
  'Member of Legislative Assembly',
  'Former MLA',
  'Former MP',
  'Municipal Councillor',
  'District President',
  'Block President',
  'Party District Leader',
  'Nagar Palika Chairman',
  'Former Minister',
];

const firstNames = [
  'Anil', 'Ramesh', 'Suresh', 'Vijay', 'Rajesh', 'Prakash', 'Santosh', 'Ajay',
  'Priya', 'Sanjay', 'Rakesh', 'Mahesh', 'Deepak', 'Ashok', 'Mohan', 'Ravi',
  'Amit', 'Arun', 'Nitin', 'Pankaj', 'Mukesh', 'Naveen', 'Sanjiv', 'Kumar',
  'Sunita', 'Rekha', 'Anita', 'Pooja', 'Neeta', 'Geeta', 'Meera', 'Savita',
];

const lastNames = [
  'Singh', 'Kumar', 'Sharma', 'Yadav', 'Patel', 'Reddy', 'Nair', 'Rao',
  'Gupta', 'Joshi', 'Verma', 'Mehta', 'Desai', 'Agarwal', 'Pandey', 'Mishra',
  'Das', 'Sen', 'Bose', 'Mukherjee', 'Patil', 'Kulkarni', 'Jain', 'Malhotra',
];

const districts = [
  'Central', 'North', 'South', 'East', 'West', 'Urban', 'Rural',
];

/**
 * Generate random name
 */
function generateName() {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

/**
 * Generate politician with realistic distribution
 * ~10% rapist, ~60% garbage, ~30% clean (matching current dataset)
 */
function generatePolitician(id) {
  const rand = Math.random();
  let status;
  let sexualAssaultCases = 0;
  let otherCases = 0;

  if (rand < 0.1) {
    // 10% rapist
    status = 'rapist';
    sexualAssaultCases = Math.floor(Math.random() * 5) + 1; // 1-5 cases
    otherCases = Math.random() < 0.3 ? Math.floor(Math.random() * 10) : 0;
  } else if (rand < 0.7) {
    // 60% garbage
    status = 'garbage';
    otherCases = Math.floor(Math.random() * 50) + 1; // 1-50 cases
  } else {
    // 30% clean
    status = 'clean';
  }

  const state = states[Math.floor(Math.random() * states.length)];
  const district = `${districts[Math.floor(Math.random() * districts.length)]} ${state}`;

  return {
    id,
    name: generateName(),
    party: parties[Math.floor(Math.random() * parties.length)],
    position: positions[Math.floor(Math.random() * positions.length)],
    image: null,
    state,
    district,
    status,
    cases: {
      sexualAssault: sexualAssaultCases,
      other: otherCases,
    },
    caseDetails: sexualAssaultCases > 0 || otherCases > 0 ? {
      ...(sexualAssaultCases > 0 && {
        sexualAssault: [
          'Sexual harassment charges under IPC sections 354, 354A',
          'Case pending in district court',
        ],
      }),
      ...(otherCases > 0 && {
        other: [
          'Criminal charges including corruption and misconduct',
          'Multiple pending cases',
        ],
      }),
    } : undefined,
    sources: [],
  };
}

/**
 * Main generation function
 */
function generateDataset() {
  console.log(`🚀 Generating ${TARGET_COUNT} synthetic politicians...\n`);

  const politicians = [];
  const startId = 2000; // Start after existing IDs

  for (let i = 0; i < TARGET_COUNT; i++) {
    politicians.push(generatePolitician(startId + i));

    if ((i + 1) % 1000 === 0) {
      console.log(`✓ Generated ${i + 1}/${TARGET_COUNT} politicians`);
    }
  }

  // Calculate statistics
  const stats = {
    total: politicians.length,
    rapist: politicians.filter(p => p.status === 'rapist').length,
    garbage: politicians.filter(p => p.status === 'garbage').length,
    clean: politicians.filter(p => p.status === 'clean').length,
  };

  console.log('\n📊 Dataset Statistics:');
  console.log(`  Total:    ${stats.total}`);
  console.log(`  Rapist:   ${stats.rapist} (${((stats.rapist / stats.total) * 100).toFixed(1)}%)`);
  console.log(`  Garbage:  ${stats.garbage} (${((stats.garbage / stats.total) * 100).toFixed(1)}%)`);
  console.log(`  Clean:    ${stats.clean} (${((stats.clean / stats.total) * 100).toFixed(1)}%)`);

  // Save to file
  const outputPath = path.join(__dirname, '../src/data/static/politicians-15k.json');
  fs.writeFileSync(outputPath, JSON.stringify(politicians, null, 2));

  const fileSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
  console.log(`\n💾 Saved to: ${outputPath}`);
  console.log(`📦 File size: ${fileSize} MB`);
  console.log('\n✅ Generation complete!');
  console.log('\n⚠️  Note: This is synthetic test data for performance testing only.');
}

// Run generation
generateDataset();
