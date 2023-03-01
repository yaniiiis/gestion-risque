//import { UserService } from 'src/app/_services/UserService/user.service';
import { Component, OnInit } from '@angular/core';
import { Niveau } from 'src/app/Models/Niveau';
import { UserService } from 'src/app/_services/UserService/user.service';

@Component({
  selector: 'app-list-niveau',
  templateUrl: './list-niveau.component.html',
  styleUrls: ['./list-niveau.component.css']
})
export class ListNiveauComponent implements OnInit {
  public Niveaux?: Niveau[]| null=null;
  public niveau: Niveau;
  protected updateNiveauModal:Element|null
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.updateNiveauModal = document.querySelector('.update-niveau-modal')
    
    this.updateNiveauModal.addEventListener('show.bs.modal', (e) => {
      if (!this.niveau) return e.preventDefault()
    })
    
    this.updateNiveauModal.addEventListener('hide.bs.modal', (e) => {
      this.updateNiveauModal.classList.remove('show')
      setTimeout(() => {
        this.updateNiveauModal.classList.remove('d-block')
      }, 100);
    })


    this.getAllNiveaux();
  }
  getAllNiveaux() {

    this.userService.getAllNiveauxRole().subscribe({
      next:(data) =>{
        this.Niveaux=data;
        
      }
    })
}

  updateNiveau(p){


    this.niveau= p
    this.updateNiveauModal.dispatchEvent(new Event('show.bs.modal', ))
    
    this.updateNiveauModal.classList.add('d-block')
    setTimeout(() => {
      this.updateNiveauModal.classList.add('show')
    }, 100);
}
  
  onDeleteNiveau(niveau){
    let v = confirm(" voulez vous supprimer ce niveau ? ");
    if(v===true)
    this.userService.deleteNiveau(niveau.idNiv).subscribe(()=>{
      this.getAllNiveaux();
    })
  }
}
