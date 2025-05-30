import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersArr: Array<Iuser> = [
    { userName: 'John', userId: '123', userRole: 'Candidate' },
    { userName: 'Emma', userId: '124', userRole: 'Admin' },
    { userName: 'Liam', userId: '125', userRole: 'SuperAdmin' },
    { userName: 'Olivia', userId: '126', userRole: 'Candidate' },
    { userName: 'Noah', userId: '127', userRole: 'Admin' },
    { userName: 'Ava', userId: '128', userRole: 'SuperAdmin' },
    { userName: 'William', userId: '129', userRole: 'Candidate' },
    { userName: 'Sophia', userId: '130', userRole: 'Admin' },
    { userName: 'James', userId: '131', userRole: 'SuperAdmin' },
    { userName: 'Isabella', userId: '132', userRole: 'Candidate' },
  ];
  constructor() {}

  fetchAlluser() {
    return this.usersArr;
  }
  Adduser(Adduser: Iuser) {
    this.usersArr.push(Adduser);
  }
  getuserbyId(id: string) {
    return this.usersArr.find((user) => id === user.userId)!;
  }
  updateuser(update: Iuser) {
    let getindex = this.usersArr.findIndex(
      (user) => user.userId === update.userId
    );
    this.usersArr[getindex] = update;
  }
  removeUser(remove: Iuser) {
    let getindex = this.usersArr.findIndex(
      (user) => user.userId === remove.userId
    );
    this.usersArr.splice(getindex, 1);
  }
}
