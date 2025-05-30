import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { UserService } from '../../services/user.service';
import { UuidService } from '../../services/uuid.service';
import { Iuser } from '../../model/user';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userID!: string | null;
  userObj!: Iuser;
  constructor(
    private _userservice: UserService,
    private _uuid: UuidService,
    private _activeteRouter: ActivatedRoute,
    private _router: Router,
    private snacknbar: SnackbarService,
    private matdailog: MatDialog
  ) {
    this._activeteRouter.data.subscribe((res) => {
      this.userObj = res['userdata'];
      console.log(this.userObj);
    });
  }

  ngOnInit(): void {}

  onremove() {
    let matdailogref = this.matdailog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: `Are You Sure ! You Want to ${this.userObj.userName} is delete`,
    });

    matdailogref.afterClosed().subscribe((res) => {
      if (res) {
        this._userservice.removeUser(this.userObj);
        this.snacknbar.opensnackbar(
          `the ${this.userObj.userName} removed Successfully !`
        );
        this._router.navigate(['user']);
      }
    });
  }
}
