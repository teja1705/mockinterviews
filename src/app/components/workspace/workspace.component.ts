import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  dashboardView : Boolean = false
  bookinterviewView : Boolean = true
  myprofileView : Boolean = true
  resourcesView: Boolean = true
  myinterviewsView : Boolean = true
  testmysetupView : Boolean = true

  constructor(private route : Router) { }

  ngOnInit(): void {
    this.dashboardView  = false
    this.bookinterviewView = true
    this.myprofileView = true
    this.resourcesView = true
    this.myinterviewsView  = true
    this.testmysetupView  = true
  }
  dashboard(){
    this.dashboardView  = false
    this.bookinterviewView = true
    this.myprofileView = true
    this.resourcesView = true
    this.myinterviewsView  = true
    this.testmysetupView  = true
    document.getElementById('dashboard').className = "hover-menu-item"
    document.getElementById('bookinterview').className = ""
    document.getElementById('resources').className = ""
    document.getElementById('myprofile').className = ""
    document.getElementById('myinterviews').className = ""
    document.getElementById('testmysetup').className = ""
  }
  bookinterview(){
    this.dashboardView  = true
    this.bookinterviewView = false
    this.myprofileView = true
    this.resourcesView = true
    this.myinterviewsView  = true
    this.testmysetupView  = true
    document.getElementById('dashboard').className = ""
    document.getElementById('bookinterview').className = "hover-menu-item"
    document.getElementById('resources').className = ""
    document.getElementById('myprofile').className = ""
    document.getElementById('myinterviews').className = ""
    document.getElementById('testmysetup').className = ""
  }
  resources(){
    this.dashboardView  = true
    this.bookinterviewView = true
    this.myprofileView = true
    this.resourcesView = false
    this.myinterviewsView  = true
    this.testmysetupView  = true
    document.getElementById('dashboard').className = ""
    document.getElementById('bookinterview').className = ""
    document.getElementById('resources').className = "hover-menu-item"
    document.getElementById('myprofile').className = ""
    document.getElementById('myinterviews').className = ""
    document.getElementById('testmysetup').className = ""
  }
  myprofile(){
    this.dashboardView  = true
    this.bookinterviewView = true
    this.myprofileView = false
    this.resourcesView = true
    this.myinterviewsView  = true
    this.testmysetupView  = true
    document.getElementById('dashboard').className = ""
    document.getElementById('bookinterview').className = ""
    document.getElementById('resources').className = ""
    document.getElementById('myprofile').className = "hover-menu-item"
    document.getElementById('myinterviews').className = ""
    document.getElementById('testmysetup').className = ""
  }

  myinterviews(){
    this.dashboardView  = true
    this.bookinterviewView = true
    this.myprofileView = true
    this.resourcesView = true
    this.myinterviewsView  = false
    this.testmysetupView  = true
    document.getElementById('dashboard').className = ""
    document.getElementById('bookinterview').className = ""
    document.getElementById('resources').className = ""
    document.getElementById('myprofile').className = ""
    document.getElementById('myinterviews').className = "hover-menu-item"
    document.getElementById('testmysetup').className = ""
  }

  testmysetup(){
    this.dashboardView  = true
    this.bookinterviewView = true
    this.myprofileView = true
    this.resourcesView = true
    this.myinterviewsView  = true
    this.testmysetupView  = false
    document.getElementById('dashboard').className = ""
    document.getElementById('bookinterview').className = ""
    document.getElementById('resources').className = ""
    document.getElementById('myprofile').className = ""
    document.getElementById('myinterviews').className = ""
    document.getElementById('testmysetup').className = "hover-menu-item"
  }
}
