import { Component } from '@angular/core';
import { User } from './models/user';
import { UsersService } from './services/users.service';
import { BitcoinService } from './services/bitcoin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = null;
  constructor(private usersService: UsersService,
    private bitcoinService: BitcoinService) { }

  ngOnInit() {
    // this.bitcoinService.getBitcoinRate(100);
    this.usersService.userSubject.subscribe(next => {
      this.user = next;
    })
  }
}
