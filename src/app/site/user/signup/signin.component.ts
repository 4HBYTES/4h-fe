import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'h4fe-signin-component',
  templateUrl:'signin.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./signin.component.scss')[0][1]]
})
export class SignInComponent {

  constructor(private router:Router) {
  }

  public onSubmit():void {
    this.router.navigate(['user/products']);
  }

}
