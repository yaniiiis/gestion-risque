import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, skip } from "rxjs";
import { ConcentrationService } from "src/app/_services/ConcentrationService/concentration-service.service";

@Component({
  selector: "app-concentration-groupe",
  templateUrl: "./concentration-groupe.component.html",
  styleUrls: ["./concentration-groupe.component.css"],
})
export class ConcentrationGroupeComponent implements OnInit {
  constructor(
    private router: Router,
    private concentrationService: ConcentrationService,
    private datePipe: DatePipe
  ) {}

  dataFinal = [];

  selectedId: string;
  selectedIdGroup: number;
  myListInputHasError: boolean = false;
  inputListTitle = "Groupes";
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
    this.concentrationService.listOfGroupIds$.subscribe((l) => {
      this.listOfIds = l;
    });

    this.concentrationService.groupeIsLoading$.subscribe((l) => {
      this.isLoading = l;
    });

    this.concentrationService.dataGroup$.subscribe((d) => {
      if (d.length == 0 && this.calculateIsClicked)
        this.textNoData = "Données non disponible pour ce groupe";
      this.dataFinal = d;
    });

    this.concentrationService.header$.subscribe((h) => {
      this.header = h;
    });

    this.date = this.concentrationService.selectedDateGroupe;
    this.selectedId = this.concentrationService.selectedIdGroup;
    this.selectedIdText = this.concentrationService.selectedIdTextGroupe;
    this.fondPropres = this.concentrationService.fondPropresGroupe;
  }

  calculerClicked() {
    if (!this.selectedId) {
      this.myListInputHasError = true;
    } else if (this.selectedId && this.fondPropres) {
      this.calculateIsClicked = true;
      this.calculateConcentration();
    }
  }

  calculateConcentration() {
    let subsraption: Observable<any>;

    this.concentrationService.getConcentrationByGroup(
      this.selectedId,
      this.datePipe.transform(this.date, "yyyy-MM-dd"),
      this.fondPropres
    );
  }

  dateChanged() {
    this.concentrationService.getGroupByDate(
      this.datePipe.transform(this.date, "yyyy-MM-dd")
    );
    console.log("Date changed : ", this.listOfIds);
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
      `/Admin/Kri/concentration/groupe/${this.selectedId}/${this.date}`,
    ]);
    // }
  }

  detailsClicked() {
    this.router.navigate([
      `/Admin/concentration/concentration-details/group/${this.selectedId}/${this.date}`,
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

  choicesOfConcentration = [
    "Concentration par client",
    "Concentration par groupe",
  ];
}
