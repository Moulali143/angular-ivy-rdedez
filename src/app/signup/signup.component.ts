import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{Signup}from '../signup';
import { Observable } from 'rxjs'; 
import{BookserviceService} from '../bookservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupfields={firstName:"",lastName:"",middlename:"",emails:"",password:"",dob:"",phoneno:"",hsno:"",street:"",city:"",state:"",pincode:""};
   pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,16}$";
    mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
    passflds:any = [];

   signupForm = new FormGroup({
    firstName: new FormControl(this.signupfields.firstName,[Validators.required
    ,Validators.maxLength(10)]),
   lastName:new FormControl(this.signupfields.lastName,[Validators.maxLength(10)]),
    middlename:new FormControl(this.signupfields.middlename,[Validators.maxLength(10)]),
    emails:new FormControl(this.signupfields.emails,[ Validators.required,
        Validators.minLength(4),
        Validators.email]),
    password:new FormControl(this.signupfields.password,[Validators.minLength(8),Validators.maxLength(12),Validators.pattern(this.pwdPattern)]),
    dob:new FormControl(this.signupfields.dob,[Validators.required]),
    phoneno:new FormControl(this.signupfields.phoneno,[Validators.pattern(this.pwdPattern)]),
     hsno:new FormControl(this.signupfields.hsno,[ Validators.required]),
     street:new FormControl(this.signupfields.street),
     city:new FormControl(this.signupfields.city),
     state:new FormControl(this.signupfields.state),
     pincode:new FormControl(this.signupfields.pincode)
  });
  constructor(private route:Router ,private excelService:BookserviceService) { }

  ngOnInit() {
  }
 get firstName() { return this.signupForm.get('firstName'); }
 get middlename() { return this.signupForm.get('middlename'); }
 get lastName() { return this.signupForm.get('lastName'); }
 get dob() { return this.signupForm.get('dob'); }
 get password() { return this.signupForm.get('password'); }
 get phoneno() { return this.signupForm.get('phoneno'); }
 get emails() { return this.signupForm.get('emails'); }
 get hsno() { return this.signupForm.get('hsno'); }
 get street() { return this.signupForm.get('street'); }

change(){
  this.signupfields=this.signupForm.value;
  console.log(this.signupForm.value.firstName);
  this.passflds=[{firstname:this.signupForm.value.firstName}]
  // this.passflds.push({firstName: this.signupfields.firstName, lastName: this.signupfields.lastName,middlename:this.signupfields.middlename,email: this.signupfields.emails, dob:this.signupfields.dob,password:this.signupfields.password,phoneno:this.signupfields.phoneno});
  this.excelService.exportAsExcelFile(this.passflds, 'sample');
this.route.navigateByUrl('/login', { skipLocationChange: true });

}
}