import { z } from 'zod';

/**
 * Politician status schema
 */
export const politicianStatusSchema = z.enum(['rapist', 'garbage', 'clean']);

/**
 * Criminal case counts schema
 */
export const criminalCaseCountsSchema = z.object({
  sexualAssault: z.number().int().min(0),
  other: z.number().int().min(0),
});

/**
 * Case details schema
 */
export const caseDetailsSchema = z.object({
  sexualAssault: z.array(z.string()).optional(),
  other: z.array(z.string()).optional(),
});

/**
 * Source citation schema
 */
export const sourceSchema = z.object({
  title: z.string().min(1),
  url: z.string().url().or(z.literal('#')), // Allow placeholder "#"
});

/**
 * Politician schema with full validation
 */
export const politicianSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1).max(200),
  party: z.string().min(1).max(200),
  position: z.string().min(1).max(200),
  image: z.string().url().or(z.string().startsWith('/')).nullable(),
  state: z.string().min(1).max(100),
  district: z.string().min(1).max(100),
  status: politicianStatusSchema,
  cases: criminalCaseCountsSchema,
  caseDetails: caseDetailsSchema.optional(),
  sources: z.array(sourceSchema).optional().default([]),
}).strict();

/**
 * Validate that status matches case counts
 */
export const validatePoliticianConsistency = (politician: z.infer<typeof politicianSchema>) => {
  const errors: string[] = [];

  // Rapist status must have sexual assault cases
  if (politician.status === 'rapist' && politician.cases.sexualAssault === 0) {
    errors.push(`ID ${politician.id}: Status is 'rapist' but sexualAssault count is 0`);
  }

  // Rapist status should have sexual assault case details
  if (
    politician.status === 'rapist' &&
    (!politician.caseDetails?.sexualAssault || politician.caseDetails.sexualAssault.length === 0)
  ) {
    errors.push(`ID ${politician.id}: Status is 'rapist' but no sexualAssault details provided`);
  }

  // Garbage status should have some cases
  if (politician.status === 'garbage' && politician.cases.other === 0 && politician.cases.sexualAssault === 0) {
    errors.push(`ID ${politician.id}: Status is 'garbage' but no cases reported`);
  }

  // Clean status must have zero cases
  if (politician.status === 'clean' && (politician.cases.sexualAssault > 0 || politician.cases.other > 0)) {
    errors.push(
      `ID ${politician.id}: Status is 'clean' but has cases (sexualAssault: ${politician.cases.sexualAssault}, other: ${politician.cases.other})`
    );
  }

  // If case details exist, they should match case counts
  if (politician.caseDetails?.sexualAssault && politician.cases.sexualAssault === 0) {
    errors.push(`ID ${politician.id}: Has sexualAssault details but count is 0`);
  }

  if (politician.caseDetails?.other && politician.cases.other === 0) {
    errors.push(`ID ${politician.id}: Has other case details but count is 0`);
  }

  return errors;
};

/**
 * Politician array schema
 */
export const politiciansArraySchema = z.array(politicianSchema);

/**
 * Type inference
 */
export type PoliticianSchemaType = z.infer<typeof politicianSchema>;
export type PoliticiansArraySchemaType = z.infer<typeof politiciansArraySchema>;
