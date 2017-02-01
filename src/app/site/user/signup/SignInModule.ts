import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignInComponent} from './signin.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule
  ],
  declarations:[
    SignInComponent
  ],
  exports:[
    SignInComponent
  ]
})
export class SignInModule {

}
