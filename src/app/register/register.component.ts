import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  username!: string;
  password!: string;
  passwordRepeat?: string;
  
  constructor(public auth: AuthService) { }

  register(): void {
    if (this.password === this.passwordRepeat) {
      this.auth.register({email: this.email,password: this.password});
    } else {
      console.log('Passwords do not match');
    }
  }

}
