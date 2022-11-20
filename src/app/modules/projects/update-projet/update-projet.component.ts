import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Projet } from 'src/app/module/Projet.model';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {
  projetControleFormGroup: FormGroup = new FormGroup({});
  projet:any
  clients:any;
  bureauEtudes:any;
  bureauControles:any;
  constructor( private formBuilder: FormBuilder,
    private  projetService:ProjetService,
    private _snackBar: MatSnackBar,
    private router: Router) {

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
      if(this.router.getCurrentNavigation()?.extras){
        this.projet = this.router.getCurrentNavigation()?.extras?.state?.['projet'];
        this.clients = this.router.getCurrentNavigation()?.extras?.state?.['clients'];
        this.bureauEtudes = this.router.getCurrentNavigation()?.extras?.state?.['bureauEtudes'];
        this.bureauControles = this.router.getCurrentNavigation()?.extras?.state?.['bureauControles'];
        /** set value */
        this.projetControleFormGroup.get("numero")?.setValue(this.projet.numero);
        this.projetControleFormGroup.get("designation")?.setValue(this.projet.designation);
        this.projetControleFormGroup.get("active")?.setValue(this.projet.active);
        this.projetControleFormGroup.get("emailResponsable")?.setValue(this.projet.emailResponsable);
        this.projetControleFormGroup.get("telephoneResponsable")?.setValue(this.projet.telephoneResponsable);
        this.projetControleFormGroup.get("nomCompletResponsable")?.setValue(this.projet.nomCompletResponsable);
        this.projetControleFormGroup.get("nomCompletResponsable")?.setValue(this.projet.nomCompletResponsable);
        this.projetControleFormGroup.get("clientDTO")?.setValue(this.projet.clientDto?.idClient);
        this.projetControleFormGroup.get("bureauControleDTO")?.setValue(this.projet.bureauControleDto?.idBureauControle);
        this.projetControleFormGroup.get("bureauEtudeDTO")?.setValue(this.projet.bureauEtudeDto?.idBureauEtude);
      }
    }

  ngOnInit(): void {
  }

  updateProjet(){
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
      idProjet:this.projet.idProjet,
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

    this.projetService.addProjet(projet).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("Projet a été mise à jours","Fermer", {
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
