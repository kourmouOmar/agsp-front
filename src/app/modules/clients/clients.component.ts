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
      url:"customer-feedback",
    },
    {
      libelle:"Nouveau client",
      url:"/modules",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
