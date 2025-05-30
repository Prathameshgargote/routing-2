import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-prod-dash',
  templateUrl: './prod-dash.component.html',
  styleUrls: ['./prod-dash.component.scss'],
})
export class ProdDashComponent implements OnInit {
  productArr!: Array<Iproduct>;
  constructor(
    private _productservice: ProductService,
    private _snackbar: SnackbarService,
    private _router: Router,
    private _activeteroute: ActivatedRoute
  ) {
    this.productArr = this._activeteroute.snapshot.data['productdata'];
  }

  ngOnInit(): void {}
}
