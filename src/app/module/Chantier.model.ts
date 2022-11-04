
import { Projet } from "./Projet.model";

export interface Chantier {
  idChantier:number;
  numero:string;
  designation:string;
  description:string;
  projetDTO:Projet;

}
