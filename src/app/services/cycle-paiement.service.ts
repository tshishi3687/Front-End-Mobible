import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CyclePaiementService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  changerInfoBancaire(cycle) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.put('http://localhost:8081/cycle', cycle, httpOptions);
  }
}
