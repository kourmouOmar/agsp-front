import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  menu:any =[
    {
      libelle:"Fiche client",
       url:"/client/fiche",
    },
    {
      libelle:"Nouveau client",
      url:"/client/add",
    },
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}
