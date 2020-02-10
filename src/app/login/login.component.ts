import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";

  constructor(private usersService: UsersService , private router: Router) { }
  
  
  ngOnInit() {
    this.usersService.userSubject.subscribe(user=>{
     if (user){
          this.router.navigate(['/main'])
     }
   })
 }

  login(username:string){
    if (username.length>0){
      this.usersService.login(username);
    }
  }
 

}
