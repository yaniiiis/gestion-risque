import { Component, OnInit } from "@angular/core";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { RisqueLiquiditeService } from "src/app/_services/risque-liquidite.service";

@Component({
  selector: "app-ratio-liquidite-mensuel",
  templateUrl: "./ratio-liquidite-mensuel.component.html",
  styleUrls: ["./ratio-liquidite-mensuel.component.css"],
})
export class RatioLiquiditeMensuelComponent implements OnInit {
  selectedDate: string = "2021-03-31";

  constructor() {}

  ngOnInit(): void {}
}
