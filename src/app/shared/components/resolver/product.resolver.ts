import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Iproduct } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Array<Iproduct>|Iproduct|null > {
  constructor(
     private _productservice:ProductService,
        private _snackbar:SnackbarService,
        private _router:Router,
        private _activeteroute:ActivatedRoute
  ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Iproduct>|Array<Iproduct>|Iproduct |null {
    let proId:string |null=route.paramMap.get('id')
    // console.log(route.paramMap.get('id'));
    
    console.log(proId);
    
    if(proId){
    return  this._productservice.getproductbyId(proId)
    }else{
      return this._productservice.fetchAllproduct()
    }
    
  }
}
