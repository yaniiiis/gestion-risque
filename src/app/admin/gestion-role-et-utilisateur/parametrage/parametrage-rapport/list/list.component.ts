import { Component, OnInit } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { Type } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { AddTypeDialogComponent } from "../../common/add-type-dialog/add-type-dialog.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["../../list-css.css"],
})
export class ListComponent implements OnInit {
  constructor(
    private parametrageService: ParametrageService,
    private dialog: MatDialog
  ) {}

  inputValue: string = "";
  isListTypesOpen: boolean = false;
  typeListToDisplay: string[] = [];
  typeListToFilter: string[] = [];
  existingDomaineInToDisplay: string[] = [];

  typesMap: Map<string, Type[]> = new Map<string, Type[]>();
  typesMapToDisplay: Map<string, Type[]> = new Map<string, Type[]>();

  typesSubscraption: Subscription;
  checkedTypesMap: Map<string, Type[]> = new Map<string, Type[]>();

  ngOnInit(): void {
    this.parametrageService.getAllTypes();
    this.parametrageService.allTypesSubject$.subscribe((t: any) => {
      this.typesMap = new Map(Object.entries(t));
      this.typeListToFilter = Array.from(this.typesMap.keys());
      this.typeListToDisplay = this.typeListToFilter;
    });

    //----
    this.typesSubscraption =
      this.parametrageService.mapOfCheckedTypesSubject$.subscribe((m) => {
        this.checkedTypesMap = m;
      });
  }

  inputKeyup(type: string) {
    this.typeListToDisplay = this.typeListToFilter.filter((d) =>
      d.includes(type)
    );
  }

  toggleListDomaine() {
    this.isListTypesOpen = !this.isListTypesOpen;
  }

  itemClicked(item: string) {
    const types: Type[] = this.typesMap.get(item);
    this.parametrageService.addTocheckedTypesList(item, types);
  }

  checkboxChange(ob: MatCheckboxChange, item: string) {
    if (ob.checked) {
      const types: Type[] = this.typesMap.get(item);
      this.parametrageService.addTocheckedTypesList(item, types);
    } else {
      this.parametrageService.removeFromCheckedTypesList(item);
    }
  }

  checked(item: string): boolean {
    return this.checkedTypesMap.has(item);
  }

  outsideClick() {
    this.isListTypesOpen = false;
  }

  openAddDomaineDialog(): void {
    const dialogRef = this.dialog.open(AddTypeDialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (!this.typesMap.has(result)) {
          this.typesMap.set(result, []);

          this.parametrageService.addTocheckedTypesList(result, []);
          this.typeListToFilter = Array.from(this.typesMap.keys());
          this.typeListToDisplay = this.typeListToFilter;
        }
      }
    });
  }
}
