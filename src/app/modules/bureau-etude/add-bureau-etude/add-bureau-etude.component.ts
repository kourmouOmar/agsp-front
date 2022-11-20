import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BureauEtude } from 'src/app/module/BureauEtude.model';
import { BureauEtudeService } from 'src/app/services/bureau-etude.service';

@Component({
  selector: 'app-add-bureau-etude',
  templateUrl: './add-bureau-etude.component.html',
  styleUrls: ['./add-bureau-etude.component.css']
})
export class AddBureauEtudeComponent implements OnInit {
  bureauEtudeFormGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private bureauEtudeService:BureauEtudeService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.bureauEtudeFormGroup = this.formBuilder.group({
      designation:[""],
	    numero:[""],
	    description:[""],
	    fax:[""],
	    telephoneResponsable:[""],
	    nomCompletResponsable:[""],
      emailResponsable:[""]
    });
  }

  ajouterBureauEtude(){
    let bureauEtude: BureauEtude ={
      idBureauEtude: null,
      numero:this.bureauEtudeFormGroup.get('numero')?.value,
      designation:this.bureauEtudeFormGroup.get('designation')?.value,
      description:this.bureauEtudeFormGroup.get('description')?.value,
      fax:this.bureauEtudeFormGroup.get('fax')?.value,
      emailResponsable:this.bureauEtudeFormGroup.get('emailResponsable')?.value,
      telephoneResponsable:this.bureauEtudeFormGroup.get('telephoneResponsable')?.value,
      nomCompletResponsable:this.bureauEtudeFormGroup.get('nomCompletResponsable')?.value,
    }
    this.bureauEtudeService.addBureauEtude(bureauEtude).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("bureau d'étude créé  avec succès ","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarSuccessClass'
         });
         this.router.navigate(['/bureau-etude/fiche']);
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
