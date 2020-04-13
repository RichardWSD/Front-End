import { Component, OnInit, Input } from '@angular/core';
import { PriceQuote } from '../price-quote/price-quote.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  //绑定时单向的，从父组件到子组件，以为着子组件中属性发生变化不会反过来影响父组件
  // @Input()
  // stockCode: string;

  // @Input()
  // amount: number;

  @Input()
  priceQuote: PriceQuote;

  constructor() {
    // setInterval(() => {
    //   this.stockCode = 'Apple';
    // }, 3000);
  }

  ngOnInit() {
  }

}
