import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from './modules/user';
import { Subject } from 'rxjs/Subject';
const USER_KEY = "user";

@Injectable()
export class UsersService {
  constructor(){
    this.getUserFromLocalStorage();
  }
   
  getUserFromLocalStorage(){
    let userJSON = localStorage.getItem(USER_KEY);
    if (userJSON){
      this.user = JSON.parse(userJSON);
      this.userSubject.next(this.user);
    }
    else{
      this.userSubject.next(null);
    }
  }

  public user = null;
  userSubject = new Subject<User>();
  public userObservable = this.userSubject.asObservable();

  public login(username: string): void {
    this.user = new User(username);
    this.userSubject.next(this.user);
    localStorage.setItem(USER_KEY , JSON.stringify(this.user));
  }

}
