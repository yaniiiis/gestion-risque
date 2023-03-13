import { Component, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
   graphParametre = ["taux_de_defaux", "credit_Net", "Evolution_Direct", "Impaye_en_milliards_de_DZ", "Par_type_engagement", 
  "Portefeuil_direct_par_type_d_engagement_milliards_DZD"]


  public grapheType = ["line", "bar", "doughnut", "pie","radar"]

  public CurrentType :string = 'line';
  public LabelTextValue :string;

  public Typeparametrage!: FormGroup;
  public checkedValue: string[]=[]
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {

    this.Typeparametrage = this.formBuilder.group({
      parametrage: this.formBuilder.array([], [Validators.required])
    });
    
  }

  onCheckboxChange(event: any) {
    if (! this.checkedValue.includes(event.target.value)) {
      this.checkedValue.push(event.target.value)
    } else {
      this.checkedValue.splice(this.checkedValue.indexOf(event.target.value) , 1);
    }
    this.checkedValue = [...this.checkedValue]
    this.LabelTextValue=event.target.value;
    console.log(this.LabelTextValue);
    
  }

  onSelected(e:any){
    this.CurrentType= e.value;
  }

}
