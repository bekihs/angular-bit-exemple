import { Component } from '@angular/core';
import { User } from './modules/user';
import { UsersService } from './users.service';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User = null;
  constructor(private usersService: UsersService ,
             private bitcoinService: BitcoinService) { }

  ngOnInit() {
      this.bitcoinService.getBitcoinRate(100);
      this.user = this.usersService.user;
      this.usersService.userSubject.subscribe(next=>{
      this.user = next;
    })
  }
}
