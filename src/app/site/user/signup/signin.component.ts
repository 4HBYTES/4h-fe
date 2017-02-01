import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../auth/TokenStorage';
import {Auth} from '../../../auth/Auth';

@Component({
  selector:'h4fe-signin-component',
  templateUrl:'signin.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./signin.component.scss')[0][1]]
})
export class SignInComponent {

  constructor(private router:Router,
              private tokenStorage:TokenStorage,
              private auth:Auth) {
  }

  public onSubmit():void {
    this.tokenStorage.setAuthToken('settled');
    this.router.navigate(['user/products']);
  }

}
