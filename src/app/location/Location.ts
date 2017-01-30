import {NgModule} from '@angular/core';

import {WindowWrapper} from '../browser/WindowWrapper';
import {UrlBuilder} from './UrlBuilder';
import {UrlParse} from '../imports/UrlParse';

@NgModule({
  imports: [
    WindowWrapper
  ],
  providers: [
    UrlBuilder,
    UrlParse
  ]
})
export class Location {

  constructor(private windowWrapper:WindowWrapper,
              private urlBuilder:UrlBuilder,
              private urlParse:UrlParse) {
  }

  public redirectToSubdomain(subdomain:string):void {
    this.windowWrapper.changeLocationHref(this.urlBuilder.createUrlWithSubdomain(subdomain));
  }

  public getSubdomain():string {
    return this.urlParse.subdomain();
  }

  public redirectToTopDomain():void {
    this.windowWrapper.changeLocationHref(this.urlBuilder.createTopDomainUrl());
  }

}
