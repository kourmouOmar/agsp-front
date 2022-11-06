import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Client } from 'src/app/module/Client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientFormGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private clientService:ClientService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {

  }

  ngOnInit(): void {
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
  }

  ajouterClient(){
    let client: Client ={
      idClient:null,
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
    this.clientService.addClient(client).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("client créé  avec succès ","Fermer", {
           duration: 10000,
           panelClass: 'oppenSnackBarSuccessClass'
         });
         this.router.navigate(['/client/fiche']);
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
