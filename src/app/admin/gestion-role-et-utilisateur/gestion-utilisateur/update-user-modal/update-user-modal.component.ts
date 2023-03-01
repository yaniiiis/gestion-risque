
import { UserService } from 'src/app/_services/UserService/user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { agence, AppUser } from 'src/app/Models/AppUser';
import { element } from 'protractor';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataState, DataStateEnum } from 'src/app/_States/appState';
import { catchError, map, startWith } from 'rxjs';
import { Role } from 'src/app/Models/Role';

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.css']
})
export class UpdateUserModalComponent implements OnInit {

  @Input() user :AppUser|null=null;
  readonly DataStateEnum = DataStateEnum;
  public roles$?: Observable<AppDataState<Role[]>> | null=null;
  public agences$ ?: Observable<AppDataState<agence[]>> | null=null;
  public role : Role ;
  constructor(private userService:UserService,private formBuilder:FormBuilder,private route:Router) { 
    
  }
  
  
  public UpdateForm!: FormGroup;
  ngOnInit(): void {
    this.UpdateForm = this.formBuilder.group({
      id: new FormControl(this.user?.id, [
        Validators.required,
    
      ]),
      nom: new FormControl(this.user?.nom, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      prenom: new FormControl(this.user?.prenom, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      username: new FormControl(this.user?.username, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      email: new FormControl(this.user?.email, [
        Validators.required,
        Validators.email
      ]),
      rolle: new FormControl(this.user?.roles, [
        Validators.required,
     
      ]),
      agence: new FormControl(this.user?.agence, [
        Validators.required,
     
      ]),

    });

    document.querySelector('.update-user-modal').addEventListener('show.bs.modal', (e) => {
      console.log(this.user)
    })

  this.getAllRole();
   this.getAllAgence();

  }



  getAllRole(){
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

  getAllAgence(){
    this.agences$ =
    this.userService.getAllAgence().pipe(
      map(
        data=>{
       return ({dataState:DataStateEnum.LOADED,data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
}


save(event) {
  let form = document.forms['update-user-data']
  let role= document.forms['update-user-data'].querySelector('[formControlName=rolle]').value 
  let agence= document.forms['update-user-data'].querySelector('[formControlName=agence]').value 
 

  let formData = {
    nom: form.querySelector('[formControlName=nom]').value ,
    prenom: form.querySelector('[formControlName=prenom]').value ,
    username: form.querySelector('[formControlName=username]').value ,
    email: form.querySelector('[formControlName=email]').value ,
    roles :{id:role},
    agence:{id:agence}
  }

  console.log(formData);

  
  this.userService.UpdateUsers(this.user.id,formData).subscribe({
    next :() =>{
    this.route.navigateByUrl("Admin/GestionUtilisateur/ListeUtilisateurs")
    alert("User Updated");    
    window.location.reload();
  }
})

}

onCloseModal(){

  document.querySelector('.update-user-modal').classList.remove('d-block');

}


}