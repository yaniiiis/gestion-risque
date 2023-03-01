import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StorageSService } from './storageService/storage-s.service';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class AnalyseService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  constructor(private http: HttpClient, private storageSer: StorageSService) { }

  public getAnalyseIdByMonthAndType(mois :any, type:any): Observable<any>{
    console.log("mois : "+mois)
    console.log("type : "+type)
         return this.http.get<any>(
        baseUrl + "/findAnalyseIdByMonthAndType/" + mois+"/" +type,
        {
          headers: this.httpOptions.headers,
        }
      );
  
  }

 
}
