import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode: string = 'IBM';
  price: number;
  //通过EventEmitter发射事件出去，要选@angular/core中定义的那个EventEmitter类
  //@Output('priceChange')，可以通过这种方式重命名事件名字
  @Output()
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {
      let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
      //发射事件
      this.lastPrice.emit(priceQuote);
    }, 1000)
  }

  ngOnInit() {
  }

  buyStock(event) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }

}

export class PriceQuote {
  constructor(public stockCode: string,
    public lastPrice: number) {

  }
}