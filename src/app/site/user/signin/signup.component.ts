import {Component} from '@angular/core';

@Component({
  selector:'h4fe-signup-component',
  templateUrl:'signup.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./signup.component.scss')[0][1]]
})
export class SignUpComponent {


  public onSubmit():void {
    console.log(this);
  }

}
