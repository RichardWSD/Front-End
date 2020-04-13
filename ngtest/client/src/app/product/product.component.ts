import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // dataSource: Observable<any>;
  // products: Array<any> = [];
  products: Observable<any>;

  constructor(private http: HttpClient) {
    let myHeaders = new HttpHeaders({
      'Authorization': 'my-auth-token'
    });
    //加了一个proxy.json的文件让/api开头的请求都请求到8000端口上
    //然后package.json的start参数现在变成ng serve --proxy-config proxy.conf.json
    this.products = this.http.get('/api/products', { headers: myHeaders });
    //  .pipe(map((res) => console.log(res)));
  }

  ngOnInit() {
    //在调用subscribe方法时，http方法才真正发送
    //也可以通过模板上的async管道来实现
    //this.dataSource.subscribe((data) => this.products = data);
  }

}
