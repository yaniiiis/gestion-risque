import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageSService } from "./storageService/storage-s.service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Banques } from "../Models/Banques";
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: "root",
})
export class RisqueDeMarcheService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  constructor(private http: HttpClient, private storageSer: StorageSService) {}

  findAllLimiteBanque(): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/findAllRisqMarcheLimite/", {
      headers: this.httpOptions.headers,
    });
  }

  findAllRisqMarcheLimiteByBeneficiaire(p: any) {
    return this.http.get<string[]>(
      baseUrl + "/findAllRisqMarcheLimiteByBeneficiaire/" + p,
      {
        headers: this.httpOptions.headers,
      }
    );
  }

  findAllBeneficiaires() {
    return this.http.get<string[]>(baseUrl + "/findAllBeneficiaire", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  findRisqMarchePlacementByDate(p: any) {
    return this.http.get<string[]>(
      baseUrl + "/findRisqMarchePlacementByDate" + "/" + p,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.storageSer.getToken(),
        }),
      }
    );
  }
}
