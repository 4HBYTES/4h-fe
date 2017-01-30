/// <reference path="./typings/urijs.d.ts" />

import {Injectable} from '@angular/core';
import * as UrlJs from 'urijs';

@Injectable()
export class UrlParse {

  private uri:UrlJs;

  constructor() {
    this.uri = new UrlJs();
  }

  public subdomain():any {
    return this.uri.subdomain();
  }

  public path():any {
    return this.uri.path();
  }

  public protocol():any {
    return this.uri.protocol();
  }

  public domain():any {
    return this.uri.domain();
  }

  public port():any {
    return this.uri.port();
  }

  public href(param:any):any {
    return this.uri.href(param);
  }

}
