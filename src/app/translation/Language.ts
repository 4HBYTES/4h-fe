import {Injectable} from '@angular/core';
import {LanguageConfig, LanguageCode, LanguageDirection} from './LanguageConfig';
import {NavigatorWrapper} from '../browser/NavigatorWrapper';
import {LanguageDomain} from './LanguageDomain';

@Injectable()
export class Language {

  constructor(private navigatorWrapper:NavigatorWrapper,
              private languageConfig:LanguageConfig,
              private languageDomain:LanguageDomain) {
  }

  public getSupported():LanguageCode[] {
    return this.languageConfig.getAvailable();
  }

  public getDefault():LanguageCode {
    return this.languageConfig.getDefault();
  }

  public getClientLanguageCode():LanguageCode {
    const languageInDomain:LanguageCode = this.languageDomain.getLanguageCode();
    const languageInBrowser:LanguageCode = this.languageConfig.getLanguageCodeFromLanguageCodeWithCountryCode(this.navigatorWrapper.getLanguageCodeWithCountryCode());
    return languageInDomain || languageInBrowser;
  }

  public setLanguage(langCode:LanguageCode):void {
    this.languageDomain.setLanguage(langCode);
  }

  public isAvailable(languageCode:LanguageCode):boolean {
    return this.languageConfig.getAvailable().filter(x => x === languageCode).length > 0;
  }

  public getDirection(languageCode:LanguageCode):LanguageDirection {
    return this.languageConfig.getDirections()[languageCode];
  }

}
