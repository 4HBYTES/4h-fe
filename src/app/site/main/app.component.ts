import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import {TranslationModule} from '../../translation/TranslationModule';
import {LanguageDirection} from '../../translation/LanguageConfig';

@Component({
  selector:'h4fe-app-root',
  templateUrl:'app.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./app.component.scss')[0][1]],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public direction:LanguageDirection;

  constructor(private translationModule:TranslationModule) {
  }

  public ngOnInit():void {
    this.translationModule.setup();
    this.direction = this.translationModule.getDirection();
  }

}
