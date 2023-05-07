import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { RisqueLiquiditeService } from "src/app/_services/risque-liquidite.service";

@Component({
  selector: "app-ratio-liquidite-trimestriel",
  templateUrl: "./ratio-liquidite-trimestriel.component.html",
  styleUrls: ["./ratio-liquidite-trimestriel.component.css"],
})
export class RatioLiquiditeTrimestrielComponent implements OnInit {
  constructor() {}

  selectedDate;

  ngOnInit(): void {}
}
