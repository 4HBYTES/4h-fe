import {Injectable} from '@angular/core';
import {TokenStorage} from './TokenStorage';

@Injectable()
export class Auth {

  constructor(private tokenStorage:TokenStorage) {
  }

  public isLoggedIn():boolean {
    return !!this.tokenStorage.getAuthToken();
  }

}
