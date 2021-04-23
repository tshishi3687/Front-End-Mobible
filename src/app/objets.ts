export class Sim{
  id: number;
  dateactivation: Date;
  statussim: string;
  codepin: number;
  codepuk: number;
  codepuk2: number;
  datetermination: Date;
  typecarte: string;
}

export class Telephone{
  id: number;
  ntelephone: string;
  sim: Sim;
}

export class Adresse{
  id: number;
  ville: string;
  rue: string;
  nrue: number;
  cpostal: number;
  nboitelettre: number;
}

export class Personne{
  id: number;
  nompersonne: string;
  prenompersonne: string;
  genrepersonne: string;
  datenaisspersonne: Date;
  nregistrenational: string;
  civilitepersonne: string;
  adressepersonne: Adresse;
}

// tslint:disable-next-line:class-name
export class Service_activation{
  id: number;
  transcontacts: string;
  transcredit: string;
  activationsim: string;
}

// tslint:disable-next-line:class-name
export class Service_usage{
  id: number;
  creditappelle: string;
  creditdata: string;
  creditsms: string;
  creditmms: string;
  credititinerance: string;
}

// tslint:disable-next-line:class-name
export class Mode_paiement{
  id: number;
  nom: string;
}

export class Cycle{
  id: number;
  tempscycle: string;
  modepaiement: Mode_paiement;
  information: Info_bancaire;
}

export class Abonnement{
  id: number;
  msisdn: Telephone;
  serviceusage: Service_usage;
  serviceactivation: Service_activation;
  dateactivation: Date;
}

export class Contrat{
  id: number;
  datesignature: Date;
  datedebut: Date;
  datefin: Date;
  abonnement: Abonnement;
  facturation: Cycle;
}

// tslint:disable-next-line:class-name
export class Info_bancaire{
  id: number;
  appartient: Personne;
  compte: string;
  domiciliation: number;
  statusdomiciliation: string;
  banque: string;
  Credit: string;
  expiration: Date;
}

// tslint:disable-next-line:class-name
export class ClientImage{
  monImage: any = 'C:/Users/tshis/OneDrive/Bureau/testt/test.jpg';
}
