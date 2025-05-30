import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { UserService } from '../../services/user.service';
import { UuidService } from '../../services/uuid.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flatMap, Observable } from 'rxjs';
import { Iuser } from '../../model/user';
import { Icandeactivate } from '../../model/candeactivate';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, Icandeactivate {
  userForm!: FormGroup;
  Iseditmode: boolean = false;
  userId!: string | null;
  userObj!: Iuser;
  constructor(
    private _userservice: UserService,
    private _uuid: UuidService,
    private _activeteRouter: ActivatedRoute,
    private _router: Router,
    private snacknbar: SnackbarService,
    private _matdailog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createform();
    this.pathcvalue();
  }

  pathcvalue() {
    this._activeteRouter.paramMap.subscribe((res) => {
      this.userId = res.get('id');
      if (this.userId) {
        this.Iseditmode = true;
        this.userObj = this._userservice.getuserbyId(this.userId);
        console.log(this.userObj);

        this.userForm.patchValue(this.userObj);
      }
    });
  }

  createform() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
    });
  }

  onsubmit() {
    if (this.Iseditmode) {
      let updateobj = {
        ...this.userForm.value,
        userId: this.userId,
      };
      console.log(updateobj);
      this._userservice.updateuser(updateobj);
      this.snacknbar.opensnackbar(
        `the ${updateobj.userName} is updated Successfully`
      );
      this.userForm.reset();
      this._router.navigate(['user']);
    } else {
      let newobj = {
        ...this.userForm.value,
        userId: this._uuid.generateUuid(),
      };
      console.log(newobj);
      this._userservice.Adduser(newobj);
      this.snacknbar.opensnackbar(
        `the ${newobj.userName} is added Successfully`
      );
      this.userForm.reset();
      this._router.navigate(['user']);
    }
  }

  canDeactivete() {
    if (this.userForm.dirty && this.Iseditmode) {
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
