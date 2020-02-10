import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { BitcoinService } from '../services/bitcoin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit , OnDestroy {
   user: User = new User("");
  
  bitcoinRate = 0
  imgCoinsClassName = ''
  imgArrow = ""
  stopWatching: () => void;

  constructor(private usersService: UsersService,private bitcoinService: BitcoinService, private router: Router) { }
  get balance() {
    return +((this.bitcoinRate * this.user.coins).toFixed(2));
  }
  ngOnInit() {
      this.usersService.userSubject.subscribe(next=>{
      if (!next){
        this.router.navigate(['/login'])
      }
      else this.user = next;
    })

    this.stopWatching = this.bitcoinService.watchBitcoinRate()
    this.bitcoinService.bitcoinSubject.subscribe((rate)=>{
      this.imgArrow = rate > this.bitcoinRate ? "assets/icons/arrow-up.png" : rate < this.bitcoinRate ?"assets/icons/arrow-down.png" :"";
      this.bitcoinRate = rate;
      this.imgCoinsClassName = 'animated wobble'
      setTimeout(()=>this.imgCoinsClassName = '', 2000)
    })
  }

  ngOnDestroy() {
    this.stopWatching();
  }

}
