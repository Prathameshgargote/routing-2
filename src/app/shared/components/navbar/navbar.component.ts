import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
     LoginStatus: boolean = false;
  constructor(
    private _authservise: AuthService,
    private _Route: Router,
    private Matdailog: MatDialog
  ) {}

  ngOnInit(): void {
    this._authservise.loginSub$.subscribe(res=>{
      this.LoginStatus=res
    })
  }
  LogOut() {
    let matdailogref = this.Matdailog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: 'Are You Sure You Want to Log Out',
    });

    matdailogref.afterClosed().subscribe((res) => {
      if (res) {
        this._authservise.removetoeknAndUserROle();
        this._Route.navigate(['']);
        this.LoginStatus=false
      }
    });
  }
}
