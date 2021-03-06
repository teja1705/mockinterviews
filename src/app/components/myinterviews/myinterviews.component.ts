import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myinterviews',
  templateUrl: './myinterviews.component.html',
  styleUrls: ['./myinterviews.component.scss']
})
export class MyinterviewsComponent implements OnInit {
  date : string
  slot : string
  type : string
  role : string
  constructor() { }

  ngOnInit(): void {
    this.date = window.localStorage.getItem('date');
    this.slot = window.localStorage.getItem('slot');
    this.type = window.localStorage.getItem('type');
    this.role = window.localStorage.getItem('role');
  }

  assign(){
    this.date = window.localStorage.getItem('date');
    this.slot = window.localStorage.getItem('slot');
    this.type = window.localStorage.getItem('type');
    this.role = window.localStorage.getItem('role');
  }

}
