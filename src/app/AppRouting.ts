import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/site/home/HomeModule'},
  {path: 'express-signup', loadChildren: 'app/site/user/signup/SignInModule'},
  {path: 'user/signup', loadChildren: 'app/site/user/signup/PaymentModule'},
  {path: 'user/signin', loadChildren: 'app/site/user/signin/SignInModule'},
  {path: 'user/logout', loadChildren: 'app/site/user/login/LogoutModule'},
  {path: 'user/subscribe', loadChildren: 'app/site/user/subscribe/PaymentModule'},
  {path: 'user/products', loadChildren: 'app/site/user/products/PaymentModule'},
  {path: 'user/payment', loadChildren: 'app/site/user/payment/PaymentModule'}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
