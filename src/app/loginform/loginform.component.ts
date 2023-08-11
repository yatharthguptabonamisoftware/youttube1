import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  changetype : boolean = true;
oncheckboxclick(){
  this.changetype = !this.changetype;
}
signupusers:any[]=[];
singnupobj:any={
  email:'',
  password:'',
};
loginobj:any={
  email:'',
  password:'',
};
constructor(private router:Router){

}
ngOnInit():void{
const localdata = localStorage.getItem('signupusers');
if(localdata!=null){
  this.signupusers = JSON.parse(localdata);
}
}
 
 
 loginformsubmit(){ 
  const isuser = this.signupusers.find(m => m.username == this.loginobj.username && m.password == this.loginobj.password);
  if( isuser != undefined){
    this.router.navigate(['home']);
  }
  else{
alert('wrong id or password');
  }
  // console.log(this.signupusers);
 }
}
