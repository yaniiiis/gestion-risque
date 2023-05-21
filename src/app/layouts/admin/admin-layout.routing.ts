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
import { ParametrageColumnComponent } from "src/app/admin/gestion-role-et-utilisateur/parametrage/column/column.component";
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
import { ConcentrationClientComponent } from "src/app/admin/risque-credit/concentration/concentration-client/concentration-client.component";
import { ConcentrationDetailsComponent } from "src/app/admin/risque-credit/concentration/concentration-details/concentration-details.component";
import { ConcentrationGroupeComponent } from "src/app/admin/risque-credit/concentration/concentration-groupe/concentration-groupe.component";
import { ConcentrationComponent } from "src/app/admin/risque-credit/concentration/concentration.component";
import { GenererRapportComponent } from "src/app/admin/risque-credit/generer-rapport/generer-rapport.component";
import { MonRapportComponent } from "src/app/admin/risque-credit/generer-rapport/mon-rapport/mon-rapport.component";
import { GestionDesResqueClientComponent } from "src/app/admin/risque-credit/gestion-des-resque-client/gestion-des-resque-client.component";
import { RepartitionParSecteurComponent } from "src/app/admin/risque-credit/gestion-des-resque-client/repartition-par-secteur/repartition-par-secteur.component";
import { RepartitionParZoneComponent } from "src/app/admin/risque-credit/gestion-des-resque-client/repartition-par-zone/repartition-par-zone.component";
import { GraphicComponent } from "src/app/admin/risque-credit/graphic/graphic.component";
import { IndicateurTableComponent } from "src/app/admin/risque-credit/indicateurs/indicateur-table/indicateur-table.component";
import { IndicateursComponent } from "src/app/admin/risque-credit/indicateurs/indicateurs.component";

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
import { ConsultationComponent } from "src/app/admin/risque-de-change/consultation/consultation.component";
import { PositionParDateComponent } from "src/app/admin/risque-de-change/consultation/position-par-date/position-par-date.component";
import { PositionParPlusieursDatesComponent } from "src/app/admin/risque-de-change/consultation/position-par-plusieurs-dates/position-par-plusieurs-dates.component";
import { EvaluationTauxChangeComponent } from "src/app/admin/risque-de-change/evaluation-taux-change/evaluation-taux-change.component";

import { KRIsDeChangeComponent } from "src/app/admin/risque-de-change/kris-de-change/kris-de-change.component";
import { ListeBeneficiaireComponent } from "src/app/admin/risque-de-marche/limite-banque/limite-banque-content/liste-beneficiaire/liste-beneficiaire.component";
import { CreationLimiteComponent } from "src/app/admin/risque-de-marche/limite-banque/limite-banque-content/liste-limite/creation-limite/creation-limite.component";
import { DesactivationLimiteComponent } from "src/app/admin/risque-de-marche/limite-banque/limite-banque-content/liste-limite/desactivation-limite/desactivation-limite.component";
import { ListeLimiteComponent } from "src/app/admin/risque-de-marche/limite-banque/limite-banque-content/liste-limite/liste-limite.component";
import { ModificationLimteComponent } from "src/app/admin/risque-de-marche/limite-banque/limite-banque-content/liste-limite/modification-limte/modification-limte.component";
import { SurveillanceLimiteComponent } from "src/app/admin/risque-de-marche/limite-banque/limite-banque-content/surveillance-limite/surveillance-limite.component";
import { SurveillanceMensuelleComponent } from "src/app/admin/risque-de-marche/limite-banque/limite-banque-content/surveillance-mensuelle/surveillance-mensuelle.component";
import { LimiteBanqueComponent } from "src/app/admin/risque-de-marche/limite-banque/limite-banque.component";
import { RisqueDeMarcheComponent } from "src/app/admin/risque-de-marche/risque-de-marche.component";
import { AnalyseDesDepotsComponent } from "src/app/admin/risque-liquidite/analyse-des-depots/analyse-des-depots.component";
import { ConsultationRapportKrisLiquiditeComponent } from "src/app/admin/risque-liquidite/consultation-rapport-kris-liquidite/consultation-rapport-kris-liquidite.component";
import { RapportKrisLiquiditeComponent } from "src/app/admin/risque-liquidite/consultation-rapport-kris-liquidite/rapport-kris-liquidite/rapport-kris-liquidite.component";
import { ConsultationR2Component } from "src/app/admin/risque-liquidite/consultation-ratio2-liquidite/consultation-r2/consultation-r2.component";
import { ConsultationRatio2LiquiditeComponent } from "src/app/admin/risque-liquidite/consultation-ratio2-liquidite/consultation-ratio2-liquidite.component";
import { ConsultationR3Component } from "src/app/admin/risque-liquidite/consultation-ratio3-liquidite/consultation-r3/consultation-r3.component";
import { ConsultationRatio3LiquiditeComponent } from "src/app/admin/risque-liquidite/consultation-ratio3-liquidite/consultation-ratio3-liquidite.component";
import { ConsultationR4Component } from "src/app/admin/risque-liquidite/consultation-ratio4-liquidite/consultation-r4/consultation-r4.component";
import { ConsultationRatio4LiquiditeComponent } from "src/app/admin/risque-liquidite/consultation-ratio4-liquidite/consultation-ratio4-liquidite.component";
import { ConsultationR5Component } from "src/app/admin/risque-liquidite/consultation-ratio5-liquidite/consultation-r5/consultation-r5.component";
import { ConsultationRatio5LiquiditeComponent } from "src/app/admin/risque-liquidite/consultation-ratio5-liquidite/consultation-ratio5-liquidite.component";
import { ConsultationR6Component } from "src/app/admin/risque-liquidite/consultation-ratio6-liquidite/consultation-r6/consultation-r6.component";
import { ConsultationRatio6LiquiditeComponent } from "src/app/admin/risque-liquidite/consultation-ratio6-liquidite/consultation-ratio6-liquidite.component";
import { ConsultationRatio1LiquiditeComponent } from "src/app/admin/risque-liquidite/consultation-ratios1-liquidite/consultation-ratio1-liquidite.component";
import { RatioLiquiditeMensuelComponent } from "src/app/admin/risque-liquidite/consultation-ratios1-liquidite/ratio-liquidite-mensuel/ratio-liquidite-mensuel.component";
import { RatioLiquiditeQuotidienComponent } from "src/app/admin/risque-liquidite/consultation-ratios1-liquidite/ratio-liquidite-quotidien/ratio-liquidite-quotidien.component";
import { RatioLiquiditeTrimestrielComponent } from "src/app/admin/risque-liquidite/consultation-ratios1-liquidite/ratio-liquidite-trimestriel/ratio-liquidite-trimestriel.component";
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
          // {
          //   path: "ParametrageIndirect",
          //   component: ParametrageIndirectComponent,
          // },
          {
            path: "Rapport",
            component: HomeComponent,
          },
          {
            path: "ParametrageDomaine",
            component: ParametrageDomaineHomeComponent,
          },

          { path: "columns", component: ParametrageColumnComponent },
        ],
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "generer-rapport",
        component: GenererRapportComponent,
      },
      {
        path: "mon-rapport",
        component: MonRapportComponent,
      },

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
        path: "concentration",
        component: ConcentrationComponent,
        children: [
          {
            path: "concentration-client",
            component: ConcentrationClientComponent,
          },
          {
            path: "concentration-groupe",
            component: ConcentrationGroupeComponent,
          },
          {
            path: "concentration-details/:type/:id/:date",
            component: ConcentrationDetailsComponent,
          },
        ],
      },
      {
        path: "indicateurs",
        component: IndicateursComponent,
        children: [
          {
            path: "",
            component: IndicateurTableComponent,
          },
          {
            path: "taux-defaut",
            component: IndicateurTableComponent,
          },
          {
            path: "concentration-25",
            component: IndicateurTableComponent,
          },
          {
            path: "concentration-grands-risques",
            component: IndicateurTableComponent,
          },
          {
            path: "concentration-top-10",
            component: IndicateurTableComponent,
          },
          {
            path: "concentration-decouverts-comptes",
            component: IndicateurTableComponent,
          },
        ],
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

      {
        path: "ConsultationRatios1Liquidite",
        component: ConsultationRatio1LiquiditeComponent,
      },
      {
        path: "ConsultationRatio2Liquidite",
        component: ConsultationRatio2LiquiditeComponent,
      },

      {
        path: "ConsultationRatio3Liquidite",
        component: ConsultationRatio3LiquiditeComponent,
      },
      {
        path: "ConsultationRatio4Liquidite",
        component: ConsultationRatio4LiquiditeComponent,
      },
      {
        path: "ConsultationRatio5Liquidite",
        component: ConsultationRatio5LiquiditeComponent,
      },
      {
        path: "ConsultationRatio6Liquidite",
        component: ConsultationRatio6LiquiditeComponent,
      },
      {
        path: "ConsultationRapportKrisLiquidite",
        component: ConsultationRapportKrisLiquiditeComponent,
      },
    ],
  },
  {
    path: "KRIsDeChange",
    component: KRIsDeChangeComponent,
    // canActivate : [AuthPermissionsGuard],
    data: {
      // expectedPermission:['ConsulterRessources']
    },
    //   children: [
    //     {
    //     path: 'EvaluationDesTAuxDeCharges',
    //     component: EvaluationTauxChangeComponent,
    //   },
    //   {
    //     path: 'SurveillanceDesSessionsDevise',
    //     // component:
    //   },
    //   {
    //     path: 'KRIsDeChange',
    //      component: KRIsDeChangeComponent,
    //   },
    //   {
    //     path: 'StressTestDeChange',
    //     // component:
    //   },

    // ]
  },
  {
    path: "ConsultationPositionDeChange",
    component: ConsultationComponent,

    children: [
      {
        path: "PositionParDate",
        component: PositionParDateComponent,
      },
      {
        path: "PositionParPlusieursDates",
        component: PositionParPlusieursDatesComponent,
      },
    ],
  },
  {
    path: "ConsultationRatios1Liquidite",
    component: ConsultationRatio1LiquiditeComponent,
    children: [
      {
        path: "RatioLiquiditeQuotidien",
        component: RatioLiquiditeQuotidienComponent,
      },
      {
        path: "RatioLiquiditeMensuel",
        component: RatioLiquiditeMensuelComponent,
      },
      {
        path: "RatioLiquiditeTrimestriel",
        component: RatioLiquiditeTrimestrielComponent,
      },
    ],
  },

  {
    path: "ConsultationRatio2Liquidite",
    component: ConsultationRatio2LiquiditeComponent,
    children: [
      {
        path: "ConsultationR2",
        component: ConsultationR2Component,
      },
    ],
  },
  {
    path: "ConsultationRatio3Liquidite",
    component: ConsultationRatio3LiquiditeComponent,
    children: [
      {
        path: "ConsultationR3",
        component: ConsultationR3Component,
      },
    ],
  },
  {
    path: "ConsultationRatio4Liquidite",
    component: ConsultationRatio4LiquiditeComponent,
    children: [
      {
        path: "ConsultationR4",
        component: ConsultationR4Component,
      },
    ],
  },
  {
    path: "ConsultationRatio5Liquidite",
    component: ConsultationRatio5LiquiditeComponent,
    children: [
      {
        path: "ConsultationR5",
        component: ConsultationR5Component,
      },
    ],
  },
  {
    path: "ConsultationRatio6Liquidite",
    component: ConsultationRatio6LiquiditeComponent,
    children: [
      {
        path: "ConsultationR6",
        component: ConsultationR6Component,
      },
    ],
  },
  {
    path: "ConsultationRapportKrisLiquidite",
    component: ConsultationRapportKrisLiquiditeComponent,
    children: [
      {
        path: "ConsultationRapport",
        component: RapportKrisLiquiditeComponent,
      },
    ],
  },

  {
    path: "LimiteBanque",
    component: LimiteBanqueComponent,
    // canActivate : [AuthPermissionsGuard],
    // data: {
    //   // expectedPermission:['ConsulterRessources']
    // },
    children: [
      {
        path: "ListeLimites",
        component: ListeLimiteComponent,
      },
      {
        path: "CreationLimite",
        component: CreationLimiteComponent,
      },
      {
        path: "ModificationLimite",
        component: ModificationLimteComponent,
      },
      {
        path: "DesactivationLimite",
        component: DesactivationLimiteComponent,
      },

      {
        path: "ListeBeneficiaire",
        component: ListeBeneficiaireComponent,
      },
      {
        path: "SurveillanceLimites",
        component: SurveillanceLimiteComponent,
      },
      {
        path: "SurveillanceMensuelle",
        component: SurveillanceMensuelleComponent,
      },
    ],
  },
];
