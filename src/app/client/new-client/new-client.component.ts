import { Component, OnInit } from '@angular/core';
import {InfoBancaireService} from '../../services/info-bancaire.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Adresse, Info_bancaire, Personne} from '../../objets';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  constructor(
    private infoBan: InfoBancaireService) { }

  private error = 'Il y a eu un probleme :(';
  private ok = 'tout c\'est bien passée :)-';

  newClient = new FormGroup(
    {
      nom: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      prenom: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      genre: new FormControl('sex', [Validators.required]),
      dateNaissance: new FormControl('ddn', [Validators.required]),
      // tslint:disable-next-line:max-line-length
      nregistreNational: new FormControl('ex: 11223344455', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      civilite: new FormControl('etat actuel', [Validators.required]),

      ville: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      rue: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(100)]),
      nrue: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(1999)]),
      cpostal: new FormControl(null, [Validators.min(1000), Validators.max(9999)]),
      nboitelette: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(1000)]),

      ncompte: new FormControl(null, [Validators.minLength(15), Validators.maxLength(17)]),
      domiciliation: new FormControl(null, [Validators.min(1), Validators.max(1000)]),
      statusdemande: new FormControl(null, [Validators.required]),
      banque: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      cartecredit: new FormControl(null, [Validators.min(11111111111111111), Validators.max(99999999999999999)]),
      expiration: new FormControl(null)
    }
  );

  ngOnInit(): void {
  }

  ajouterClient(): void{

    const adresse = new Adresse();
    adresse.id = 0;
    adresse.ville = this.newClient.value.ville;
    adresse.rue = this.newClient.value.rue;
    adresse.nrue = this.newClient.value.nrue;
    adresse.cpostal = this.newClient.value.cpostal;
    adresse.nboitelettre = this.newClient.value.nboitelette;

    const personne = new Personne();
    personne.id = 0;
    personne.nompersonne = this.newClient.value.nom;
    personne.prenompersonne = this.newClient.value.prenom;
    personne.genrepersonne = this.newClient.value.genre;
    personne.datenaisspersonne = this.newClient.value.dateNaissance;
    personne.nregistrenational = this.newClient.value.nregistreNational;
    personne.civilitepersonne = this.newClient.value.civilite;
    personne.adressepersonne = adresse;

    // tslint:disable-next-line:variable-name
    const info_bancaire = new Info_bancaire();
    info_bancaire.id = 0;
    info_bancaire.appartient = personne;
    info_bancaire.compte = this.newClient.value.ncompte;
    info_bancaire.domiciliation = this.newClient.value.domiciliation;
    info_bancaire.statusdomiciliation = this.newClient.value.statusdemande;
    info_bancaire.banque = this.newClient.value.banque;
    info_bancaire.Credit = this.newClient.value.cartecredit;
    info_bancaire.expiration = this.newClient.value.expiration;

    console.log(personne);
    this.infoBan.ajouterPersonne(info_bancaire).subscribe(reponse => alert(this.ok), reponse => alert(this.error));
  }

}
