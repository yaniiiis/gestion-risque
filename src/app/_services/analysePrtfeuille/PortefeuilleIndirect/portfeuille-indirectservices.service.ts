import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";

import { environment } from "src/environments/environment";
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: "root",
})
export class PortfeuilleIndirectservicesService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  constructor(private http: HttpClient, private storageSer: StorageSService) {}

  getReportPortfeuilleIndirect(type: any, dateReport: any): Observable<any> {
    return this.http.get<any>(
      baseUrl + "/portfeuilleIndirect/" + type + "/" + dateReport,
      {
        headers: this.httpOptions.headers,
      }
    );
  }
  gettRepportType(): Observable<string> {
    return this.http.get<string>(baseUrl + "/allRapportType/");
  }
}
