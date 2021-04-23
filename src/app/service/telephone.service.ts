import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  existNumTel(telephone) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/telephone/siExiste', telephone, httpOptions);
  }
}
