import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  constructor(public AuthService: AuthService, public router: Router) { }

  login() {
    this.AuthService.login({email: this.email,password: this.password}).then(() => {
      this.router.navigateByUrl('/');
    })
  }
}
