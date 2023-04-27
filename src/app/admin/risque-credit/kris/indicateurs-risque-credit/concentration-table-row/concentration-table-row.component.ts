import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-concentration-table-row",
  templateUrl: "./concentration-table-row.component.html",
  styleUrls: ["./concentration-table-row.component.css"],
})
export class ConcentrationTableRowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    for (let key in this.selectedData) {
      this.header.push(key);
    }
  }

  selectedData = {
    "Taux de concentration": {
      "31/12/2020": 38,
      "31/11/2020": 19,
      "31/10/2020": 27,
      min: 32,
      limit: 78,
      unit: "%",
    },
  };

  header: any[] = [];

  data = {
    "Taux de concentration": {
      value: [
        {
          date: "31/12/2020",
          value: 38,
        },
        {
          date: "31/11/2020",
          value: 19,
        },
        {
          date: "31/10/2020",
          value: 27,
        },
      ],
      min: 32,
      max: 78,
      unit: "%",
    },

    "Limit des ceoncentration /Fond Propre Réglementaie": {
      value: [
        {
          date: "31/12/2020",
          value: 48,
        },
        {
          date: "31/11/2020",
          value: 29,
        },
        {
          date: "31/10/2020",
          value: 97,
        },
      ],
      min: 32,
      max: 78,
      unit: "%",
    },
  };
}
