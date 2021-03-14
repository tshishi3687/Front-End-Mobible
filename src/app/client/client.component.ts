import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InfoBancaireService} from '../services/info-bancaire.service';
import {Adresse, Info_bancaire, Personne} from '../objets';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
}
