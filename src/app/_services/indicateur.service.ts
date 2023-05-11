import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class IndicateurService {
  datesSubject = new BehaviorSubject<string[]>(["20/12/2012", "15/12/2015"]);

  addToDates(date: string) {
    this.datesSubject.next([...this.datesSubject.value, date]);
  }

  datesSubject$ = this.datesSubject.asObservable();
  dataSubject$ = of([
    {
      Indice: "text",
      values: [
        { "20/12/2020": 5.5 },
        { "30/12/2020": 5.4 },
        { "01/01/2021": 4.5 },
      ],
      limit: 5,
      min: 4,
      unit: "%",
    },
  ]);
  constructor() {}
}
