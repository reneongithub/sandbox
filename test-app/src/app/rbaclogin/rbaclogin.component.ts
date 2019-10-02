import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rbaclogin',
  templateUrl: './rbaclogin.component.html',
  styleUrls: ['./rbaclogin.component.css']
})
export class RbacloginComponent implements OnInit {


  slogan: string;

  constructor() {

    this.slogan = "here we create a rbac login";

  }

  ngOnInit() {
  }

}
