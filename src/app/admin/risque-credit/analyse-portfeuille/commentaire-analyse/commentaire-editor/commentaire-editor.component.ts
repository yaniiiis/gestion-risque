import { DatePipe, formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnalyseService } from 'src/app/_services/analyse.service';
import { CommentaireService } from 'src/app/_services/CommentaireService/commentaire-service';
import { StorageSService } from 'src/app/_services/storageService/storage-s.service';
import { environment } from 'src/environments/environment';
import moment from 'moment';

const baseUrl = environment.baseUrl;

@Component({
  selector: 'app-commentaire-editor',
  templateUrl: './commentaire-editor.component.html',
  styleUrls: ['./commentaire-editor.component.css']
})
export class CommentaireEditorComponent implements OnInit {
  
  submitted: boolean;
  errorMessage: any;

  form: FormGroup;

 
 
  constructor(private commentaireService: CommentaireService, public fb: FormBuilder, private storageSer: StorageSService, private analyseService: AnalyseService) { 
   
    this.form = this.fb.group({
      
      commentaire:  new FormControl(),
      roleId: {id:0},
      analyseId: {id:0}
    
    })
  }

  ngOnInit(): void {
    
  }
  

  enregistrer(){
    
    // this.form.get('commentaire').setValue("commentaire");
    // this.form.get('roleId').setValue("{id:2}");
    // this.form.get('analyseId').setValue("{id:2}");
    //formData.append("commentaire", this.form.get('commentaire').value);
    
    moment.locale('us');
    var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]")
    // var dd = String(today.getDate()+1).padStart(2, '0');
     var mm = moment().month() + 1;
    // var yyyy = today.getFullYear();
    
    //var todaymilis = Date.parse(today) ;
    console.log('Month : '+ mm)

     let analyseId : Number;
      this.analyseService.getAnalyseIdByMonthAndType(mm, '1').subscribe({
        next: (data) => {
          console.log(data)
          analyseId = Number.parseInt(data.id) ;

          let roleId = this.storageSer.getUser().roles.id;
          let formData = {
            commentaire:this.form.get('commentaire').value,
            createdOn: today,
            roleId:{id:roleId},
            analyseId:{id:analyseId}
          };
    
    //console.log(formData);
   
       this.commentaireService.enregistrer(formData).subscribe({
        next: () => {
           console.log(formData);
          alert("Commentaire enregistré ! ");
                  },
        error: (error) => {
           console.log(error);
          this.errorMessage = error.error.text;
        },
      });
        },
        error: (err) => {
          // this.errormessage = err.error.message;
          analyseId = 0;
        },
      }).unsubscribe;
     
    
     
      
  }
 
}




