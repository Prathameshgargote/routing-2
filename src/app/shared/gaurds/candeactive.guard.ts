import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Icandeactivate } from '../model/candeactivate';

@Injectable({
  providedIn: 'root'
})
export class CandeactiveGuard implements CanDeactivate<Icandeactivate> {
  canDeactivate(
    component: Icandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivete()
  }
  
}
