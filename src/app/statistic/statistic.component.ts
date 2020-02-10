import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../services/bitcoin.service';
import { Coin } from '../models/Coin';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  marketData: Coin = null;
  transactionData: Coin= null;

  constructor(private bitcoinService:BitcoinService) { }
  ngOnInit() {
    this.bitcoinService.getMarketPrice().subscribe((chartData)=>{
      this.marketData = chartData;
    });
    this.bitcoinService.getConfirmedTransactions().subscribe((chartData)=>{
      this.transactionData = chartData;
    });
  }

}
