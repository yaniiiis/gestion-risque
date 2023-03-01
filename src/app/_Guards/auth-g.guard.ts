import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageSService } from '../_services/storageService/storage-s.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGGuard implements CanActivate {

  constructor(private router :Router, private storages: StorageSService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        let authenticated = this.storages.isLoggedIn();
        
        if(authenticated == false){
          this.router.navigateByUrl("/Home");
          alert("n'est pas authoriser. Authentifier D'abord !")
          return false;

        }else{
          return true;
        }
    }
 


}
