import { Component, OnInit } from "@angular/core";
import { Ratio1Component } from "./ratio1/ratio1.component";
import { ConsultationR2Component } from "./consultation-r2/consultation-r2.component";
import { ConsultationR3Component } from "./consultation-r3/consultation-r3.component";
import { ConsultationR4Component } from "./consultation-r4/consultation-r4.component";
import { ConsultationR5Component } from "./consultation-r5/consultation-r5.component";
import { ConsultationR6Component } from "./consultation-r6/consultation-r6.component";
import { RapportKrisLiquiditeComponent } from "./rapport-kris-liquidite/rapport-kris-liquidite.component";

@Component({
  selector: "app-kris-liquidite",
  templateUrl: "./kris-liquidite.component.html",
  styleUrls: ["./kris-liquidite.component.css"],
})
export class KRisLiquiditeComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Ratio 1",
      path: "ConsultationRatios1Liquidite",
      Component: Ratio1Component,
    },
    {
      menuItem: "Ratio 2",
      path: "ConsultationRatios2Liquidite",
      Component: ConsultationR2Component,
    },
    {
      menuItem: "Ratio 3",
      path: "ConsultationRatios3Liquidite",
      Component: ConsultationR3Component,
    },
    {
      menuItem: "Ratio 4",
      path: "ConsultationRatios4Liquidite",
      Component: ConsultationR4Component,
    },
    {
      menuItem: "Ratio 5",
      path: "ConsultationRatios5Liquidite",
      Component: ConsultationR5Component,
    },
    {
      menuItem: "Ratio 6",
      path: "ConsultationRatios6Liquidite",
      Component: ConsultationR6Component,
    },
    {
      menuItem: "Rapport",
      path: "ConsultationRapportLiquidite",
      Component: RapportKrisLiquiditeComponent,
    },

    ,
  ];

  constructor() {}

  ngOnInit(): void {}
}
