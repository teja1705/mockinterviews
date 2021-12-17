import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BookinterviewComponent } from './components/bookinterview/bookinterview.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InterviewRequestsComponent } from './components/interview-requests/interview-requests.component';
import { InterviewerDashboardComponent } from './components/interviewer-dashboard/interviewer-dashboard.component';
import { InterviewerWorkspaceComponent } from './components/interviewer-workspace/interviewer-workspace.component';
import { MyinterviewsComponent } from './components/myinterviews/myinterviews.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TestmysetupComponent } from './components/testmysetup/testmysetup.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'workspace/dashboard',
    component:DashboardComponent
  },
  {
    path:'workspace/bookinterview',
    component:BookinterviewComponent
  },
  {
    path:'workspace',
    component:WorkspaceComponent
  },
  {
    path:'workspace/myinterviews',
    component : MyinterviewsComponent
  },
  {
    path:'workspace/testmysetup',
    component:TestmysetupComponent
  },
  {
    path:'workspace/resources',
    component:ResourcesComponent
  },
  {
    path:'interviewer-dashboard',
    component:InterviewerDashboardComponent
  },
  {
    path:'interviewer-workspace',
    component:InterviewerWorkspaceComponent
  },
  {
    path:'interview-requests',
    component:InterviewRequestsComponent
  },
  {
    path:'history',
    component:HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
