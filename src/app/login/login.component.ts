import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  inputplaceholder="Account Number"

  acno=''     //or  acno:any
  psw=''

  

  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void{

  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    var userDetails=this.ds.userDetails
    
    if(acnum in userDetails){
    
      
      if(psw==userDetails[acnum]["password"]){
        alert("Login Success")
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("Incorrect account number or not registered")
    }
  }






  // acnoChange(event:any){
    
  //   this.acno=event.target.value
  //   //  console.log(this.acno);
  // }

  // passwordChange(event:any){
  //   this.pswd=event.target.value
  //   //  console.log(this.pswd);
    
  // }
    
}
