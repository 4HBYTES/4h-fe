import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../auth/TokenStorage';

@Component({
  selector:'h4fe-signup-component',
  templateUrl:'signup.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./signup.component.scss')[0][1]]
})
export class SignUpComponent {

  constructor(private router:Router,
              private tokenStorage:TokenStorage) {
  }

  public onSubmit():void {
    this.tokenStorage.setAuthToken('settled');
    this.router.navigate(['user/subscribe']);
  }

}
