import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  private authState: Observable<firebase.User>;
  private currentUser: firebase.User = null;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe((user) => {
      if (user) {
        this.currentUser = user;
        this.isLoggedIn = true;
      } else {
        this.currentUser = null;
        this.isLoggedIn = false;
      }
    });
  }

  getAuthState() {
    return this.authState;
  }

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    // this.router.navigate(['/admin']);
  }

  logout(): void {
    this.isLoggedIn = false;
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {
        // An error happened.
      });
    this.router.navigate(['/']);
  }
}
