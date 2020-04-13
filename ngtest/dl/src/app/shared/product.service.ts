import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

//有这个装饰器时才能把别的东西注入到这个类中
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public logger:LoggerService) { }

  getProduct(): Product {
    this.logger.log('getProduct方法被调用');
    return new Product(0, 'iPhone7', 5899, '最新款苹果手机');
  }
}

export class Product {
  constructor(public id: number,
    public title: string,
    public price: number,
    public desc: string) {

  }
}
