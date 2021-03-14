import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DonneeService} from '../../../services/donnee.service';
import {TelephoneService} from '../../../services/telephone.service';
import {Telephone} from '../../../objets';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.css']
})
export class InfoClientComponent implements OnInit {

  constructor(public infoService: DonneeService) { }

  donneeService = this.infoService;
  contrat: boolean;

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

  ngOnInit(): void {
  }

  afficherContart(): void{
    if (this.contrat === false){
      this.contrat = true;
    }else{
      this.contrat = false;
    }
  }
}
