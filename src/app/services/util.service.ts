/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  report: any;
  storeInfo: any;
  private ejectMessages = new Subject<any>();
  public translations: any[] = [];

  public appClosed: boolean;

  public appClosedMessage: any = '';

  public direction: any;
  public currecny: any;
  public cside: any;

  public appPages: any[] = [];

  public store: any;

  public general: any;
  public languages: any[] = [];
  constructor(

  ) { }


  setReport(data) {
    this.report = data;
  }

  ejectMsg() {
    this.ejectMessages.next();
  }

  successEject(): Subject<any> {
    return this.ejectMessages;
  }

  getReport() {
    return this.report;
  }

  getCurrencyCode() {
    return environment.general.code;
  }

  getCurrecySymbol() {
    return environment.general.symbol;
  }

  getString(str) {
    if (this.translations[str]) {
      return this.translations[str];
    }
    return str;
  }
}
