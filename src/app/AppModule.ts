import 'ts-helpers';
import 'rxjs/Rx';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './site/main/app.component';
import {routing} from './AppRouting';
import {TranslationModule} from './translation/TranslationModule';
import {NavigatorWrapper} from './browser/NavigatorWrapper';
import {Location} from './location/Location';
import {UrlParse} from './imports/UrlParse';
import {HomeModule} from './site/home/HomeModule';
import {WindowWrapper} from './browser/WindowWrapper';
import {UrlBuilder} from './location/UrlBuilder';
import {HeaderModule} from './components/header/HeaderModule';
import {SignInModule} from './site/user/signup/SignInModule';
import {SignUpModule} from './site/user/signin/SignUpModule';
import {ProductsModule} from './site/user/products/ProductsModule';
import {PaymentModule} from './site/user/payment/PaymentModule';
import {SubscribeModule} from './site/user/subscribe/SubscribeModule';
import {TokenStorage} from './auth/TokenStorage';
import {LocalStorage} from './browser/LocalStorage';
import {Cookies} from './imports/Cookies';
import {Auth} from './auth/Auth';
import {Basket} from './payment/Basket';

@NgModule({
  imports:[
    BrowserModule,
    HttpModule,
    routing,
    TranslationModule,
    WindowWrapper,
    HomeModule,
    HeaderModule,
    SignInModule,
    SignUpModule,
    ProductsModule,
    PaymentModule,
    SubscribeModule,
    LocalStorage
  ],
  providers:[
    Auth,
    Basket,
    TokenStorage,
    Cookies,
    UrlParse,
    UrlBuilder,
    Location,
    {provide:NavigatorWrapper, useFactory:() => new NavigatorWrapper(navigator)}
  ],
  declarations:[
    AppComponent
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule {

}
