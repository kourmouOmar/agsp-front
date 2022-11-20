
export interface FicheN1 {

  idFicheN1:number | null ;
  planRef:string;
  plancher:string;
  situation:string;
  dateFiche:string;
  coffrageConforme:boolean;
  coffrageObservation:string;
  limiteCoffrageConforme:boolean;
  limiteCoffrageObservation:string;
  poteauxCoffrageConforme:boolean;
  poteauxCoffrageObservation:string;
  voilesCoffrageConforme:boolean;
  voilesCoffrageObservation:string;
  ouvertureCoffrageConforme:boolean;
  ouvertureCoffrageObservation:string;
  electriciteConforme:boolean;
  electriciteObservation:string;
  escalierConforme:boolean;
  escalierObservation:string;
  magasinConforme:boolean;
  magasinObservation:string;
  envHygiensConforme:boolean;
  envHygiensObservation:string;
  moyenLevageManutentionConforme:boolean;
  moyenLevageManutentionObservation:string;
  gardesCorpsConforme:boolean;
  gardesCorpsObservation:string;
  idProjet:number;
  idChantier:number;
  idClient:number;
}
