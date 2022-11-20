import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrls: ['./detail-projet.component.css']
})
export class DetailProjetComponent implements OnInit {
  projetControleFormGroup: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder) {
      this.projetControleFormGroup = this.formBuilder.group({
        numero:[{value:data.projet.numero,disabled:true}],
        designation:[{value:data.projet.designation,disabled:true}],
        active:[{value:data.projet.active?'Oui':'Non',disabled:true}],
        emailResponsable:[{value:data.projet.emailResponsable,disabled:true}],
        telephoneResponsable:[{value:data.projet.telephoneResponsable,disabled:true}],
        nomCompletResponsable:[{value:data.projet.nomCompletResponsable,disabled:true}],
        bureauEtudeDTO:[{value:data.projet.bureauEtudeDto?'Désignation :'+data.projet.bureauEtudeDto?.designation :'',disabled:true}],
        bureauControleDTO:[{value:data.projet.bureauControleDto?'Désignation :'+data.projet.bureauControleDto?.designation :'',disabled:true}],
        clientDTO:[{value:data.projet.clientDto?'Ice :'+data.projet.clientDto?.ice + '  Tel : '+data.projet.clientDto?.telephone:'',disabled:true}],
      });
    }

  ngOnInit(): void {
  }

}
