import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { UserService } from 'src/app/_services/UserService/user.service';
import { Niveau } from 'src/app/Models/Niveau';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/_services/UserService/user.service';

@Component({
  selector: 'app-update-niveau',
  templateUrl: './update-niveau.component.html',
  styleUrls: ['./update-niveau.component.css']
})
export class UpdateNiveauComponent implements OnInit {
  @Input() niveau: Niveau;

  submitted: boolean = false;
  errorMessage :string|null = null;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route:Router
  ) {}
  public updateNiveauForm!: FormGroup;
  ngOnInit(): void {

    this.updateNiveauForm = this.formBuilder.group({
      idNiv: new FormControl("", [Validators.required]),

      nameNiveau: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
      niveauNumber: new FormControl("", [
        Validators.required,
      ]),
    });
  }


  onCloseModal(){
    document.querySelector(".update-niveau-modal").classList.remove("d-block");
  }

  save(){
    
    let v =confirm("vous voulez modifier ce niveau ?");
    if(v==true){

      
    this.userService.updateNiveau(this.niveau.idNiv,this.updateNiveauForm.value).subscribe({
      next:()=>{
    this.route.navigateByUrl("Admin/GestionDesRoles/ListNiveaux");
     window.location.reload();
      },
      error:(err)=>{
        this.errorMessage=err.error;
      }
    })
  }
}
}
