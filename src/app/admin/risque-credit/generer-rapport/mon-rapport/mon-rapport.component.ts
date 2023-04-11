import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mon-rapport",
  templateUrl: "./mon-rapport.component.html",
  styleUrls: ["./mon-rapport.component.css"],
})
export class MonRapportComponent implements OnInit {
  constructor() {}

  rapportLines: Map<string, number>;

  ngOnInit(): void {}
}
