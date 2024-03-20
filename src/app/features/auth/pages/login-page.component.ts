import { Component } from '@angular/core';
import {LoginComponent} from "../components/login.component";

@Component({
  selector: 'mh-login-page',
  standalone: true,
  imports: [
    LoginComponent
  ],
  template: `
    <div class="p-2 h-100 d-flex justify-content-center align-items-center">
      <mh-login />
    </div>
  `,
  styles: ``
})
export class LoginPageComponent {

}
