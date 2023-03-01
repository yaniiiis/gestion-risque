import { Component, OnInit } from '@angular/core';
import { Agence } from 'src/app/Models/Agence';
import { UserService } from 'src/app/_services/UserService/user.service';

@Component({
  selector: 'app-list-agences',
  templateUrl: './list-agences.component.html',
  styleUrls: ['./list-agences.component.css']
})
export class ListAgencesComponent implements OnInit {
  public agences?: Agence[] | null = null;
  public agence :Agence;
  errorMessage :string|null = null;
  protected updateAgenceModal:Element|null
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.updateAgenceModal = document.querySelector('.update-agence-modal')
    
    this.updateAgenceModal.addEventListener('show.bs.modal', (e) => {
      if (!this.agence) return e.preventDefault()
    })
    
    this.updateAgenceModal.addEventListener('hide.bs.modal', (e) => {
      this.updateAgenceModal.classList.remove('show')
      setTimeout(() => {
        this.updateAgenceModal.classList.remove('d-block')
      }, 100);
    })


    this.getAgences();
  }


  getAgences() {

    this.userService.getAllAgence().subscribe({
      next:(data) =>{
        this.agences=data;
        
      },
      error:(err)=>{
        this.errorMessage = err.error;
      }
    })
}

onDeleteAgence(agence:Agence){
  let v = confirm("vous voulez supprimer cet agence ? ");
  if(v===true)
  this.userService.DeleteAgence(agence).subscribe(()=>{
    this.getAgences();
  })
}

onUpdateAgence(p){
  this.agence = p
    this.updateAgenceModal.dispatchEvent(new Event('show.bs.modal', ))
    
    this.updateAgenceModal.classList.add('d-block')
    setTimeout(() => {
      this.updateAgenceModal.classList.add('show')
    }, 100);
}
}
