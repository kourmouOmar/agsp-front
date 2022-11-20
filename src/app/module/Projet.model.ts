import { BureauControle } from "./BureauControle.model";
import { BureauEtude } from "./BureauEtude.model";
import { Client } from "./Client.model";

export interface Projet {
  idProjet:number | null ;
  numero:string;
  designation:string;
  active:boolean;
  emailResponsable:string;
  telephoneResponsable:string;
  nomCompletResponsable:string;
  bureauEtudeDto:BureauEtude;
  bureauControleDto:BureauControle;
  clientDto:Client;
}
