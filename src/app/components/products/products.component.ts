import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product, Products} from '../../products/Products';

@Component({
  selector: 'h4fe-products-component',
  templateUrl: 'products.component.html',
  styles: [require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./products.component.scss')[0][1]],
  providers: [
    Products
  ]
})
export class ProductsComponent implements OnInit {

  public productList:Product[];

  constructor(private router:Router,
              private products:Products) {
  }

  public goToProducts(id:string):void {
    this.router.navigate(['user/products', {id}]);
  }

  public ngOnInit():void {
    this.products.getProducts().subscribe(
      products => this.productList = products
    );
  }

}
