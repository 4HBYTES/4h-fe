import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../../auth/Auth';
import {Http} from '@angular/http';
import {ServerConfig} from '../../../../config';
import {Basket} from '../../../payment/Basket';
import {WindowWrapper} from '../../../browser/WindowWrapper';
import {URLSearchParams} from '@angular/http';

@Component({
  selector: 'h4fe-payment-component',
  templateUrl: 'payment.component.html',
  styles: [require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./payment.component.scss')[0][1]]
})
export class PaymentComponent implements OnInit {

  public items:any;
  public totalPrice:number = 0;

  constructor(private router:Router,
              private auth:Auth,
              private http:Http,
              private basket:Basket,
              private windowWrapper:WindowWrapper) {
  }

  public onSubmit():void {
    let data:URLSearchParams = new URLSearchParams();
    data.append('items', JSON.stringify(this.items));

    this.http.post(ServerConfig.PAYMENT_URL, data)
      .subscribe(
        response => {
          this.basket.removeAll();
          // @TODO check if payment is success and do stuff
          this.windowWrapper.changeLocationHref('');
        }
      );
  }

  public ngOnInit():void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['user/signin']);
    }
    this.items = this.basket.getItems();
    this.items.map(item => this.totalPrice += item.price * item.quantity);
  }

}
