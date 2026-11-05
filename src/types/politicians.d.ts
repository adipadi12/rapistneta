// Type declarations for politicians.js module
declare module '*/data/politicians' {
  import type { Politician } from './politician';
  export const politicians: Politician[];
}

declare module '*/data/politicians.js' {
  import type { Politician } from './politician';
  export const politicians: Politician[];
}

declare module '*/politicians' {
  import type { Politician } from './politician';
  export const politicians: Politician[];
}

declare module '*/politicians.js' {
  import type { Politician } from './politician';
  export const politicians: Politician[];
}
