import {CanActivate} from "@angular/router";
/**
 * Created by zhaoly on 2017/9/21.
 */
export class LoginGuard implements CanActivate{
   canActivate(){
     let login_in :boolean = Math.random() < 0.5;
     if(!login_in){
        alert("没有权限");
     }
      return login_in;
   }
}
