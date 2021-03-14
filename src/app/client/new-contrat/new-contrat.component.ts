import { Component, OnInit } from '@angular/core';
import {InfoBancaireService} from '../../services/info-bancaire.service';
import {Info_bancaire, Personne} from '../../objets';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {empty} from 'rxjs/internal/Observer';
import {any} from 'codelyzer/util/function';
import {DonneeService} from '../../services/donnee.service';

@Component({
  selector: 'app-new-contrat',
  templateUrl: './new-contrat.component.html',
  styleUrls: ['./new-contrat.component.css']
})
export class NewContratComponent implements OnInit {

  constructor(
    private info: InfoBancaireService,
    public client: DonneeService) { }

  colectRNational = new FormGroup( {
    numNational: new FormControl(null, [Validators.required,  Validators.minLength(11), Validators.maxLength(11)])
  });

  newClient = new FormGroup(
    {
      nom: new FormControl( null, [Validators.required, Validators.maxLength(50)]),
      prenom: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      genre: new FormControl(null, [Validators.required]),
      dateNaissance: new FormControl(null, [Validators.required]),
      // tslint:disable-next-line:max-line-length
      nregistreNational: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      civilite: new FormControl(null, [Validators.required]),

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

  // tslint:disable-next-line:variable-name
  listInfo_bancaire: Info_bancaire;
  information: any;
  private error = 'Il y a eu un probleme :(';
  private vide = false;

  ngOnInit(): void {
    this.rechercherPer();
  }

  rechercherPer(): void{
    const personne = new Personne();
    personne.nregistrenational = this.colectRNational.value.numNational;

    const registrNat = new Info_bancaire();
    registrNat.appartient = personne;

    // tslint:disable-next-line:max-line-length
    this.info.recherPersonne(registrNat).subscribe((reponse: Info_bancaire) => ((this.listInfo_bancaire = reponse), this.client.verifSiExist(this.listInfo_bancaire)), reponse => alert(this.error));
    }
}
