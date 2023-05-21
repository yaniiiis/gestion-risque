import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, skip } from "rxjs";
import { ConcentrationService } from "src/app/_services/ConcentrationService/concentration-service.service";

@Component({
  selector: "app-concentration-client",
  templateUrl: "./concentration-client.component.html",
  styleUrls: ["./concentration-client.component.css"],
})
export class ConcentrationClientComponent implements OnInit {
  constructor(
    private router: Router,
    private concentrationService: ConcentrationService
  ) {}
  dataFinal = [];
  selectedChoice: string = "client";
  selectedId: string;
  selectedIdGroup: number;
  myListInputHasError: boolean = false;
  inputListTitle = "Clients";
  selectedChoiceIndex: number = 0;
  data: any;
  header = ["Date"];
  date: string;
  fondPropres: any;
  sss: string;
  listOfIds: string[] = [];
  textNoData: string =
    "Veuillez selectionner les information ci-dessus pour afficher les données";
  taux: number;
  selectedIdText: string = "";
  calculateIsClicked = false;
  isLoading = false;

  ngOnInit(): void {
    this.concentrationService.listOfIds$.subscribe((l) => {
      this.listOfIds = l;
    });
    this.concentrationService.clientIsLoading$.subscribe((b) => {
      this.isLoading = b;
    });

    this.concentrationService.dataClient$.subscribe((d) => {
      console.log("DDDDDDD : ", d);
      if (d.length == 0 && this.calculateIsClicked)
        this.textNoData = "Données non disponible pour ce client";
      this.dataFinal = d;
    });

    this.concentrationService.header$.subscribe((h) => {
      this.header = h;
    });

    this.date = this.concentrationService.selectedDateClient;
    this.selectedId = this.concentrationService.selectedIdClient;
    this.selectedIdText = this.concentrationService.selectedIdText;
    this.fondPropres = this.concentrationService.fondPropres;
  }

  calculerClicked() {
    if (this.selectedId && this.fondPropres) {
      this.calculateConcentration();
    }
  }

  calculateConcentration() {
    let subsraption: Observable<any>;

    this.concentrationService.getConcentrationClient(
      this.selectedId,
      this.date,
      this.fondPropres
    );
  }

  dateChanged() {
    if (this.selectedChoice == "client") {
      this.concentrationService.getClientByDate(this.date);
      console.log("Date changed : ", this.listOfIds);
    } else {
      this.concentrationService.getGroupByDate(this.date);
    }
  }

  idClientClicked(idClient: string) {
    this.selectedId = idClient;
    console.log("selectedIdClient  : ", this.selectedId);
  }

  tauxClicked(item: string) {
    console.log("Taux clickeeeeeed : ", item);

    // return console.log(
    //   `selected choice ${this.selectedChoice}\n selectedID : ${this.selectedId} \n date : ${this.date}`
    // );
    // if (item.toLocaleLowerCase().trim() == "taux de concentration") {
    this.router.navigate([
      `/Admin/Kri/concentration/${this.selectedChoice}/${this.selectedId}/${this.date}`,
    ]);
    // }
  }

  detailsClicked() {
    this.router.navigate([
      `/Admin/concentration/concentration-details/client/${this.selectedId}/${this.date}`,
    ]);
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

  myMapper = {
    date: "Date",
    id: "ID Client",
    nom: "Nom Client",
    agence: "Agence",
    creditBilan: "Crédit bilan",
    garantiesBilan: "Garanties bilan",
    provision: "Provisions",
    risqueNet: "Risque net",
    engagementHorsBilan: "Engagement hors bilan",
    grantiesHorsBilan: "Garanties hors bilan",
    risquePendree: "Risque pendéré",
  };

  lastData = [
    {
      id: "XXFXEZGF",
      nom: null,
      agence: "Blida",
      creditBilan: 1.9143739005609955e10,
      garantiesBilan: 0.0,
      provision: 0.0,
      risqueNet: 0.0,
      engagementHorsBilan: null,
      grantiesHorsBilan: null,
    },
    {
      id: "XXFXEZGF",
      nom: null,
      agence: "Dar Elbeida",
      creditBilan: 1.9143739005609955e10,
      garantiesBilan: 0.0,
      provision: 3.021388473e7,
      risqueNet: 0.0,
      engagementHorsBilan: null,
      grantiesHorsBilan: null,
    },
  ];
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
  changeConcentrationChoice(item: string) {
    this.selectedChoice = item;
    this.dataFinal = [];
    this.selectedId = undefined;
    this.date = "";
    this.listOfIds = [];
    this.fondPropres = undefined;
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

  choicesOfConcentration = [
    "Concentration par client",
    "Concentration par groupe",
  ];
}
