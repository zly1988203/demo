import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
/**
 * Created by zhaoly on 2017/9/21.
 */
export class UnsaveGuard implements CanDeactivate<ProductComponent>{
  canDeactivate(product:ProductComponent){
      return window.confirm("当前页面数据还未保存，确认离开?")
  }
}
