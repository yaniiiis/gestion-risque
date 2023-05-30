import { Component, OnInit } from "@angular/core";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { RisqueLiquiditeService } from "src/app/_services/risque-liquidite.service";

@Component({
  selector: "app-consultation-r4",
  templateUrl: "./consultation-r4.component.html",
  styleUrls: ["./consultation-r4.component.css"],
})
export class ConsultationR4Component implements OnInit {
  selectedDate = "";
  constructor() {}

  ngOnInit(): void {}
}
