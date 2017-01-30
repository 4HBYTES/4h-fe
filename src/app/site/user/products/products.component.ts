import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'h4fe-products-component',
  templateUrl:'products.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./products.component.scss')[0][1]]
})
export class ProductsComponent {

  public productList:any[] = [
    {
      name: 'Ferox demolitiones ducunt ad amor.',
      price: 134.99,
      selected: false
    },
    {
      name: 'Vae, bromium!',
      price: 343.11,
      selected: false
    },
    {
      name: 'Seculas manducare!',
      price: 441.22,
      selected: false
    }
  ];

  public totalPrice:number;

  constructor(private router:Router) {
  }

  public onSubmit():void {
    this.router.navigate(['user/payment']);
  }

}
