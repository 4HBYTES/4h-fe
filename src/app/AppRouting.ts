import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/site/home/HomeModule'},
  {path: 'express-signup', loadChildren: 'app/site/user/signup/SignupModule'},
  {path: 'user/signup', loadChildren: 'app/site/user/signup/SignupModule'},
  {path: 'user/login', loadChildren: 'app/site/user/login/LoginModule'},
  {path: 'user/logout', loadChildren: 'app/site/user/login/LogoutModule'},
  {path: 'user/password', loadChildren: 'app/site/user/password/PasswordModule'},
  {path: 'user/verify', loadChildren: 'app/site/user/password/VerifyModule'}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
