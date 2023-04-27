import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageSService } from './storageService/storage-s.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class RisqueLiquiditeService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  public getListRatiosEntreDeuxDates(year :number, month :number): Observable<string[][]>{
    return this.http.get<any>(
    baseUrl + "/getListRatiosEntreDeuxDates/" + year + "/" + month,
    {
      headers: this.httpOptions.headers,
    }
  );
  }
  public getRatiosByDate(dateEffet :string): Observable<string[]>{
    return this.http.get<any>(
    baseUrl + "/getRatiosByDate/" + dateEffet,
    {
      headers: this.httpOptions.headers,
    }
  );

}

  constructor(private http: HttpClient, private storageSer: StorageSService) { }

}
