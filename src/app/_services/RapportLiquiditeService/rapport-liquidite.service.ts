import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { StorageSService } from "../storageService/storage-s.service";
import { Observable } from "rxjs";
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: "root",
})
export class RapportLiquiditeService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };
  constructor(private http: HttpClient, private storageSer: StorageSService) {}

  public getRapportLiquiditeByDate(dateeffet: any): Observable<any> {
    return this.http.get<any>(baseUrl + "/risqLiqRapport/" + dateeffet, {
      headers: this.httpOptions.headers,
    });
  }
}
