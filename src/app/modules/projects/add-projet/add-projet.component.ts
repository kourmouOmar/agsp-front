import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Projet } from 'src/app/module/Projet.model';
import { BureauControleService } from 'src/app/services/bureau-controle.service';
import { BureauEtudeService } from 'src/app/services/bureau-etude.service';
import { ClientService } from 'src/app/services/client.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {
  projetControleFormGroup: FormGroup = new FormGroup({});
  clients:any;
  bureauEtudes:any;
  bureauControles:any;
  constructor(
    private formBuilder: FormBuilder,
    private  projetService:ProjetService,
    private clientService:ClientService,
    private bureauEtudeService:BureauEtudeService,
    private bureauControleService:BureauControleService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.projetControleFormGroup = this.formBuilder.group({
      numero:[""],
      designation:[""],
      active:["true"],
      emailResponsable:[""],
      telephoneResponsable:[""],
      nomCompletResponsable:[""],
      bureauEtudeDTO:["null"],
      bureauControleDTO:["null"],
      clientDTO:["null"],
    });
    this.clientService.getAllClient().subscribe(res=>{this.clients =res});
    this.bureauControleService.getAllBueauControles().subscribe(res=>{this.bureauControles = res});
    this.bureauEtudeService.getAllBueauEtudes().subscribe(res=>{this.bureauEtudes = res});
  }

  ajouterBureauControle(){

    let client  = null;
    let bureauEtude = null;
    let bureauControle = null;
    if(this.projetControleFormGroup.get('clientDTO')?.value != 'null' ){
      client = this.clients.find((c: { idClient: any; }) =>c.idClient ==this.projetControleFormGroup.get('clientDTO')?.value)
    }
    if(this.projetControleFormGroup.get('bureauControleDTO')?.value != 'null' ){
      bureauControle = this.bureauControles.find((c: { idBureauControle: any; }) =>c.idBureauControle ==this.projetControleFormGroup.get('bureauControleDTO')?.value)
    }
    if(this.projetControleFormGroup.get('bureauEtudeDTO')?.value != 'null' ){
      bureauEtude = this.bureauEtudes.find((c: { idBureauEtude: any; }) =>c.idBureauEtude ==this.projetControleFormGroup.get('bureauEtudeDTO')?.value)
    }

    let projet: Projet ={
      idProjet:null,
      numero:this.projetControleFormGroup.get('numero')?.value,
      designation:this.projetControleFormGroup.get('designation')?.value,
      active:this.projetControleFormGroup.get('active')?.value,
      emailResponsable:this.projetControleFormGroup.get('emailResponsable')?.value,
      telephoneResponsable:this.projetControleFormGroup.get('telephoneResponsable')?.value,
      nomCompletResponsable:this.projetControleFormGroup.get('nomCompletResponsable')?.value,
      bureauEtudeDto:bureauEtude,
      bureauControleDto:bureauControle,
      clientDto:client,
    }

    this.projetService.updateProjet(projet).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("Projet créé  avec succès ","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarSuccessClass'
         });
         this.router.navigate(['/projet/fiche']);
       },
       error : (e)=>{
         this._snackBar.open("une erreur est survenue, réessayez","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarFailureClass'
         });
       },
       complete: ()=>{}
      });
  }
}
