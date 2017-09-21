import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId:string;
  private productName:string;
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    // this.routerInfo.params.subscribe((params:Params) => this.productId = params['id']);//参数订阅 subscribe

    // this.productId = this.routerInfo.snapshot.params['id'];//参数快照 snapshot

    this.routerInfo.data.subscribe((data:{product:Product}) =>{
       this.productId = data.product.id;
       this.productName = data.product.name;
    })
  }
}
