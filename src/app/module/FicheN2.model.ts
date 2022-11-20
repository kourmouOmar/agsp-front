export interface FicheN2 {

  idFicheN2:number | null ;
  planRef:string;
  plancher:string;
  situation:string;
  dateFiche:string;
  controleVisuel:boolean;
  alignementtFerraillage:boolean;
  controleDesMesures:boolean;
  positionement:boolean;
  recouvrement:boolean;
  miseEnPlaceDesCales:boolean;
  cagesAssemblesAuxPlans:boolean;
  nombrePlans:boolean;
  diametrePlan:boolean;
  positionCadresEpingles:boolean;
  alignementCables:boolean;
  positionementCable:boolean;
  misePlaceTreteaux:boolean;
  nbrCableInstalle:boolean;
  typeAncrage:boolean;
  observation:string;
  idProjet:number;
  idChantier:number;
  idClient:number;
}
