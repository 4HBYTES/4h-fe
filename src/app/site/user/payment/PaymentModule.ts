import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentComponent} from './payment.component';
import {routing} from './routing';
import {PaymentSuccessComponent} from './payment-success.component';
import {PaymentFailureComponent} from './payment-failure.component';

@NgModule({
  imports:[
    routing,
    CommonModule
  ],
  declarations:[
    PaymentComponent,
    PaymentSuccessComponent,
    PaymentFailureComponent
  ],
  exports:[
    PaymentComponent
  ]
})
export class PaymentModule {

}
