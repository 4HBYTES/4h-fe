import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Auth} from '../../../auth/Auth';
import {Products, Product} from '../../../products/Products';
import {Basket} from '../../../payment/Basket';

@Component({
  selector: 'h4fe-user-products-component',
  templateUrl: 'products.component.html',
  styles: [require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./products.component.scss')[0][1]],
  providers: [
    Products
  ]
})
export class ProductsComponent implements OnInit {

  public productList:Product[];

  public totalPrice:number = 0;
  public selected:string;

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private auth:Auth,
              private products:Products,
              private basket:Basket) {
  }

  public onSubmit():void {
    this.router.navigate(['user/payment']);
    this.basket.addItems(this.productList.filter((product:Product) => (<any>product).selected));
  }

  public onProductSwitch(event:any, product:Product):void {
    const quantity:number = (<any>document.getElementById(`${event.target.id}quantity`)).value;
    (<any>product).selected = event.target.checked;
    (<any>product).quantity = quantity;

    if (event.target.checked) {
      this.totalPrice += product.price * quantity;
    } else {
      this.totalPrice -= product.price * quantity;
    }
  }

  public setQuantity(event:any, product:Product):void {
    const quantity:number = event.target.value;
    const added:number = quantity - (<any>product).quantity;
    (<any>product).quantity = quantity;
    this.totalPrice += product.price * added;
  }

  public ngOnInit():void {
    this.basket.removeAll();
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['user/signin']);
    } else {
      this.activatedRoute.params.subscribe(params => this.selected = params['id'] || '');
      this.products.getProducts()
        .subscribe((products:Product[]) => this.productList = products.map(product => {
          if (product.id === this.selected) {
            (<any>product).selected = true;
            (<any>product).quantity = 1;
            this.totalPrice += product.price;
          }
          return product;
        }));
    }
  }

}
