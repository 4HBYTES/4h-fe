import {NgModule} from '@angular/core';
import {TranslateService} from 'ng2-translate/src/translate.service';
import {TranslateModule as Translation} from 'ng2-translate/ng2-translate';
import {Observable} from 'rxjs';

import {LanguageConfig, LanguageCode, LanguageDirection, LanguageCodeWithCountryCode} from './LanguageConfig';
import {Language} from './Language';
import {LanguageDomain} from './LanguageDomain';

@NgModule({
  imports: [
    Translation.forRoot()
  ],
  providers: [
    LanguageConfig,
    LanguageDomain,
    Language,
    TranslateService
  ],
  exports: [
    Translation
  ]
})
export class TranslationModule {

  constructor(private language:Language,
              private languageConfig:LanguageConfig,
              private translateService:TranslateService) {
  }

  public get(key:string):Observable<string | any> {
    return this.translateService.get(key);
  }

  public setup():void {
    this.translateService.setDefaultLang(this.language.getDefault());
    this.translateService.use(this.getLanguageCode());
  }

  public setLanguage(languageCode:LanguageCode):void {
    this.language.setLanguage(languageCode);
  }

  public getLanguageCode():LanguageCode {
    const clientLanguageCode:LanguageCode = this.language.getClientLanguageCode();
    return this.language.isAvailable(clientLanguageCode) ? clientLanguageCode : this.language.getDefault();
  }

  public getDirection():LanguageDirection {
    const languageCode:LanguageCode = this.getLanguageCode();
    return this.language.getDirection(languageCode);
  }

  public getLanguageWithCountryCode():LanguageCodeWithCountryCode {
    return this.languageConfig.getLanguageCodeWithCountryCodeFromLanguageCode(this.getLanguageCode());
  }

  public getSupported():string[] {
    return this.language.getSupported();
  }

}
