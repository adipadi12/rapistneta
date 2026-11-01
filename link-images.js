#!/usr/bin/env node
/**
 * Automated Image Linking Pipeline
 *
 * This script:
 * 1. Scans public/policians-images/ for image files
 * 2. Matches filenames to politician names using fuzzy matching
 * 3. Updates the politicians.js file with correct image paths
 * 4. Generates a report of matched and unmatched images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { imageMapping, nameAliases } from './image-mapping.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const IMAGE_DIR = path.join(__dirname, 'public', 'policians-images');
const POLITICIANS_FILE = path.join(__dirname, 'src', 'data', 'politicians.js');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// Utility: Normalize string for matching
function normalizeString(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, '') // Remove whitespace
    .trim();
}

// Utility: Calculate string similarity (Levenshtein distance)
function similarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;

  if (longer.length === 0) return 1.0;

  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(s1, s2) {
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

// Extract politician name variations for matching
function getNameVariations(fullName) {
  const variations = [fullName];

  // Check if there are aliases defined for this politician
  if (nameAliases[fullName]) {
    variations.push(...nameAliases[fullName]);
  }

  // Remove parentheses content (e.g., "Raja Bhaiya (Raghuraj Pratap Singh)" -> "Raja Bhaiya")
  const withoutParens = fullName.replace(/\s*\([^)]*\)/g, '');
  if (withoutParens !== fullName) {
    variations.push(withoutParens);

    // Also add the content inside parentheses
    const parensContent = fullName.match(/\(([^)]+)\)/);
    if (parensContent) {
      variations.push(parensContent[1]);
    }
  }

  // First name + Last name
  const parts = fullName.split(' ');
  if (parts.length >= 2) {
    variations.push(`${parts[0]} ${parts[parts.length - 1]}`);
    variations.push(parts[parts.length - 1]); // Last name only
    variations.push(parts[0]); // First name only
  }

  return variations.map(v => normalizeString(v));
}

// Scan image directory
function scanImages() {
  console.log(`\n📁 Scanning: ${IMAGE_DIR}\n`);

  if (!fs.existsSync(IMAGE_DIR)) {
    console.error(`❌ Directory not found: ${IMAGE_DIR}`);
    console.log(`\n💡 Creating directory...`);
    fs.mkdirSync(IMAGE_DIR, { recursive: true });
    return [];
  }

  const files = fs.readdirSync(IMAGE_DIR);
  const images = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });

  console.log(`Found ${images.length} image(s):\n`);
  images.forEach(img => console.log(`  - ${img}`));

  return images.map(img => ({
    filename: img,
    basename: path.basename(img, path.extname(img)),
    normalized: normalizeString(path.basename(img, path.extname(img))),
    path: `/policians-images/${img}` // Public path for the app
  }));
}

// Match images to politicians
function matchImages(politicians, images) {
  console.log(`\n🔍 Matching ${images.length} images to ${politicians.length} politicians...\n`);

  const matches = [];
  const unmatched = [];
  const SIMILARITY_THRESHOLD = 0.6; // 60% similarity required

  for (const image of images) {
    // Check manual mapping first
    if (imageMapping[image.filename]) {
      const mapping = imageMapping[image.filename];
      const politician = politicians.find(p => p.id === mapping.id);

      if (politician) {
        matches.push({
          image: image.filename,
          politician: politician.name,
          politicianId: politician.id,
          score: 1.0,
          imagePath: image.path,
          manual: true
        });
        console.log(`  ✓ ${image.filename} → ${politician.name} (Manual mapping)`);
        continue;
      } else {
        console.log(`  ⚠️  Manual mapping for ${image.filename} references non-existent ID ${mapping.id}`);
      }
    }

    // Automatic matching
    let bestMatch = null;
    let bestScore = 0;
    let bestPolitician = null;

    for (const politician of politicians) {
      const nameVariations = getNameVariations(politician.name);

      for (const variation of nameVariations) {
        const score = similarity(variation, image.normalized);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = politician;
          bestPolitician = politician;
        }
      }
    }

    if (bestScore >= SIMILARITY_THRESHOLD) {
      matches.push({
        image: image.filename,
        politician: bestPolitician.name,
        politicianId: bestPolitician.id,
        score: bestScore,
        imagePath: image.path
      });
      console.log(`  ✓ ${image.filename} → ${bestPolitician.name} (${(bestScore * 100).toFixed(1)}% match)`);
    } else {
      unmatched.push({
        image: image.filename,
        bestGuess: bestPolitician?.name || 'None',
        score: bestScore
      });
      console.log(`  ✗ ${image.filename} → No match (best: ${bestPolitician?.name} at ${(bestScore * 100).toFixed(1)}%)`);
    }
  }

  return { matches, unmatched };
}

// Update politicians.js file
function updatePoliticiansFile(matches) {
  console.log(`\n📝 Updating ${POLITICIANS_FILE}...\n`);

  let content = fs.readFileSync(POLITICIANS_FILE, 'utf8');
  let updatedCount = 0;

  for (const match of matches) {
    const { politicianId, imagePath } = match;

    // Find the politician entry and update the image field
    // Pattern: id: X,\n    name: "Name",\n    party: "Party",\n    position: "Position",\n    image: null,
    const regex = new RegExp(
      `(\\s+id: ${politicianId},\\s+name: "[^"]+",\\s+party: "[^"]+",\\s+position: "[^"]+",\\s+image: )null`,
      'g'
    );

    const newContent = content.replace(regex, `$1"${imagePath}"`);

    if (newContent !== content) {
      content = newContent;
      updatedCount++;
      console.log(`  ✓ Updated ID ${politicianId}: ${match.politician}`);
    }
  }

  // Write back to file
  fs.writeFileSync(POLITICIANS_FILE, content, 'utf8');

  console.log(`\n✅ Updated ${updatedCount} politician entries`);

  return updatedCount;
}

// Load politicians from file
function loadPoliticians() {
  const content = fs.readFileSync(POLITICIANS_FILE, 'utf8');

  // Extract politician objects using regex
  const politicians = [];
  const idRegex = /id:\s*(\d+)/g;
  const nameRegex = /name:\s*"([^"]+)"/g;

  let idMatch, nameMatch;
  const ids = [];
  const names = [];

  while ((idMatch = idRegex.exec(content)) !== null) {
    ids.push(parseInt(idMatch[1]));
  }

  while ((nameMatch = nameRegex.exec(content)) !== null) {
    names.push(nameMatch[1]);
  }

  for (let i = 0; i < Math.min(ids.length, names.length); i++) {
    politicians.push({
      id: ids[i],
      name: names[i]
    });
  }

  return politicians;
}

// Generate report
function generateReport(matches, unmatched, updatedCount) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 IMAGE LINKING REPORT`);
  console.log(`${'='.repeat(60)}\n`);

  console.log(`✅ Successfully matched: ${matches.length} image(s)`);
  console.log(`❌ Unmatched: ${unmatched.length} image(s)`);
  console.log(`📝 Politicians updated: ${updatedCount}\n`);

  if (unmatched.length > 0) {
    console.log(`\n⚠️  Unmatched Images (manual review needed):\n`);
    unmatched.forEach(item => {
      console.log(`  • ${item.image}`);
      console.log(`    Best guess: ${item.bestGuess} (${(item.score * 100).toFixed(1)}% similar)`);
      console.log(`    💡 Rename file to match politician name or manually update politicians.js\n`);
    });
  }

  console.log(`\n💡 Tips for better matching:`);
  console.log(`   1. Name image files after politician names (e.g., "lalu-prasad-yadav.jpg")`);
  console.log(`   2. Use lowercase and hyphens instead of spaces`);
  console.log(`   3. Remove special characters from filenames`);
  console.log(`   4. For better accuracy, use full names\n`);
}

// Main execution
async function main() {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🖼️  POLITICIAN IMAGE LINKING PIPELINE`);
  console.log(`${'='.repeat(60)}`);

  try {
    // Step 1: Scan images
    const images = scanImages();

    if (images.length === 0) {
      console.log(`\n⚠️  No images found. Add images to ${IMAGE_DIR} and run again.\n`);
      return;
    }

    // Step 2: Load politicians
    console.log(`\n📋 Loading politicians from database...`);
    const politicians = loadPoliticians();
    console.log(`   Loaded ${politicians.length} politicians\n`);

    // Step 3: Match images
    const { matches, unmatched } = matchImages(politicians, images);

    // Step 4: Update file
    const updatedCount = matches.length > 0 ? updatePoliticiansFile(matches) : 0;

    // Step 5: Generate report
    generateReport(matches, unmatched, updatedCount);

    console.log(`✅ Pipeline completed successfully!\n`);

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}\n`);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the pipeline
main();
