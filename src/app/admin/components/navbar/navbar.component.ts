import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/UserService/user.service";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";
import { title } from "process";
import { AlerteRoleService } from "src/app/_services/AlerteRoleService/alerte-role-service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private toggleButtonSubMenu: any;
  private sidebarVisible: boolean;
  private sidebar_SubMenu_Visible: boolean;

  isLoggedIn = true;
  roles: string[] = [];
  username?: string;
  errorMessage = "";
  users?: any | null = null;

  alerteMessages?: string ="";

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private storageSer: StorageSService,
    private userService: UserService,
    private alerteRoleService: AlerteRoleService
  ) {
    this.location = location;
    this.sidebarVisible = false;
    this.sidebar_SubMenu_Visible=false;
  }

  ngOnInit() {
    console.log("role : " );
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    this.toggleButton = document.querySelector('.sidebarMenu')
    this.toggleButtonSubMenu = document.querySelector('.submenu')
   

    this.router.events.subscribe((event) => {
      this.sidebarClose();
      var $layer: any = document.getElementsByClassName("close-layer")[0];
      if ($layer) {
        $layer.remove();
        this.mobile_menu_visible = 0;
      }
    });

    this.roles = this.storageSer.getUser().roles.name.toLowerCase();
    console.log("role : " + this.roles);
    this.alerteRoleService.findByRoleName(this.roles).subscribe((response) => {
      this.alerteMessages = response;
    });

  
  }


  sidebar_SubmenuOpen() {
    const toggleButtonsubmenu = this.toggleButtonSubMenu;
    const body = document.querySelector('.left-sidebar');
    if(body){
      setTimeout(function () {
        toggleButtonsubmenu.classList.add("toggled");
      }, 500);
      body.classList.add("slide");
      toggleButtonsubmenu.classList.add("silide")
      this.sidebar_SubMenu_Visible = true;
    }
  }


  sidebar_SubmenuClose() {
    const body = document.querySelector('.left-sidebar');
    if(body){

      this.toggleButtonSubMenu.classList.remove("toggled");
      this.sidebar_SubMenu_Visible = false;
          body.classList.remove("slide");
          this.toggleButtonSubMenu.classList.remove("silide")
    }
  }



  leftSidebarToggle() {
    
    var $toggle = document.getElementsByClassName("navbar-toggler")[0];

    if (this.sidebar_SubMenu_Visible === false) {
      this.sidebar_SubmenuOpen();
    } else {
      this.sidebar_SubmenuClose();
    }

    
  }

 




  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName("body")[0];
    setTimeout(function () {
      toggleButton.classList.add("toggled");
    }, 500);

    body.classList.add("nav-open");

    this.sidebarVisible = true;

    
  }
  sidebarClose() {
    const body = document.getElementsByTagName("body")[0];
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
     this.sidebar_SubmenuClose()
    body.classList.remove("nav-open");
  }
  
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    var $toggle = document.getElementsByClassName("navbar-toggler")[0];

    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
    const body = document.getElementsByTagName("body")[0];

    if (this.mobile_menu_visible == 1) {
      // $('html').removeClass('nav-open');
      body.classList.remove("nav-open");
      if ($layer) {
        $layer.remove();
      }
      setTimeout(function () {
        $toggle.classList.remove("toggled");
      }, 400);

      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.classList.add("toggled");
      }, 430);

      var $layer = document.createElement("div");
      $layer.setAttribute("class", "close-layer");

      if (body.querySelectorAll(".navbar-collapse")) {
        document.getElementsByClassName("navbar-collapse")[0].appendChild($layer);
      } else if (body.classList.contains("off-canvas-sidebar")) {
        document
          .getElementsByClassName("wrapper-full-page")[0]
          .appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add("visible");
      }, 100);

      $layer.onclick = function () {
        //asign a function
        body.classList.remove("nav-open");
        this.mobile_menu_visible = 0;
        $layer.classList.remove("visible");
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove("toggled");
        }, 400);
      }.bind(this);

      body.classList.add("nav-open");
      this.mobile_menu_visible = 1;
    }
  }
  
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    let routes = this.listTitles;
    for (var item = 0; item < routes.length; item++) {
      if (routes[item].path === titlee) {
        return routes[item].title;
      }
      if (routes[item].children) routes = [...routes, ...routes[item].children];
    }
    return "";
  }


  //sidebar submenu open


  onLoggedout() {
    if (this.isLoggedIn == true) {
      this.storageSer.signOut();
      this.router.navigateByUrl("/Home");
      this.isLoggedIn = false;
    } else {
      this.storageSer.signOut();
      this.router.navigate(["/Home"]);
    }
  }
}
