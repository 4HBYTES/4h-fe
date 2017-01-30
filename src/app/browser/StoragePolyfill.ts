function isStorageAvailableAndWritable(storage:Storage):boolean {
  let isAvailableAndWritable:boolean = false;

  try {
    if (typeof storage === 'object') {
      storage.setItem('localStorageTest', '1');
      storage.removeItem('localStorageTest');
      isAvailableAndWritable = true;
    }
  } catch (e) {
    isAvailableAndWritable = false;
  }

  return isAvailableAndWritable;
}

export function storagePolyfillFactory(storage:Storage):Storage {
  if (!isStorageAvailableAndWritable(storage)) {
    storage = new StoragePolyfill(window).storage;
  }
  return storage;
}

export class StoragePolyfill {

  public storage:Storage;
  private storageContainer:{[index:string]:string} = {};

  constructor(private window:Window|any) {

    if (this.window.Storage && this.window.localStorage) {
      this.storage = this.window.Storage.prototype;
    } else {
      this.window.localStorage = {};
      this.storage = window.localStorage;
    }

    if (!this.window.location.origin) {
      this.window.location.origin = `${this.window.location.protocol}//${this.window.location.hostname}` + (this.window.location.port ? ':' + this.window.location.port : '');
    }

    this.setStorageMethods();
  }

  private setStorageMethods():void {
    this.storage.key = (i:number):string|null => {
      const key:string = Object.keys(this.storageContainer)[i];
      return typeof key === 'string' ? key : null;
    };

    this.storage.getItem = (key:string):string => {
      return typeof this.storageContainer[key] === 'string' ? this.storageContainer[key] : null;
    };

    this.storage.setItem = (key:string, value:string):void => {
      this.dispatchStorageEvent(key, value);
      this.storageContainer[key] = String(value);
    };

    this.storage.removeItem = (key:string):void => {
      this.dispatchStorageEvent(key, null);
      delete this.storageContainer[key];
    };

    this.storage.clear = ():void => {
      this.dispatchStorageEvent(null, null);
      this.storageContainer = {};
    };
  }

  private dispatchStorageEvent(key:string, newValue:string):void {
    const oldValue:string = (key == null) ? null : this.storage.getItem(key);
    const url:string = this.window.location.href.substr(this.window.location.origin.length);
    const storageEvent:any = this.window.document.createEvent('StorageEvent');

    storageEvent.initStorageEvent('storage', false, false, key, oldValue, newValue, url, null);
    this.window.dispatchEvent(storageEvent);
  }

}
