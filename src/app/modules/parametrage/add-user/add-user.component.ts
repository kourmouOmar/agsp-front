import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userFormGroup: FormGroup = new FormGroup({});
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
	    nom:[""],
	    prenom:[""],
	    adresseLocal:[""],
	    email:[""],
	    telephone:[""],
	    cin:[""],
	    active:[""],
	    bloque:[""],
	    username:[""],
      role:[""]
    });
  }

  ajouterUser(){}
}
