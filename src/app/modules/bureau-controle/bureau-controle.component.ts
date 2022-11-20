import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bureau-controle',
  templateUrl: './bureau-controle.component.html',
  styleUrls: ['./bureau-controle.component.css']
})
export class BureauControleComponent implements OnInit {

  menu:any =[
    {
      libelle:"Fiche Bureau de contrôle",
       url:"/bureau-controle/fiche",
    },
    {
      libelle:"Nouveau Bureau de contrôle",
      url:"/bureau-controle/add",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
