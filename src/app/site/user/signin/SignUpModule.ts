import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignUpComponent} from './signup.component';
import {routing} from './routing';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [
    SignUpComponent
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule {

}
