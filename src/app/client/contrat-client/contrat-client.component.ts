import {Component, Input, OnInit} from '@angular/core';
import {ContratService} from '../../services/contrat.service';
import {Contrat, Personne} from '../../objets';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DonneeService} from '../../services/donnee.service';

@Component({
  selector: 'app-contrat-client',
  templateUrl: './contrat-client.component.html',
  styleUrls: ['./contrat-client.component.css']
})
export class ContratClientComponent implements OnInit {

  constructor(
    private client: ContratService,
    private donnee: DonneeService) { }

  listeContrat: Array<Contrat> = [];
  private error = 'il y a eu une error :\'( !';
  probleme = false;
  @Input() c: Contrat;

  colectRNational = new FormGroup( {
    numNational: new FormControl(null, [Validators.required,  Validators.minLength(11), Validators.maxLength(11)])
  });

  ngOnInit(): void {
  }

  recherContrat(): void{
    const personne = new Personne();
    personne.nregistrenational = this.colectRNational.value.numNational;
    // tslint:disable-next-line:max-line-length
    this.client.listeContrat(personne).subscribe((reponse: Array<Contrat>) => ((this.listeContrat = reponse), (this.donnee.contrat())), reponse => alert(this.error));
    console.log(this.listeContrat);
  }

  info(): boolean{
    if (this.probleme === false){
      this.probleme = true;
      return this.probleme;
    }else{
      this.probleme = false;
      return this.probleme;
    }
  }
}
