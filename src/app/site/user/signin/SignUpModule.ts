import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignUpComponent} from './signup.component';
import {routing} from './routing';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:[
    routing,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations:[
    SignUpComponent
  ],
  exports:[
    SignUpComponent
  ]
})
export class SignUpModule {

}
