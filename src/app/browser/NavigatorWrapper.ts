import {Request} from 'express';

export class NavigatorWrapper {

  constructor(private navigator:Request|Navigator|any) {
  }

  public getLanguageCodeWithCountryCode():string {
    let langCode:string;

    try {
      langCode = this.navigator.languages && this.navigator.languages[0] ? this.navigator.languages[0] : this.navigator.language || this.navigator.acceptsLanguages()[0];
    } catch (e) {
      langCode = '';
    }

    return langCode || '';
  }

}
