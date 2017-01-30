import {Injectable} from '@angular/core';
import {LocalStorage} from '../browser/LocalStorage';
import {Token} from './Token';
import {Cookies} from '../imports/Cookies';

@Injectable()
export class TokenStorage {

  private readonly LOCAL_STORAGE_AUTH_KEY:string = '4hfe_oauth';
  private readonly COOKIE_AUTH_KEY:string = '4hfe_oauth';

  constructor(private localStorage:LocalStorage,
              private cookies:Cookies) {
  }

  public getAuthToken():Token {
    return this.cookies.get(this.COOKIE_AUTH_KEY) || this.localStorage.getItem(this.LOCAL_STORAGE_AUTH_KEY);
  }

  public setAuthToken(token:Token):void {
    this.localStorage.setItem(this.LOCAL_STORAGE_AUTH_KEY, token);
  }

  public removeAuthToken():void {
    this.localStorage.removeItem(this.LOCAL_STORAGE_AUTH_KEY);
  }

  public hasAuthToken():boolean {
    return !!this.cookies.get(this.COOKIE_AUTH_KEY) || !!this.getAuthToken();
  }

}
