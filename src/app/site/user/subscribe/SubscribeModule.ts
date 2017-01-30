import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubscribeComponent} from './subscribe.component';
import {routing} from './routing';

@NgModule({
  imports:[
    routing,
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
