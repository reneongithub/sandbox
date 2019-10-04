import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headbanner',
  templateUrl: './headbanner.component.html',
  styleUrls: ['./headbanner.component.css']
})
export class HeadbannerComponent implements OnInit {

  slogan: string;

  constructor() {
    this.slogan = 'Wmedia´s getting started with Angular';
  }

  ngOnInit() {
  }

}
