import {NgModule} from '@angular/core';

import {routing} from './routing';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FooterModule} from '../../components/footer/FooterModule';
import {ProductsModule} from '../../components/products/ProductsModule';
import {SubscribeModule} from '../../components/subscribe/SubscribeModule';
import {ContactModule} from '../../components/contact/ContactModule';

@NgModule({
  imports:[
    routing,
    CommonModule,
    FooterModule,
    ProductsModule,
    SubscribeModule,
    ContactModule
  ],
  declarations:[
    HomeComponent
  ]
})
export class HomeModule {
}
