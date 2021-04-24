import { Component, OnInit } from '@angular/core';
import {DonneeService} from '../service/donnee.service';
import {PersonneService} from '../service/personne.service';
import {Contrat, Info_bancaire, Personne} from '../objets';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InfoBancaireService} from '../service/info-bancaire.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(
    private donnee: DonneeService,
    private client: InfoBancaireService
  ) { }

  listContract: Array<Contrat> = [];
  private error = 'il y a eu une error :\'(';

  clientForm= new FormGroup({
    nRegistreNational: new FormControl('ex: 11223344455', [Validators.required, Validators.minLength(11), Validators.maxLength(11)])
  })

  ngOnInit(): void {
  }

  rechercheClient(): void{
    if (this.clientForm.valid){
      const personne = new Personne();
      personne.nregistrenational = this.clientForm.value.nRegistreNational;

      const info_bancaire = new Info_bancaire();
      info_bancaire.appartient = personne;

      this.client.recherPersonne(info_bancaire).subscribe((reponse: Info_bancaire) => this.donnee.client(), reponse => alert(this.error));
    }
  }
}
