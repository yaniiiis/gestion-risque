import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-under-types",
  templateUrl: "./under-types.component.html",
  styleUrls: ["./under-types.component.css"],
})
export class UnderTypesComponent implements OnInit {
  @Input() type: string;

  constructor() {}

  underTypesList: string[] = ["Entreprise", "Particulier"];

  ngOnInit(): void {}
}
