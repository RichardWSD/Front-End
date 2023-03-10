import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService implements ProductService {

  getProduct(): import("./product.service").Product {
    return new Product(1, 'sumsung7', 4899, '最新款三星手机');
  }
 
  constructor(public logger:LoggerService) { 
  }
}
