import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'h4fe-payment-component',
  templateUrl:'payment.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./payment.component.scss')[0][1]]
})
export class PaymentComponent {

  constructor(private router:Router) {
  }

  public onSubmit():void {
    this.router.navigate(['user/payment/confirm']);
  }

}
