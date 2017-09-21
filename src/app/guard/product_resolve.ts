import {Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Product} from "../product/product";
/**
 * Created by zhaoly on 2017/9/21.
 */
@Injectable()
export class ProductResolve implements Resolve<Product>{

  constructor(private routerInfo:Router){

  }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Product>|Promise<Product>|Product{
      let productId = route.params['id'];
      if(productId == "1"){
        return new Product("1","淘宝销量第一","",23.65,"dfasdfsdf");
      }else {
        this.routerInfo.navigate(["/home"]);
        return undefined;
      }
  }
}
