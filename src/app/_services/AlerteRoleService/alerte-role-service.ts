import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: "root",
})
export class AlerteRoleService {
  constructor(private http: HttpClient) {}

  findByRoleName(p: any): Observable<string> {
    return this.http.get<string>(
      baseUrl + "/findByRoleName/" + p /*,
      {
        headers: this.httpOptions.headers,
      }*/
    );
  }
}
