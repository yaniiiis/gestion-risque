import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stress-test-deux-cent',
  templateUrl: './stress-test-deux-cent.component.html',
  styleUrls: ['./stress-test-deux-cent.component.css']
})
export class StressTestDeuxCentComponent implements OnInit {


  constructor() { }
 variation:string = "1- Variation des créances douteuses de 200% de leur solde";

  header: string[] =["code",
  "Description",
  "montant en milliards dzd",
  "code","Description",
  "montant en milliards dzd"]; 

 tds:Number =15; 
data:any[]= [
  {
    codeI: "Pro",
    DescriptionI : "Provision",
    codeO: "TDS",
    DescriptionO : "Taux de solvabilité",
    MontantO:3,
  },
  {
    codeI: "FPR",
    DescriptionI : "Fonds propres réglementaires",
    codeO: "FRA",
    DescriptionO : "Perte après stress",
    MontantO:2,
  },{
    codeI: "RNT",
    DescriptionI : "Résultat",
    codeO: "FPA",
    DescriptionO : "Fonds propres réglementaires après stress",
    MontantO:1,
  },{
    codeI: "TRP",
    DescriptionI : "Total des risques pondérés",
    codeO: "RPA",
    DescriptionO : "Risques pondérés après stress",
    MontantO:2,
  },{
    codeI: "TSR",
    DescriptionI : "Taux de Stress",
    codeO: "TSA",
    DescriptionO : "Taux de solvabilité après stress",
    MontantO:1,
  },{
    codeI: "",
    DescriptionI : "",
    codeO: "RTA",
    DescriptionO : "	Résultat après stress",
    MontantO:2,
  }
]
 

  ngOnInit(): void {
  }


}
