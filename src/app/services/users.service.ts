import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
const USER_KEY = "user";

@Injectable()
export class UsersService {
  userSubject = new BehaviorSubject<User>(null);

  constructor(){
    this.getUserFromLocalStorage();
  }
   
  getUserFromLocalStorage(){
    let userJSON = localStorage.getItem(USER_KEY);
    if (userJSON){
      this.userSubject.next(JSON.parse(userJSON));
    }
    else{
      this.userSubject.next(null);
    }
  }
 

  public login(username: string): void {
    const user = new User(username);
    this.userSubject.next(user);
    localStorage.setItem(USER_KEY , JSON.stringify(user));
  }

}
