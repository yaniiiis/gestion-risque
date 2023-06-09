import { Component, OnInit } from "@angular/core";
import PerfectScrollbar from "perfect-scrollbar";
import { User } from "src/app/Models/User.model";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";

declare const $: any;

//Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
  forAdmin: boolean;
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/Admin/dashboard",
    title: "Mon espace",
    type: "link",
    icontype: "dashboard",
    forAdmin: true,
  },
  {
    path: "/Admin",
    title: "Administrateur",
    type: "sub",
    icontype: "apps",
    collapse: "Admin",
    forAdmin: true,
    children: [
      { path: "GestionUtilisateur", title: "Gestion des utilisateur", ab: "B" },
      { path: "GestionDesRoles", title: "Gestion des rôles", ab: "GS" },
      {
        path: "ImporterFichierExcel",
        title: "Importer un fichier Excel",
        ab: "P",
      },
      {
        path: "parametrageAnalysePrtfeuille",
        title: "Paramétrage analyse des portefeuilles",
        ab: "PR",
      },
    ],
  },
  {
    path: "/Admin",
    title: "Risque crédit",
    icontype: "payments",
    type: "sub",
    collapse: "RisqueCredit",
    forAdmin: false,
    children: [
      {
        path: "generer-rapport",
        title: "Générer un rapport",
        ab: "GR",
      },
      {
        path: "AnalysePortfeuille",
        title: "Analyse du portefeuille",
        ab: "AP",
      },
      {
        path: "Clients",
        title: "Gestion des risques clients",
        ab: "GRC",
      },
      {
        path: "Graphic",
        title: "Gestion des graphes et statistiques ",
        ab: "GS",
      },
      {
        path: "concentration",
        title: "Concentration",
        ab: "C",
      },
      {
        path: "indicateurs",
        title: "Indicateurs",
        ab: "I",
      },

      {
        path: "StressTest",
        title: "Gestion des stress tests",
        ab: "GST",
      },
      {
        path: "Top10",
        title: "Gestion des Top10",
        ab: "TOP",
      },
    ],
  },
  {
    path: "/Admin",
    title: "Risque liquidité",
    icontype: "Task",
    type: "sub",
    collapse: "RisqueLiquidite",
    forAdmin: false,
    children: [
      // {
      //   path: "AnalyseDesDepots",
      //   title: "Analyse Des Dépôts",
      //   ab:'ADD'
      // },
      // {
      //   path: "AnalyseQualitativeETQuantitative",
      //   title: "Analyse Qualitative ET Quantitative",
      //   ab:'AQQ'
      // },
      // {
      //   path: "KRIsLiQuidite",
      //   title: "Gestion des KRIs",
      //   ab:'GDK'
      // },
      // {
      //   path: "StressTestLiquidite",
      //   title: "Gestion des Stress tests",
      //   ab:'GST'
      // },
      // {
      //   path: "SurveillanceDeLaTreoserie",
      //   title: "Gestion des  Surveillances De La Tresoserie",
      //   ab:'GST'
      // },
      { path: "KRIsLiquidite", title: "Gestion des KRIs", ab: "KRIS" },
    ],
  },
  {
    path: "/Admin",
    title: "Risque de change",
    icontype: "Task",
    type: "sub",
    collapse: "RisqueDeChange",
    forAdmin: false,
    children: [
      {
        path: "ConsultationPositionDeChange",
        title: "Consultation",
        ab: "CONS",
      },
      // {
      //   path: "EvaluationDesTAuxDeCharges",
      //   title: "Gestion D'évaluation Des Taux De Change",
      //   ab:'GETC'
      // },
      // {
      //   path: "SurveillanceDesSessionsDevise",
      //   title: "Surveillance Des Cessions Devises",
      //   ab: "SCD",
      // },
      {
        path: "KRIsDeChange",
        title: "Gestion des KRIs",
        ab: "GDK",
      },
      // {
      //   path: "StressTestDeChange",
      //   title: "Gestion des Stress Tests",
      //   ab: "GST",
      // },
    ],
  },
  {
    path: "/Admin",
    title: "Risques du marché",
    icontype: "Task",
    type: "sub",
    collapse: "RisqueDeMarche",
    forAdmin: false,
    children: [
      {
        path: "LimiteBanque",
        title: "Les limites de banques",
        ab: "LB",
      },
    ],
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ps: any;
  public connectedUser: User;
  public nom: string;
  public prenom: string;
  constructor(private storageService: StorageSService) {}

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>(
        document.querySelector(".sidebar .sidebar-wrapper")
      );
      this.ps = new PerfectScrollbar(elemSidebar);
    }
    this.nom = this.storageService.getUser().nom.toLowerCase();
    this.prenom = this.storageService.getUser().prenom.toLowerCase();
  }
  updatePS(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this.ps.update();
    }
  }
  isMac(): boolean {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf("MAC") >= 0 ||
      navigator.platform.toUpperCase().indexOf("IPAD") >= 0
    ) {
      bool = true;
    }
    return bool;
  }
  getRoutes() {
    let user = new User(this.storageService.getUser());
    let IsAdmine = user.hasRole("Admin");
    //let isAdmin = this.storageSer.userIsAdmin()
    return ROUTES.filter((item) => (!IsAdmine && item.forAdmin ? false : true));
  }
}
