import { Component, Input, OnInit } from "@angular/core";
import { RapportGenerationServiceService } from "src/app/_services/RapportService/rapport-generation-service.service";

@Component({
  selector: "app-mon-rapport",
  templateUrl: "./mon-rapport.component.html",
  styleUrls: ["./mon-rapport.component.css"],
})
export class MonRapportComponent implements OnInit {
  constructor(
    private rapportGenerationService: RapportGenerationServiceService
  ) {}

  data: any;
  rapportTypeName: string;
  underTypesNames: string[] = [];
  underTypeLinesToDisplay: Map<string, any>;
  linesGroupedByUnderType: Map<string, any> = new Map<string, any>();
  choosedUnderType: string;
  selectedIndex: number = 0;

  ngOnInit(): void {
    this.data = this.rapportGenerationService.generatedRapport;
    this.rapportTypeName = this.rapportGenerationService.rapportTypeName;
    console.log("typoo : ", this.data);
    const r = this.data[this.rapportTypeName];
    for (const key in r) {
      this.underTypesNames.push(key);
      this.linesGroupedByUnderType.set(key, r[key]);
    }
    console.log("table : ", this.underTypesNames);
    console.log("groupedByUnderType : ", this.linesGroupedByUnderType);

    this.handleUnderTypeChange(this.underTypesNames[0]);
  }

  handleUnderTypeChange(underType: string) {
    this.underTypeLinesToDisplay = this.linesGroupedByUnderType.get(underType);
    console.log("entreprise : ", this.underTypeLinesToDisplay);
    this.choosedUnderType = underType;
    this.selectedIndex = this.underTypesNames.indexOf(underType);
  }

  @Input() rapportsMapedByUnderType: Map<string, any>;
  @Input() key: string;

  rapportLines: any;
  selectedMap: Map<string, any>;

  // ngOnInit(): void {
  //   this.rapportsMapedByUnderType.forEach((value: string, key: string) => {
  //     this.underTypeNames.push(key);
  //   });
  //   this.selectedMap = this.rapportsMapedByUnderType.get(
  //     this.underTypeNames[0]
  //   );
  // }
}
