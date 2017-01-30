import {RouterModule}  from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {SignInComponent} from '../signup/signin.component';
import {SignUpComponent} from './signup.component';

export const routing:ModuleWithProviders = RouterModule.forChild([
  {
    path:'user/signin',
    component:SignInComponent
  },
  {
    path:'user/signup',
    component:SignUpComponent
  }
]);
