import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../models/Coin';
import  { BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class BitcoinService {

  constructor(private http: HttpClient) { }

 lastRate:any = null;
  bitcoinSubject = new BehaviorSubject<number>(null);
  marketSubject = new BehaviorSubject<Coin>(null);
  transactionSubject = new BehaviorSubject<Coin>(null);

  
  public getBitcoinRate(dollars=1)  {
      let observ =  this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${dollars}`);
      // let observ1 =  this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${dollars}`);
      // let observ2 =  this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${dollars}`);
      // Observable.merge(observ , observ1 , observ2)
      // .bufferCount(3)
      observ.subscribe(data=>{
        this.bitcoinSubject.next(data)
      })
    }

  public getMarketPrice()  {
  this.http.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
  .subscribe((data:any)=>{
    const marketRate = new Coin(data.name,data.values,data.description)
    this.marketSubject.next(marketRate);
  }

  )
  return this.marketSubject; 
}

 public getConfirmedTransactions () {
  this.http.get('https://api.blockchain.info/charts/n-transactions?format=json&cors=true')
  .subscribe((data:any)=>{
    const transactionRate = new Coin(data.name,data.values,data.description)
    this.transactionSubject.next(transactionRate);
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
