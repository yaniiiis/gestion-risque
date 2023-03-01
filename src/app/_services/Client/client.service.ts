import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { StorageSService } from "../storageService/storage-s.service";
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: "root",
})
export class ClientService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  constructor(private http: HttpClient, private storageSer: StorageSService) {}

  findActionsDeRecouvrementByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(
      baseUrl + "/findActionsDeRecouvrement/" + p,
      {
        headers: this.httpOptions.headers,
      }
    );
  }

  findActionsDeJusticeByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/findActionsDeJustice/" + p, {
      headers: this.httpOptions.headers,
    });
  }

  findTotalTauxBySecteurByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/findTotalTauxBySecteur/" + p, {
      headers: this.httpOptions.headers,
    });
  }

  findTauxBySecteurByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/findTauxBySecteur/" + p, {
      headers: this.httpOptions.headers,
    });
  }

  findGroupedBySecteurByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/findGroupedBySecteur/" + p, {
      headers: this.httpOptions.headers,
    });
  }

  findTotalGroupedBySecteurByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(
      baseUrl + "/findTotalGroupedBySecteur/" + p,
      {
        headers: this.httpOptions.headers,
      }
    );
  }

  findGroupedByZoneByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/findGroupedByZone/" + p, {
      headers: this.httpOptions.headers,
    });
  }

  findTotalGroupedByZoneByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/findTotalGroupedByZone/" + p, {
      headers: this.httpOptions.headers,
    });
  }

  findTauxGroupedByZoneByPeriode(p: any): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/findTauxByZone/" + p, {
      headers: this.httpOptions.headers,
    });
  }
}
