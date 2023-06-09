import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { MatDialog } from "@angular/material/dialog";
import { Domain } from "domain";
import { Subscription } from "rxjs";
import { Domaine } from "src/app/Models/Domaine";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { AddDomaineDialogComponent } from "../../common/add-domaine-dialog/add-domaine-dialog.component";

@Component({
  selector: "app-parametrage-domaine-list",
  templateUrl: "./parametrage-domaine-list.component.html",
  styleUrls: ["../../list-css.css"],
})
export class ParametrageDomaineListComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private parametrageService: ParametrageService,
    private dialog: MatDialog
  ) {}

  inputValue: string = "";
  isListDomaineOpen: boolean = false;
  domaineListToDisplay: string[] = [];
  domaineListToFilter: string[] = [];
  existingDomaineInToDisplay: string[] = [];
  domainesMap: Map<string, Domaine[]> = new Map<string, Domaine[]>();
  domainesMapToDisplay: Map<string, Domaine[]> = new Map<string, Domaine[]>();

  domainesSubscraption: Subscription;
  domaineMap: Map<string, Domaine[]> = new Map<string, Domaine[]>();

  ngOnInit(): void {
    this.parametrageService.getAllDomaines();
    this.parametrageService.allDomainesSubject$.subscribe((domaines) => {
      domaines.forEach((element) => {
        const filtredDomaines = domaines.filter(
          (d) => d.domainName === element.domainName
        );
        if (!this.domainesMap.has(element.domainName)) {
          this.domainesMap.set(element.domainName, [element]);
        } else {
          const existingelementsArray = this.domainesMap.get(
            element.domainName
          );
          const elementExist = existingelementsArray.find(
            (e) => e.domainCode == element.domainCode
          );

          if (!elementExist) {
            let d = this.domainesMap.get(element.domainName);
            d.push(element);
            this.domainesMap.set(element.domainName, d);
          }
        }
      });
      this.domaineListToFilter = Array.from(this.domainesMap.keys());
      this.domaineListToDisplay = this.domaineListToFilter;
    });

    //----
    this.domainesSubscraption =
      this.parametrageService.mapOfCheckedDomaines$.subscribe((m) => {
        this.domaineMap = m;
      });
  }

  inputKeyup(domaine: string) {
    this.domaineListToDisplay = this.domaineListToFilter.filter((d) =>
      d.includes(domaine)
    );
  }

  toggleListDomaine() {
    this.isListDomaineOpen = !this.isListDomaineOpen;
  }

  itemClicked(item: string) {
    const domaines: Domaine[] = this.domainesMap.get(item);
    this.parametrageService.addTocheckedList(item, domaines);
  }

  checkboxChange(ob: MatCheckboxChange, item: string) {
    if (ob.checked) {
      const domaines: Domaine[] = this.domainesMap.get(item);
      this.parametrageService.addTocheckedList(item, domaines);
    } else {
      this.parametrageService.removeFromCheckedList(item);
    }
    console.log(item + " checked : " + ob.checked);
  }

  checked(item: string): boolean {
    return this.domaineMap.has(item);
  }

  outsideClick() {
    this.isListDomaineOpen = false;
  }

  openAddDomaineDialog(): void {
    const dialogRef = this.dialog.open(AddDomaineDialogComponent, {
      // enterAnimationDuration: "300ms",
      // exitAnimationDuration: "500ms",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (!this.domainesMap.has(result)) {
          this.domainesMap.set(result, []);

          this.parametrageService.addTocheckedList(result, []);
          this.domaineListToFilter = Array.from(this.domainesMap.keys());
          this.domaineListToDisplay = this.domaineListToFilter;
        }
      }
    });
  }
}
