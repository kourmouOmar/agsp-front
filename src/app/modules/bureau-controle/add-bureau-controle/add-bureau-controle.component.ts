import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BureauControle } from 'src/app/module/BureauControle.model';
import { BureauControleService } from 'src/app/services/bureau-controle.service';

@Component({
  selector: 'app-add-bureau-controle',
  templateUrl: './add-bureau-controle.component.html',
  styleUrls: ['./add-bureau-controle.component.css']
})
export class AddBureauControleComponent implements OnInit {
  bureauControleFormGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private  bureauControleService:BureauControleService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.bureauControleFormGroup = this.formBuilder.group({
      designation:[""],
	    numero:[""],
	    description:[""],
	    fax:[""],
	    telephoneResponsable:[""],
	    nomCompletResponsable:[""],
      emailResponsable:[""]
    });
  }

  ajouterBureauControle(){
    let bureauControle: BureauControle ={
      idBureauControle: null,
      numero:this.bureauControleFormGroup.get('numero')?.value,
      designation:this.bureauControleFormGroup.get('designation')?.value,
      description:this.bureauControleFormGroup.get('description')?.value,
      fax:this.bureauControleFormGroup.get('fax')?.value,
      emailResponsable:this.bureauControleFormGroup.get('emailResponsable')?.value,
      telephoneResponsable:this.bureauControleFormGroup.get('telephoneResponsable')?.value,
      nomCompletResponsable:this.bureauControleFormGroup.get('nomCompletResponsable')?.value,
    }
    this.bureauControleService.addBureauControle(bureauControle).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("bureau de contrôle créé  avec succès ","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarSuccessClass'
         });
         this.router.navigate(['/bureau-controle/fiche']);
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
