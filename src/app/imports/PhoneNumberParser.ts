import {PhoneNumberFormat, PhoneNumber, PhoneNumberUtil} from 'google-libphonenumber';
import {Injectable} from '@angular/core';

@Injectable()
export class PhoneNumberParser {

  private phoneNumberUtil:any = PhoneNumberUtil.getInstance();
  private readonly ALLOWED_CHARACTERS:string[] = ['+', ' ', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  public isValidNumber(phoneNumber:string, region:string):boolean {
    let result:boolean = this.validatePhoneChars(phoneNumber);
    try {
      if (result === true) {
        const numberType:PhoneNumber = this.phoneNumberUtil.parse(phoneNumber, region);
        result = this.phoneNumberUtil.isValidNumber(numberType);
      }
    } catch (e) {
      result = false;
    }
    return result;
  }

  public getFormattedNumber(phone:string, region:string):string {
    const phoneNumber:PhoneNumber = this.phoneNumberUtil.parse(phone, region);
    return this.phoneNumberUtil.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);
  }

  public getCountryCodeForRegion(countryCode:string):string {
    return this.phoneNumberUtil.getCountryCodeForRegion(countryCode);
  }

  private validatePhoneChars(phoneNumber:string):boolean {
    let result:boolean = true;

    phoneNumber.split('').forEach((item:string) => {
      if (!this.isAllowedChar(item)) {
        result = false;
      }
    });

    return result;
  }

  private isAllowedChar(char:string):boolean {
    return this.ALLOWED_CHARACTERS.filter(x => x === char).length > 0;
  }

}
