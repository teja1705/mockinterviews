import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookinterviewComponent } from './components/bookinterview/bookinterview.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MyinterviewsComponent } from './components/myinterviews/myinterviews.component';
import { TestmysetupComponent } from './components/testmysetup/testmysetup.component';
import {MatSelectModule} from '@angular/material/select';
import { InterviewerDashboardComponent } from './components/interviewer-dashboard/interviewer-dashboard.component';
import { InterviewerWorkspaceComponent } from './components/interviewer-workspace/interviewer-workspace.component';
import { HistoryComponent } from './components/history/history.component';
import { InterviewRequestsComponent } from './components/interview-requests/interview-requests.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    DashboardComponent,
    BookinterviewComponent,
    ResourcesComponent,
    MyprofileComponent,
    WorkspaceComponent,
    MyinterviewsComponent,
    TestmysetupComponent,
    InterviewerDashboardComponent,
    InterviewerWorkspaceComponent,
    HistoryComponent,
    InterviewRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
