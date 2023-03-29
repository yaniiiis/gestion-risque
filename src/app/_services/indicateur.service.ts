import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageSService } from './storageService/storage-s.service';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class IndicateurService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.storageSer.getToken,
    }),
  };

  constructor(private http: HttpClient, private storageSer: StorageSService) {
    
   }

   public getIndicateurById(id :any): Observable<any>{
        return this.http.get<any>(
        baseUrl + "/findIndicateurById/" + id,
        {
          headers: this.httpOptions.headers,
        }
      );
  
  }
}
