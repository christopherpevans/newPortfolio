import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
// import { AuthService } from '../services/auth.service';
// import * as firebase from 'firebase';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

// export class LoginComponent {
//   message: string;

//   constructor(public authService: AuthService, public router: Router) {
//     this.setMessage();
//   }

//   setMessage() {
//     this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
//   }

//   login() {
//     this.message = 'Trying to log in ...';

//     this.authService.login();
//     // .subscribe(() => {
//     //   this.setMessage();
//     //   if (this.authService.isLoggedIn) {
//     //     // Get the redirect URL from our auth service
//     //     // If no redirect has been set, use the default
//     //     const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

//     //     // Redirect the user
//     //     this.router.navigate([redirect]);
//     //   }
//     // });
//   }

//   logout() {
//     this.authService.logout();
//     this.setMessage();
//   }
// }
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    const email = this.f.email.value;
    const password = this.f.password.value;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(email, password);
    const redirect = this.authService.redirectUrl
      ? this.authService.redirectUrl
      : '/admin';

    // Redirect the user
    this.router.navigate([redirect]);
  }
}
