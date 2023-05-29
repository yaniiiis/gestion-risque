import { Component, OnInit, Output, SimpleChanges } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";

interface Agence {
  code: string;
  description: string;
}

@Component({
  selector: "app-graphic",
  templateUrl: "./graphic.component.html",
  styleUrls: ["./graphic.component.css"],
})
export class GraphicComponent implements OnInit {
  graphParametre = [
    "taux_de_defaux",
    "credit_Net",
    "Evolution_Direct",
    "Impaye_en_milliards_de_DZ",
    "Par_type_engagement",
    "Portefeuil_direct_par_type_d_engagement_milliards_DZD",
  ];

  public grapheType = ["line", "bar", "doughnut", "pie", "radar"];

  public CurrentType: string = "line";
  public LabelTextValue: string;

  public Typeparametrage!: FormGroup;
  public checkedValue: string[] = [];

  event1: string;
  event2: string;

  fromDate!: string;
  toDate!: string;

  selectedDate1!: Date;
  selectedDate2!: Date;

  public agences: Agence[] = [
    { code: "1", description: "Alger" },
    { code: "2", description: "Blida" },
    { code: "2", description: "Bouira" },
    { code: "3", description: "Tizi ouzou" },
    { code: "4", description: "Bordj Bou Arriridj" },
    { code: "5", description: "Setif" },
    { code: "6", description: "Constantine" },
  ];

  agence = new FormControl("");

  selectedAgence;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.Typeparametrage = this.formBuilder.group({
      parametrage: this.formBuilder.array([], [Validators.required]),
    });
  }

  onCheckboxChange(event: any) {
    if (!this.checkedValue.includes(event.target.value)) {
      this.checkedValue.push(event.target.value);
    } else {
      this.checkedValue.splice(
        this.checkedValue.indexOf(event.target.value),
        1
      );
    }
    this.checkedValue = [...this.checkedValue];
    this.LabelTextValue = event.target.value;
    console.log(this.LabelTextValue);
  }

  onSelected(e: any) {
    this.CurrentType = e.value;
  }

  public onDateChange1(event: MatDatepickerInputEvent<Date>): void {
    //this.fromDate = datePipe.transform(event.value, "yyyy-MM-dd");
    this.selectedDate1 = event.value;
  }
  public onDateChange2(event: MatDatepickerInputEvent<Date>): void {
    this.selectedDate2 = event.value;
  }
  // addEvent1(type: string, event: MatDatepickerInputEvent<Date>) {
  //   var datePipe = new datePipe("en-US");
  //   this.event1 = `${event.value}`;
  //   console.log("event1 : " + this.event1);
  //  this.fromDate = datePipe.transform(this.event1, "yyyy-MM-dd");
  //  console.log("selectedDate1 : " + this.selectedDate1);
  // }
  // addEvent2(type: string, event: MatDatepickerInputEvent<Date>) {
  //   var datePipe = new datePipe("en-US");
  //   this.event2 = `${event.value}`;
  //   this.toDate = datePipe.transform(this.event2, "yyyy-MM-dd");
  //   console.log("toDate : " + this.toDate);
  // }

  selectAgence(event: Event) {
    this.selectedAgence = (event.target as HTMLSelectElement).value;

    console.log("val : " + this.agence.value);
  }

  onSeachDropdownValue($event) {
    const value = $event.target.value;
    //alert(value)
    if (value === "") {
      this.agences = [
        { code: "1", description: "Alger" },
        { code: "2", description: "Blida" },
        { code: "2", description: "Bouira" },
        { code: "3", description: "Tizi ouzou" },
        { code: "4", description: "Bordj Bou Arriridj" },
        { code: "5", description: "Setif" },
        { code: "6", description: "Constantine" },
      ];
    } else
      this.agences = this.agences.filter((option) =>
        option.description.toLowerCase().startsWith(value)
      );
  }
}
