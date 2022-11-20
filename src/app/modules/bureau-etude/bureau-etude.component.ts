import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bureau-etude',
  templateUrl: './bureau-etude.component.html',
  styleUrls: ['./bureau-etude.component.css']
})
export class BureauEtudeComponent implements OnInit {
  menu:any =[
    {
      libelle:"Fiche Bureau d'étude",
       url:"/bureau-etude/fiche",
    },
    {
      libelle:"Nouveau Bureau d'étude",
      url:"/bureau-etude/add",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
