import {LocalStorage} from '../browser/LocalStorage';
import {Injectable} from '@angular/core';

@Injectable()
export class Basket {

  private STORAGE_KEY:string = 'selected_products';

  constructor(private localStorage:LocalStorage) {
  }

  public addItems(items:any):void {
    this.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }

  public getItems():any {
    JSON.parse(this.localStorage.getItem(this.STORAGE_KEY));
  }

  public removeAll():void {
    this.localStorage.removeItem(this.STORAGE_KEY);
  }

}
