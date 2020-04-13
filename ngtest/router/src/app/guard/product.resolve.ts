import { Resolve, Router } from '@angular/router';
import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product>{

    //只有ProductResolve被@Injectable装饰了这个Router才能被注入进来
    //Component不用@Injectable修饰就能注入的原因是组件的注解默认已经继承了@Injectable
    constructor(private router: Router) {

    }

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Product | import("rxjs").Observable<Product> | Promise<Product> {
        let productId: number = route.params["id"];
        if (productId == 1) {
            return new Product(1, 'iPhone7');
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }
    }

}