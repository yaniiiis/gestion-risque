import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-generer-rapport",
  templateUrl: "./generer-rapport.component.html",
  styleUrls: ["./generer-rapport.component.css"],
})
export class GenererRapportComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Rapport",
      path: "",
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      date: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
    });
  }

  formGroup: FormGroup;
  selectedDate: Date;
  type: string;
  isListOpen: boolean = false;
  generateIsClicked: boolean = false;
  selectedType: string;

  typesList = ["aaa", "eeeee"];

  handleGenerate() {
    console.log("selected date ", this.selectedDate);
  }

  toggleListTypes() {
    this.isListOpen = !this.isListOpen;
  }

  closeListTypes() {
    this.isListOpen = false;
  }

  selectType(type: string) {
    this.type = type;
  }

  get date() {
    return this.formGroup.get("date");
  }
}
