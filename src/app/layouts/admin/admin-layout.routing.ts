import { Routes } from "@angular/router";
import { AddPermissionComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-roles/add-permission/add-permission.component";
import { AjouterDesRolesComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-roles/ajouter-des-roles/ajouter-des-roles.component";
import { AjouterNiveauComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-roles/ajouter-niveau/ajouter-niveau.component";
import { GestionRolesComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-roles/gestion-roles.component";
import { ListNiveauComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-roles/list-niveau/list-niveau.component";
import { ListpermissionComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-roles/listpermission/listpermission.component";
import { ListsRolesComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-roles/lists-roles/lists-roles.component";
import { AjouterAgenceComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-utilisateur/ajouter-agence/ajouter-agence.component";
import { AjouterDesUtilisateusComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-utilisateur/ajouter-des-utilisateus/ajouter-des-utilisateus.component";
import { GestionUtilisateurComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-utilisateur/gestion-utilisateur.component";
import { ListAgencesComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-utilisateur/list-agences/list-agences.component";
import { ListeUtilisateursComponent } from "src/app/admin/gestion-role-et-utilisateur/gestion-utilisateur/liste-utilisateurs/liste-utilisateurs.component";
import { ParametrageAnalysePortfeuilleComponent } from "src/app/admin/gestion-role-et-utilisateur/parametrage/parametrage-analyse-portfeuille/parametrage-analyse-portfeuille.component";
import { ParametrageDomaineHomeComponent } from "src/app/admin/gestion-role-et-utilisateur/parametrage/parametrage-domaine/parametrage-domaine-home/parametrage-domaine-home.component";
import { ParametrageIndirectComponent } from "src/app/admin/gestion-role-et-utilisateur/parametrage/parametrage-indirect/parametrage-indirect.component";
import { HomeComponent } from "src/app/admin/gestion-role-et-utilisateur/parametrage/parametrage-rapport/home/home.component";
import { ParametrageRapportComponent } from "src/app/admin/gestion-role-et-utilisateur/parametrage/parametrage-rapport/parametrage-rapport.component";
import { ActionDeRecouvermentComponent } from "src/app/admin/risque-credit/analyse-portfeuille/action-de-recouverment/action-de-recouverment.component";
import { ActionJusticeComponent } from "src/app/admin/risque-credit/analyse-portfeuille/action-justice/action-justice.component";
import { AnalysePortfeuilleDirectComponent } from "src/app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille-direct/analyse-portfeuille-direct.component";
import { AnalysePortfeuilleInDirectComponent } from "src/app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/analyse-portfeuille-in-direct.component";
import { PortefeuilIndirectComponent } from "src/app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/portefeuil-indirect.component";
import { AnalysePortfeuilleComponent } from "src/app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille.component";
import { CommentaireAnalysePfIndirectComponent } from "src/app/admin/risque-credit/analyse-portfeuille/commentaire-analyse-pf-indirect/commentaire-analyse-pf-indirect.component";
import { CommentaireAnalyseComponent } from "src/app/admin/risque-credit/analyse-portfeuille/commentaire-analyse/commentaire-analyse.component";
import { CreationDouteuseComponent } from "src/app/admin/risque-credit/analyse-portfeuille/creation-douteuse/creation-douteuse.component";
import { DurationComponent } from "src/app/admin/risque-credit/analyse-portfeuille/durations/duration.component";
import { KriComponent } from "src/app/admin/risque-credit/analyse-portfeuille/kri/kri.component";
import { PortefeuilDirectComponent } from "src/app/admin/risque-credit/analyse-portfeuille/portefeuil-direct/portefeuil-direct.component";
import { GestionDesResqueClientComponent } from "src/app/admin/risque-credit/gestion-des-resque-client/gestion-des-resque-client.component";
import { RepartitionParSecteurComponent } from "src/app/admin/risque-credit/gestion-des-resque-client/repartition-par-secteur/repartition-par-secteur.component";
import { RepartitionParZoneComponent } from "src/app/admin/risque-credit/gestion-des-resque-client/repartition-par-zone/repartition-par-zone.component";
import { GraphicComponent } from "src/app/admin/risque-credit/graphic/graphic.component";
import { ScenarioComponent } from "src/app/admin/risque-credit/stress-test/scenario/scenario.component";
import { Scenario1Component } from "src/app/admin/risque-credit/stress-test/scenario1/scenario1.component";
import { Scenario2Component } from "src/app/admin/risque-credit/stress-test/scenario2/scenario2.component";
import { Scenario3Component } from "src/app/admin/risque-credit/stress-test/scenario3/scenario3.component";

import { StressTestComponent } from "src/app/admin/risque-credit/stress-test/stress-test.component";
import { DixPlusGrandClientAConcentrationComponent } from "src/app/admin/risque-credit/top10/dix-plus-grand-client-a-concentration/dix-plus-grand-client-a-concentration.component";
import { DixPlusGrandClientAEngagementsComponent } from "src/app/admin/risque-credit/top10/dix-plus-grand-client-a-engagements/dix-plus-grand-client-a-engagements.component";
import { DixPlusGrandClientALimiteAccordeeComponent } from "src/app/admin/risque-credit/top10/dix-plus-grand-client-a-limite-accordee/dix-plus-grand-client-a-limite-accordee.component";
import { GarantiesPrisesSurLesDixPlusGrandsClientsComponent } from "src/app/admin/risque-credit/top10/garanties-prises-sur-les-dix-plus-grands-clients/garanties-prises-sur-les-dix-plus-grands-clients.component";
import { Top10Component } from "src/app/admin/risque-credit/top10/top10.component";
import { AnalyseDesDepotsComponent } from "src/app/admin/risque-liquidite/analyse-des-depots/analyse-des-depots.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { FileUploadComponent } from "src/app/file-upload/file-upload.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
    ],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "",
    children: [
      {
        path: "GestionUtilisateur",
        component: GestionUtilisateurComponent,
        children: [
          {
            path: "ListeUtilisateurs",
            component: ListeUtilisateursComponent,
          },
          {
            path: "AjouterDesUtilisateurs",
            component: AjouterDesUtilisateusComponent,
          },
          {
            path: "UpdateUser",
            component: AjouterDesUtilisateusComponent,
          },
          {
            path: "AjouterDesAgences",
            component: AjouterAgenceComponent,
          },
          {
            path: "ListAgences",
            component: ListAgencesComponent,
          },
        ],
      },
      {
        path: "GestionDesRoles",
        component: GestionRolesComponent,
        children: [
          {
            path: "AjouterRole",
            component: AjouterDesRolesComponent,
          },
          {
            path: "ListesRoles",
            component: ListsRolesComponent,
          },

          {
            path: "ajouterDesPermissions",
            component: AddPermissionComponent,
          },
          {
            path: "ListPermissions",
            component: ListpermissionComponent,
          },
          {
            path: "ajouterDesNiveauxRole",
            component: AjouterNiveauComponent,
          },
          {
            path: "ListNiveaux",
            component: ListNiveauComponent,
          },
        ],
      },

      {
        path: "ImporterFichierExcel",
        component: FileUploadComponent,
      },

      {
        path: "parametrageAnalysePrtfeuille",
        component: ParametrageAnalysePortfeuilleComponent,
        children: [
          {
            path: "ParametrageIndirect",
            component: ParametrageIndirectComponent,
          },
          {
            path: "ParametrageDomaine",
            component: ParametrageDomaineHomeComponent,
          },
          {
            path: "Rapport",
            component: HomeComponent,
          },
        ],
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "AnalysePortfeuille",
        component: AnalysePortfeuilleComponent,

        children: [
          {
            path: "GraphePortfeuilledirect",
            component: PortefeuilDirectComponent,
          },
          {
            path: "CommentaireAnalyse",
            component: CommentaireAnalyseComponent,
          },
          {
            path: "CommentaireAnalysePfIndirect",
            component: CommentaireAnalysePfIndirectComponent,
          },

          {
            path: "GraphePortfeuilleindirect",
            component: PortefeuilIndirectComponent,
          },
          {
            path: "Portfeuilledirect",
            component: AnalysePortfeuilleDirectComponent,
            // canActivate : [AuthPermissionsGuard],  // to add permissions at route
            // data :{
            //   requiredPermission:['ConsulterUser']
            // },
          },

          {
            path: "AnalysePortfeuilleInDirect",
            component: AnalysePortfeuilleInDirectComponent,
          },
          {
            path: "Duration",
            component: DurationComponent,
          },
          {
            path: "CreanceDuteuse",
            component: CreationDouteuseComponent,
          },
          {
            path: "ActionDeRecouverment",
            component: ActionDeRecouvermentComponent,
          },
          {
            path: "ActionDeJustices",
            component: ActionJusticeComponent,
          },
        ],
      },
      {
        path: "Clients",
        component: GestionDesResqueClientComponent,
        children: [
          {
            path: "ClientParSecteur",
            component: RepartitionParSecteurComponent,
          },
          { path: "ClientParZone", component: RepartitionParZoneComponent },
        ],
      },
      {
        path: "Graphic",
        component: GraphicComponent,
      },
      {
        path: "Kri",
        component: KriComponent,
      },
      {
        path: "StressTest",
        component: StressTestComponent,
        children: [
          {
            path: "scenario1",
            component: Scenario1Component,
          },
          {
            path: "scenario2",
            component: Scenario2Component,
          },
          {
            path: "scenario3",
            component: Scenario3Component,
          },
        ],
      },

      {
        path: "Top10",
        component: Top10Component,
        children: [
          {
            path: "DixPlusGrandClientAConcentration",
            component: DixPlusGrandClientAConcentrationComponent,
          },
          {
            path: "DixPlusGrandClientALimiteAccordee",
            component: DixPlusGrandClientALimiteAccordeeComponent,
          },
          {
            path: "DixPlusGrandClientAEngagements",
            component: DixPlusGrandClientAEngagementsComponent,
          },
          {
            path: "GarantiesPrisesSurLesDixPlusGrandsClients",
            component: GarantiesPrisesSurLesDixPlusGrandsClientsComponent,
          },
        ],
      },
    ],
  },
  {
    path: "",
    // canActivate : [AuthPermissionsGuard],
    //  data :{
    // expectedPermission:['ConsulterRessources']
    //}

    children: [
      {
        path: "AnalyseDesDepots",
        // component:
        component: AnalyseDesDepotsComponent,
      },
      {
        path: "AnalyseQualitativeETQuantitative",
        // component:
      },
      {
        path: "KRIsLiQuidite",
        // component: ,
      },
      {
        path: "StressTestLiquidite",
        // component:
      },
      {
        path: "SurveillanceDeLaTreoserie",
        // component:
      },
    ],
  },
  {
    path: "",
    // canActivate : [AuthPermissionsGuard],
    data: {
      // expectedPermission:['ConsulterRessources']
    },
    children: [
      {
        path: "EvaluationDesTAuxDeCharges",
        // component:
      },
      {
        path: "SurveillanceDesSessionsDevise",
        // component:
      },
      {
        path: "KRIsDeChange",
        // component: ,
      },
      {
        path: "StressTestDeChange",
        // component:
      },
    ],
  },
  {
    path: "",
    // canActivate : [AuthPermissionsGuard],
    data: {
      // expectedPermission:['ConsulterRessources']
    },
    children: [
      {
        path: "Invertissements",
        // component:
      },
      {
        path: "LimitesBanque",
        // component:
      },
      {
        path: "NotionsBanques",
        // component: ,
      },
      {
        path: "NotionsPays",
        // component:
      },
    ],
  },
];
