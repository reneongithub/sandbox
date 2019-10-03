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

  userName: string;
  password: string;

  constructor(rbacService: RbacService) {

    this.rbacService = rbacService;

    this.slogan = "here we create a rbac login form";

  }

  // ngOnInit correlates to onEnter in vaadin
  ngOnInit() {

    // lets initialize credencials always new on enter
    this.userName = "?";
    this.password = "?";

  }

  login(){
    this.rbacService.login(
      this.userName, this.password,
      (rsp: any) => this.doOnLoginResponse(rsp)
    );
  }


  doOnLoginResponse(rsp: any){
    console.log("rbac service did for me:: "+rsp);
  }

}
