import {Component, Input, OnInit} from '@angular/core';
import {ContratService} from '../../services/contrat.service';
import {Contrat, Info_bancaire, Personne} from '../../objets';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DonneeService} from '../../services/donnee.service';
import {InfoBancaireService} from '../../services/info-bancaire.service';

@Component({
  selector: 'app-contrat-client',
  templateUrl: './contrat-client.component.html',
  styleUrls: ['./contrat-client.component.css']
})
export class ContratClientComponent implements OnInit {

  constructor(
    private client: ContratService,
    private donnee: DonneeService,
    private information: InfoBancaireService) { }

  listeContrat: Array<Contrat> = [];
  private error = 'il y a eu une error :\'( !';
  probleme = false;
  // tslint:disable-next-line:variable-name
  listInfo_bancaire: Info_bancaire;
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
    const registrNat = new Info_bancaire();
    registrNat.appartient = personne;

    // tslint:disable-next-line:max-line-length
    this.information.recherPersonne(registrNat).subscribe((reponse: Info_bancaire) => ((this.listInfo_bancaire = reponse), this.donnee.verifSiExist(this.listInfo_bancaire)), reponse => alert(this.error));
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
