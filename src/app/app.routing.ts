import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppPageHomeComponent } from './app-page-home/app-page-home.component';
import { ConfirmationPasswordComponent } from './confirmation-password/confirmation-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGGuard } from './_Guards/auth-g.guard';

export const AppRoutes: Routes = [
    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // }
    {
      path: "Home",
      redirectTo: "",
      component: AppPageHomeComponent,
    },
    {
      path: "ForgotPassword",
      component: ForgotPasswordComponent,
    },
    {
      path: "ResetPassword/:token",
      component: ConfirmationPasswordComponent,
    },
    {
      path: "",
      component: AppPageHomeComponent,
    },
    //  {
    //   path: "",
    //   component: AdminLayoutComponent,
    //   children: [
    //       {
    //     path: "",
    //     loadChildren: () => import('./admin.module').then(m => m.AdminModule)
    // }
    {
      path: "",
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
  //]}
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(AppRoutes)],
  exports: [],
})
export class AppRoutingModule {}