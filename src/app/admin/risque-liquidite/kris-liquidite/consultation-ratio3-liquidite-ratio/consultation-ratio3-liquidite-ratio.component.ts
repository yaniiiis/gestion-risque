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
  selector: "app-consultation-ratio3-liquidite-ratio",
  templateUrl: "./consultation-ratio3-liquidite-ratio.component.html",
  styleUrls: ["./consultation-ratio3-liquidite-ratio.component.css"],
})
export class ConsultationRatio3LiquiditeRatioComponent
  implements OnInit, OnChanges
{
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
    var datePipe = new DatePipe("en-US");

    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.data = [];
    // Recuperation des parametres des indicateurs

    //Ratio 3 : LTD (Loans to Deposits)
    this.indicateurService.getIndicateurById(20).subscribe((data) => {
      this.indicateur = data;
    });

    this.indicateurService.getIndicateurById(20).subscribe({
      next: (response) => {
        console.log("dans indicateur");
        // recuperation de la valeur de l'indicateur du backend
        // R2- Actif liquide / Total Actif
        this.risqueLiquiditeService
          .getRatio3LoansToDepositsByDate(this.dateTransforme)
          .subscribe({
            next: (result) => {
              const a = {
                value: Number.parseFloat(result),
                limit: response.valeur_limite,
                label: response.description,
                min: response.valeur_minimum,
                unit: "%",
              };
              console.log("result : " + result);
              this.data.push(a);
            },
          });
      },
    });
  }

  ngOnInit(): void {
    // Risque de liquidite code 6
    this.servicesRepo.currentAnalyseType = 6;
  }
}
