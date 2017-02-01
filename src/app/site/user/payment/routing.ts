import {RouterModule}  from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {PaymentComponent} from './payment.component';
import {PaymentSuccessComponent} from './payment-success.component';
import {PaymentFailureComponent} from './payment-failure.component';

export const routing:ModuleWithProviders = RouterModule.forChild([
  {
    path:'user/payment',
    component:PaymentComponent
  },
  {
    path:'user/payment/failure',
    component:PaymentFailureComponent
  },
  {
    path:'user/payment/success',
    component:PaymentSuccessComponent
  }
]);
