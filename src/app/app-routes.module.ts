/**
 * Created by zhaoly on 2017/9/20.
 */
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[]
})

export class AppRoutingModule{}


