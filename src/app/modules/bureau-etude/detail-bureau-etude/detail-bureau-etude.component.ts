import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-bureau-etude',
  templateUrl: './detail-bureau-etude.component.html',
  styleUrls: ['./detail-bureau-etude.component.css']
})
export class DetailBureauEtudeComponent implements OnInit {
  bureauEtudeFormGroup: FormGroup = new FormGroup({});

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private formBuilder: FormBuilder) {
    this.bureauEtudeFormGroup = this.formBuilder.group({
      designation:[{value:data.bureauEtude.designation,disabled:true}],
	    numero:[{value:data.bureauEtude.numero,disabled:true}],
	    description:[{value:data.bureauEtude.description,disabled:true}],
	    fax:[{value:data.bureauEtude.fax,disabled:true}],
	    telephoneResponsable:[{value:data.bureauEtude.telephoneResponsable,disabled:true}],
	    nomCompletResponsable:[{value:data.bureauEtude.nomCompletResponsable,disabled:true}],
      emailResponsable:[{value:data.bureauEtude.emailResponsable,disabled:true}]
    });
   }

  ngOnInit(): void {
  }

}
