import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
import { WebSocketService } from '../shared/web-socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = '';
  isCommentHidden: true;
  isWatched: boolean = false;
  currentBid: number;
  subscription: Subscription;

  //注入器会根据ActivatedRoute这个token去提供器里面找一个合适的类注入给routeInfo
  constructor(private routeInfo: ActivatedRoute,
    private productService: ProductService,
    private wsService: WebSocketService) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];
    this.productService.getProduct(productId)
      .subscribe(product => {
        this.product = product;
        this.currentBid = product.price;
      });
    this.productService.getCommentsForProductId(productId)
      .subscribe(comments => this.comments = comments);
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    //重新统计商品评分
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    //清空评论状态
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

  watchProduct() {
    if (this.subscription) {
      //这里只是把订阅取消了，但是ws连接还在，如果不断地来回点会造成内存泄漏，在web-socket.service.ts的定义Observable的最后加上return ()=>this.ws.close();就可以解决这个问题
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      this.isWatched = !this.isWatched;
      this.subscription = this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
        .subscribe(
          products => {
            let product = products.find(p => p.productId == this.product.id);
            this.currentBid = product.bid;
          }
        );
    }
  }
}
