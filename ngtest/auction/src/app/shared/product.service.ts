import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getAllCategories(): string[] {
    return ["电子产品", "硬件设备", "图书"];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products') as Observable<Product[]>;
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('/api/products/' + id) as Observable<Product>;
  }

  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get('/api/products/' + id + '/comments') as Observable<Comment[]>;
  }

  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get('/api/products', { params: this.encodeParams(params) }) as Observable<Product[]>;
  }
  encodeParams(params: ProductSearchParams): HttpParams {
    let result: HttpParams = new HttpParams();
    Object.keys(params)
      .filter(key => params[key])
      // .reduce((sum: HttpParams, key: string) => {
      //   sum.set(key, params[key]);
      //   return sum;
      // }, new HttpParams());
      .forEach(key => {
        result = result.set(key, params[key].toString());
      });
    return result;
  }
}

export class ProductSearchParams {
  constructor(public title: string,
    public price: number,
    public category: string) { }
}

export class Product {
  constructor(public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>) {

  }
}

export class Comment {
  constructor(public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}