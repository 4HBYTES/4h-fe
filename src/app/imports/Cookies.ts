import {Injectable} from '@angular/core';
import * as CookieJS from 'js-cookie';

@Injectable()
export class Cookies {

  public get(name:string):string {
    return CookieJS.get(name);
  }

}
