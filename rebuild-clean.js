import fs from 'fs';

// Read the backup to extract first 115 entries
const backupContent = fs.readFileSync('src/data/politicians.js.backup', 'utf8');

// Extract everything from the beginning up to and including entry 115
const startOfArray = backupContent.indexOf('export const politicians = [');
const endOfEntry115 = backupContent.indexOf('    sources: []\n  }\n]', backupContent.indexOf('id: 115'));

if (startOfArray === -1 || endOfEntry115 === -1) {
  console.error('Could not find markers in backup file');
  process.exit(1);
}

// Get the original 115 entries (including the opening of the array)
const original115 = backupContent.substring(startOfArray, endOfEntry115 + '    sources: []\n  }'.length);

// Read the generated politicians
const generatedContent = fs.readFileSync('generated-politicians.txt', 'utf8');

// Build the complete file
const complete = original115 + ',\n\n' +
  '  // Auto-generated district-level politicians across all Indian states\n' +
  '  // Generated on 2026-11-02 - 1098 additional entries covering all districts\n' +
  generatedContent + '\n]';

// Write it
fs.writeFileSync('src/data/politicians.js', complete);

// Verify
const lines = complete.split('\n');
const idCount = complete.match(/\bid:\s*\d+/g)?.length || 0;
const fileSize = (Buffer.byteLength(complete) / (1024 * 1024)).toFixed(2);

console.log(`✓ Rebuilt politicians.js`);
console.log(`  - ${idCount} politicians`);
console.log(`  - ${lines.length} lines`);
console.log(`  - ${fileSize} MB`);

// Check for common syntax errors
const openBraces = (complete.match(/{/g) || []).length;
const closeBraces = (complete.match(/}/g) || []).length;
const openBrackets = (complete.match(/\[/g) || []).length;
const closeBrackets = (complete.match(/]/g) || []).length;

console.log(`\nSyntax check:`);
console.log(`  - Braces: ${openBraces} open, ${closeBraces} close ${openBraces === closeBraces ? '✓' : '✗'}`);
console.log(`  - Brackets: ${openBrackets} open, ${closeBrackets} close ${openBrackets === closeBrackets ? '✓' : '✗'}`);

// Try to detect the stray comma issue in generated content
const strayComma = /}\s*,\s*\n\s*caseDetails:/g;
if (strayComma.test(complete)) {
  console.log(`\n⚠ Warning: Found stray commas before caseDetails`);
  console.log(`  Fixing...`);

  const fixed = complete.replace(/}\s*,\s*\n(\s*)caseDetails:/g, '},\n$1caseDetails:');
  fs.writeFileSync('src/data/politicians.js', fixed);
  console.log(`  ✓ Fixed`);
}

console.log(`\n✓ Complete!`);
