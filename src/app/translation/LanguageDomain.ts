import {Injectable} from '@angular/core';
import {Location} from '../location/Location';
import {LanguageCode, LanguageCodeWithCountryCode, LanguageConfig} from './LanguageConfig';

/**
 * Class responsible for manipulating language settings basing on a subdomain rules.
 * e.g. [langCode-countryCode].icflix.com
 */
@Injectable()
export class LanguageDomain {

  constructor(private location:Location,
              private languageConfig:LanguageConfig) {
  }

  public getLanguageCode():LanguageCode {
    return this.languageConfig.getLanguageCodeFromLanguageCodeWithCountryCode(this.location.getSubdomain());
  }

  public setLanguage(languageCode:LanguageCode):void {
    this.location.redirectToSubdomain(
      this.createSubdomainByLanguageCode(languageCode)
    );
  }

  private createSubdomainByLanguageCode(languageCode:LanguageCode):LanguageCodeWithCountryCode {
    return this.languageConfig.getLanguageCodeWithCountryCodeFromLanguageCode(languageCode);
  }

}
