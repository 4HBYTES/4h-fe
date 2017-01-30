import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'h4fe-header-component',
  templateUrl:'header.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./header.component.scss')[0][1]]
})
export class HeaderComponent {

  constructor(private router:Router) {
  }

  public goToHomePage():void {
    this.router.navigate(['home']);
  }

  public goToSignIn():void {
    this.router.navigate(['user/signin']);
  }

  public goToSignUp():void {
    this.router.navigate(['user/signup']);
  }
}
