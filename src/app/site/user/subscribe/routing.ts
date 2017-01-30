import {RouterModule}  from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SubscribeComponent} from './subscribe.component';

export const routing:ModuleWithProviders = RouterModule.forChild([
  {
    path:'user/subscribe',
    component:SubscribeComponent
  }
]);
