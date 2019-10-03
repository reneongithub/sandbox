import { Component, OnInit } from '@angular/core';
import { RbacService } from '../services/rbac.service';

@Component({
  selector: 'app-rbaclogin',
  templateUrl: './rbaclogin.component.html',
  styleUrls: ['./rbaclogin.component.css']
})
export class RbacloginComponent implements OnInit {

  rbacService: RbacService;

  slogan: string;

  constructor(rbacService: RbacService) {

    this.rbacService = rbacService;

    this.slogan = "here we create a rbac login form";

  }

  ngOnInit() {
    this.rbacService.login("kuehnemann_wmedia", "kuehnemann_wmedia");
  }

}
