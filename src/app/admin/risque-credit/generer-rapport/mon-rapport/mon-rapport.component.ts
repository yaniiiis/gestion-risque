import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { RapportGenerationServiceService } from "src/app/_services/RapportService/rapport-generation-service.service";

@Component({
  selector: "app-mon-rapport",
  templateUrl: "./mon-rapport.component.html",
  styleUrls: ["./mon-rapport.component.css"],
})
export class MonRapportComponent implements OnInit {
  constructor(
    private rapportGenerationService: RapportGenerationServiceService,
    private _location: Location
  ) {}

  data: Map<string, any> = new Map<string, any>();
  rapportTypeName: string;
  underTypesNames: string[] = [];
  underTypeLinesToDisplay: Map<string, any>;
  linesGroupedByUnderType: Map<string, any> = new Map<string, any>();
  choosedUnderType: string;
  selectedIndex: number = 0;

  ngOnInit(): void {
    this.data = this.rapportGenerationService.generatedRapport;
    this.rapportTypeName = this.rapportGenerationService.rapportTypeName;
    if (!this.data || !this.rapportTypeName) return this._location.back();
    const r = this.data[this.rapportTypeName];
    for (const key in r) {
      this.underTypesNames.push(key);
      this.linesGroupedByUnderType.set(key, r[key]);
    }

    this.handleUnderTypeChange(this.underTypesNames[0]);
    let totalMap: Map<string, number> = new Map<string, number>();

    const mapChoosedUnderType: Map<string, any> =
      this.data[this.rapportTypeName][this.choosedUnderType];
    console.log("MM : ", mapChoosedUnderType);
    for (const key in mapChoosedUnderType) {
      let total = 0;
      for (let i = 0; i < this.underTypesNames.length; i++) {
        console.log("total : ", r[this.underTypesNames[i]][key]);
        total += r[this.underTypesNames[i]][key];
      }
      totalMap.set(key, total);
      this.linesGroupedByUnderType.set("total", totalMap);
      console.log(
        "new lineGroupedByUnderType : ",
        this.linesGroupedByUnderType
      );

      // this.data[this.rapportTypeName]["total"] = {};
      // this.data[this.rapportTypeName]["total"][key] = total;
    }
    // this.data[this.rapportTypeName].total = total;

    this.underTypesNames.push("total");
    // console.log("NEW DATA  : ", this.data);
  }

  handleUnderTypeChange(underType: string) {
    this.underTypeLinesToDisplay = this.linesGroupedByUnderType.get(underType);
    console.log(underType + " : ", this.underTypeLinesToDisplay);
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
