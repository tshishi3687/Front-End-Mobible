import {Component, Input, OnInit} from '@angular/core';
import {DonneeService} from '../../../../service/donnee.service';
import {PersonneService} from '../../../../service/personne.service';
import {Adresse, Contrat, Personne} from '../../../../objets';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modif-client',
  templateUrl: './modif-client.component.html',
  styleUrls: ['./modif-client.component.css']
})
export class ModifClientComponent implements OnInit {

  constructor(
    private client: DonneeService,
    private person: PersonneService
  ) { }

  private error = 'il y a eu un problème';
  private ok = 'tout c\'est bien passé :)-';
  active = false;
  @Input() c: Contrat;

  newClient = new FormGroup(
    {
      nom: new FormControl(this.client.client().appartient.nompersonne, [Validators.required, Validators.maxLength(50)]),
      prenom: new FormControl(this.client.client().appartient.prenompersonne, [Validators.required, Validators.maxLength(50)]),
      genre: new FormControl(this.client.client().appartient.genrepersonne, [Validators.required]),
      dateNaissance: new FormControl(this.client.client().appartient.datenaisspersonne, [Validators.required]),
      // tslint:disable-next-line:max-line-length
      nregistreNational: new FormControl(this.client.client().appartient.nregistrenational, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      civilite: new FormControl(this.client.client().appartient.civilitepersonne, [Validators.required]),

      // tslint:disable-next-line:max-line-length
      ville: new FormControl(this.client.client().appartient.adressepersonne.ville, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      // tslint:disable-next-line:max-line-length
      rue: new FormControl(this.client.client().appartient.adressepersonne.rue, [Validators.required, Validators.minLength(7), Validators.maxLength(100)]),
      // tslint:disable-next-line:max-line-length
      nrue: new FormControl(this.client.client().appartient.adressepersonne.nrue, [Validators.required, Validators.min(1), Validators.max(1999)]),
      cpostal: new FormControl(this.client.client().appartient.adressepersonne.cpostal, [Validators.min(1000), Validators.max(9999)]),
      // tslint:disable-next-line:max-line-length
      nboitelette: new FormControl(this.client.client().appartient.adressepersonne.nrue, [Validators.required, Validators.min(1), Validators.max(1000)]),

      ncompte: new FormControl(this.client.client().compte, [Validators.minLength(15), Validators.maxLength(17)]),
      domiciliation: new FormControl(this.client.client().domiciliation, [Validators.min(1), Validators.max(1000)]),
      statusdemande: new FormControl(this.client.client().statusdomiciliation, [Validators.required]),
      banque: new FormControl(this.client.client().banque, [Validators.required, Validators.maxLength(100)]),
      cartecredit: new FormControl(this.client.client().Credit, [Validators.min(11111111111111111), Validators.max(99999999999999999)]),
      expiration: new FormControl(this.client.client().expiration)
    }
  );

  ngOnInit(): void {
  }

  detail(): void{
    if (this.active === true){
      this.active = false;
    }else{
      this.active = true;
    }
  }

  // tslint:disable-next-line:typedef
  ajouterClient() {

  }

  // tslint:disable-next-line:typedef
  modifier() {
    const addr = new Adresse();
    addr.id = this.client.client().appartient.adressepersonne.id;
    addr.ville = this.newClient.value.ville;
    addr.rue = this.newClient.value.rue;
    addr.nrue = this.newClient.value.nrue;
    addr.cpostal = this.newClient.value.cpostal;
    addr.nboitelettre = this.newClient.value.nboitelettre;

    const personne = new Personne();
    personne.id = this.client.client().appartient.id;
    personne.nompersonne = this.newClient.value.nom;
    personne.prenompersonne = this.newClient.value.prenom;
    personne.genrepersonne = this.newClient.value.genre;
    personne.datenaisspersonne = this.client.client().appartient.datenaisspersonne;
    personne.nregistrenational = this.client.client().appartient.nregistrenational;
    personne.civilitepersonne = this.newClient.value.civilite;
    personne.adressepersonne = addr;

    this.person.modifier(personne).subscribe(reponse => alert(this.ok), reponse => alert(this.error));

  }
}
