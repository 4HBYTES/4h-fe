import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsComponent} from './products.component';
import {routing} from './routing';

@NgModule({
  imports:[
    routing,
    CommonModule
  ],
  declarations:[
    ProductsComponent
  ],
  exports:[
    ProductsComponent
  ]
})
export class ProductsModule {

}
