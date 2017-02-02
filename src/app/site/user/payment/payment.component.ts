import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../../auth/Auth';
import {Http, Headers} from '@angular/http';
import {ServerConfig} from '../../../../config';
import {Basket} from '../../../payment/Basket';
import {WindowWrapper} from '../../../browser/WindowWrapper';
import {URLSearchParams} from '@angular/http';
import {TokenStorage} from '../../../auth/TokenStorage';

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
              private tokenStorage:TokenStorage,
              private windowWrapper:WindowWrapper) {
  }

  public onSubmit():void {
    const data:any = {
      user_id: this.tokenStorage.getAuthToken(),
      products: this.items.map((item) => {
        return {product: item.id, quantity: parseInt(item.quantity, 10)};
      })
    };

    const headers:Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const content:string = JSON.stringify(data);

    this.http.post(`${ServerConfig.PAYMENT_URL}/payment/paypal/init`, content, {headers: headers})
      .subscribe(
        response => {
          this.basket.removeAll();
          // @TODO check if payment is success and do stuff
          this.windowWrapper.changeLocationHref(''); // this should redirect to a paypal service and paypal should return to 'user/payment/failure' or 'user/payment/success'
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
