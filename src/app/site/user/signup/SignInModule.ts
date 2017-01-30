import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignInComponent} from './signin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignInComponent
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule {

}
