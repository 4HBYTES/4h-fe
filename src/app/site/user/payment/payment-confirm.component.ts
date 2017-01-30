import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'h4fe-payment-confirm-component',
  templateUrl:'payment-confirm.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./payment-confirm.component.scss')[0][1]]
})
export class PaymentConfirmComponent {


  constructor(private router:Router) {
  }

  public onSubmit():void {
    this.router.navigate(['user/payment/success']);
  }

}
