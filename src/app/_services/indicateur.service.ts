import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of, take } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class IndicateurService {
  constructor(private httpClient: HttpClient) {}

  datesSubject = new BehaviorSubject<string[]>(["20/12/2012", "15/12/2015"]);

  dataSubject = new BehaviorSubject<any>({
    indice: "",
    values: [],
    limit: "",
    min: "",
  });

  addToDates(date: string) {
    this.datesSubject.next([...this.datesSubject.value, date]);
  }

  getData(url: string, date: string) {
    this.httpClient
      .get(environment.baseUrl + `/concentration/${url}/${date}`)
      .subscribe((res: any) => {
        if (
          this.dataSubject.value["values"] &&
          this.dataSubject.value["values"].length < 1
        ) {
          console.log("yooooooow existtte");
          const obj = {
            indice: res.indice,
            values: [{ [res.date]: res.value }],
            limit: res.limiteMax,
            min: res.limiteMin,
          };
          this.dataSubject.next(obj);
        } else {
          const obj = {
            [res.date]: res.value,
          };

          const currentValue = this.dataSubject.getValue();
          const updatedValues = [...currentValue.values, obj];
          updatedValues.sort((a, b) => {
            const dateA = new Date(Object.keys(a)[0]);
            const dateB = new Date(Object.keys(b)[0]);
            return dateA.getTime() - dateB.getTime();
          });
          this.dataSubject.next({ ...currentValue, values: updatedValues });
        }
      });
  }

  unCheckDate(item: string) {
    //   const currentValue = this.dataSubject.getValue();
    //   const newValues = currentValue.values.filter((v: string) => v != item);
    //  // const updatedValues = { ...currentValue.values, newValues };
    //   this.dataSubject.next(updatedValues);

    const updatedValues = this.dataSubject.value.values.filter((v: string) => {
      console.log("v fromm filtring : ", Object.keys(v)[0]);
      return Object.keys(v)[0] != item;
    });
    this.dataSubject.next({ ...this.dataSubject.value, values: updatedValues });
  }

  resetData() {
    this.dataSubject.next({
      indice: "",
      values: [],
      limit: "",
      min: "",
    });
  }

  getAllDates() {
    return this.httpClient.get(environment.baseUrl + "/allDate");
  }

  datesSubject$ = this.datesSubject.asObservable();
  dataSubject$ = this.dataSubject.asObservable();
  // dataSubject$ = of([
  //   {
  //     Indice: "text",
  //     values: [
  //       { "20/12/2020": 5.5 },
  //       { "30/12/2020": 5.4 },
  //       { "01/01/2021": 4.5 },
  //     ],
  //     limit: 5,
  //     min: 4,
  //     unit: "%",
  //   },

  //   {
  //     indice: "Limite des concentartions Frond Propre reglementaire",
  //     value: 5.844510681197175,
  //     limiteMin: 7.0,
  //     limiteMax: 8.0,
  //     date: "2021-03-31",
  //   },
  // ]);
}
