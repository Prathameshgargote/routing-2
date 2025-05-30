import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productArr: Array<Iproduct> = [
    {
      pName: 'samsung M31',
      PId: '123',
      pStatus: 'inprogress',
      canReturn: 1,
    },
    {
      pName: 'Iphone',
      PId: '124',
      pStatus: 'delivered',
      canReturn: 0,
    },
    {
      pName: 'one plus',
      PId: '125',
      pStatus: 'dispatch',
      canReturn: 1,
    },
    {
      pName: 'vivo',
      PId: '126',
      pStatus: 'inprogress',
      canReturn: 0,
    },
  ];

  constructor() {}

  fetchAllproduct() {
    return this.productArr;
  }
  Addproduct(Addproduct: Iproduct) {
    this.productArr.push(Addproduct);
  }
  getproductbyId(id: string) {
    return this.productArr.find((product) => id === product.PId)!;
  }
  updateproduct(update: Iproduct) {
    let getindex = this.productArr.findIndex(
      (product) => product.PId === update.PId
    );
    this.productArr[getindex] = update;
  }
  removeproduct(remove: Iproduct) {
    let getindex = this.productArr.findIndex(
      (product) => product.PId === remove.PId
    );
    this.productArr.splice(getindex, 1);
  }
}
