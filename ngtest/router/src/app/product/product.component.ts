import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;
  private productName: string;

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.productId=this.routerInfo.snapshot.queryParams['id'];
    // this.productId=this.routerInfo.snapshot.params['id'];//使用参数快照会在我们从商品详情页跳商品详情页时，
    //由于ProductComponent并没有重新创建，所以ngOnInit方法也没被执行，
    //页面上显示的详情ID没有重新被赋值，用参数订阅可以解决这个问题

    this.routerInfo.params.subscribe((params: Params) => this.productId = params["id"]);
    this.routerInfo.data.subscribe((data: { product: Product }) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    })
  }

}

export class Product {
  constructor(public id: number, public name: string) {

  }
}
