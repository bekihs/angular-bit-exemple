import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from './modules/Coin';
import { Subject } from 'rxjs/Subject';
import  {Observable} from 'rxjs/Rx';

@Injectable()
export class BitcoinService {

  constructor(private http: HttpClient) { }

 lastRate:any = null;
 bitcoinRate:Coin = null;
  bitcoinSubject = new Subject<Coin>();
  marketRate:Coin = null;
  marketSubject = new Subject<Coin>();
  transactionRate:Coin = null;
  transactionSubject = new Subject<Coin>();

  
  public getBitcoinRate(dollars=1)  {
      let observ =  this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${dollars}`);
      let observ1 =  this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${dollars}`);
      let observ2 =  this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${dollars}`);
      Observable.merge(observ , observ1 , observ2)
      .bufferCount(3)
                .subscribe(data=>{
        console.log(data);
      })
    }

  public getMarketPrice()  {
  this.http.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
  .subscribe((data:any)=>{
    this.marketRate = new Coin(data.name,data.values,data.description)
    this.marketSubject.next(this.marketRate);
  }

  )
  return this.marketSubject; 
}

 public getConfirmedTransactions () {
  this.http.get('https://api.blockchain.info/charts/n-transactions?format=json&cors=true')
  .subscribe((data:any)=>{
    this.transactionRate = new Coin(data.name,data.values,data.description)
    this.transactionSubject.next(this.transactionRate);
  });
  return this.transactionSubject;
}

// public watchBitcoinRate(cb) {
//   const getRate = async ()=>{
//       this.getBitcoinRate(1).subscribe((rate:number)=>{

//         if (rate === this.lastRate) return;
//         this.lastRate = rate;        
//         rate = +rate.toFixed(8)
//         cb(rate)
//     })
      
//   }
//   // Kick it off immediately and then every 4 secs
//   getRate();
//   var interval = setInterval(getRate, 4000)
//   return ()=>clearInterval(interval)
// }
 

}
