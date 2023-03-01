import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/_services/ForgotPasswordService/forgot-password.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  errorMessage !:string[];
  submitted:boolean = false;

  constructor(private forgotPasswordService:ForgotPasswordService,private route:Router ) { }
  public ForgotPasswordForm?: FormGroup | null= null;
  ngOnInit(): void {
    this.ForgotPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });

  }

  onSubmit(){

    this.submitted=true;
    if(this.ForgotPasswordForm?.invalid) return;
    
        this.forgotPasswordService.ForgotPassword(this.ForgotPasswordForm?.value).subscribe(data=>{
          alert("Email sended ");
          this.route.navigateByUrl("/")
        });
     
     }



  public hasError = (controlName: string, errorName: string) => {
    return this.ForgotPasswordForm.controls[controlName].hasError(errorName);
  };
}
