import { DatePipe } from "@angular/common";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
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
  selector: "app-consultation-ratio6-liquidite-ratio",
  templateUrl: "./consultation-ratio6-liquidite-ratio.component.html",
  styleUrls: ["./consultation-ratio6-liquidite-ratio.component.css"],
})
export class ConsultationRatio6LiquiditeRatioComponent
  implements OnInit, OnChanges
{
  constructor(
    private indicateurService: IndicateurService,
    private risqueLiquiditeService: RisqueLiquiditeService,
    private servicesRepo: AnalysePortfeuilleServicesService
  ) {}
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
  ngOnInit(): void {
    // Recuperation des parametres des indicateurs
    // Risque de liquidite code 6
    this.servicesRepo.currentAnalyseType = 6;
  }
  ngOnChanges(changes: SimpleChanges): void {
    var datePipe = new DatePipe("en-US");

    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.data = [];

    //Ratio6 : Investissement sous forme de placements interbancaires
    this.indicateurService.getIndicateurById(23).subscribe((data) => {
      this.indicateur = data;
    });

    this.indicateurService.getIndicateurById(23).subscribe({
      next: (response) => {
        // recuperation de la valeur de l'indicateur du backend
        // R2- Actif liquide / Total Actif
        this.risqueLiquiditeService
          .getRatio6InvestissementSousFormeDePlacementsInterbancaires(
            this.dateTransforme
          )
          .subscribe({
            next: (result) => {
              const a = {
                value: result,
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
}
