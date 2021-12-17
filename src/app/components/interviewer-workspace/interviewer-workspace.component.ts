import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewer-workspace',
  templateUrl: './interviewer-workspace.component.html',
  styleUrls: ['./interviewer-workspace.component.scss']
})
export class InterviewerWorkspaceComponent implements OnInit {
  dashboardView : boolean = false
  interviewRequestsView : boolean = true
  historyView : boolean = true

  constructor() { }

  ngOnInit(): void {
    this.dashboardView = false
    this.interviewRequestsView = true
    this.historyView = true
    document.getElementById('dashboard').className = "hover-menu-item"
  }

  dashboard(){
    this.dashboardView = false
    this.interviewRequestsView = true
    this.historyView = true
    document.getElementById('dashboard').className = "hover-menu-item"
    document.getElementById('bookinterview').className = ""
    document.getElementById('myinterviews').className = ""
  }
  interviewRequests(){
    this.dashboardView = true
    this.interviewRequestsView = false
    this.historyView = true
    document.getElementById('dashboard').className = ""
    document.getElementById('bookinterview').className = "hover-menu-item"
    document.getElementById('myinterviews').className = ""
  }
  history(){
    this.dashboardView = true
    this.interviewRequestsView = true
    this.historyView = false
    document.getElementById('dashboard').className = ""
    document.getElementById('bookinterview').className = ""
    document.getElementById('myinterviews').className = "hover-menu-item"
  }

}
