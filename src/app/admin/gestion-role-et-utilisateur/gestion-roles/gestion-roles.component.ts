
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.css']
})
export class GestionRolesComponent implements OnInit {

  protected menuItems = [
    {
      menuItem: 'Lists des roles',
      path: 'ListesRoles',
     
    },
    {
      menuItem: 'Ajouter un role',
      path: 'AjouterRole',
      
    },
    
    
    {
      menuItem: "Liste Des permissions",
      path: 'ListPermissions',
      
    },
    {
      menuItem: "Ajouter des permissions",
      path: 'ajouterDesPermissions',
      
    },
    {
      menuItem: "Ajouter des niveaux",
      path: 'ajouterDesNiveauxRole',
      
    },
    {
      menuItem: "Lists des niveaux",
      path: 'ListNiveaux',
      
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }


  

}
