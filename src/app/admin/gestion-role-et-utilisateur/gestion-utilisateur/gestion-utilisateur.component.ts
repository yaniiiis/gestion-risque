import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: 'Ajouter Des Utilisateurs',
      path: 'AjouterDesUtilisateurs',
      
    },
    {
      menuItem: 'List Des Utilisateurs',
      
      path: 'ListeUtilisateurs',
     
    },
    {
      menuItem: 'Ajouter Des Agences',
      path: 'AjouterDesAgences',
      
    },
    {
      menuItem: 'List Agences',
      path: 'ListAgences',
      
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
