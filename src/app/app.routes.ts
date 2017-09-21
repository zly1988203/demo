/**
 * Created by zhaoly on 2017/9/20.
 */
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";
import {Code404Component} from "./code404/code404.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {SellerInfoComponent} from "./seller-info/seller-info.component";
import {CallComponent} from "./call/call.component";
import {LoginGuard} from "./guard/login_guard";
import {UnsaveGuard} from "./guard/unsave_guard";
import {ProductResolve} from "./guard/product_resolve";

const routes: Routes = [
  {
    path: '',redirectTo:'/home',pathMatch:'full'
  },
  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'product/:id',component:ProductComponent,
    children:[
      {path:'',component:ProductDetailComponent},
      {path:'seller/:id',component:SellerInfoComponent}
    ],
    // canActivate:[LoginGuard],canDeactivate:[UnsaveGuard]
    resolve:{
      Product:ProductResolve
    },
  },
  {
    path: 'help',component:SellerInfoComponent
  },
  {
    path: 'callus',component:CallComponent,outlet:'call'
  },
  {
    path: '**',component:Code404Component
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[LoginGuard,UnsaveGuard,ProductResolve]
})

export class AppRoutingModule{}


