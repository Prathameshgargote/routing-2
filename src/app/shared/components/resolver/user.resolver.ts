import { inject, Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iuser } from '../../model/user';
import { UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<Iuser[] | null | Iuser> {
  private _userservice=inject(UserService)
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Iuser> | Iuser[] | null | Iuser {
    
    let proId: string | null = route.paramMap.get('id');
    // console.log(route.paramMap.get('id'));

    console.log(proId);

    if (proId) {
      return this._userservice.getuserbyId(proId);
    } else {
      return this._userservice.fetchAlluser();
    }
  }
}
