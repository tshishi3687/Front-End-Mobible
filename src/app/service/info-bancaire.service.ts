import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoBancaireService {

  constructor(private client: HttpClient) { }
  // tslint:disable-next-line:typedef variable-name
  ajouterPersonne(infobbancaire) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/info_bancaire/n_info_bancaire', infobbancaire, httpOptions);
  }

  // tslint:disable-next-line:typedef
  recherPersonne(info) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/info_bancaire/rnational', info, httpOptions);
  }

  // tslint:disable-next-line:typedef
  modifier(info) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.put('http://localhost:8081/info_bancaire/rnational', info, httpOptions);
  }
}
