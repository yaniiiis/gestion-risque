import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, DecimalPipe } from "@angular/common";

import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { AppComponent } from "./app.component";

import { FixedpluginModule } from "./shared/fixedplugin/fixedplugin.module";

import { AppRoutes } from "./app.routing";
import { AppPageHomeComponent } from "./app-page-home/app-page-home.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ConfirmationPasswordComponent } from "./confirmation-password/confirmation-password.component";
import { authInterceptorProviders } from "./_helpper/AuthInterceptor";
import { UpdateUserModalComponent } from "./admin/gestion-role-et-utilisateur/gestion-utilisateur/update-user-modal/update-user-modal.component";

import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
import { NgChartsModule } from "ng2-charts";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

registerLocaleData(localeFr);

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    NgChartsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatOptionModule,
    MatTabsModule,
  ],
  declarations: [],
})
export class MaterialModule {}

@NgModule({
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    //  RouterModule.forRoot(AppRoutes,{
    //    useHash: true
    //  }),
    RouterModule.forRoot(AppRoutes, {
      useHash: false,
    }),
    HttpClientModule,
    MaterialModule,
    FixedpluginModule,
  ],
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AppPageHomeComponent,
    FileUploadComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ConfirmationPasswordComponent,
  ],
  // providers : [ authInterceptorProviders,MatDatepickerModule,
  //   MatNativeDateModule,  { provide: LOCALE_ID, useValue: "fr-FR" },
  // ],
  providers: [
    MatNativeDateModule,
    authInterceptorProviders,
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: LOCALE_ID, useValue: "fr-FR" },
  ],
  entryComponents: [UpdateUserModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
