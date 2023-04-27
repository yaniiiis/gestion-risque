import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-concentration",
  templateUrl: "./concentration.component.html",
  styleUrls: ["./concentration.component.css"],
})
export class ConcentrationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data = this.tableData;
    this.header = this.tableHeaders;
  }

  selectedChoice: string = "client";
  selectedIdClient: number;
  selectedIdGroup: number;
  myListInputHasError: boolean = false;
  inputListTitle = "Client";
  selectedChoiceIndex: number = 0;
  data: any;
  header: any;

  choicesOfConcentration = [
    "Concentration par client",
    "Concentration par groupe",
  ];

  changeConcentrationChoice(item: string) {
    this.selectedChoice = item;
    if (item.toLocaleLowerCase() == "concentration par client") {
      this.inputListTitle = "Client";
      this.data = this.tableData;
      this.selectedChoice = "client";
      this.header = this.tableHeaders;
    } else {
      this.inputListTitle = "Groupe";
      this.data = this.tableDataGroupe;
      this.selectedChoice = "groupe";
      this.header = this.tableHeadersGroupe;
    }

    this.selectedChoiceIndex = this.choicesOfConcentration.indexOf(item);
  }

  clientsIds = [1, 2, 3, 4, 5, 6, 7];

  idClientClicked(idClient: number) {
    this.selectedIdClient = idClient;
  }

  tauxClicked(item: string) {
    if (item.toLocaleLowerCase().trim() == "taux de concentration") {
      console.log("yes its true");
      this.router.navigate(["/Admin/Kri/concentration-details"]);
    }
  }

  tableHeaders = [
    "Date",
    "ID Client",
    "Nom Client",
    "Agence",
    "Crédit bilan",
    "Engagement hors bilan",
    "Garanties bilan",
    "Garanties hors bilan",
    "Provisions",
    "Risque net",
    "Taux de concentration",
  ];
  tableHeadersGroupe = [
    "Date",
    "ID Groupe",
    "Nom Groupe",
    "Agence",
    "Crédit bilan",
    "Engagement hors bilan",
    "Garanties bilan",
    "Garanties hors bilan",
    "Provisions",
    "Risque net",
    "Taux de concentration",
  ];
  tableData = {
    Date: "30/09/2022",
    "ID Client": 1,
    "Nom Client": "Client 1",
    Agence: "Hydra",
    "Crédit bilan": 1000000,
    "Engagement hors bilan": 500000,
    "Garanties bilan": 500000,
    "Garanties hors bilan": 200000,
    Provisions: 100000,
    "Risque net": 700000,
    "Taux de concentration": "11%",
  };

  tableDataGroupe = {
    Date: "30/09/2022",
    "ID Groupe": 1,
    "Nom Groupe": "Groupe 1",
    Agence: "Hydra",
    "Crédit bilan": 1000000,
    "Engagement hors bilan": 500000,
    "Garanties bilan": 500000,
    "Garanties hors bilan": 200000,
    Provisions: 100000,
    "Risque net": 700000,
    "Taux de concentration": "11%",
  };
}
