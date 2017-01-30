import {Injectable} from '@angular/core';
import {UrlParse} from '../imports/UrlParse';
import {Url} from './Url';
import {WindowWrapper} from '../browser/WindowWrapper';

@Injectable()
export class UrlBuilder {

  constructor(private urlParse:UrlParse,
              private windowWrapper:WindowWrapper) {
  }

  public createUrlWithSubdomain(subdomain:string):Url {
    this.urlParse.href(this.windowWrapper.getLocationHref());
    const port:string = this.urlParse.port();
    const protocol:string = this.urlParse.protocol();
    const uri:string = `${protocol}://${subdomain}.${this.urlParse.domain()}`;
    const path:string = this.urlParse.path() || '';
    return (port ? `${uri}:${port}` : uri) + path;
  }

  public createTopDomainUrl():Url {
    this.urlParse.href(this.windowWrapper.getLocationHref());
    const port:string = this.urlParse.port();
    const protocol:string = this.urlParse.protocol();
    const uri:string = `${protocol}://${this.urlParse.domain()}`;
    return (port ? `${uri}:${port}` : uri);
  }

}
