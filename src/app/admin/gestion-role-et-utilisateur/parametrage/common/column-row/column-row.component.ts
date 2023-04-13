import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ParametrageColumn } from "src/app/Models/ParametrageColumn";

@Component({
  selector: "app-column-row",
  templateUrl: "./column-row.component.html",
  styleUrls: ["../../table-css.css"],
})
export class ColumnRowComponent implements OnInit {
  constructor() {}

  @Input()
  column: ParametrageColumn;
  onEdit: boolean = false;

  formGroup = new FormGroup({
    code: new FormControl("", [Validators.required]),
    entite: new FormControl("", [Validators.required]),
    domaineCode: new FormControl("", [Validators.required]),
    obligatoire: new FormControl(false, [Validators.required]),
  });

  ngOnInit(): void {}

  editIconClicked() {
    this.onEdit = true;
  }
}
