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
  selector: "app-consultation-ratio4-liquidite-ratio",
  templateUrl: "./consultation-ratio4-liquidite-ratio.component.html",
  styleUrls: ["./consultation-ratio4-liquidite-ratio.component.css"],
})
export class ConsultationRatio4LiquiditeRatioComponent
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
    private servicesRepo: AnalysePortfeuilleServicesService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    var datePipe = new DatePipe("en-US");

    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.data = [];
    // Recuperation des parametres des indicateurs

    //Ratio4 : Crédits immobiliers/Dépôts clientèle en dinars Algériens
    this.indicateurService.getIndicateurById(21).subscribe((data) => {
      this.indicateur = data;
    });
    if (this.dateTransforme != null) {
      this.indicateurService.getIndicateurById(21).subscribe({
        next: (response) => {
          // recuperation de la valeur de l'indicateur du backend

          this.risqueLiquiditeService
            .getRatio4CrimDepotClienteleByDate(this.dateTransforme)
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
  }

  ngOnInit(): void {
    // Risque de liquidite code 6
    this.servicesRepo.currentAnalyseType = 6;
  }
}
