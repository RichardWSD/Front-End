import { Component, OnInit, Injector } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  product: Product;
  private productService: ProductService;
  private logger:LoggerService;

  // constructor(private productService:ProductService) { }
  //自己通过注入器获取
  constructor(private injector: Injector) { //把Product1Component自己的注入器注入到构造函数这里
    this.productService = injector.get(ProductService);
    this.logger=injector.get(LoggerService);
    let log = this.logger.getLog(); //logger...
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
