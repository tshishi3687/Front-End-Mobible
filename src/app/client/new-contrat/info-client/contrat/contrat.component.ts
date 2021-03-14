import { Component, OnInit } from '@angular/core';
import {Abonnement, Contrat, Cycle, Mode_paiement, Service_activation, Service_usage, Sim, Telephone} from '../../../../objets';
import {TelephoneService} from '../../../../services/telephone.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DonneeService} from '../../../../services/donnee.service';
import {ContratService} from '../../../../services/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  constructor(private telephone: TelephoneService,
              private client: DonneeService,
              private contratService: ContratService) { }

  private numTelephone = '049';
  numCree;
  codePin;
  codePuk;
  codePuk2;
  private minTel;
  private mincodepin;
  private mincodepuk;
  private mincodepuk2;
  private maxTel;
  private maxcodepin;
  private maxcodepuk;
  private maxcodepuk2;
  private suiteNumTel;
  // tslint:disable-next-line:ban-types
  private numExist: boolean;
  private ok = 'tout c\'est bien passé :)-';
  private error = 'il y a eu un proble ! :(';
  sim = false;

  contratForm = new FormGroup(
    {
      dateSignature: new FormControl(null, [Validators.required]),
      dateDebut: new FormControl(null, [Validators.required]),
      dateFin: new FormControl(null, [Validators.required]),

      cyclePaiement: new FormControl(null, [Validators.required]),
      modePaiement: new FormControl(null, [Validators.required]),

      simactivation: new FormControl(null, [Validators.required]),
      simstatus: new FormControl(null, [Validators.required]),
      simtype: new FormControl(null, [Validators.required]),
      simpin: new FormControl(null, [Validators.required]),
      simpuk: new FormControl(null, [Validators.required]),
      simpuk2: new FormControl(null, [Validators.required]),

      suactive: new FormControl(null, [Validators.required]),
      suappelle: new FormControl(null, [Validators.required]),
      sudata: new FormControl(null, [Validators.required]),
      susms: new FormControl(null, [Validators.required]),
      summs: new FormControl(null, [Validators.required]),
      suitinerance: new FormControl(null, [Validators.required]),

      sacontact: new FormControl(null, [Validators.required]),
      sacredit: new FormControl(null, [Validators.required]),
      sasim: new FormControl(null, [Validators.required]),
    }
  );

  ngOnInit(): void {
  }

  creationContrat(): void{
    // tslint:disable-next-line:variable-name
    const modepaiement = new Mode_paiement();
    modepaiement.id = 0;
    modepaiement.nom = this.contratForm.value.modePaiement;
    console.log(modepaiement);
    const cycle = new Cycle();
    cycle.id = 0;
    cycle.tempscycle = this.contratForm.value.cyclePaiement;
    cycle.modepaiement = modepaiement;
    cycle.information = this.client.client();

    const sim = new Sim();
    sim.id = 0;
    sim.dateactivation = this.contratForm.value.simactivation;
    sim.statussim = this.contratForm.value.simstatus;
    sim.codepin = this.codePin;
    sim.codepuk = this.codePuk;
    sim.codepuk2 = this.codePuk2;
    sim.typecarte = this.contratForm.value.simtype;

    const telephone = new Telephone();
    telephone.id = 0;
    telephone.ntelephone = this.numCree;
    telephone.sim = sim;

    const serUsage = new Service_usage();
    serUsage.id = 0;
    serUsage.creditappelle = this.contratForm.value.suappelle;
    serUsage.creditdata = this.contratForm.value.sudata;
    serUsage.creditsms = this.contratForm.value.susms;
    serUsage.creditmms = this.contratForm.value.summs;
    serUsage.credititinerance = this.contratForm.value.suitinerance;

    const serAct = new Service_activation();
    serAct.id = 0;
    serAct.transcredit = this.contratForm.value.sacredit;
    serAct.transcontacts = this.contratForm.value.sacontact;
    serAct.activationsim = this.contratForm.value.sasim;

    const abonnement = new Abonnement();
    abonnement.id = 0;
    abonnement.msisdn = telephone;
    abonnement.serviceusage = serUsage;
    abonnement.serviceactivation = serAct;
    abonnement.dateactivation = this.contratForm.value.suactive;
    console.log(abonnement);
    const contrat = new Contrat();
    contrat.id = 0;
    contrat.datesignature = this.contratForm.value.dateSignature;
    contrat.datedebut = this.contratForm.value.dateDebut;
    contrat.datefin = this.contratForm.value.dateFin;
    contrat.abonnement = abonnement;
    contrat.facturation = cycle;
    console.log(contrat);
    this.contratService.ajouterContrat(contrat).subscribe(reponse => alert(this.ok), repose => alert(this.error));
  }

  randomNumTelephone(): void {
    do {

      this.minTel = Math.ceil(1000000);
      this.maxTel = Math.floor(9999999);
      this.suiteNumTel = Math.floor(Math.random() * (this.maxTel - this.minTel)) + this.minTel;
      const tel = new Telephone();
      tel.id = 0;
      tel.ntelephone = this.numTelephone + this.suiteNumTel;
      // tslint:disable-next-line:max-line-length
      this.telephone.existNumTel(tel).subscribe((reponse: boolean) => ((this.numExist = reponse), this.numCree = this.numTelephone + this.suiteNumTel), reponse => alert(this.error));
      console.log(this.numExist);

    } while (this.numExist);
  }

  randCodeCarteSim(): void{
    this.sim = true;

    this.mincodepin = Math.ceil(1000);
    this.maxcodepin = Math.floor(9999);
    this.codePin = Math.floor(Math.random() * (this.maxcodepin - this.mincodepin)) + this.mincodepin;

    this.mincodepuk = Math.ceil(10000000);
    this.maxcodepuk = Math.floor(99999999);
    this.codePuk = Math.floor(Math.random() * (this.maxcodepuk - this.mincodepuk)) + this.mincodepuk;

    this.mincodepuk2 = Math.ceil(10000000);
    this.maxcodepuk2 = Math.floor(99999999);
    this.codePuk2 = Math.floor(Math.random() * (this.maxcodepuk2 - this.mincodepuk2)) + this.mincodepuk2;
  }
}
