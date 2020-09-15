import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import{Login} from '../login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clicked:boolean=true;
  loginForm: FormGroup;
  loginfields={email:'',pwd:''};
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  this.loginForm = new FormGroup({
    emails: new FormControl(this.loginfields.email, [
        Validators.required,

        Validators.email
      ]),
     pwd: new FormControl(this.loginfields.pwd, [
        Validators.required
      ]),
    });

    //   loginForm = this.fb.group({
    // email: ['', Validators.required],
    // pwd: ['']
  // });
  }
  get emails() { return this.loginForm.get('emails'); }
  get pwd() { return this.loginForm.get('pwd'); }
change(){
  this.clicked=false;
}
submission(){
console.log(this.loginForm.value);
// this.loginfields=this.loginForm.value;
// console.log(this.loginfields);
}
}