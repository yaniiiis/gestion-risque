
import { ModalUpdateRoleComponent } from './../modal-update-role/modal-update-role.component';


import { Observable, map, startWith, catchError, of } from 'rxjs';
import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { StorageSService } from 'src/app/_services/storageService/storage-s.service';
import { UserService } from 'src/app/_services/UserService/user.service';
import { AppDataState, DataStateEnum } from 'src/app/_States/appState';
import { Permission } from 'src/app/Models/Permission';
import { Niveau } from 'src/app/Models/Niveau';
import { User } from 'src/app/Models/User.model';
import { Role } from 'src/app/Models/Role';

@Component({
  selector: 'app-lists-roles',
  templateUrl: './lists-roles.component.html',
  styleUrls: ['./lists-roles.component.css']
})
export class ListsRolesComponent implements OnInit {

  readonly DataStateEnum = DataStateEnum;
  public role : Role | null=null;
  public niv :Niveau  | null=null;
 public roles$?: Observable<AppDataState<Role[]>> | null=null;
 public permissions$?: Observable<AppDataState<Permission[]>> | null=null;
 public Niveaux$?: Observable<AppDataState<Niveau[]>> | null=null;
 public permIDs = []

  currentPermissions =[]
 protected updateRoleModal:Element|null

 constructor(private route: Router, private storage: StorageSService, private userService: UserService, private resolver: ComponentFactoryResolver ) { }

  ngOnInit(): void {
this.currentPermissions=[];
    this.updateRoleModal = document.querySelector('.update-role-modal')
    
    this.updateRoleModal.addEventListener('show.bs.modal', (e) => {
      if (!this.role) return e.preventDefault()
    })
    
    this.updateRoleModal.addEventListener('hide.bs.modal', (e) => {
      this.updateRoleModal.classList.remove('show')
      setTimeout(() => {
        this.updateRoleModal.classList.remove('d-block')
      }, 100);
    })

    this.getAllRoles();

  }

  getAllRoles() {
    this.roles$=
    this.userService.getAllRoles().pipe(
      map(
        data=>{
       return ({dataState:DataStateEnum.LOADED,data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
}

update( p){
  this.role = p  
   this.permIDs = this.role.permissions.map(perm => perm.id)
  this.niv =  p.niveaux;
  this.updateRoleModal.dispatchEvent(new Event('show.bs.modal', ))
  this.updateRoleModal.classList.add('d-block')
  setTimeout(() => {
    this.updateRoleModal.classList.add('show')
  }, 100);
 

  
}

onDeleteRole(role:Role){
  let v = confirm("vous voulez supprimer ce role ");
  if(v===true){
  this.userService.DeleteRole(role).subscribe(data=>{
    this.getAllRoles();
  })
 let user = new User(this.storage.getUser());
if(role.name.toLocaleLowerCase() === user.getRoleName().toLocaleLowerCase()){
  this.storage.signOut();
}
}
}


}
