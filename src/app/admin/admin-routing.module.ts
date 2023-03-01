import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin/admin-layout.component';

const routes: Routes = [

  
  {
    path: 'Admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('../layouts/admin/admin-layout.module').then(m => m.AdminLayoutModule)
    }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
