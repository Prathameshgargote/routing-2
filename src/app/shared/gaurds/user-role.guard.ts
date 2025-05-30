import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { flatMap, Observable } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserRoleGuard implements CanActivate {
  constructor(private _Snackbar: SnackbarService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let UserArr = route.data['userRole'];
    let userRole = localStorage.getItem('userRole');
    if (UserArr.includes(userRole)) {
      return true;
    } else {
      this._Snackbar.opensnackbar(`not allow to Access`);
      return false;
    }
  }
}
