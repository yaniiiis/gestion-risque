import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageSService } from './storageService/storage-s.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class FondsPropresService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  constructor(private http: HttpClient, private storageSer: StorageSService) { }


  public getFondsPropresByDate(dateFonds : any): Observable<any>{
  //  console.log("dateFonds : "+dateFonds)
  
         return this.http.get<any>(
        baseUrl + "/getFondsPropresByDate/" + dateFonds,
        {
          headers: this.httpOptions.headers,
        }
      );
  
  }

}
