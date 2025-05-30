import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'routing-2';
  LoginStatus: boolean = false;
  // private _authservice=inject(AuthService)
  constructor(private _authservice: AuthService) {}
  ngOnInit(): void {
    this._authservice.loginSub$.subscribe((res) => {
      this.LoginStatus = res;
    });
  }
}
