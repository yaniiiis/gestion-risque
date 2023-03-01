import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { User } from 'app/Models/User.model';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthPermissionsGuard implements CanActivate {
  constructor(private router :Router, private storages: StorageSService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.isAuthorized(route);
    }

    private isAuthorized (route :ActivatedRouteSnapshot ):boolean{

      // let Permission =  this.storages.getUser().permissions;
      let user = new User(this.storages.getUser())
      let requiredPermission = route.data.requiredPermission;
      console.log(route, user.getPermissions(), user.hasPermission(requiredPermission))
      if (!user.hasPermission(requiredPermission)) {
        alert('Not authorized')
        return false
      }
      return true
    }
  
}
