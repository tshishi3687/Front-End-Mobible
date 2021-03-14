import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  ajouterContrat(contrat) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/contrat', contrat, httpOptions);
  }
  // tslint:disable-next-line:typedef
  listeContrat(personne) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.client.post('http://localhost:8081/contrat/selonnnational', personne, httpOptions);
  }
}
