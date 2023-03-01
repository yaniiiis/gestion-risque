import { Component, OnInit } from "@angular/core";
import { Domaine } from "src/app/Models/Domaine";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { map } from "jquery";
import { Subscription } from "rxjs";

@Component({
  selector: "app-parametrage-domaine-home",
  templateUrl: "./parametrage-domaine-home.component.html",
  styleUrls: ["./parametrage-domaine-home.component.css"],
})
export class ParametrageDomaineHomeComponent implements OnInit {
  constructor(private parametrageService: ParametrageService) {}

  domainesSubscraption: Subscription;
  domaineMap: Map<string, Domaine[]> = new Map<string, Domaine[]>();
  ngOnInit(): void {
    this.domainesSubscraption =
      this.parametrageService.mapOfCheckedDomaines$.subscribe((m) => {
        this.domaineMap = m;
      });
  }
}
