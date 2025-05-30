import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss']
})
export class GetconfirmComponent implements OnInit {
msg!:string
  constructor(
    private _matdailogre: MatDialogRef<GetconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public getmsg: string
  ) { 
    this.msg=getmsg
  }

  ngOnInit(): void {
  }
Onremove(flag:boolean){
this._matdailogre.close(flag)
}
}
