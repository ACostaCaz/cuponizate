import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  
  constructor(public AuthService: AuthService, public router: Router) { }
  register() {
    if (this.password === this.passwordRepeat) {
      this.AuthService.register({email: this.email,password: this.password}).then(() => {
        this.router.navigateByUrl('/login');
      })
    } else {
      console.log('Passwords do not match');
    }
  }
}
