import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  REGISTE_URL: string = `${environment.AUTH_URL}/register`;
  LOGIN_URL: string = `${environment.AUTH_URL}/login`;
  loginSub$: Subject<boolean> = new Subject<boolean>();
  constructor(private _http: HttpClient) {}

  register(regObj: any): Observable<any> {
    return this._http.post<any>(this.REGISTE_URL, regObj);
  }
  LogIn(regObj: any): Observable<any> {
    return this._http.post<any>(this.LOGIN_URL, regObj);
  }

  savetoekn(token: string) {
    localStorage.setItem('token', token);
  }

  saveuserRole(userRole: string) {
    localStorage.setItem('userRole', userRole);
  }
  gettoken() {
    localStorage.getItem('token');
  }
  getuserrole() {
    localStorage.getItem('userRole');
  }

  removetoeknAndUserROle() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('token');
  }
}
