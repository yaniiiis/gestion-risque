import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CreditRisqueRapport } from "src/app/Models/CreditRisqueRapport";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";

@Component({
  selector: "app-scenario",
  templateUrl: "./scenario.component.html",
  styleUrls: ["./scenario.component.css"],
})
export class ScenarioComponent implements OnInit {
  title: string[] = [
    "Variation des créances douteuses de n% de leur solde",
    "Variation des créances douteuses de n% du solde du portefeuille des créances courantes",
    "Classement en douteux (catégorie 1, 2 ou 3) des créances accordées aux n plus grands clients",
  ];

  constructor(
    private servicesRepo: AnalysePortfeuilleServicesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.scenario = 1;
    });
  }

  header: string[] = [
    "code",
    "Description",
    "montant en milliards dzd",
    "code",
    "Description",
    "montant en milliards dzd",
  ];
  scenario: number;
  pro: number;
  fpr: number = 0;
  rnt: number;
  trp: number;
  tsr: number;
  tp: number;
  tds: number;
  trc: number;
  pra: number;
  tro: number;
  trm: number;
  ccr: number;
  mg: number;
  nb: number;
  mcd: number;
  cd: number;
  mp: number;
  xmp: number;
  intrcr: number;
  intrcd: number;
  nbr: number;

  creditReportFix: any = {};
  creditReportTotal: any[] = [];
  creditReportAnalysePortfeuille: any = {};
  CreditRisqueRapportTotal!: CreditRisqueRapport;
  lastYear: string;
  divUnit: number;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.tds = this.fpr;
  }

  ngOnInit(): void {
    this.getPortefeuilledirect();

    this.scenario = 1;
  }

  getPortefeuilledirect() {
    this.lastYear = "2020";
    this.divUnit = 1;
    this.creditReportFix.datereportfix = {};

    this.creditReportFix.datereportfix = this.lastYear + "-12-31";
    this.servicesRepo
      .getCreditParticulierParPeriode(this.lastYear + "-12-31")
      .subscribe((response) => {
        response.creanceCourant = response.creanceCourant / this.divUnit;
        this.ccr = response.creanceCourant;
        response.creanceDouteuse = response.creanceDouteuse / this.divUnit;

        this.cd = response.creanceDouteuse;
        response.creanceDouteuseNets =
          response.creanceDouteuseNets / this.divUnit;
        response.creditDirectNetInteretReserve =
          response.creditDirectNetInteretReserve / this.divUnit;
        response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
        response.interetReserve = response.interetReserve / this.divUnit;
        this.intrcr = response.interetReserve;
        response.interetreservesCreancesDouteuse =
          response.interetreservesCreancesDouteuse / this.divUnit;
        this.intrcd = response.interetreservesCreancesDouteuse;
        response.provisions = response.provisions / this.divUnit;
        this.pro = response.provisions;
        response.tauxCreanceDouteuse =
          response.tauxCreanceDouteuse / this.divUnit;
        response.tauxOuverture = response.tauxOuverture / this.divUnit;
        this.creditReportFix.creditParticulier = response;
        this.servicesRepo
          .getCreditEntreParPeriode(this.lastYear + "-12-31")
          .subscribe((response) => {
            response.creanceCourant = response.creanceCourant / this.divUnit;
            this.ccr = this.ccr + response.creanceCourant;
            response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
            this.cd = this.cd + response.creanceDouteuse;
            response.creanceDouteuseNets =
              response.creanceDouteuseNets / this.divUnit;
            response.creditDirectNetInteretReserve =
              response.creditDirectNetInteretReserve / this.divUnit;
            response.creditTotaldirect =
              response.creditTotaldirect / this.divUnit;
            response.interetReserve = response.interetReserve / this.divUnit;
            this.intrcr = this.intrcr + response.interetReserve;
            response.interetreservesCreancesDouteuse =
              response.interetreservesCreancesDouteuse / this.divUnit;
            this.intrcd =
              this.intrcd + response.interetreservesCreancesDouteuse;
            response.provisions = response.provisions / this.divUnit;
            this.pro = this.pro + response.provisions;
            response.tauxCreanceDouteuse =
              response.tauxCreanceDouteuse / this.divUnit;
            response.tauxOuverture = response.tauxOuverture / this.divUnit;
            this.creditReportFix.creditEntreprise = response;
            this.creditReportFix.totalFix = {};

            this.creditReportAnalysePortfeuille.creditReportFix =
              this.creditReportFix;
            this.servicesRepo.creditReportFix = this.creditReportFix;
          });
      });

    console.log("prtf ", this.creditReportAnalysePortfeuille);
  }
}
