import {RouterModule}  from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProductsComponent} from './products.component';

export const routing:ModuleWithProviders = RouterModule.forChild([
  {
    path:'user/products',
    component:ProductsComponent
  }
]);
