import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  category: any;
  
  constructor(private formBuilder: FormBuilder, private user:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }); 
  }
  onSubmitloginForm(){
    this.submitted=true;
    console.log("inputs", this.loginForm.value);
    if(this.loginForm.valid){
      console.log("valid",this.loginForm.value);
      let data= {
          email:this.loginForm.value.email,
          password:this.loginForm.value.password,
      }
    }
  }}
