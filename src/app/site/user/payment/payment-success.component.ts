import {Component} from '@angular/core';

@Component({
  selector:'h4fe-payment-success-component',
  templateUrl:'payment-success.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./payment-success.component.scss')[0][1]]
})
export class PaymentSuccessComponent {

  public onSubmit():void {
    console.log(this);
  }

}
