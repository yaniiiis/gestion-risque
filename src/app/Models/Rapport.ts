export interface Rapport {
  rapportName: string;
  type: string;
  code: string;
  description: string;
  clause: string;
  keysValuesOperands: keyValueOperationOperand[];
}

export interface keyValueOperationOperand {
  id: number;
  key: string;
  value: string;
  operation: string;
  operand: string;
}

export interface Clause {
  field: string;
  selection?: string;
}

export interface Type {
  id?: number;
  type: string;
  code: string;
  description: string;
  clauses?: Clause[];
  kvoo_s?: keyValueOperationOperand[];
}
