import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BureauControle } from 'src/app/module/BureauControle.model';
import { BureauControleService } from 'src/app/services/bureau-controle.service';

@Component({
  selector: 'app-update-bureau-controle',
  templateUrl: './update-bureau-controle.component.html',
  styleUrls: ['./update-bureau-controle.component.css']
})
export class UpdateBureauControleComponent implements OnInit {
  bureauControleFormGroup: FormGroup = new FormGroup({});
  bureau!: BureauControle;

  constructor(
    private formBuilder: FormBuilder,
    private  bureauControleService:BureauControleService,
    private _snackBar: MatSnackBar,
    private router: Router) {
      this.bureauControleFormGroup = this.formBuilder.group({
        designation:[""],
        numero:[""],
        description:[""],
        fax:[""],
        telephoneResponsable:[""],
        nomCompletResponsable:[""],
        emailResponsable:[""]
      });

      if(this.router.getCurrentNavigation()?.extras){
        this.bureau = this.router.getCurrentNavigation()?.extras?.state?.['bureauControle'];
        this.bureauControleFormGroup.get("designation")?.setValue(this.bureau.designation);
        this.bureauControleFormGroup.get("numero")?.setValue(this.bureau.numero);
        this.bureauControleFormGroup.get("description")?.setValue(this.bureau.description);
        this.bureauControleFormGroup.get("fax")?.setValue(this.bureau.fax);
        this.bureauControleFormGroup.get("telephoneResponsable")?.setValue(this.bureau.telephoneResponsable);
        this.bureauControleFormGroup.get("nomCompletResponsable")?.setValue(this.bureau.nomCompletResponsable);
        this.bureauControleFormGroup.get("emailResponsable")?.setValue(this.bureau.emailResponsable);
      }
     }

  ngOnInit(): void {
  }

  updateBureauEtude(){
    let bureauEtude: BureauControle ={
      idBureauControle: this.bureau.idBureauControle,
      numero:this.bureauControleFormGroup.get('numero')?.value,
      designation:this.bureauControleFormGroup.get('designation')?.value,
      description:this.bureauControleFormGroup.get('description')?.value,
      fax:this.bureauControleFormGroup.get('fax')?.value,
      emailResponsable:this.bureauControleFormGroup.get('emailResponsable')?.value,
      telephoneResponsable:this.bureauControleFormGroup.get('telephoneResponsable')?.value,
      nomCompletResponsable:this.bureauControleFormGroup.get('nomCompletResponsable')?.value,
    }
    this.bureauControleService.updateBureauControleById(bureauEtude).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("Bureau de contrôle a été mise à jours ","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarSuccessClass'
         });
         this.router.navigate(['/bureau-controle/fiche']);
       },
       error : (e)=>{
         this._snackBar.open("Une erreur est survenue, réessayez","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarFailureClass'
         });
       },
       complete: ()=>{}
      });
  }

}
