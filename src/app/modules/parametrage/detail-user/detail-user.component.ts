import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  userFormGroup: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
  ) {
    let role :string = "";
    if(data.user.roles == "superAdmin"){
      role ="Super Admin"
    }
    if(data.user.roles == "chefRegional"){
      role ="Chef régional"
    }
    if(data.user.roles == "ResponsableTravaux"){
      role ="Responsable des travaux "
    }

    this.userFormGroup = this.formBuilder.group({
	    nom:[{value:data.user.nom,disabled:true}],
	    prenom:[{value:data.user.prenom,disabled:true}],
	    email:[{value:data.user.email,disabled:true}],
	    telephone:[{value:data.user.telephone,disabled:true}],
	    cin:[{value:data.user.cin,disabled:true}],
	    active:[{value:data.user.active?'Oui':'Non',disabled:true}],
	    bloque:[{value:data.user.bloque?'Oui':'Non',disabled:true}],
	    username:[{value:data.user.username,disabled:true}],
      role:[{value:role,disabled:true}]
    });
   }

  ngOnInit(): void {
  }

}
