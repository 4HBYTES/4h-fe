import {Component, OnInit} from '@angular/core';
import {Auth} from '../../../auth/Auth';
import {Router} from '@angular/router';

@Component({
  selector:'h4fe-payment-success-component',
  templateUrl:'payment-success.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./payment-success.component.scss')[0][1]]
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private router:Router,
              private auth:Auth) {
  }

  public onSubmit():void {
    console.log(this);
  }

  public ngOnInit():void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['user/signin']);
    }
  }

}
