import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'h4fe-products-component',
  templateUrl:'products.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./products.component.scss')[0][1]]
})
export class ProductsComponent {

  constructor(private router:Router) {
  }

  public onSubmit():void {
    this.router.navigate(['user/payment']);
  }

}
