
  import { Injectable } from '@angular/core';
  import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { User } from 'app/Models/User.model';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
  
  @Injectable({providedIn: 'root'})
  export class HasPermissionGuardChild implements CanActivateChild {
    constructor(private storages:StorageSService) { }
  
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(route)
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
