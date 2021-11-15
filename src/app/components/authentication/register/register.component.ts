import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder, private route : Router) { }
  Register : FormGroup

  ngOnInit(): void {
    this.Register = this.fb.group({
      firstname : ['',[
        Validators.required
      ]],
      lastname : ['',[
        Validators.required
      ]],
      email : ['',[
        Validators.required,
        Validators.email
      ]],
      password : ['',[
        Validators.required
      ]],
      confirmpassword : ['',[
        Validators.required
      ]]
    })
  }

  get firstname(){
    return this.Register.get('firstname');
  }
  get lastname(){
    return this.Register.get('lastname');
  }
  get email(){
    return this.Register.get('email');
  }
  get password(){
    return this.Register.get('password');
  }
  get confirmpassword(){
    return this.Register.get('confirmpassword');
  }
  register(){
    
  }
  login(){
    this.route.navigate(['login'])
  }
}
