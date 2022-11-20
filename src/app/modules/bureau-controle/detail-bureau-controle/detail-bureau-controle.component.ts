import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-bureau-controle',
  templateUrl: './detail-bureau-controle.component.html',
  styleUrls: ['./detail-bureau-controle.component.css']
})
export class DetailBureauControleComponent implements OnInit {
  bureauControleFormGroup: FormGroup = new FormGroup({});

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private formBuilder: FormBuilder) {
    this.bureauControleFormGroup = this.formBuilder.group({
      designation:[{value:data.bureauControle.designation,disabled:true}],
	    numero:[{value:data.bureauControle.numero,disabled:true}],
	    description:[{value:data.bureauControle.description,disabled:true}],
	    fax:[{value:data.bureauControle.fax,disabled:true}],
	    telephoneResponsable:[{value:data.bureauControle.telephoneResponsable,disabled:true}],
	    nomCompletResponsable:[{value:data.bureauControle.nomCompletResponsable,disabled:true}],
      emailResponsable:[{value:data.bureauControle.emailResponsable,disabled:true}]
    });
   }

  ngOnInit(): void {
  }
}
