import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

const TOKEN_KEY = "accesstoken";
const REFRESHTOKEN_KEY = "refreshtoken";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: "root",
})
export class StorageSService {
  constructor(private route: Router) {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);

    const user = this.getUser();
    if (user.id) {
      
      this.saveUser({ ...user, accessToken: token });
    }
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
    window.sessionStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken() {
    return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
  }

  public removeRefreshToken(): void {
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  /**
   * userIsAdmin
   */
  public userIsAdmin(): boolean {
    return this.getUser().roles.name.toLowerCase() === "admin";
  }

  /**
   * hasRole
   */
  public userHasRole(role: string): boolean {
    let roles = this.getUser().roles.name.toLowerCase();
    if (role.toLowerCase() === roles) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * userHasPermission
permission:string : boolean  */
  public userHasPermission(permission: string): boolean {
    if (this.getUser().permissions.include) return false;
  }

  public userHasGenererRapport(){
    console.log("permissions : " + this.getUser().permissions)
     if (this.getUser().permissions.includes("Générer les reportingsTout")) return true
     else return false;
   //
  }
}
