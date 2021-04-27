import {Component, Input, OnInit} from '@angular/core';
import {DonneeService} from '../../../../services/donnee.service';
import {PersonneServicesService} from '../../../../services/personne-services.service';
import {ContratService} from '../../../../services/contrat.service';
import {Adresse, Contrat, Cycle, Info_bancaire, Mode_paiement, Personne} from '../../../../objets';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CyclePaiementService} from '../../../../services/cycle-paiement.service';

@Component({
  selector: 'app-modifier-info-bancaire',
  templateUrl: './modifier-info-bancaire.component.html',
  styleUrls: ['./modifier-info-bancaire.component.css']
})
export class ModifierInfoBancaireComponent implements OnInit {
  constructor(
    private client: DonneeService,
    private person: PersonneServicesService,
    private cycle: CyclePaiementService
  ) { }

  private error = 'il y a eu un problème';
  private ok = 'tout c\'est bien passé :)-';
  active = false;
  @Input() cc: Contrat;
  private contactPersonne: Contrat;

  newClient = new FormGroup(
    {
      nom: new FormControl(this.client.client().appartient.nompersonne, [Validators.required, Validators.maxLength(50)]),
      // tslint:disable-next-line:max-line-length
      prenom: new FormControl(this.client.client().appartient.prenompersonne, [Validators.required, Validators.maxLength(50)]),
      genre: new FormControl(this.client.client().appartient.genrepersonne, [Validators.required]),
      dateNaissance: new FormControl(this.client.client().appartient.datenaisspersonne, [Validators.required]),
      // tslint:disable-next-line:max-line-length
      nregistreNational: new FormControl(this.client.client().appartient.nregistrenational, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      civilite: new FormControl(this.client.client().appartient.civilitepersonne, [Validators.required]),
      cyclePaiement: new FormControl(null, [Validators.required]),
      modePaiement: new FormControl(null, [Validators.required]),

      // tslint:disable-next-line:max-line-lengt max-line-length
      ville: new FormControl(this.client.client().appartient.adressepersonne.ville, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      // tslint:disable-next-line:max-line-length
      rue: new FormControl(this.client.client().appartient.adressepersonne.rue, [Validators.required, Validators.minLength(7), Validators.maxLength(100)]),
      // tslint:disable-next-line:max-line-length
      nrue: new FormControl(this.client.client().appartient.adressepersonne.nrue, [Validators.required, Validators.min(1), Validators.max(1999)]),
      // tslint:disable-next-line:max-line-length
      cpostal: new FormControl(this.client.client().appartient.adressepersonne.cpostal, [Validators.min(1000), Validators.max(9999)]),
      // tslint:disable-next-line:max-line-length
      nboitelette: new FormControl(this.client.client().appartient.adressepersonne.nrue, [Validators.required, Validators.min(1), Validators.max(1000)]),

      ncompte: new FormControl(this.client.client().compte, [Validators.minLength(15), Validators.maxLength(17)]),
      domiciliation: new FormControl(this.client.client().domiciliation, [Validators.min(1), Validators.max(1000)]),
      statusdemande: new FormControl(this.client.client().statusdomiciliation, [Validators.required]),
      banque: new FormControl(this.client.client().banque, [Validators.required, Validators.maxLength(100)]),
      // tslint:disable-next-line:max-line-length
      cartecredit: new FormControl(this.client.client().Credit, [Validators.min(11111111111111111), Validators.max(99999999999999999)]),
      expiration: new FormControl(this.client.client().expiration)
    }
  );

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  modifier() {
    const addr = new Adresse();
    addr.id = this.cc.facturation.information.appartient.adressepersonne.id;
    addr.ville = this.newClient.value.ville;
    addr.rue = this.newClient.value.rue;
    addr.nrue = this.newClient.value.nrue;
    addr.cpostal = this.newClient.value.cpostal;
    addr.nboitelettre = this.newClient.value.nboitelettre;

    const personne = new Personne();
    personne.id = this.cc.facturation.information.appartient.id;
    personne.nompersonne = this.newClient.value.nom;
    personne.prenompersonne = this.newClient.value.prenom;
    personne.genrepersonne = this.newClient.value.genre;
    personne.civilitepersonne = this.newClient.value.civilite;
    personne.adressepersonne = addr;

    // tslint:disable-next-line:variable-name
    const info_bancaire = new Info_bancaire();
    info_bancaire.id = 0;
    info_bancaire.appartient = personne;
    info_bancaire.compte = this.newClient.value.ncompte;
    info_bancaire.domiciliation = this.newClient.value.domiciliation;
    info_bancaire.statusdomiciliation = this.newClient.value.statusdomiciliation;
    info_bancaire.banque = this.newClient.value.banque;
    info_bancaire.Credit = this.newClient.value.cartecredit;
    info_bancaire.expiration = this.newClient.value.expiration;

    const mode = new Mode_paiement();
    mode.id = this.cc.facturation.modepaiement.id;
    mode.nom = this.newClient.value.modePaiement;

    const cycle = new Cycle();
    cycle.id = this.cc.facturation.id;
    cycle.tempscycle = this.newClient.value.cyclePaiement;
    cycle.modepaiement = mode;
    cycle.information = info_bancaire;
    console.log(cycle);
    this.cycle.changerInfoBancaire(cycle).subscribe(reponse => alert(this.ok), reponse => alert(this.error));
  }
}
