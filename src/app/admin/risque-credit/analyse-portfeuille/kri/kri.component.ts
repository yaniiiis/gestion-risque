import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kri",
  templateUrl: "./kri.component.html",
  styleUrls: ["./kri.component.css"],
})
export class KriComponent implements OnInit {
  constructor() {}
  header: string[] = [
    "12/2021",
    "12/2022",
    "12/2022",
    "12/2022",
    "12/2022",
    "12/2022",
    "12/2022",
    "12/2022",
    "12/2022",
    "12/2022",
    "Limit",
    "Trigger",
    "Commentaire",
  ];

  data: any[] = [
    {
      value: [5, 90, 1, 30, 70, 10, 54, 32, 21, 45],
      limit: 5,
      label: "Créances douteuses",
      min: 4.5,
      unit: "%",
      commentaire: "",
    },
    {
      value: [10, 19.6, 12.5, 25, 27.6, 21, 15.9, 28.2, 29.7, 19.9],
      limit: 25,
      label: "Taux de concentration",
      min: 20,
      unit: "%",
      commentaire: "",
    },
    {
      value: [40, 49.6, 22.5, 35, 27.6, 19, 55.9, 48.2, 52.7, 32.9],
      limit: 35,
      label:
        "Concentration des 10 plus grands clients/Total portefeuille courant",
      min: 30,
      unit: "%",
      commentaire: "",
    },
    {
      value: [0.02, 0.11, 0.13, 0.11, 0.21, 0.22, 0.23, 0.22, 0.24, 0.25],
      limit: 8,
      label: "Total des clients à concentration supérieur à 10% des FP",
      min: 7,
      unit: "",
      commentaire: "",
    },
    {
      value: [33.8, 32.5, 34.6, 37.1, 36.4, 35.5, 36.9, 38.1, 34.2, 33.7],
      limit: 20,
      label:
        "Concentration des découverts en compte  et avances en compte  non couverts par des garanties financières",
      min: 17,
      unit: "%",
      commentaire: "",
    },
    {
      value: [23.7, 17.9, 18.2, 19.4, 26.4, 25.5, 26.9, 28.1, 24.2, 23.7],
      limit: 20,
      label:
        "Concentration des découverts en compte  et avances en compte  non couverts par des garanties financières et garanties internationales",
      min: 17,
      unit: "%",
      commentaire: "",
    },
    {
      value: [58.1, 52.4, 49.8, 42.7, 39.4, 35.6, 44.7, 48.9, 52.7, 49.1],
      limit: 35,
      label: "Répartition du portefeuille direct d'aprés le secteur industrie",
      min: 30,
      unit: "%",
      commentaire: "",
    },
    {
      value: [33.3, 36.9, 49.8, 42.7, 39.4, 35.6, 44.7, 48.9, 52.7, 49.1],
      limit: 35,
      label: "Répartition du portefeuille direct d'aprés le secteur commerce",
      min: 30,
      unit: "%",
      commentaire: "",
    },

    {
      value: [0.33, 0.36, 0.49, 0.42, 0.39, 0.35, 0.44, 0.48, 0.52, 0.49],
      limit: 1,
      label:
        "Engagements extérieur par signatures sur les fonds propres règlementaires",
      min: 0.9,
      unit: "",
      commentaire: "",
    },
  ];
  ngOnInit(): void {}
}
