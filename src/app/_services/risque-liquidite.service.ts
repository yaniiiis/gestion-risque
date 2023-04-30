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
  // RATIO2: Actif liquide / Total Actif 
    public getRatioActifLiquideByDate(dateEffet :string): Observable<string[]>{
    return this.http.get<any>(
    baseUrl + "/getRatioActifLiquideByDate/" + dateEffet,
    {
      headers: this.httpOptions.headers,
    }
  );
    }
// Ratio 3 : LTD (Loans to Deposits)
  public getRatio3LoansToDepositsByDate(dateEffet :string): Observable<string>{
    return this.http.get<any>(
    baseUrl + "/getRatio3/" + dateEffet,
    {
      headers: this.httpOptions.headers,
    }
  );
  }
 // Ratio4 : Crédits immobiliers/Dépôts clientèle en dinars Algériens  
   public getRatio4CrimDepotClienteleByDate(dateEffet :string): Observable<string>{
    return this.http.get<any>(
    baseUrl + "/getRatio4/" + dateEffet,
    {
      headers: this.httpOptions.headers,
    }
  );
}

  constructor(private http: HttpClient, private storageSer: StorageSService) { }

}
