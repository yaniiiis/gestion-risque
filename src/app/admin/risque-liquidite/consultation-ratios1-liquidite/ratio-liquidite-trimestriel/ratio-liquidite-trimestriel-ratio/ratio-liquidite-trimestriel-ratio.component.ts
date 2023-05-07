import { DatePipe } from "@angular/common";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import moment from "moment";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { RisqueLiquiditeService } from "src/app/_services/risque-liquidite.service";
interface Ratios {
  value: number;
  limit: number;
  label: string;
  min: number;
  unit: string;
}
interface Indicateur {
  id: number;
  description: string;
  valeurMinimum: number;
  valeurLimite: number;
  dateEffet: Date;
}
@Component({
  selector: "app-ratio-liquidite-trimestriel-ratio",
  templateUrl: "./ratio-liquidite-trimestriel-ratio.component.html",
  styleUrls: ["./ratio-liquidite-trimestriel-ratio.component.css"],
})
export class RatioLiquiditeTrimestrielRatioComponent
  implements OnInit, OnChanges
{
  data: Ratios[] = [];
  @Input() selectedDate: string;
  datePipe = new DatePipe("fr");
  dateTransforme;
  dateRelativeAuDeuxiemeMoisDuTrimestre;
  dateRelativeAuTroisiemeMoisDuTrimestre;

  indicateur1: Indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };
  indicateur2: Indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };
  indicateur3: Indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };
  indicateur4: Indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };

  year: number;
  month: number;
  day: number;
  constructor(
    private indicateurService: IndicateurService,
    private risqueLiquiditeService: RisqueLiquiditeService,
    private servicesRepo: AnalysePortfeuilleServicesService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.dateTransforme = this.datePipe.transform(
      this.selectedDate,
      "yyyy-MM-dd"
    );
    console.log("date transforme : " + this.dateTransforme);
    // Recuperation des parametres des indicateurs

    for (let i = 15; i <= 18; i++) {
      // Coefficient de liquidité à un mois (cf. modèle 5002)
      // Coefficient de liquidité d’observation (cf. modèle 5005)
      // Coefficient de liquidité relatif au deuxième mois du trimestre qui s’achève
      // Coefficient de liquidité relatif au troisième mois du trimestre qui s’achève
      this.indicateurService.getIndicateurById(i).subscribe({
        next: (response) => {
          if (i == 15) {
            // recuperation de la valeur de l'indicateur du backend
            // Coefficient de liquidité à un mois (cf. modèle 5002)
            this.indicateur1 = response;
            this.risqueLiquiditeService
              .getRatiosByDate(this.dateTransforme)
              .subscribe({
                next: (result) => {
                  const a = {
                    value: Number.parseFloat(result[0][1]),
                    limit: response.valeur_limite,
                    label: response.description,
                    min: response.valeur_minimum,
                    unit: "%",
                  };
                  console.log("result[0][1]" + result[0][1]);
                  this.data.push(a);
                },
              });
          }
          if (i == 16) {
            // recuperation de la valeur de l'indicateur du backend
            // Coefficient de liquidité d’observation (cf. modèle 5005)
            this.indicateur2 = response;
            this.risqueLiquiditeService
              .getRatiosByDate(this.dateTransforme)
              .subscribe({
                next: (result) => {
                  const a = {
                    value: Number.parseFloat(result[0][2]),
                    limit: response.valeur_limite,
                    label: response.description,
                    min: response.valeur_minimum,
                    unit: "%",
                  };
                  console.log("result[0][1]" + result[0][2]);
                  this.data.push(a);
                },
              });
          }
          if (i == 17) {
            // recuperation de la valeur de l'indicateur du backend
            // Coefficient de liquidité relatif au deuxième mois du trimestre qui s’achève
            const myDate = moment(this.selectedDate, "YYYY-MM-DD").toDate();

            this.year = myDate.getFullYear();
            this.month = myDate.getMonth() - 2;
            this.day = this.lastday(
              myDate.getFullYear(),
              myDate.getMonth() - 2
            );
            // this.dateRelativeAuDeuxiemeMoisDuTrimestre = "2021-01-31";
            this.dateRelativeAuDeuxiemeMoisDuTrimestre =
              this.year.toString() +
              "-" +
              (this.month + 1).toString().padStart(2, "0") +
              "-" +
              this.day.toString();
            console.log(
              "dateRelativeAuDeuxiemeMoisDuTrimestre : " +
                this.dateRelativeAuDeuxiemeMoisDuTrimestre
            );
            this.indicateur3 = response;
            this.risqueLiquiditeService
              .getRatiosByDate(this.dateRelativeAuDeuxiemeMoisDuTrimestre)
              .subscribe({
                next: (result) => {
                  const a = {
                    value: Number.parseFloat(result[0][1]),
                    limit: response.valeur_limite,
                    label: response.description,
                    min: response.valeur_minimum,
                    unit: "%",
                  };
                  console.log("result[0][1]" + result[0][1]);
                  this.data.push(a);
                },
              });
          }
          if (i == 18) {
            // recuperation de la valeur de l'indicateur du backend
            // Coefficient de liquidité relatif au troisieme mois du trimestre qui s’achève
            const myDate = moment(this.selectedDate, "YYYY-MM-DD").toDate();
            this.month = myDate.getMonth() - 1;
            this.day = this.lastday(
              myDate.getFullYear(),
              myDate.getMonth() - 1
            );

            //this.dateRelativeAuTroisiemeMoisDuTrimestre = "2021-02-28";
            this.dateRelativeAuTroisiemeMoisDuTrimestre =
              this.year.toString() +
              "-" +
              (this.month + 1).toString().padStart(2, "0") +
              "-" +
              this.day.toString();

            this.indicateur4 = response;
            this.risqueLiquiditeService
              .getRatiosByDate(this.dateRelativeAuTroisiemeMoisDuTrimestre)
              .subscribe({
                next: (result) => {
                  const a = {
                    value: Number.parseFloat(result[0][1]),
                    limit: response.valeur_limite,
                    label: response.description,
                    min: response.valeur_minimum,
                    unit: "%",
                  };
                  console.log("result[0][1]" + result[0][1]);
                  this.data.push(a);
                },
              });
          }
        },
      });
    }

    this.data = [];
  }

  lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
  };
  ngOnInit(): void {
    // Risque de liquidite code 6
    this.servicesRepo.currentAnalyseType = 6;
  }
}
