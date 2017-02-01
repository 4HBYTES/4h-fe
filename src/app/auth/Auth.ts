import {Injectable} from '@angular/core';
import {TokenStorage} from './TokenStorage';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {ServerConfig} from '../../config';

@Injectable()
export class Auth {

  constructor(private tokenStorage:TokenStorage,
              private http:Http) {
  }

  public isLoggedIn():boolean {
    return !!this.tokenStorage.getAuthToken();
  }

  public signUp(email:string, password:string):Observable<any> {
    return this.http.post(`${ServerConfig.CMS_URL}/users/signup`, {
      email:email,
      password:password
    });
  }

  public signIn(email:string, password:string):Observable<any> {
    return this.http.post(`${ServerConfig.CMS_URL}/users/signin`, {
      email:email,
      password:password
    });
  }

}
