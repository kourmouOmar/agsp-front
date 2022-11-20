import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  menu:any =[
    {
      libelle:"Fiche Projet",
       url:"/projet/fiche",
    },
    {
      libelle:"Nouveau Projet",
      url:"/projet/add",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
