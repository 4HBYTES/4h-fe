import {NgModule, Inject} from '@angular/core';
import {Url} from '../location/Url';

@NgModule({
  providers:[
    {provide:'Window', useValue:window}
  ],
})
export class WindowWrapper {

  private window:Window;

  constructor(@Inject('Window') window:Window) {
    this.window = window;
  }

  public changeLocationHref(url:Url):void {
    this.window.location.href = url;
  }

  public getLocationHref():Url {
    return this.window.location.href;
  }

}
