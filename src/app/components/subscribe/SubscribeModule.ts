import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubscribeComponent} from './subscribe.component';

@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[
    SubscribeComponent
  ],
  exports:[
    SubscribeComponent
  ]
})
export class SubscribeModule {

}
