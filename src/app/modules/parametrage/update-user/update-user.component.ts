import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/module/Utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userFormGroup: FormGroup = new FormGroup({});
  user!: Utilisateur;

  constructor(
    private formBuilder: FormBuilder,
    private utilisateurService:UtilisateurService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
      this.userFormGroup = this.formBuilder.group({
        nom:[""],
        prenom:[""],
        email:[""],
        telephone:[""],
        cin:[""],
        active:["true"],
        bloque:["false"],
        username:[""],
        role:[""]
      });
      if(this.router.getCurrentNavigation()?.extras){
        this.user = this.router.getCurrentNavigation()?.extras?.state?.['utilisateur'];
        this.userFormGroup.get("nom")?.setValue(this.user.nom);
        this.userFormGroup.get("prenom")?.setValue(this.user.prenom);
        this.userFormGroup.get("email")?.setValue(this.user.email);
        this.userFormGroup.get("telephone")?.setValue(this.user.telephone);
        this.userFormGroup.get("cin")?.setValue(this.user.cin);
        this.userFormGroup.get("active")?.setValue(this.user.active);
        this.userFormGroup.get("bloque")?.setValue(this.user.bloque);
        this.userFormGroup.get("username")?.setValue(this.user.username);
        this.userFormGroup.get("role")?.setValue(this.user.roles);

      }
    }

  ngOnInit(): void {
  }

  updateUser(){
    let utilisateur : Utilisateur ={
      idUtilisateur:this.user.idUtilisateur,
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
    this.utilisateurService.updateUtilisateurr(utilisateur).subscribe(
      {
       next : (res)=> {
         this._snackBar.open("utilisateur a été mise à jour ","Fermer", {
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
