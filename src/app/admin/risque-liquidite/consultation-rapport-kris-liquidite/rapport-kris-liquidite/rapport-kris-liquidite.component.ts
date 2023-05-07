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
interface indicateur {
  id: number;
  description: string;
  valeurMinimum: number;
  valeurLimite: number;
  dateEffet: Date;
}

interface Ratios {
  value: number;
  limit: number;
  label: string;
  min: number;
  unit: string;
}
@Component({
  selector: "app-rapport-kris-liquidite",
  templateUrl: "./rapport-kris-liquidite.component.html",
  styleUrls: ["./rapport-kris-liquidite.component.css"],
})
export class RapportKrisLiquiditeComponent implements OnInit, OnChanges {
  selectedDate = "";
  dateTransforme: string;

  header: string[] = ["Limit", "Trigger", "Rating"];
  data: Ratios[] = [];
  indicateur1: indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };

  indicateur2: indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };

  constructor(
    private indicateurService: IndicateurService,
    private servicesRepo: AnalysePortfeuilleServicesService,
    private risqueLiquiditeService: RisqueLiquiditeService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes " + changes.selectedDate.currentValue);
    var datePipe = new DatePipe("en-US");

    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
  }

  addEvent(type: string, event: any) {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    console.log("sele : " + this.dateTransforme);

    //Coeficient de liquidité
    this.indicateurService.getIndicateurById(14).subscribe({
      next: (data) => {
        this.indicateur1 = data;

        // calcul de la valeur de l'indicateur R1- Coefficient de liquidité

        this.risqueLiquiditeService
          .getRatiosByDate(this.dateTransforme)
          .subscribe({
            next: (result) => {
              const a = {
                value: Number.parseFloat(result[0][1]),
                limit: data.valeurLimite,
                label: data.description,
                min: data.valeurMinimum,
                unit: "%",
              };
              console.log(result[0][1]);
              this.data.push(a);
            },
          });
      },
    });

    //R2- Actif liquide / Total Actif
    this.indicateurService.getIndicateurById(19).subscribe({
      next: (data) => {
        this.indicateur1 = data;

        this.indicateurService.getIndicateurById(19).subscribe({
          next: (response) => {
            // recuperation de la valeur de l'indicateur du backend
            // R2- Actif liquide / Total Actif
            this.risqueLiquiditeService
              .getRatioActifLiquideByDate(this.dateTransforme)
              .subscribe({
                next: (result) => {
                  const a = {
                    value: Number.parseFloat(result[0][3]),
                    limit: data.valeurLimite,
                    label: response.description,
                    min: data.valeurMinimum,
                    unit: "%",
                  };
                  console.log("result[0][3]" + result[0][3]);
                  this.data.push(a);
                },
              });
          },
        });
      },
    });

    //Ratio 3 : LTD (Loans to Deposits)
    this.indicateurService.getIndicateurById(20).subscribe((data) => {
      this.indicateur1 = data;

      this.indicateurService.getIndicateurById(20).subscribe({
        next: (response) => {
          // recuperation de la valeur de l'indicateur du backend

          this.risqueLiquiditeService
            .getRatio3LoansToDepositsByDate(this.dateTransforme)
            .subscribe({
              next: (result) => {
                const a = {
                  value: Number.parseFloat(result),
                  limit: data.valeurLimite,
                  label: response.description,
                  min: data.valeurMinimum,
                  unit: "%",
                };
                console.log("result : " + result);
                this.data.push(a);
              },
            });
        },
      });
    });

    //Ratio4 : Crédits immobiliers/Dépôts clientèle en dinars Algériens
    this.indicateurService.getIndicateurById(21).subscribe((data) => {
      this.indicateur1 = data;
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
                    limit: data.valeurLimite,
                    label: response.description,
                    min: data.valeurMinimum,
                    unit: "%",
                  };
                  console.log("result : " + result);
                  this.data.push(a);
                },
              });
          },
        });
      }
    });
    //Ratio5 : Emplois/Ressources
    this.indicateurService.getIndicateurById(22).subscribe((data) => {
      this.indicateur1 = data;
      if (this.dateTransforme != null) {
        this.indicateurService.getIndicateurById(22).subscribe({
          next: (response) => {
            // recuperation de la valeur de l'indicateur du backend
            // R2- Actif liquide / Total Actif
            this.risqueLiquiditeService
              .getRatio5EmploisSurRessources(this.dateTransforme)
              .subscribe({
                next: (result) => {
                  const a = {
                    value: result,
                    limit: data.valeurLimite,
                    label: response.description,
                    min: data.valeurMinimum,
                    unit: "%",
                  };
                  this.data.push(a);
                },
              });
          },
        });
      }
    });

    //Ratio6 : Investissement sous forme de placements interbancaires
    this.indicateurService.getIndicateurById(23).subscribe((data) => {
      this.indicateur1 = data;
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
                  limit: data.valeurLimite,
                  label: response.description,
                  min: data.valeurMinimum,
                  unit: "%",
                };
                console.log("result : " + result);
                this.data.push(a);
              },
            });
        },
      });
    });
  }

  ngOnInit(): void {
    // Risque de liquidite code 6
    this.servicesRepo.currentAnalyseType = 6;
  }
}
