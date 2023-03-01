import { CreditRisqueRapport } from "./CreditRisqueRapport";

export interface AllSelected {
  id: number;
  datereporte: string;
  checked: Boolean;
  creditParticulier: CreditRisqueRapport;
  creditEntreprise: CreditRisqueRapport;
}
