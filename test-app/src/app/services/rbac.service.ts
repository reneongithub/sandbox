import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RbacService {

  constructor() { }


  login(username: string, pass: string)
  {
    console.log("user: "+username+" - pass: "+pass);
  }

}
