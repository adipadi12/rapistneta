/**
 * Image Mapping Configuration
 *
 * Manual overrides for image-to-politician matching.
 * Use this when automatic matching fails or for precise control.
 *
 * Format:
 * {
 *   "image-filename.jpg": {
 *     id: politician_id,
 *     name: "Politician Full Name"  // For reference
 *   }
 * }
 */

export const imageMapping = {
  // Manual mappings - add entries here to override automatic matching
  "brijbhushan.jpeg": {
    id: 1,
    name: "Brij Bhushan Sharan Singh"
  },

  // Example mappings (add your images here):
  // "lalu-prasad.jpg": { id: 6, name: "Lalu Prasad Yadav" },
  // "azam-khan.jpg": { id: 5, name: "Azam Khan" },
  // "atiq-ahmed.jpg": { id: 7, name: "Atiq Ahmed" },
  // "kejriwal.jpg": { id: 17, name: "Arvind Kejriwal" },
};

/**
 * Name aliases for better automatic matching
 * Use this to add alternative names or common variations
 */
export const nameAliases = {
  "Brij Bhushan Sharan Singh": ["brijbhushan", "brij bhushan", "brijbhushan singh"],
  "Lalu Prasad Yadav": ["lalu prasad", "lalu yadav", "lalu"],
  "Azam Khan": ["mohammad azam khan", "azam"],
  "Kuldeep Singh Sengar": ["kuldeep sengar", "sengar"],
  "Mukhtar Ansari": ["mukhtar"],
  "Atiq Ahmed": ["atiq ahmad", "atiq"],
  "Arvind Kejriwal": ["kejriwal", "arvind"],
  "Manish Sisodia": ["sisodia"],
};
