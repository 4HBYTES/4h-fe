import {Injectable} from '@angular/core';

export type LanguageCode = 'en' | 'fr' | 'ar';
export type LanguageCodeWithCountryCode = string;
export type LanguageDirection = 'RTL' | 'LTR';
export type LanguageDirections = {[index:string]:LanguageDirection};

@Injectable()
export class LanguageConfig {

  private readonly SEPARATOR:string = '-';
  private readonly default:LanguageCode = 'en';
  private readonly available:LanguageCode[] = ['fr', 'en', 'ar'];
  private readonly direction:LanguageDirections = {
    fr: 'LTR',
    en: 'LTR',
    ar: 'RTL'
  };

  public getDefault():LanguageCode {
    return this.default;
  }

  public getAvailable():LanguageCode[] {
    return this.available;
  }

  public getDirections():LanguageDirections {
    return this.direction;
  }

  public getLanguageCodeFromLanguageCodeWithCountryCode(languageCodeWithCountryCode:string):LanguageCode {
    return <LanguageCode>languageCodeWithCountryCode.split(this.SEPARATOR).shift();
  }

  public getLanguageCodeWithCountryCodeFromLanguageCode(languageCode:LanguageCode):LanguageCodeWithCountryCode {
    return `${languageCode}${this.SEPARATOR}${languageCode}`;
  }

}
