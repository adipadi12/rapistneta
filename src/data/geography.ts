import type { StatesAndUTs } from '../types';
import type { Politician } from '../types';

/**
 * List of Indian states and union territories
 */
export const statesAndUTs: StatesAndUTs = {
  states: [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ],
  unionTerritories: [
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry',
  ],
};

/**
 * Helper function to get all unique districts from politicians
 */
export const getDistrictsForState = (politicians: Politician[], state: string): string[] => {
  const districts = [
    ...new Set(
      politicians
        .filter((p) => p.state === state)
        .map((p) => p.district)
        .filter(Boolean)
    ),
  ];
  return districts.sort();
};

/**
 * Helper function to get politician count by state
 */
export const getPoliticiansByState = (politicians: Politician[]): Record<string, Politician[]> => {
  const byState: Record<string, Politician[]> = {};
  politicians.forEach((p) => {
    if (p.state) {
      if (!byState[p.state]) {
        byState[p.state] = [];
      }
      byState[p.state]!.push(p);
    }
  });
  return byState;
};

/**
 * Helper function to get politician count by district
 */
export const getPoliticiansByDistrict = (politicians: Politician[]): Record<string, Politician[]> => {
  const byDistrict: Record<string, Politician[]> = {};
  politicians.forEach((p) => {
    if (p.district && p.state) {
      const key = `${p.state}:${p.district}`;
      if (!byDistrict[key]) {
        byDistrict[key] = [];
      }
      byDistrict[key]!.push(p);
    }
  });
  return byDistrict;
};
