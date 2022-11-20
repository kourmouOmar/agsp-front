import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BureauEtude } from 'src/app/module/BureauEtude.model';
import { BureauEtudeService } from 'src/app/services/bureau-etude.service';

@Component({
  selector: 'app-update-bureau-etude',
  templateUrl: './update-bureau-etude.component.html',
  styleUrls: ['./update-bureau-etude.component.css']
})
export class UpdateBureauEtudeComponent implements OnInit {
  bureauEtudeFormGroup: FormGroup = new FormGroup({});
  bureau!: BureauEtude;

  constructor(
    private formBuilder: FormBuilder,
    private bureauEtudeService:BureauEtudeService,
    private _snackBar: MatSnackBar,
    private router: Router) {
      this.bureauEtudeFormGroup = this.formBuilder.group({
        designation:[""],
        numero:[""],
        description:[""],
        fax:[""],
        telephoneResponsable:[""],
        nomCompletResponsable:[""],
        emailResponsable:[""]
      });

      if(this.router.getCurrentNavigation()?.extras){
        this.bureau = this.router.getCurrentNavigation()?.extras?.state?.['bureauEtude'];
        this.bureauEtudeFormGroup.get("designation")?.setValue(this.bureau.designation);
        this.bureauEtudeFormGroup.get("numero")?.setValue(this.bureau.numero);
        this.bureauEtudeFormGroup.get("description")?.setValue(this.bureau.description);
        this.bureauEtudeFormGroup.get("fax")?.setValue(this.bureau.fax);
        this.bureauEtudeFormGroup.get("telephoneResponsable")?.setValue(this.bureau.telephoneResponsable);
        this.bureauEtudeFormGroup.get("nomCompletResponsable")?.setValue(this.bureau.nomCompletResponsable);
        this.bureauEtudeFormGroup.get("emailResponsable")?.setValue(this.bureau.emailResponsable);
      }
     }

  ngOnInit(): void {
  }

  updateBureauEtude(){
    let bureauEtude: BureauEtude ={
      idBureauEtude: this.bureau.idBureauEtude,
      numero:this.bureauEtudeFormGroup.get('numero')?.value,
      designation:this.bureauEtudeFormGroup.get('designation')?.value,
      description:this.bureauEtudeFormGroup.get('description')?.value,
      fax:this.bureauEtudeFormGroup.get('fax')?.value,
      emailResponsable:this.bureauEtudeFormGroup.get('emailResponsable')?.value,
      telephoneResponsable:this.bureauEtudeFormGroup.get('telephoneResponsable')?.value,
      nomCompletResponsable:this.bureauEtudeFormGroup.get('nomCompletResponsable')?.value,
    }
    this.bureauEtudeService.updateBureauEtudeById(bureauEtude).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("Bureau d'étude a été mise à jours ","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarSuccessClass'
         });
         this.router.navigate(['/bureau-etude/fiche']);
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
