import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { UserAuth } from '../interfaces/user-auth.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private auth: Auth) {}

  login({ email, password }: UserAuth) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({ email, password }: UserAuth) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}