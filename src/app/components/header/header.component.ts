import {Component} from '@angular/core';

@Component({
  selector: 'h4fe-header-component',
  templateUrl: 'header.component.html',
  styles: [require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./header.component.scss')[0][1]]
})
export class HeaderComponent {

}
