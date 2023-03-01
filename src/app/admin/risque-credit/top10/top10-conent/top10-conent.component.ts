import { Component, OnInit } from "@angular/core";
import { DixPlusGrandClientAConcentrationComponent } from "../dix-plus-grand-client-a-concentration/dix-plus-grand-client-a-concentration.component";
import { DixPlusGrandClientAEngagementsComponent } from "../dix-plus-grand-client-a-engagements/dix-plus-grand-client-a-engagements.component";
import { DixPlusGrandClientALimiteAccordeeComponent } from "../dix-plus-grand-client-a-limite-accordee/dix-plus-grand-client-a-limite-accordee.component";
import { GarantiesPrisesSurLesDixPlusGrandsClientsComponent } from "../garanties-prises-sur-les-dix-plus-grands-clients/garanties-prises-sur-les-dix-plus-grands-clients.component";

@Component({
  selector: "app-top10-conent",
  templateUrl: "./top10-conent.component.html",
  styleUrls: ["./top10-conent.component.css"],
})
export class Top10ConentComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "10 Plus grands clients a concentration",
      path: "DixPlusGrandClientAConcentration",
      Component: DixPlusGrandClientAConcentrationComponent,
    },
    {
      menuItem: "10 Plus grands clients à limite accordée",
      path: "DixPlusGrandClientALimiteAccordee",
      component: DixPlusGrandClientALimiteAccordeeComponent,
    },

    {
      menuItem: "10 Plus grands clients à engagements",
      path: "DixPlusGrandClientAEngagements",
      component: DixPlusGrandClientAEngagementsComponent,
    },
    {
      menuItem: "Garanties prises sur les 10 Plus grands clients",
      path: "GarantiesPrisesSurLesDixPlusGrandsClients",
      component: GarantiesPrisesSurLesDixPlusGrandsClientsComponent,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
