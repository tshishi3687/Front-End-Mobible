import { Component, OnInit, Input } from '@angular/core';
import {Contrat} from '../../../objets';

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
