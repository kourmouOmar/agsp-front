import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  clientFormGroup: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
  ) {
    console.log(data.client);

    this.clientFormGroup = this.formBuilder.group({
      designation:[{value:data.client.designation,disabled:true}],
	    adresse:[{value:data.client.adresse,disabled:true}],
	    ville:[{value:data.client.ville,disabled:true}],
	    nomCompletContact:[{value:data.client.nomCompletContact,disabled:true}],
	    ice:[{value:data.client.ice,disabled:true}],
	    active:[{value:data.client.active?"Oui":"Non",disabled:true}],
	    telephone:[{value:data.client.telephone,disabled:true}],
	    fax:[{value:data.client.fax,disabled:true}],
      email:[{value:data.client.email,disabled:true}]
    });

  }

  ngOnInit(): void {
  }

}
