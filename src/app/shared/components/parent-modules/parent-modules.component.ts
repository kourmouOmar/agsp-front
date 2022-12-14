import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-modules',
  templateUrl: './parent-modules.component.html',
  styleUrls: ['./parent-modules.component.css']
})
export class ParentModulesComponent implements OnInit {
  modulesList:any =[
    {
      libelle:"Client",
      iconeActive:"customer-feedback",
      active:true,
      description:"",
      url:"/client/fiche"
    },
    {
      libelle:"Projet",
      iconeActive:"project-management",
      active:true,
      description:"",
      url:"/projet/fiche"
    },
    {
      libelle:"Bureau d'études",
      iconeActive:"sketch",
      active:true,
      description:"",
      url:"/bureau-etude/fiche"
    },
    {
      libelle:"Bureau de contrôle",
      iconeActive:"tablet",
      active:true,
      description:"",
      url:"/bureau-controle/fiche"
    }
    ,{
      libelle:"Chantier",
      iconeActive:"construction",
      active:true,
      description:"",
      url:"/chantier/fiche"
    }
    ,{
      libelle:"Adminstration",
      iconeActive:"administrator",
      active:true,
      description:"",
      url:"/user/fiche"
    }
  ];
  hover:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
