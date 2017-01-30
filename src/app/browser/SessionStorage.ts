import {NgModule, Inject} from '@angular/core';
import {storagePolyfillFactory} from './StoragePolyfill';

@NgModule({
  providers:[
    {
      provide:'sessionStorage',
      useFactory:() => storagePolyfillFactory(sessionStorage)
    }
  ]
})
export class SessionStorage {

  private storage:Storage;

  constructor(@Inject('sessionStorage') storage:Storage) {
    this.storage = storage;
  }

  public clear():void {
    this.storage.clear();
  }

  public getItem(key:string):any {
    return this.storage.getItem(key);
  }

  public removeItem(key:string):void {
    this.storage.removeItem(key);
  }

  public setItem(key:string, data:string):void {
    this.storage.setItem(key, data);
  }

}
