import { UpdateUserModalComponent } from './../update-user-modal/update-user-modal.component';
//import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/Models/AppUser';

import { StorageSService } from 'src/app/_services/storageService/storage-s.service';
import { UserService } from 'src/app/_services/UserService/user.service';
import { AppDataState, DataStateEnum } from 'src/app/_States/appState';

import { catchError, map, Observable, of, startWith } from 'rxjs';
@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css'],

})
export class ListeUtilisateursComponent implements OnInit {

  readonly DataStateEnum = DataStateEnum;
 public users$?: Observable<AppDataState<AppUser[]>> | null=null;
 public user :AppUser | null=null;
 protected updateUserModal:Element|null
  constructor(private route: Router, private storage: StorageSService, private userService: UserService ) { }

  ngOnInit(): void {
    this.updateUserModal = document.querySelector('.update-user-modal')
    
    this.updateUserModal.addEventListener('show.bs.modal', (e) => {
      if (!this.user) return e.preventDefault()
    })
    
    this.updateUserModal.addEventListener('hide.bs.modal', (e) => {
      this.updateUserModal.classList.remove('show')
      setTimeout(() => {
        this.updateUserModal.classList.remove('d-block')
      }, 100);
    })
    this.getAllUsers();
  }

  getAllUsers() {
    this.users$=
    this.userService.getAllUsers().pipe(
      map(
        data=>{
       return ({dataState:DataStateEnum.LOADED,data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
}




onDeleteUser(user:AppUser){
  let v = confirm("vous voulez supprimer cet Utilisateur ");
  if(v===true)
  
  this.userService.DeleteUser(user).subscribe(data=>{
    this.getAllUsers();
  })
}

  update( p){
    this.user = p
    this.updateUserModal.dispatchEvent(new Event('show.bs.modal', ))
    
    this.updateUserModal.classList.add('d-block')
    setTimeout(() => {
      this.updateUserModal.classList.add('show')
    }, 100);
  
    
  }
}