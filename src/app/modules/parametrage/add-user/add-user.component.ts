import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/module/Utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userFormGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private utilisateurService:UtilisateurService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
	    nom:[""],
	    prenom:[""],
	    adresseLocal:[""],
	    email:[""],
	    telephone:[""],
	    cin:[""],
	    active:["true"],
	    bloque:["false"],
	    username:[""],
      role:[""]
    });
  }

  ajouterUser(){
    let utilisateur : Utilisateur =
    {
      idUtilisateur:null,
      nom: this.userFormGroup.get('nom')?.value ,
      prenom: this.userFormGroup.get('prenom')?.value,
      telephone:this.userFormGroup.get('telephone')?.value,
      email: this.userFormGroup.get('email')?.value,
      cin:this.userFormGroup.get('cin')?.value,
      username:this.userFormGroup.get('username')?.value,
      active: this.userFormGroup.get('active')?.value,
      bloque: this.userFormGroup.get('bloque')?.value,
      password:"",
      roles:this.userFormGroup.get('role')?.value,
    }
    this.utilisateurService.addUtilisateurr(utilisateur).subscribe(
     {
      next : (res)=> {
        this._snackBar.open("utilisateur créé  avec succès ","Fermer", {
          duration: 10000,
          panelClass: 'oppenSnackBarSuccessClass'
        });
        this.router.navigate(['/user/fiche']);
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
