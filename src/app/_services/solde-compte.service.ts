import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageSService } from './storageService/storage-s.service';
import { map } from 'jquery';
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

  public findAllDevises(): Observable<string[]>{
    return this.http.get<string[]>(
    baseUrl + "/findAllDevises",
    {
      headers: this.httpOptions.headers,
    }
  );
  }

  public getRatioRessourcesDuCompteEnDeviseEtrangereDesClients(): Observable<number>{
    return this.http.get<number>(
    baseUrl + "/getRatioRessourcesDuCompteEnDeviseEtrangereDesClients",
    {
      headers: this.httpOptions.headers,
    }
  );

}

public  getRatioByDevise(date: string, devise:string): Observable<number>{
   return this.http.get<number>(
  baseUrl + "/getRatioByDevise/" + date + "/" + devise,
  {
    headers: this.httpOptions.headers,
  }
)
}

public getPositionOfAllDevises(date: string): Observable<string[]>{
  return this.http.get<string[]>(
  baseUrl + "/getPositionOfAllDevises/" + date,
  {
    headers: this.httpOptions.headers,
  }
);
}

public getRatioGlobal(date: string): Observable<number>{
  return this.http.get<number>(
  baseUrl + "/getRatioGlobal/" + date,
  {
    headers: this.httpOptions.headers,
  }
);
}

public findSoldeCompteDatesByYear(year: string): Observable<string[]>{
  return this.http.get<string[]>(
  baseUrl + "/findSoldeCompteDatesByYear/" + year,
  {
    headers: this.httpOptions.headers,
  }
);
}
}
