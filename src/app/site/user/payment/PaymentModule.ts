import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentComponent} from './payment.component';
import {routing} from './routing';
import {PaymentSuccessComponent} from './payment-success.component';
import {PaymentConfirmComponent} from './payment-confirm.component';

@NgModule({
  imports:[
    routing,
    CommonModule
  ],
  declarations:[
    PaymentComponent,
    PaymentSuccessComponent,
    PaymentConfirmComponent
  ],
  exports:[
    PaymentComponent
  ]
})
export class PaymentModule {

}
