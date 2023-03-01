import { StorageSService } from 'src/app/_services/storageService/storage-s.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User.model';
//import { AdminLayoutRoutes } from 'app/admin/layouts/admin-layout/admin-layout.routing';
import { Route } from '@angular/router';
import { AdminLayoutRoutes } from '../../../layouts/admin/admin-layout.routing';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  @Input() navigationItems:[{menuItem: string, path: string}]
  constructor(private storage:StorageSService) { }

  ngOnInit(): void {
  }

  getItems() {
    
   let user = (new User(this.storage.getUser()))
   let routes = [...AdminLayoutRoutes]
  // console.log("dans getItems" + routes )
   let flattenedRoutes = this.getFlattenedRoutesArray(routes)
   
  
   let items = this.navigationItems.filter(item => {
   
    return flattenedRoutes.find(route => {
      if (route.path === item.path) {
        let routePermission = route?.data?.requiredPermission
        if (routePermission && !user.hasPermission(routePermission)) {
          return false;
        }
        return true;
      }
      return false;
    }) ? true : false
   })
  
   return items
   
  }

  getFlattenedRoutesArray(routes:Route[]) {
    let newRoutes = []
    routes.forEach(route => {
      if (route.children) {
        newRoutes = [...newRoutes, ...this.getFlattenedRoutesArray(route.children)] 
      } else {
        newRoutes.push(route)
      }
    })
    return newRoutes
  }
}
