import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import moment from "moment";
import { RapportType } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { RapportGenerationServiceService } from "src/app/_services/RapportService/rapport-generation-service.service";

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
  constructor(
    private parametrageService: ParametrageService,
    private datePipe: DatePipe,
    private rapportGenerationService: RapportGenerationServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  rapportTypes: RapportType[] = [];
  rapportTypesLoading: boolean = true;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      date: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
    });
    this.parametrageService.getAllRapportType().subscribe({
      next: (response) => {
        this.rapportTypes = response;
        console.log("Response from generer rapport : ", response);
        this.rapportTypesLoading = false;
      },
      error: (err) => {},
    });
  }

  formGroup: FormGroup;
  selectedDate: Date;
  type: string = "";
  isListOpen: boolean = false;
  generateIsClicked: boolean = false;
  selectedType: string;
  choosedRapportType: RapportType;
  generateIsLoading: boolean = false;

  typesList = ["aaa", "eeeee"];

  handleGenerate() {
    this.generateIsLoading = true;

    this.rapportGenerationService
      .generateRapport(
        this.choosedRapportType.id,
        this.datePipe.transform(this.selectedDate, "yyyy-MM-dd")
      )
      .subscribe({
        next: (response) => {
          this.generateIsLoading = false;
          this.rapportGenerationService.setGeneratedRapport(
            response,
            this.choosedRapportType.titreRapport
          );
          this.router.navigate(["../mon-rapport"], { relativeTo: this.route });
        },
        error: (err) => {
          console.log("Generate error : ", err);
        },
      });
  }

  toggleListTypes() {
    this.isListOpen = !this.isListOpen;
  }

  closeListTypes() {
    this.isListOpen = false;
  }

  selectType(rapportType: RapportType) {
    this.choosedRapportType = rapportType;
    this.type = rapportType.titreRapport;
  }

  get date() {
    return this.formGroup.get("date");
  }
}
