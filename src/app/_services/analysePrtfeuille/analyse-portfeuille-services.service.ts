import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreditRisqueRapport } from "src/app/Models/CreditRisqueRapport";
import { Observable } from "rxjs";
import { StorageSService } from "../storageService/storage-s.service";

import { environment } from "src/environments/environment";
const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: "root",
})
export class AnalysePortfeuilleServicesService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };
  selectedUnit!: string;
  constructor(private http: HttpClient, private storageSer: StorageSService) {}

  public getPeriode(datelast: any, p: number): Observable<any> {
    return this.http.get<any>(
      baseUrl + "/repportBetween/" + datelast + "/" + p,
      {
        headers: this.httpOptions.headers,
      }
    );
  }
getDateReporting(p:any):Observable<any>{
return this.http.get<any>(baseUrl+"/allReportDate/"+p)
}
  getCreditParticulierParPeriode(p: any): Observable<CreditRisqueRapport> {
    return this.http.get<CreditRisqueRapport>(
      baseUrl + "/creditParticulier/" + p,
      { headers: this.httpOptions.headers }
    );
  }

  public getCreditEntreParPeriode(p: any): Observable<CreditRisqueRapport> {
    return this.http.get<CreditRisqueRapport>(
      baseUrl + "/creditEntreprise/" + p,
      { headers: this.httpOptions.headers }
    );
  }

  public uploadReport(data: any): Observable<any> {
    return this.http.post(baseUrl + "/pdf", data, {
      responseType: "arraybuffer",
    });
  }

  public importerFichierExcel() {
    return this.http.post(baseUrl + "/seed", "");
  }

  availablePeriods: string[];
  public selectedDate: string;

 public  creditReportFix: any = {};
}
