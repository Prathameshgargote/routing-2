import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  alredyHaveAccount: any;
  SignUpFrom!: FormGroup;
  LogInFrom!: FormGroup;
  constructor(
    private _authservice: AuthService,
    private _snackbar: SnackbarService,
    private Router: Router
  ) {}
  ngOnInit(): void {
    this.createSignUpFrom();
    this.createLogInFrom();
  }

  createSignUpFrom() {
    this.SignUpFrom = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
    });
  }

  createLogInFrom() {
    this.LogInFrom = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSignUp() {
    if (this.SignUpFrom.valid) {
      let signup = this.SignUpFrom.value;
      this._authservice.register(signup).subscribe({
        next: (res) => {
          console.log(res);
          this._snackbar.opensnackbar(res.message);
          this.alredyHaveAccount = true;
          this.LogInFrom.reset();
        },
        error: (err) => {
          console.log(err);
          this._snackbar.opensnackbar(err.error.message);
        },
      });
    }
  }

  OnlogIn() {
 if(this.LogInFrom.valid){
     let login = this.LogInFrom.value;
    console.log(login);
    this._authservice.LogIn(login).subscribe({
      next: (res) => {
        console.log(res);
        this._authservice.loginSub$.next(true);
        this._authservice.savetoekn(res.token);
        this._authservice.saveuserRole(res.userRole);
        this._snackbar.opensnackbar(res.message);
        this.Router.navigate(['home']);
        this.LogInFrom.reset();
      },
      error: (err) => {
        console.log(err);
        this._snackbar.opensnackbar(err.error.message);
      },
    });
 }
  }

  get l() {
    return this.LogInFrom.controls;
  }
  get s() {
    return this.SignUpFrom.controls;
  }
}
