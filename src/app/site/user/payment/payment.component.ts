import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../../auth/Auth';
import {Http} from '@angular/http';
import {ServerConfig} from '../../../../config';
import {Basket} from '../../../payment/Basket';

@Component({
  selector: 'h4fe-payment-component',
  templateUrl: 'payment.component.html',
  styles: [require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./payment.component.scss')[0][1]]
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,
              private auth:Auth,
              private http:Http,
              private basket:Basket) {
  }

  public onSubmit():void {
    this.router.navigate(['user/payment/confirm']);
    this.http.post(ServerConfig.PAYMENT_URL, this.basket.getItems())
      .subscribe(
        response => this.basket.removeAll() // @TODO check if payment is success
      );
  }

  public ngOnInit():void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['user/signin']);
    }
  }

}
