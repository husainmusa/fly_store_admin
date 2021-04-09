/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApisService } from './services/apis.service';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private router: Router,
    private api: ApisService,
    public util: UtilService
  ) {
    this.initializeApp();

  }

  initializeApp() {
    const lng = localStorage.getItem('language');
    console.log("language is", lng);
    if (!lng || lng === null) {
      this.api.get('users/getDefaultSettings').then((data: any) => {
        console.log('----------------- app setting', data);
        if (data && data.status === 200 && data.data) {
          const manage = data.data.manage;
          const language = data.data.lang;
          if (manage && manage.length > 0) {
            if (manage[0].app_close === 0 || manage[0].app_close === '0') {
              this.util.appClosed = true;
              this.util.appClosedMessage = manage[0].message;
            } else {
              this.util.appClosed = false;
            }
          } else {
            this.util.appClosed = false;
          }
          if (language) {
            this.util.translations = language;
            localStorage.setItem('language', data.data.file);
            localStorage.setItem('language_id', data.data.langid);
          }
          if(data.data.lang_position){
            if(data.data.lang_position == "0"){
              this.util.direction = "rtl";
              this.util.cside = "left"
            }else{
              this.util.direction = "ltr";
              this.util.cside = "right"
            }
          }
          const settings = data.data.settings;
          if (settings && settings.length > 0) {
            const info = settings[0];
            // this.util.direction = info.appDirection;
            // this.util.cside = info.currencySide;
            this.util.currecny = info.currencySymbol;
            document.documentElement.dir = this.util.direction;
          } else {
            this.util.direction = 'ltr';
            this.util.cside = 'right';
            this.util.currecny = '$';
            document.documentElement.dir = this.util.direction;
          }
          
          const general = data.data.general;
          console.log('generalllll============================>', general)
          if (general && general.length > 0) {
            const info = general[0];
            this.util.general = info;

          }
        }
      }, error => {
        console.log('default settings', error);
      });
    } else {
      const param = {
        id: localStorage.getItem('language_id')
      };
      this.api.post('users/getDefaultSettingsById', param).then((data: any) => {
        console.log('----------------- app setting', data);
        if (data && data.status === 200 && data.data) {
          const manage = data.data.manage;
          const language = data.data.lang;
          if (manage && manage.length > 0) {
            if (manage[0].app_close === 0 || manage[0].app_close === '0') {
              this.util.appClosed = true;
              this.util.appClosedMessage = manage[0].message;
            } else {
              this.util.appClosed = false;
            }
          } else {
            this.util.appClosed = false;
          }
          if (language) {
            this.util.translations = language;
          }
          const settings = data.data.settings;
          if (settings && settings.length > 0) {
            const info = settings[0];
            // this.util.direction = info.appDirection;
            // this.util.cside = info.currencySide;
            if(data.data.lang_position == "0"){
              this.util.direction = "rtl";
            }else{
              this.util.direction = "ltr";
            }
            this.util.currecny = info.currencySymbol;
            document.documentElement.dir = this.util.direction;

          } else {
            this.util.direction = 'ltr';
            this.util.cside = 'right';
            this.util.currecny = '$';
            document.documentElement.dir = this.util.direction;
          }
          const general = data.data.general;
          console.log('generalllll============================>', general)
          if (general && general.length > 0) {
            const info = general[0];
            this.util.general = info;

          }

          if(data.data.lang_position){
            if(data.data.lang_position == "0"){
              this.util.direction = "rtl";
              this.util.cside = "left"
            }else{
              this.util.direction = "ltr";
              this.util.cside = "right"
            }
          }
        }
        console.log("util direction", this.util.direction);
      }, error => {
        console.log('default settings by id', error);
        this.util.appClosed = false;
        this.util.direction = 'ltr';
        this.util.cside = 'right';
        this.util.currecny = '$';
        document.documentElement.dir = this.util.direction;
      });
    }


    const uid = localStorage.getItem('uid');
    if (uid && uid !== null && uid !== 'null') {
      const param = {
        id: uid
      };
      this.api.post('stores/getByUid', param).then((data: any) => {
        console.log('*******************', data);
        if (data && data.status === 200 && data.data && data.data.length) {
          this.util.storeInfo = data.data[0];
        } else {
          localStorage.clear();
        }
      }, error => {
        console.log(error);
      });
    }
    this.getLangs();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  getLangs() {
    this.api.get('lang').then((data: any) => {
      console.log(data);
      if (data && data.status === 200) {
        const info = data.data.filter(x => x.status === '1');
        this.util.languages = info;
      }
    }, error => {
      console.log(error);
    });
  }
}
