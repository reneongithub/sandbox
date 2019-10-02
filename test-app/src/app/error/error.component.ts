import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  msg: string;

  constructor() {

    this.msg = "page not found...";

  }

  ngOnInit() {
  }

}
