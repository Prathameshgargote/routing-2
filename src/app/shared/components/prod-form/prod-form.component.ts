import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../services/snackbar.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproduct } from '../../model/product';
import { flatMap } from 'rxjs';
import { UuidService } from '../../services/uuid.service';
import { Icandeactivate } from '../../model/candeactivate';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss'],
})
export class ProdFormComponent implements OnInit,Icandeactivate {
  prodId!: string | null;
  prodObj!: Iproduct;
  Iseditmode: boolean = false;
  prodform!: FormGroup;

  constructor(
    private _productservice: ProductService,
    private _snackbar: SnackbarService,
    private _router: Router,
    private _activeteroute: ActivatedRoute,
    private uuid: UuidService,
    private _matdailog:MatDialog
  ) {}

  ngOnInit(): void {
    this.createform();
    this.pathcvalue();
  }
  pathcvalue() {
    this._activeteroute.paramMap.subscribe((res) => {
      this.prodId = res.get('id');
      if (this.prodId) {
        this.Iseditmode = true;
        this.prodObj = this._productservice.getproductbyId(this.prodId);

        this.prodform.patchValue({
          ...this.prodObj,
          canReturn: this.prodObj.canReturn ? 'yes' : 'no',
        });
      }
    });
  }

  createform() {
    this.prodform = new FormGroup({
      pName: new FormControl(null, Validators.required),
      pStatus: new FormControl(null, Validators.required),
      canReturn: new FormControl(null, Validators.required),
    });
  }

  onsubmit() {
  if(this.prodform.valid){
      if (this.Iseditmode) {
      let updateobj = {
        ...this.prodform.value,
        canReturn: this.prodform.value['canReturn'] === 'yes' ? 1 : 0,
        PId: this.prodId,
      };
      console.log(updateobj);
      this._productservice.updateproduct(updateobj);
      this._snackbar.opensnackbar(
        `the ${updateobj.pName} is updated Successfully`
      );
      this.prodform.reset();
      this._router.navigate(['product'])

    } else {
      let newobj = { ...this.prodform.value, PId: this.uuid.generateUuid() };
      console.log(newobj);
      this._productservice.Addproduct(newobj);
      this._snackbar.opensnackbar(`the ${newobj.pName} is added Successfully`);
      this.prodform.reset();
      this._router.navigate(['product'])
    }
  }
  }
canDeactivete() {
    if (this.prodform.dirty && this.Iseditmode) {
      let matdailogRef = this._matdailog.open(GetconfirmComponent, {
        width: '500px',
        disableClose: true,
        data: `Are You Sure, You want to disacard changes ?`,
      });
      return matdailogRef.afterClosed();
    }
    return true;
  }
  
}
