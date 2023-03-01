import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/_services/ForgotPasswordService/forgot-password.service';


@Component({
  selector: 'app-confirmation-password',
  templateUrl: './confirmation-password.component.html',
  styleUrls: ['./confirmation-password.component.css']
})
export class ConfirmationPasswordComponent implements OnInit {
  errorMessage !:string[];
  submitted:boolean = false;
  token ?:string;
  constructor(private forgotPasswordService:ForgotPasswordService,private route: Router,private activateRoute:ActivatedRoute ) {
    this.token = this.activateRoute.snapshot.params['token'];
   }
  public ResetPasswordForm?: FormGroup | null= null;
  ngOnInit(): void {
    this.ResetPasswordForm = new FormGroup({
      password: new FormControl('', [
        Validators.required
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });

    this.forgotPasswordService.CheckResetPasswordToken(this.token).subscribe(
      {
        error: (err) => {
          this.route.navigateByUrl('/')
        },
      }
    )
    

    this.ResetPasswordForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ]),
    });




    const togglePassword = document.querySelector("#visibilityPassword");
    const toggleConfirmPassword = document.querySelector("#visibilityConfirmPassword");

    const password = document.querySelector("#password");
    const Confirmpassword = document.querySelector("#Confirmpassword");

    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        
        // toggle the icon
           this.classList.toggle("fa-eye-slash");
    });
    toggleConfirmPassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = Confirmpassword.getAttribute("type") === "password" ? "text" : "password";
        Confirmpassword.setAttribute("type", type);
        
        // toggle the icon
            this.classList.toggle("fa-eye-slash");
    });
  }


  onSubmit(){

    this.submitted=true;
    if(this.ResetPasswordForm.invalid) return;
        this.forgotPasswordService.ResetPasswordtoken(this.token,this.ResetPasswordForm?.value['password'],this.ResetPasswordForm.value['confirmPassword']).subscribe({
          next: data => {
            console.log(data)
            alert(" Password Updated ");
            this.route.navigateByUrl("/")
          },
          error: err => {
            console.log('from here', err)
          }
        });
     
     }

     public hasError = (controlName: string, errorName: string) => {
      return this.ResetPasswordForm.controls[controlName].hasError(errorName);
    };
  

}
