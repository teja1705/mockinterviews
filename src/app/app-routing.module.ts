import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BookinterviewComponent } from './components/bookinterview/bookinterview.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
