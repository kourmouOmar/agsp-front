import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profilePicture=null;
  fullName:string="admin admin";
  constructor() { }

  ngOnInit(): void {
  }
  logout(){}

}
