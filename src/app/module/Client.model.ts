import { Projet } from "./Projet.model";

export interface  Client {
  idClient:number;
  a:string;
  designation:string;
  adresse:string;
  ville:string;
  nomCompletContact:string;
  ice:string;
  active:boolean;
  telephone:string;
  fax:string;
  email:string;
  listOfProjetDTO:Array<Projet>;

}
