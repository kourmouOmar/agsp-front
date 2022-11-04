import { Chantier } from "./Chantier.model";
import { Client } from "./Client.model";


export interface  Projet {
  idProjet:number;
  numero:string;
  designation:string;
  active:boolean;
  emailResponsable:string;
  telephoneResponsable:string;
  nomCompletResponsable:string;
  listOfChantierDTO:Array<Chantier>;
  clientDTO:Client;

}
