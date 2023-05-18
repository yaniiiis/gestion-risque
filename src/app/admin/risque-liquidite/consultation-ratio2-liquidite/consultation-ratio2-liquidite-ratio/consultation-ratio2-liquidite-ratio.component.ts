import { DatePipe } from "@angular/common";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
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
  selector: "app-consultation-ratio2-liquidite-ratio",
  templateUrl: "./consultation-ratio2-liquidite-ratio.component.html",
  styleUrls: ["./consultation-ratio2-liquidite-ratio.component.css"],
})
export class ConsultationRatio2LiquiditeRatioComponent
  implements OnInit, OnChanges
{
  //selectedDate = '2021-03-31';
  @Input() selectedDate: Date;
  dateTransforme: string;
  data: Ratios[] = [];
  indicateur: Indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };
  header: string[] = ["Limit", "Trigger", "Rating"];
  constructor(
    private indicateurService: IndicateurService,
    private risqueLiquiditeService: RisqueLiquiditeService,
    private servicesRepo: AnalysePortfeuilleServicesService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.data = [];
    var datePipe = new DatePipe("en-US");

    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.indicateurService.getIndicateurById(19).subscribe({
      next: (response) => {
        console.log("dans indicateur");
        // recuperation de la valeur de l'indicateur du backend
        // R2- Actif liquide / Total Actif
        this.risqueLiquiditeService
          .getRatioActifLiquideByDate(this.dateTransforme)
          .subscribe({
            next: (result) => {
              const a = {
                value: Number.parseFloat(result[0][3]),
                limit: response.valeur_limite,
                label: response.description,
                min: response.valeur_minimum,
                unit: "%",
              };
              console.log("result[0][1]" + result[0][3]);
              this.data.push(a);
            },
          });
      },
    });
  }

  ngOnInit(): void {
    // Risque de liquidite code 6
    this.servicesRepo.currentAnalyseType = 6;

    // Recuperation des parametres des indicateurs

    //R2- Actif liquide / Total Actif
    this.indicateurService.getIndicateurById(19).subscribe((data) => {
      this.indicateur = data;
    });
  }
}
