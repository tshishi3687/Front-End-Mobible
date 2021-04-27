import {Component, Input, OnInit, Output} from '@angular/core';
import {Contrat} from '../objets';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  constructor() { }

  infoClient = false;
  infoContrat = false;
  modiffClient = false;
  modifInfoBancaire = false;
  @Input() c: Contrat;
  @Output() cc = this.contrat();

  ngOnInit(): void {
  }

  contrat(): Contrat {
    return this.c;
  }
  actionInfoClient(): void{
    if (this.infoClient === false){
      this.infoClient = true;
      this.infoContrat = false;
      this.modiffClient = false;
      this.modifInfoBancaire = false;
    }else{
      this.infoClient = false;
    }
  }
  actionInfoContrat(): void{
    if (this.infoContrat === false){
      this.infoClient = false;
      this.infoContrat = true;
      this.modiffClient = false;
      this.modifInfoBancaire = false;
    }else{
      this.infoContrat = false;
    }
  }
  actionModifClient(): void{
    if (this.modiffClient === false){
      this.infoClient = false;
      this.infoContrat = false;
      this.modifInfoBancaire = false;
      this.modiffClient = true;
    }else{
      this.modiffClient = false;
    }
  }

  actionModifInfoBancaire(): void{
    if (this.modifInfoBancaire === false){
      this.infoClient = false;
      this.infoContrat = false;
      this.modifInfoBancaire = true;
      this.modiffClient = false;
    }else{
      this.modifInfoBancaire = false;
    }
  }
}
