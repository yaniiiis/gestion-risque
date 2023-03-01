import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppUser } from "src/app/Models/AppUser";
import { Observable, of } from "rxjs";
import { StorageSService } from "../storageService/storage-s.service";
import { UserService } from "../UserService/user.service";
import { environment } from "src/environments/environment";

//import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + sessionStorage.getItem("accessstoken"),
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  private AUTH_API = environment.baseUrl + "/Auth/signin";

  constructor(
    private router: Router,
    private storageservice: StorageSService,
    private http: HttpClient,
    private userservice: UserService
  ) {}

  public Login(username: string, password: string): Observable<AppUser> {
    return this.http.post<AppUser>(this.AUTH_API, { username, password });
  }
}
