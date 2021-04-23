import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterPersonne(personne) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/personne', personne, httpOptions);
  }

  // tslint:disable-next-line:typedef
  voirPersonne(personne){

    return this.client.post('http://localhost:8081/personne/user', personne);
  }

  // tslint:disable-next-line:typedef
  voirSiExiste(personne){
    return this.client.post('http://localhost:8081/personne/email', personne);
  }

  // tslint:disable-next-line:typedef
  modifier(personne){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.client.put('http://localhost:8081/personne', personne, httpOptions);
  }
}
