import { CreditRisqueRapport } from "./CreditRisqueRapport";

export interface REportD{
    id: number ;
    datereporting:string;
    checked:Boolean;
    creditParticulier:CreditRisqueRapport;
    creditEntreprise:CreditRisqueRapport;

}
