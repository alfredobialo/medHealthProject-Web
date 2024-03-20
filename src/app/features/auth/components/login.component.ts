import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'mh-login',
  standalone: true,
  imports: [FormsModule, JsonPipe ],
  template: `
    <div class="p-5 bg-white border-3 shadow-sm rounded-4 login-container">
      <div class="p-2 d-flex justify-content-center">
        <p class="lead"><i class="la la-2x la-user-lock"></i> &nbsp; Login To Continue</p>
      </div>
      <form name="loginForm" #loginForm="ngForm">
        <div class=" d-flex flex-column">
          <div class="mb-2 ">
            <p><i class="la la-user"></i> &nbsp;Email</p>
            <input type="email" #txtLogin="ngModel" [(ngModel)]="login.email"
                   placeholder="Valid Email address"
                   required name="txt-email"
                   [pattern]="emailPattern"
                   [class.border-danger]="txtLogin.invalid && !txtLogin.pristine"
                   class="form-control-lg form-control">
          </div>

          <div class="mb-2 ">
            <p><i class="la la-key"></i> &nbsp;Password</p>
            <input type="password" #txtPwd="ngModel"
                   required name="txt-password"
                   minlength="3"
                   [(ngModel)]="login.password"
                   [class.border-danger]="txtPwd.invalid && !txtPwd.pristine"
                   class="form-control-lg form-control">
          </div>
          <div class="mb-3 d-flex">
            <a href="#" class="btn btn-link btn-lg ">I Forgot my Password</a>
          </div>
          <div class="mb-4 d-flex justify-content-center flex-column">
            <button class="btn btn-primary btn-lg w-100 mb-3"
                    [disabled]="loginForm.invalid || processing"
                    (click)="loginUser()"
            >
              @if(processing){
                <i class=" spinner-grow "></i>&nbsp;
                <i class=" spinner-grow"></i>&nbsp;
                <i class=" spinner-grow"></i>&nbsp;
              }

              @if(!processing){<span>Login</span>}
            </button>
            <a href="#" class="btn btn-link btn-lg ">Don't have an Account? Register</a>
          </div>
        </div>
      </form>
    </div>

  `,
  styles: [`
    div.login-container{
      max-width : 450px;
      min-width:350px;
    }
  `]
})
export class LoginComponent {
  login : any  = {
    email : "alfred@gmail.com",
    password : "123456"
  }
  processing = false;
  emailPattern = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])";

  loginUser( ){
    console.log(this.login);
    this.processing = true;
    window.setTimeout(()=> {
      this.processing = false;
    }, 5000)

  }
}
