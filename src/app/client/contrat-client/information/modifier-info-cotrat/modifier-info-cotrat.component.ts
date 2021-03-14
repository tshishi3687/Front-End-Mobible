import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DonneeService} from '../../../../services/donnee.service';
import {Contrat} from '../../../../objets';

@Component({
  selector: 'app-modifier-info-cotrat',
  templateUrl: './modifier-info-cotrat.component.html',
  styleUrls: ['./modifier-info-cotrat.component.css']
})
export class ModifierInfoCotratComponent implements OnInit {

  constructor(private client: DonneeService) { }

  active = false;
  @Input() c: Contrat;

  contratForm = new FormGroup(
    {
      dateSignature: new FormControl(null, [Validators.required]),
      dateDebut: new FormControl(null, [Validators.required]),
      dateFin: new FormControl(null, [Validators.required]),

      cyclePaiement: new FormControl(null, [Validators.required]),
      modePaiement: new FormControl(null, [Validators.required]),

      simactivation: new FormControl(null, [Validators.required]),
      simstatus: new FormControl(null, [Validators.required]),
      simtype: new FormControl(null, [Validators.required]),
      simpin: new FormControl(null, [Validators.required]),
      simpuk: new FormControl(null, [Validators.required]),
      simpuk2: new FormControl(null, [Validators.required]),

      suactive: new FormControl(null, [Validators.required]),
      suappelle: new FormControl(null, [Validators.required]),
      sudata: new FormControl(null, [Validators.required]),
      susms: new FormControl(null, [Validators.required]),
      summs: new FormControl(null, [Validators.required]),
      suitinerance: new FormControl(null, [Validators.required]),

      sacontact: new FormControl(null, [Validators.required]),
      sacredit: new FormControl(null, [Validators.required]),
      sasim: new FormControl(null, [Validators.required]),
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
  modifierContrat() {

  }
}
