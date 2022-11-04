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
      description:""
    },
    {
      libelle:"Projet",
      iconeActive:"project-management",
      active:true,
      description:""
    }
    ,{
      libelle:"Chantier",
      iconeActive:"construction",
      active:true,
      description:""
    }
    ,{
      libelle:"Adminstration",
      iconeActive:"administrator",
      active:true,
      description:""
    }
  ];
  hover:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
