import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor() {}
  signIn() {
    this.isLoggedIn = true;
  }

  signOut() {
    this.isLoggedIn = false;
  }
}
