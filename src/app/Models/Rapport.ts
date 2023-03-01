export interface Rapport {
  rapportName: string;
  type: string;
  code: string;
  description: string;
  clause: string;
  keysValuesOperands: keyValueOperenad[];
}

interface keyValueOperenad {
  key: string;
  value: string;
  operand: Operand;
}

enum Operand {
  OR,
  AND,
}
