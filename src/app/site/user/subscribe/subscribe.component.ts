import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'h4fe-subscribe-component',
  templateUrl:'subscribe.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./subscribe.component.scss')[0][1]]
})
export class SubscribeComponent {

  constructor(private router:Router) {
  }

  public onSubmit():void {
    this.router.navigate(['user/products']);
  }

}
