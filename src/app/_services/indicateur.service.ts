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
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { StorageSService } from "./storageService/storage-s.service";
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: "root",
})
export class IndicateurService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  constructor(private http: HttpClient, private storageSer: StorageSService) {}

  public getIndicateurById(id: any): Observable<any> {
    return this.http.get<any>(baseUrl + "/findIndicateurById/" + id, {
      headers: this.httpOptions.headers,
    });
  }
}
