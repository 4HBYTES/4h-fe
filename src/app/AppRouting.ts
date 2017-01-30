import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/site/home/HomeModule'},
  {path: 'express-signup', loadChildren: 'app/site/user/signup/SignInModule'},
  {path: 'user/signup', loadChildren: 'app/site/user/signup/SignUpModule'},
  {path: 'user/signin', loadChildren: 'app/site/user/signin/SignInModule'},
  {path: 'user/logout', loadChildren: 'app/site/user/login/LogoutModule'}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
