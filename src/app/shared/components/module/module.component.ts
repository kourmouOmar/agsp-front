import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  @Input() module: any;
  @Input() index:any;
  hover:boolean= false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  /**
   *
   * @param module
   */
  openModule(module: any) {
    this.router.navigate([module]);
  }

  changeModuleImage(active: boolean) {
  }

}
