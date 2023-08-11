import { Component } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {
  changetypesignup: string= "password";
  signupusers:any[]=[];
  singnupobj:any={
    email:'',
    password:'',
  };
  loginobj:any={
    email:'',
    password:'',
  };
onclicksignupcheckbox(){
  if(this.changetypesignup === "password"){
    this.changetypesignup = "text";

  }
  else{
    this.changetypesignup="password";
  }
}
signupformsubmit(){
  this.signupusers.push(this.singnupobj);
  localStorage.setItem('signupusers',JSON.stringify(this.signupusers)); 
  this.singnupobj ={
    email:'',
    password:'',
  }
  // console.log(this.singnupobj);
}
}
