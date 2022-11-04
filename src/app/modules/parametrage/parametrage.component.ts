import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.css']
})
export class ParametrageComponent implements OnInit {

  menu:any =[
    {
      libelle:"Fiche utilisateur",
      url:"/user/fiche",
    },
    {
      libelle:"Nouveau utilisateur",
      url:"/user/add",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
