import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // private titleFilter: FormControl = new FormControl();
  // private keyword: string;
  private products: Observable<Product[]>;
  private imgUrl = 'http://placehold.it/320x150';

  constructor(private productService: ProductService) {
    // this.titleFilter.valueChanges
    // .debounceTime(500)
    //   .subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    //订阅搜索事件
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }

}

