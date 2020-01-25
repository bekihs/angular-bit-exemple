import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
      this.user = this.usersService.user;
      this.usersService.userSubject.subscribe(next=>{
      this.user = next;
      if (!this.user){
        this.router.navigate(['/login'])
      }
    })

    // this.stopWatching = this.bitcoinService.watchBitcoinRate((rate)=>{
    //   this.imgArrow = rate > this.bitcoinRate ? "assets/icons/arrow-up.png" : rate < this.bitcoinRate ?"assets/icons/arrow-down.png" :"";
    //   this.bitcoinRate = rate;
    //   this.imgCoinsClassName = 'animated wobble'
    //   setTimeout(()=>this.imgCoinsClassName = '', 2000)
    // })
  }

  // ngOnDestroy() {
  //   this.stopWatching();
  // }



}
