import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stock = '';
  priceQuote: PriceQuote = new PriceQuote('', 0);

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  buyHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}

//中间人负责从一个组件接收数据，并且传递给另外一个组件
//一般就是利用两个组件的共同父组件作为中间人
//如果两个组件没有共同父组件，那么利用注入的服务作为中间人
