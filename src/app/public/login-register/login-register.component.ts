import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';



@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  
  public newUser: User;
  public formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }
  public onSignUpClick(signupForm){
    this.formSubmitted = true;
    if(signupForm.valid){
      this.singUp();
    }
    else{
      //something goes here
    }
  }
  public singUp(){
    this.usersService.addUser(this.newUser)
  }

}
