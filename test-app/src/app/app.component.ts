import { Component } from '@angular/core';
import { NavItem } from './app.navitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  navList: NavItem[];

  constructor(){



    this.createNavList();

  }

  createNavList(){

    this.navList = new Array();

    this.navList.push(new NavItem("Home", "welcome"));
    this.navList.push(new NavItem("Rbac", "rbaclogin"));

  }
  
}
