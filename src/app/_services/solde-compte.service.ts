import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageSService } from './storageService/storage-s.service';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class SoldeCompteService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  constructor(private http: HttpClient, private storageSer: StorageSService) { }

  public getRatioRessourcesDuCompteEnDeviseEtrangereDesClients(): Observable<number>{
    return this.http.get<number>(
    baseUrl + "/getRatioRessourcesDuCompteEnDeviseEtrangereDesClients",
    {
      headers: this.httpOptions.headers,
    }
  );

}

public getPositionOfAllDevises(): Observable<string[]>{
  return this.http.get<string[]>(
  baseUrl + "/getPositionOfAllDevises",
  {
    headers: this.httpOptions.headers,
  }
);
}
}
