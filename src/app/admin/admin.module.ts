import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";

import { MatInputModule } from "@angular/material/input";
import { MatPseudoCheckboxModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { MatDialogModule } from "@angular/material/dialog";
import { AdminLayoutComponent } from "../layouts/admin/admin-layout.component";
import { NavigationMenuComponent } from "../admin/components/navigation-menu/navigation-menu.component";
import { authInterceptorProviders } from "../_helpper/AuthInterceptor";
import { SidebarModule } from "../admin/components/sidebar/sidebar.module";
import { NavbarModule } from "../shared/navbar/navbar.module";
import { FixedpluginModule } from "../shared/fixedplugin/fixedplugin.module";
import { MatRadioModule } from "@angular/material/radio";
import { AddPermissionComponent } from "./gestion-role-et-utilisateur/gestion-roles/add-permission/add-permission.component";
import { AjouterDesRolesComponent } from "./gestion-role-et-utilisateur/gestion-roles/ajouter-des-roles/ajouter-des-roles.component";
import { AjouterNiveauComponent } from "./gestion-role-et-utilisateur/gestion-roles/ajouter-niveau/ajouter-niveau.component";
import { GestionRolesComponent } from "./gestion-role-et-utilisateur/gestion-roles/gestion-roles.component";
import { ListNiveauComponent } from "./gestion-role-et-utilisateur/gestion-roles/list-niveau/list-niveau.component";
import { ListpermissionComponent } from "./gestion-role-et-utilisateur/gestion-roles/listpermission/listpermission.component";
import { ListsRolesComponent } from "./gestion-role-et-utilisateur/gestion-roles/lists-roles/lists-roles.component";
import { ModalUpdateRoleComponent } from "./gestion-role-et-utilisateur/gestion-roles/modal-update-role/modal-update-role.component";
import { UpdateNiveauComponent } from "./gestion-role-et-utilisateur/gestion-roles/update-niveau/update-niveau.component";
import { AjouterAgenceComponent } from "./gestion-role-et-utilisateur/gestion-utilisateur/ajouter-agence/ajouter-agence.component";
import { AjouterDesUtilisateusComponent } from "./gestion-role-et-utilisateur/gestion-utilisateur/ajouter-des-utilisateus/ajouter-des-utilisateus.component";
import { GestionUtilisateurComponent } from "./gestion-role-et-utilisateur/gestion-utilisateur/gestion-utilisateur.component";
import { ListAgencesComponent } from "./gestion-role-et-utilisateur/gestion-utilisateur/list-agences/list-agences.component";
import { ListeUtilisateursComponent } from "./gestion-role-et-utilisateur/gestion-utilisateur/liste-utilisateurs/liste-utilisateurs.component";
import { UpdateAgenceComponent } from "./gestion-role-et-utilisateur/gestion-utilisateur/update-agence/update-agence.component";
import { UpdateUserModalComponent } from "./gestion-role-et-utilisateur/gestion-utilisateur/update-user-modal/update-user-modal.component";
import { AddDomaineDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/add-domaine-dialog/add-domaine-dialog.component";
import { AddKeyValueOperationDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/add-key-value-operation-dialog/add-key-value-operation-dialog.component";
import { AddToDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/add-to-dialog/add-to-dialog.component";
import { DeleteDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/delete-dialog/delete-dialog.component";
import { EditDomaineDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/edit-domaine-dialog/edit-domaine-dialog.component";
import { ParametrageAnalysePortfeuilleComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-analyse-portfeuille/parametrage-analyse-portfeuille.component";
import { ParametrageDomaineHomeComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-domaine/parametrage-domaine-home/parametrage-domaine-home.component";
import { ParametrageDomaineListComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-domaine/parametrage-domaine-list/parametrage-domaine-list.component";
import { ParametrageDomaineTableComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-domaine/parametrage-domaine-table/parametrage-domaine-table.component";
import { ParametrageIndirectComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-indirect/parametrage-indirect.component";
import { ParametrageRapportComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-rapport/parametrage-rapport.component";
import { ActionDeRecouvermentComponent } from "./risque-credit/analyse-portfeuille/action-de-recouverment/action-de-recouverment.component";
import { ActionJusticeComponent } from "./risque-credit/analyse-portfeuille/action-justice/action-justice.component";
import { AnalysePortfeuilleDirectComponent } from "./risque-credit/analyse-portfeuille/analyse-portfeuille-direct/analyse-portfeuille-direct.component";
import { BigNumberPipe } from "../Pipe/big-number.pipe";
import { AnalysePortfeuilleInDirectComponent } from "./risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/analyse-portfeuille-in-direct.component";
import { EngagementsComponent } from "./risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/engagements/engagements.component";
import { EvolutionComponent } from "./risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/evolution/evolution.component";
import { PortefeuilIndirectComponent } from "./risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/portefeuil-indirect.component";
import { CommentaireAnalyseComponent } from "./risque-credit/analyse-portfeuille/commentaire-analyse/commentaire-analyse.component";
import { DialogueMotifComponent } from "./risque-credit/analyse-portfeuille/commentaire-analyse/dialogue-motif/dialogue-motif.component";
import { CommentaireEditorComponent } from "./risque-credit/analyse-portfeuille/commentaire-analyse/commentaire-editor/commentaire-editor.component";
import { CreanceDouteuseEtProvisionChartComponent } from "./risque-credit/analyse-portfeuille/creation-douteuse/creance-douteuse-et-provision-chart/creance-douteuse-et-provision-chart.component";
import { ImpayeMilliardsChartComponent } from "./risque-credit/analyse-portfeuille/creation-douteuse/impaye-milliards-chart/impaye-milliards-chart.component";
import { TauxDefautChartComponent } from "./risque-credit/analyse-portfeuille/creation-douteuse/taux-defaut-chart/taux-defaut-chart.component";
import { CreationDouteuseComponent } from "./risque-credit/analyse-portfeuille/creation-douteuse/creation-douteuse.component";
import { DurationComponent } from "./risque-credit/analyse-portfeuille/durations/duration.component";
import { KriComponent } from "./risque-credit/analyse-portfeuille/kri/kri.component";
import { PortefeuilDirectComponent } from "./risque-credit/analyse-portfeuille/portefeuil-direct/portefeuil-direct.component";
import { CreditNetComponent } from "./risque-credit/analyse-portfeuille/portefeuil-direct/credit-net/credit-net.component";
import { EvolutionDirectComponent } from "./risque-credit/analyse-portfeuille/portefeuil-direct/evolution-direct/evolution-direct.component";
import { ParTypeEngagementComponent } from "./risque-credit/analyse-portfeuille/portefeuil-direct/par-type-engagement/par-type-engagement.component";
import { GestionDesResqueClientComponent } from "./risque-credit/gestion-des-resque-client/gestion-des-resque-client.component";
import { GestionRisqueClientContentComponent } from "./risque-credit/gestion-des-resque-client/gestion-risque-client-content/gestion-risque-client-content.component";
import { RepartitionParSecteurComponent } from "./risque-credit/gestion-des-resque-client/repartition-par-secteur/repartition-par-secteur.component";
import { RepartitionParZoneComponent } from "./risque-credit/gestion-des-resque-client/repartition-par-zone/repartition-par-zone.component";
import { KRIsComponent } from "./risque-credit/kris/kris.component";
import { StressTestContentComponent } from "./risque-credit/stress-test/stress-test-content/stress-test-content.component";
import { StressTestComponent } from "./risque-credit/stress-test/stress-test.component";
import { DixPlusGrandClientAConcentrationComponent } from "./risque-credit/top10/dix-plus-grand-client-a-concentration/dix-plus-grand-client-a-concentration.component";
import { DixPlusGrandClientAEngagementsComponent } from "./risque-credit/top10/dix-plus-grand-client-a-engagements/dix-plus-grand-client-a-engagements.component";
import { DixPlusGrandClientALimiteAccordeeComponent } from "./risque-credit/top10/dix-plus-grand-client-a-limite-accordee/dix-plus-grand-client-a-limite-accordee.component";
import { GarantiesPrisesSurLesDixPlusGrandsClientsComponent } from "./risque-credit/top10/garanties-prises-sur-les-dix-plus-grands-clients/garanties-prises-sur-les-dix-plus-grands-clients.component";
import { Top10ConentComponent } from "./risque-credit/top10/top10-conent/top10-conent.component";
import { Top10Component } from "./risque-credit/top10/top10.component";
import { EvaluationTauxChangeComponent } from "./risque-de-change/evaluation-taux-change/evaluation-taux-change.component";
import { KRIsDeChangeComponent } from "./risque-de-change/kris-de-change/kris-de-change.component";
import { StrsseTestDeChangeComponent } from "./risque-de-change/strsse-test-de-change/strsse-test-de-change.component";
import { InvertissementsComponent } from "./risque-de-marche/invertissements/invertissements.component";
import { LimitesBanquesComponent } from "./risque-de-marche/limites-banques/limites-banques.component";
import { NotionsBanquesComponent } from "./risque-de-marche/notions-banques/notions-banques.component";
import { NotionsPaysComponent } from "./risque-de-marche/notions-pays/notions-pays.component";
import { RisqueDeMarcheComponent } from "./risque-de-marche/risque-de-marche.component";
import { AnalyseDesDepotsComponent } from "./risque-liquidite/analyse-des-depots/analyse-des-depots.component";
import { AnalyseQualitativeEtQuantitativeComponent } from "./risque-liquidite/analyse-qualitative-et-quantitative/analyse-qualitative-et-quantitative.component";
import { KRisLiquiditeComponent } from "./risque-liquidite/kris-liquidite/kris-liquidite.component";
import { RisqueLiquiditeComponent } from "./risque-liquidite/risque-liquidite.component";
import { StressTestLiquiditeComponent } from "./risque-liquidite/stress-test-liquidite/stress-test-liquidite.component";
import { SurveillenceDeTreoserieComponent } from "./risque-liquidite/surveillence-de-treoserie/surveillence-de-treoserie.component";
import { AnalysePortfeuilleComponent } from "./risque-credit/analyse-portfeuille/analyse-portfeuille.component";
import { CommentaireAnalysePfIndirectComponent } from "./risque-credit/analyse-portfeuille/commentaire-analyse-pf-indirect/commentaire-analyse-pf-indirect.component";
import { GraphicComponent } from "./risque-credit/graphic/graphic.component";
import { FormComentaireAnalysteComponent } from "./risque-credit/graphic/form-comentaire-analyste/form-comentaire-analyste.component";
import { GrapheChartComponent } from "./components/graphe-chart/graphe-chart.component";
import { NgChartsModule } from "ng2-charts";
import { Scenario1Component } from "./risque-credit/stress-test/scenario1/scenario1.component";
import { Scenario2Component } from "./risque-credit/stress-test/scenario2/scenario2.component";
import { Scenario3Component } from "./risque-credit/stress-test/scenario3/scenario3.component";
import { ScenarioComponent } from "./risque-credit/stress-test/scenario/scenario.component";
import { ClauseDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/clause-dialog/clause-dialog.component";
import { KeyValueOperandComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-rapport/key-value-operand/key-value-operand.component";
import { HomeComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-rapport/home/home.component";
import { ListComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-rapport/list/list.component";
import { TableComponent } from "./gestion-role-et-utilisateur/parametrage/parametrage-rapport/table/table.component";
import { AddTypeDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/add-type-dialog/add-type-dialog.component";
import { AddToTypeDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/add-to-type-dialog/add-to-type-dialog.component";
import { DeleteFromTypeDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/delete-from-type-dialog/delete-from-type-dialog.component";
import { EditTypeDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/edit-type-dialog/edit-type-dialog.component";
import { EditClauseDialogComponent } from "./gestion-role-et-utilisateur/parametrage/common/edit-clause-dialog/edit-clause-dialog.component";
import { KvooForEditComponent } from "./gestion-role-et-utilisateur/parametrage/common/edit-type-dialog/kvoo-for-edit/kvoo-for-edit.component";
import { ClickOutsideModule } from "ng-click-outside";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ColumnComponent } from './gestion-role-et-utilisateur/parametrage/column/column.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    GestionUtilisateurComponent,
    GestionRolesComponent,
    ListeUtilisateursComponent,
    AjouterDesUtilisateusComponent,
    UpdateUserModalComponent,
    ListsRolesComponent,
    AjouterDesRolesComponent,
    ModalUpdateRoleComponent,
    NavigationMenuComponent,
    ListpermissionComponent,
    AddPermissionComponent,
    AjouterAgenceComponent,
    ListAgencesComponent,
    AjouterNiveauComponent,
    ListNiveauComponent,
    UpdateAgenceComponent,
    UpdateNiveauComponent,
    ParametrageAnalysePortfeuilleComponent,
    ParametrageIndirectComponent,
    ParametrageDomaineHomeComponent,
    ParametrageDomaineTableComponent,
    ParametrageDomaineListComponent,
    DeleteDialogComponent,
    AddToDialogComponent,
    EditDomaineDialogComponent,
    AddDomaineDialogComponent,
    ParametrageRapportComponent,
    AddKeyValueOperationDialogComponent,
    BigNumberPipe,
    ActionDeRecouvermentComponent,
    ActionJusticeComponent,
    AnalysePortfeuilleDirectComponent,
    AnalysePortfeuilleInDirectComponent,
    EngagementsComponent,
    EvolutionComponent,
    PortefeuilIndirectComponent,
    CommentaireAnalyseComponent,
    CommentaireAnalysePfIndirectComponent,
    DialogueMotifComponent,
    CommentaireEditorComponent,
    CreanceDouteuseEtProvisionChartComponent,
    ImpayeMilliardsChartComponent,
    TauxDefautChartComponent,
    CreationDouteuseComponent,
    DurationComponent,
    KriComponent,
    PortefeuilDirectComponent,
    CreditNetComponent,
    EvolutionDirectComponent,
    ParTypeEngagementComponent,
    GestionDesResqueClientComponent,
    GestionRisqueClientContentComponent,
    RepartitionParSecteurComponent,
    RepartitionParZoneComponent,
    KRIsComponent,
    Scenario1Component,
    Scenario2Component,
    StressTestContentComponent,
    Scenario3Component,
    StressTestComponent,
    Top10Component,
    Top10ConentComponent,
    DixPlusGrandClientAConcentrationComponent,
    DixPlusGrandClientAEngagementsComponent,
    DixPlusGrandClientALimiteAccordeeComponent,
    GarantiesPrisesSurLesDixPlusGrandsClientsComponent,
    EvaluationTauxChangeComponent,
    KRIsDeChangeComponent,
    StrsseTestDeChangeComponent,
    RisqueDeMarcheComponent,
    InvertissementsComponent,
    LimitesBanquesComponent,
    NotionsBanquesComponent,
    NotionsPaysComponent,
    AnalyseDesDepotsComponent,
    AnalyseQualitativeEtQuantitativeComponent,
    KRisLiquiditeComponent,
    StressTestLiquiditeComponent,
    SurveillenceDeTreoserieComponent,
    RisqueLiquiditeComponent,
    AnalysePortfeuilleComponent,
    GraphicComponent,
    FormComentaireAnalysteComponent,
    GrapheChartComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    ScenarioComponent,
    ParametrageAnalysePortfeuilleComponent,
    ParametrageIndirectComponent,
    ParametrageDomaineHomeComponent,
    ParametrageDomaineTableComponent,
    ParametrageDomaineListComponent,
    DeleteDialogComponent,
    AddToDialogComponent,
    EditDomaineDialogComponent,
    AddDomaineDialogComponent,
    ParametrageRapportComponent,
    AddKeyValueOperationDialogComponent,
    ClauseDialogComponent,
    KeyValueOperandComponent,
    HomeComponent,
    ListComponent,
    TableComponent,
    AddTypeDialogComponent,
    AddToTypeDialogComponent,
    DeleteFromTypeDialogComponent,
    EditTypeDialogComponent,
    EditClauseDialogComponent,
    KvooForEditComponent,
    ColumnComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    NavbarModule,
    SidebarModule,
    FixedpluginModule,
    NgChartsModule,
    ClickOutsideModule,
    MatAutocompleteModule,
  ],
  providers: [authInterceptorProviders, MatDatepickerModule],
  exports: [MatDatepickerModule],
})
export class AdminModule {}
