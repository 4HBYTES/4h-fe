import './polyfills';
import 'zone.js';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {FastClick} from './app/imports/FastClick';
import {AppModule} from './app/AppModule';

FastClick.attach(document.body);

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
