import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-requests',
  templateUrl: './interview-requests.component.html',
  styleUrls: ['./interview-requests.component.scss']
})
export class InterviewRequestsComponent implements OnInit {

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
  hide(id : string){
    document.getElementById(id).style.display = 'None';
  }

}
