import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserAuth } from '../interfaces/user-auth.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public auth: AngularFireAuth) {}

  login({ email, password }: any) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register({ email, password }: any) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }
}