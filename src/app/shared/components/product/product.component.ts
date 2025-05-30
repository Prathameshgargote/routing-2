import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { Iproduct } from '../../model/product';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  prodcutObj!: Iproduct;
  constructor(
    private _productservice: ProductService,
    private _snackbar: SnackbarService,
    private _router: Router,
    private _activeteroute: ActivatedRoute,
    private _matdailog: MatDialog
  ) {
    console.log('cunstructor');
    console.log(this._activeteroute.data);
    this._activeteroute.data.subscribe((res) => {
      this.prodcutObj = res['productdata'];
      console.log(this.prodcutObj);
    });
  }

  ngOnInit(): void {}

  onremove() {
    let matdailogref = this._matdailog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: `Are You Sure !You want to delete ${this.prodcutObj.pName} product`,
    });

    matdailogref.afterClosed().subscribe((res) => {
      if (res) {
        this._productservice.removeproduct(this.prodcutObj);
        this._snackbar.opensnackbar(
          `the product ${this.prodcutObj.pName} is Rremove Successfully`
        );
        this._router.navigate([`product`]);
      }
    });
  }
}
