import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Type } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private parametrageService: ParametrageService) {}

  typesSubscraption: Subscription;
  typesMap: Map<string, Type[]> = new Map<string, Type[]>();
  ngOnInit(): void {
    this.typesSubscraption =
      this.parametrageService.mapOfCheckedTypesSubject$.subscribe((m) => {
        this.typesMap = m;
      });
  }
}
