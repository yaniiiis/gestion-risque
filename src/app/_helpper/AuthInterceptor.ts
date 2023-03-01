
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router, Routes } from "@angular/router";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthServiceService } from "../_services/AuthService/auth-service.service";
import { StorageSService } from "../_services/storageService/storage-s.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
    constructor(private router:Router, private http: HttpClient, private tokenService: StorageSService, private authService: AuthServiceService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
      let authReq = req;
      const accesstoken = this.tokenService.getToken();
      if (accesstoken != null) {
        authReq = this.addTokenHeader(req, accesstoken);

      }
  
      return next.handle(authReq).pipe(catchError(error => {

        let user = this.tokenService.getUser();
        if (error instanceof HttpErrorResponse && !authReq.url.includes('auth/signin') && error.status === 403 ) {
               alert('Votre Session est terminé')  
               this.tokenService.signOut();
               this.router.navigateByUrl('/Home');
               
        }
        return throwError(error);
    
      }));
    }
    private addTokenHeader(request: HttpRequest<any>, token: string) {

       return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

    }

   

    }

  
  export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];