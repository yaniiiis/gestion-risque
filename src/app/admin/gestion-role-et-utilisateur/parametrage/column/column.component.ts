import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ParametrageColumn } from "src/app/Models/ParametrageColumn";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-column",
  templateUrl: "./column.component.html",
  styleUrls: ["../table-css.css"],
})
export class ParametrageColumnComponent implements OnInit {
  constructor(
    private parametrageService: ParametrageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onEdit: boolean = false;

  searching(item: string) {
    this.columns = this.columns.filter(
      (c) => c.codeColumn.includes(item) || c.domaineCode.includes(item)
    );
  }

  columns: ParametrageColumn[] = [
    {
      codeColumn: "test",
      domaineCode: "test",
      entiteColumn: "test",
      obligatoire: true,
    },
    {
      codeColumn: "test",
      domaineCode: "test",
      entiteColumn: "test",
      obligatoire: true,
    },
    {
      codeColumn: "test",
      domaineCode: "test",
      entiteColumn: "test",
      obligatoire: true,
    },
    {
      codeColumn: "test",
      domaineCode: "test",
      entiteColumn: "test",
      obligatoire: true,
    },
  ];
}
