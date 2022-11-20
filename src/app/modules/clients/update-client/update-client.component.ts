import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Client } from 'src/app/module/Client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  clientFormGroup: FormGroup = new FormGroup({});
  client!: Client;

  constructor(
    private formBuilder: FormBuilder,
    private clientService:ClientService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.clientFormGroup = this.formBuilder.group({
      designation:[""],
	    prenom:[""],
	    adresse:[""],
	    ville:[""],
	    nomCompletContact:[""],
	    ice:[""],
	    active:["true"],
	    telephone:[""],
	    fax:[""],
      email:[""]
    });
    if(this.router.getCurrentNavigation()?.extras){
      this.client = this.router.getCurrentNavigation()?.extras?.state?.['client'];
      this.clientFormGroup.get("designation")?.setValue(this.client.designation);
      this.clientFormGroup.get("adresse")?.setValue(this.client.adresse);
      this.clientFormGroup.get("ville")?.setValue(this.client.ville);
      this.clientFormGroup.get("nomCompletContact")?.setValue(this.client.nomCompletContact);
      this.clientFormGroup.get("ice")?.setValue(this.client.ice);
      this.clientFormGroup.get("active")?.setValue(this.client.active);
      this.clientFormGroup.get("telephone")?.setValue(this.client.active);
      this.clientFormGroup.get("fax")?.setValue(this.client.active);
      this.clientFormGroup.get("email")?.setValue(this.client.active);
    }
  }

  ngOnInit(): void {
  }
  updateClient(){
    let client: Client ={
      idClient:this.client.idClient,
      designation:this.clientFormGroup.get('designation')?.value,
      adresse:this.clientFormGroup.get('adresse')?.value,
      ville:this.clientFormGroup.get('ville')?.value,
      nomCompletContact:this.clientFormGroup.get('nomCompletContact')?.value,
      ice:this.clientFormGroup.get('ice')?.value,
      active:this.clientFormGroup.get('active')?.value,
      telephone:this.clientFormGroup.get('telephone')?.value,
      fax:this.clientFormGroup.get('fax')?.value,
      email:this.clientFormGroup.get('email')?.value,
    }
    this.clientService.updateClient(client).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("Clienta été mise à jours ","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarSuccessClass'
         });
         this.router.navigate(['/client/fiche']);
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
