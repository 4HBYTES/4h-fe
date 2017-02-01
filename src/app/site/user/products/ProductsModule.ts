import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsComponent} from './products.component';
import {routing} from './routing';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:[
    routing,
    FormsModule,
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
