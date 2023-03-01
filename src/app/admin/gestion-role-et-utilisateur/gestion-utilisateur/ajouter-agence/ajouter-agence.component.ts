import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/UserService/user.service';
//import { UserService } from 'src/app/_services/UserService/user.service';

@Component({
  selector: 'app-ajouter-agence',
  templateUrl: './ajouter-agence.component.html',
  styleUrls: ['./ajouter-agence.component.css']
})
export class AjouterAgenceComponent implements OnInit {
  submitted: boolean = false;
  errorMessage :string|null = null;
  public AddAgenceForm!: FormGroup;
  constructor(private userService:UserService,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.AddAgenceForm = this.formBuilder.group({
      agenceName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
 

    });
  }


  onSubmit(){

console.log(this.AddAgenceForm);



  if(this.AddAgenceForm.invalid){
    this.submitted;
    return;
  }
    this.submitted= true;
    this.userService.AddAgence(this.AddAgenceForm.value ).subscribe({
      next:()=>{
      alert("Agnece a été bien créer  ");
     this.route.navigateByUrl("Admin/GestionUtilisateur/ListAgences")
    
    },
    
    error:(err)=>{
      this.submitted= false
      this.errorMessage = err.error
    }
    
  });
  }
    
}
