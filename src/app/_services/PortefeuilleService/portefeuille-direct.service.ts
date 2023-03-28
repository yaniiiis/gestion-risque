import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { response, text } from "express";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PortefeuilDirectService {
  constructor(private http: HttpClient) {}

  // EVOLUTION DE PORTEFEUILLE DIRECT
     
     evolutionDirect(dateDebut: string, dateFin: string, glsubheadParam: string, typeEngagement : string, typeClient: string): any {
    const body = {
      date_debut: dateDebut,
      date_fin: dateFin,
      glsubheadParam:glsubheadParam,
      typeEngagement:typeEngagement,
      typeClient:typeClient
    };
    return this.http.post<any>(
      environment.baseUrl + "/portefeuille/directtwodates/",
      body,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessstoken"),
        }),
      }
    );
  }

  // CREDIT NET
  creditNet(dateDebut: string, dateFin: string, glsubheadParam: string, typeEngagement : string, typeClient: string): any {
    const body = {
      date_debut: dateDebut,
      date_fin: dateFin,
      glsubheadParam:glsubheadParam,
      typeEngagement:typeEngagement,
      typeClient:typeClient
    };
    const rep = this.http.post<any>(
      environment.baseUrl + "/portefeuille/creancedouteusetwodates/",
      body,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessstoken"),
        }),
      }
    );
    return rep;
  }

 
}
