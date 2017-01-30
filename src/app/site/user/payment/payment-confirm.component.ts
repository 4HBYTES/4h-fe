import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../../auth/Auth';

@Component({
  selector:'h4fe-payment-confirm-component',
  templateUrl:'payment-confirm.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./payment-confirm.component.scss')[0][1]]
})
export class PaymentConfirmComponent implements OnInit {

  constructor(private router:Router,
              private auth:Auth) {
  }

  public onSubmit():void {
    this.router.navigate(['user/payment/success']);
  }

  public ngOnInit():void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['user/signin']);
    }
  }

}
