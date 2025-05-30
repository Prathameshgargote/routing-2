import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UuidService } from '../../services/uuid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss']
})
export class UserDashComponent implements OnInit {
userArr!:Array<Iuser>
  constructor(
private _userservice:UserService,
private _uuid:UuidService,
private _activeteRouter:ActivatedRoute,
private _router:Router,
private snacknbar:SnackbarService

  ) {
       this.userArr = this._activeteRouter.snapshot.data['userdata'];
   }

  ngOnInit(): void {
  }

}
