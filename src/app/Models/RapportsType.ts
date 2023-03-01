export interface RapportsType {
  name: string;
  types: string[];
  codes: string[];
  clauses: string[];
  keysValues: keyValues[];
}

interface keyValues {
  key: string;
  values: string[];
}
