import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  @Input() module: any;
  @Input() index:any;
  hover:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   *
   * @param module
   */
  openModule(module: any) {

  }

  changeModuleImage(active: boolean) {
  }

}
