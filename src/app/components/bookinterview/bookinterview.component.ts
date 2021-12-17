import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookinterview',
  templateUrl: './bookinterview.component.html',
  styleUrls: ['./bookinterview.component.scss']
})
export class BookinterviewComponent implements OnInit {

  picker : any
  book : boolean = true
  date : string
  slot : string;
  type : string;
  roleSelected : string
  optionFormGroup = new FormGroup({
    interviewType: new FormControl('hr'),
    role : new FormControl()
   })
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  slots : string[] = ["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","11:00 PM"];

  navigateToInterview(date : string, slot : string, type : string){
    this.date = date;
    this.slot = slot;
    this.type = this.optionFormGroup.controls['interviewType'].value;
    this.roleSelected = this.optionFormGroup.controls['role'].value;
    this.book = !this.book;
  }
  state = new FormControl();

  stateList: string[] = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa'];
  roles : string[] = ['Software Engineer', 'Project Manager', 'Testing', 'Developer', 'Team Lead', 'Manager']

  register(){
    window.localStorage.setItem('date', this.date);
    window.localStorage.setItem('slot', this.slot);
    window.localStorage.setItem('type', this.optionFormGroup.controls['interviewType'].value);
    window.localStorage.setItem('role',this.optionFormGroup.controls['role'].value);
    this.book = !this.book
    this.optionFormGroup.controls['interviewType'].setValue('');
    this.optionFormGroup.controls['role'].setValue('');
  }

  assign(){
    window.localStorage.setItem('date', this.date);
    window.localStorage.setItem('slot', this.slot);
    window.localStorage.setItem('type',this.optionFormGroup.controls['interviewType'].value);
    window.localStorage.setItem('role',this.optionFormGroup.controls['role'].value);
    this.book = !this.book
  }
}
