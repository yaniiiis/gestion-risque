import { Niveau } from "./../../Models/Niveau";
import { Ressources } from "src/app/Models/Ressources";
import { Privileges } from "src/app/Models/Privileges";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppUser } from "../../Models/AppUser";
import { StorageSService } from "../storageService/storage-s.service";
import { Role } from "src/app/Models/Role";
import { Permission } from "src/app/Models/Permission";
import { Agence } from "src/app/Models/Agence";
import { environment } from "src/environments/environment";
//import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  PATH_API = environment.baseUrl + "/api/";

  constructor(
    private httpClient: HttpClient,
    private storageSer: StorageSService
  ) {}

  //get users methode

  public getAllUsers(): Observable<AppUser[]> {
    return this.httpClient.get<AppUser[]>(this.PATH_API + "user", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public getUser(id: number): Observable<AppUser[]> {
    return this.httpClient.get<AppUser[]>(this.PATH_API + `/user${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public AddUsers(formData) {
    return this.httpClient.post(this.PATH_API + "users/save", formData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public UpdateUsers(id: number, formData) {
    return this.httpClient.put(this.PATH_API + `user/update/${id}`, formData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public DeleteUser(user: AppUser) {
    return this.httpClient.delete(this.PATH_API + `user/delete/${user.id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  //get roles methode
  public getAllRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.PATH_API + "roles", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public getRole(id: number | null): Observable<Role> {
    return this.httpClient.get<Role>(this.PATH_API + `role/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public newRole(formdata) {
    return this.httpClient.post(this.PATH_API + "roles/saveRole", formdata, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public UpdateRole(id: number, formdata) {
    return this.httpClient.put(this.PATH_API + `role/update/${id}`, formdata, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public DeleteRole(role: Role) {
    return this.httpClient.delete(this.PATH_API + `role/delete/${role.id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  //get Agence methode
  public getAllAgence(): Observable<Agence[]> {
    return this.httpClient.get<Agence[]>(this.PATH_API + "Agences", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public getAgence(id: number): Observable<Agence> {
    return this.httpClient.get<Agence>(this.PATH_API + `agence/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public AddAgence(formdata) {
    return this.httpClient.post(this.PATH_API + "Agence/addAgence", formdata, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public UpdateAgence(id: number, agence: Agence) {
    return this.httpClient.put(this.PATH_API + `agence/update/${id}`, agence, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public DeleteAgence(agence: Agence) {
    return this.httpClient.delete(
      this.PATH_API + `agence/delete/${agence.id}`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.storageSer.getToken(),
        }),
      }
    );
  }

  // add  methode  of Permissions
  public getAllPermissions(): Observable<Permission[]> {
    return this.httpClient.get<Permission[]>(this.PATH_API + "permissions", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public getAllPermissionsCheckboxes(): Observable<Permission[]> {
    let permissionsArray;
    return this.httpClient.get<Permission[]>(this.PATH_API + "permissions", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public getPermission(url: any) {
    return this.httpClient.get(this.PATH_API + "Permissions", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public newPermission(formdata) {
    return this.httpClient.post(this.PATH_API + "permissions/save", formdata, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public UpdatePermission(url: any) {
    return this.httpClient.get(this.PATH_API + "Permissions", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public DeletePermission(permission: Permission) {
    return this.httpClient.delete(
      this.PATH_API + `permissions/delete/${permission.id}`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.storageSer.getToken(),
        }),
      }
    );
  }

  //add Ressource and privilege methode

  public getAllPrivileges(): Observable<Privileges[]> {
    return this.httpClient.get<Privileges[]>(this.PATH_API + "privileges", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public getprivilege(url: any) {
    return this.httpClient.get(this.PATH_API + "privileges", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public getAllRessources(): Observable<Ressources[]> {
    return this.httpClient.get<Ressources[]>(this.PATH_API + "ressources", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public getRessource(url: any) {
    return this.httpClient.get(this.PATH_API + "Ressources", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public getAllNiveauxRole(): Observable<Niveau[]> {
    return this.httpClient.get<Niveau[]>(this.PATH_API + "niveaux", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public deleteNiveau(id: number) {
    return this.httpClient.delete(this.PATH_API + `niveau/delete/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public updateNiveau(id: number, niveau) {
    return this.httpClient.put(this.PATH_API + `niveau/update/${id}`, niveau, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public addNiveau(niveau) {
    return this.httpClient.post(this.PATH_API + "niveau/addNiveau", niveau, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  //AddPermissionsTorole Methode

  public AddPermissionToRole(formData) {
    return this.httpClient.post(
      this.PATH_API + "/permissions/permToRole",
      formData,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.storageSer.getToken(),
        }),
      }
    );
  }
}
