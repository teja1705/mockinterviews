import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder, private route : Router) { }
  Login : FormGroup

  ngOnInit(): void {
    this.Login = this.fb.group({
      user : ['', Validators.required],
      email : ['',[
        Validators.required,
        Validators.email
      ]],
      password : ['',[
        Validators.required
      ]]
    })
  }

  register(){
    this.route.navigate(['register'])
  }
  login(){
    if(this.Login.controls['user'].value === 'candidate'){
      this.route.navigate(['workspace'])
    }
    else{
      this.route.navigate(['interviewer-workspace'])
    }
  }

  get email(){
    return this.Login.get('email');
  }

  get password(){
    return this.Login.get('password');
  }

  get user(){
    return this.Login.get('user');
  }

}
