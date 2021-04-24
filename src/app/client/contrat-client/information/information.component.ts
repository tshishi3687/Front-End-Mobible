import { Component, OnInit, Input } from '@angular/core';
import {Contrat, Personne} from '../../../objets';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DonneeService} from '../../../services/donnee.service';
import {ContratService} from '../../../services/contrat.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }
  active = false;

  @Input() c: Contrat;
  @Input() p: boolean;

  ngOnInit(): void {
  }

  detail(): void{
    if (this.active === true){
      this.active = false;
    }else{
      this.active = true;
    }
  }
}
