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
  selector: "app-ratio-liquidite-mensuel-ratio",
  templateUrl: "./ratio-liquidite-mensuel-ratio.component.html",
  styleUrls: ["./ratio-liquidite-mensuel-ratio.component.css"],
})
export class RatioLiquiditeMensuelRatioComponent implements OnInit, OnChanges {
  //"2021-03-31"
  @Input() selectedDate: Date;
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
  constructor(
    private indicateurService: IndicateurService,
    private servicesRepo: AnalysePortfeuilleServicesService,
    private risqueLiquiditeService: RisqueLiquiditeService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    //console.log("changes : " + changes.selectedDate.currentValue);
    this.data = [];
    //Coeficient de liquidité
    this.indicateurService.getIndicateurById(14).subscribe({
      next: (data) => {
        this.indicateur1 = data;
        console.log("dans indicateur");
        // calcul de la valeur de l'indicateur R1- Coefficient de liquidité
        var datePipe = new DatePipe("en-US");

        this.dateTransforme = datePipe.transform(
          this.selectedDate,
          "yyyy-MM-dd"
        );
        //console.log("dateTransforme : " + this.dateTransforme);
        this.risqueLiquiditeService
          .getRatiosByDate(this.dateTransforme)
          .subscribe({
            next: (result) => {
              const a = {
                value: Number.parseFloat(result[0][1]),
                limit: data.valeurLimite,
                label: "",
                min: data.valeurMinimum,
                unit: "%",
              };
              console.log(result[0][1]);
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
