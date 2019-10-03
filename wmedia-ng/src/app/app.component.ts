import { Component } from '@angular/core';
import { NavItem } from './app.navitem';
import { RbacService } from './services/rbac.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  rbacService: RbacService;

  navList: NavItem[];

  constructor(rbacService: RbacService) {

    this.rbacService = rbacService;

    this.createNavList();

  }

  createNavList(){

    this.navList = new Array();

    this.navList.push(new NavItem("Home", "welcome"));
    this.navList.push(new NavItem("Rbac", "rbaclogin"));

  }
  
}
