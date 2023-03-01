import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/_services/AuthService/auth-service.service';
import { StorageSService } from 'src/app/_services/storageService/storage-s.service';
import { Router } from '@angular/router';



declare var $: any;
@Component({
  selector: 'app-app-page-home',
  templateUrl: './app-page-home.component.html',
  styleUrls: ['./app-page-home.component.css']
})
export class AppPageHomeComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage :string|null = null;
  submitted:boolean = false;



  constructor(private authService:AuthServiceService,private storageSService:StorageSService ,private router:Router) {}
   
  public LoginForm!: FormGroup;
  ngOnInit(): void {
 
    this.LoginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      password: new FormControl('', [Validators.required]),
    });

    if (this.storageSService.getToken() && this.storageSService.isLoggedIn() === true) {
      this.isLoggedIn === true;
      this.isLoginFailed === false;
      this.router.navigateByUrl('/Admin');
    }else{
      this.storageSService.signOut();
      this.router.navigate(['/Home']);
      this.isLoggedIn===false
      this.isLoginFailed===true
    }



    const togglePassword = document.querySelector("#visibilityLoginPassword");

    const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
         this.classList.toggle("fa-eye-slash");
      
    });
  
  }

    
 

  
  onSubmit() {

this.submitted= true;
    
    this.authService.Login(this.LoginForm.value['username'],this.LoginForm.value['password']).subscribe({
    next:  (Response:any)=>{
        this.errorMessage = null
        this.isLoggedIn = true
        this.isLoginFailed = false
        this.storageSService.saveToken(Response.jwtAccessTocken);
        this.storageSService.saveUser(Response);
        if(this.storageSService.getToken() && this.storageSService.isLoggedIn() === true ){
          this.router.navigateByUrl('/Admin')
  
          
        }

      },
    error:  (error)=>{
     
       this.errorMessage = error.error
        this.isLoginFailed = true;
        this.isLoggedIn = false;
      

      
      }
    } )
  }


  reloadPage(): void {
    window.location.reload();
  }



  public hasError = (controlName: string, errorName: string) => {
    return this.LoginForm.controls[controlName].hasError(errorName);
  };

}
