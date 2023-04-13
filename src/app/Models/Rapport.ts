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
  selection?: string;
  filed?: string;
}

export interface RapportLine {
  id?: number;
  type: string;
  code: string;
  description: string;
  clauses?: Clause[];
  kvoo_s?: keyValueOperationOperand[];
  sousType?: string;
}

export interface RapportType {
  id?: number;
  titreRapport: string;
  description?: string;
  //underTypes: string[];
}
