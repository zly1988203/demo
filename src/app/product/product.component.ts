import {Component, OnInit, NgModule} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductListService} from "../common/product-list.service";
import {Product} from "./product";
import {AnotherProductService} from "../common/another-product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[{
    provide:ProductListService,useClass:AnotherProductService
  }]
})
export class ProductComponent implements OnInit {

  private productId:string;
  private productName:string;
  private product:Product;
  constructor(private routerInfo:ActivatedRoute,private productSevice:ProductListService) { }

  ngOnInit() {
    // this.routerInfo.params.subscribe((params:Params) => this.productId = params['id']);//参数订阅 subscribe

    // this.productId = this.routerInfo.snapshot.params['id'];//参数快照 snapshot

    // this.routerInfo.data.subscribe((data) =>{
    //   var pro:Product = data.Product;//用Product类接收
    //    this.productId = data.Product.id
    //    this.productName = data.Product.name;
    //
    // })

     this.product = this.productSevice.getProducts();
  }


}
