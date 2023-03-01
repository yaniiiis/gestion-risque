import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Agence } from 'src/app/Models/Agence';
import { Role } from 'src/app/Models/Role';
import { UserService } from 'src/app/_services/UserService/user.service';
import { AppDataState, DataStateEnum } from 'src/app/_States/appState';
import { Router } from "@angular/router";
import { catchError, map, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-parametrage-indirect',
  templateUrl: './parametrage-indirect.component.html',
  styleUrls: ['./parametrage-indirect.component.css']
})
export class ParametrageIndirectComponent implements OnInit {

  constructor(    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: Router) { }
    public AddUserForm!: FormGroup;
    readonly DataStateEnum = DataStateEnum;
    public roles$?: Observable<AppDataState<Role[]>> | null = null;
    public agences$?: Observable<AppDataState<Agence[]>> | null = null;
    errorMessage: string | null = null;
    submitted: boolean = false;

  ngOnInit(): void {

    this.AddUserForm = this.formBuilder.group({
    
     
     
      types: new FormControl("", [Validators.required]),
  
    });


  }
  onSubmit() {
    if (this.AddUserForm.valid) {
      console.log("i am here "  )
   
    }
  }

}
