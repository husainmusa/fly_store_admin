"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, api, util) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.title = 'app';
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        var lng = localStorage.getItem('language');
        console.log("language is", lng);
        if (!lng || lng === null) {
            this.api.get('users/getDefaultSettings').then(function (data) {
                console.log('----------------- app setting', data);
                if (data && data.status === 200 && data.data) {
                    var manage = data.data.manage;
                    var language = data.data.lang;
                    if (manage && manage.length > 0) {
                        if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                            _this.util.appClosed = true;
                            _this.util.appClosedMessage = manage[0].message;
                        }
                        else {
                            _this.util.appClosed = false;
                        }
                    }
                    else {
                        _this.util.appClosed = false;
                    }
                    if (language) {
                        _this.util.translations = language;
                        localStorage.setItem('language', data.data.file);
                        localStorage.setItem('language_id', data.data.langid);
                    }
                    if (data.data.lang_position) {
                        if (data.data.lang_position == "0") {
                            _this.util.direction = "rtl";
                            _this.util.cside = "left";
                        }
                        else {
                            _this.util.direction = "ltr";
                            _this.util.cside = "right";
                        }
                    }
                    var settings = data.data.settings;
                    if (settings && settings.length > 0) {
                        var info = settings[0];
                        // this.util.direction = info.appDirection;
                        // this.util.cside = info.currencySide;
                        _this.util.currecny = info.currencySymbol;
                        document.documentElement.dir = _this.util.direction;
                    }
                    else {
                        _this.util.direction = 'ltr';
                        _this.util.cside = 'right';
                        _this.util.currecny = '$';
                        document.documentElement.dir = _this.util.direction;
                    }
                    var general = data.data.general;
                    console.log('generalllll============================>', general);
                    if (general && general.length > 0) {
                        var info = general[0];
                        _this.util.general = info;
                    }
                }
            }, function (error) {
                console.log('default settings', error);
            });
        }
        else {
            var param = {
                id: localStorage.getItem('language_id')
            };
            this.api.post('users/getDefaultSettingsById', param).then(function (data) {
                console.log('----------------- app setting', data);
                if (data && data.status === 200 && data.data) {
                    var manage = data.data.manage;
                    var language = data.data.lang;
                    if (manage && manage.length > 0) {
                        if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                            _this.util.appClosed = true;
                            _this.util.appClosedMessage = manage[0].message;
                        }
                        else {
                            _this.util.appClosed = false;
                        }
                    }
                    else {
                        _this.util.appClosed = false;
                    }
                    if (language) {
                        _this.util.translations = language;
                    }
                    var settings = data.data.settings;
                    if (settings && settings.length > 0) {
                        var info = settings[0];
                        // this.util.direction = info.appDirection;
                        // this.util.cside = info.currencySide;
                        if (data.data.lang_position == "0") {
                            _this.util.direction = "rtl";
                        }
                        else {
                            _this.util.direction = "ltr";
                        }
                        _this.util.currecny = info.currencySymbol;
                        document.documentElement.dir = _this.util.direction;
                    }
                    else {
                        _this.util.direction = 'ltr';
                        _this.util.cside = 'right';
                        _this.util.currecny = '$';
                        document.documentElement.dir = _this.util.direction;
                    }
                    var general = data.data.general;
                    console.log('generalllll============================>', general);
                    if (general && general.length > 0) {
                        var info = general[0];
                        _this.util.general = info;
                    }
                    if (data.data.lang_position) {
                        if (data.data.lang_position == "0") {
                            _this.util.direction = "rtl";
                            _this.util.cside = "left";
                        }
                        else {
                            _this.util.direction = "ltr";
                            _this.util.cside = "right";
                        }
                    }
                }
                console.log("util direction", _this.util.direction);
            }, function (error) {
                console.log('default settings by id', error);
                _this.util.appClosed = false;
                _this.util.direction = 'ltr';
                _this.util.cside = 'right';
                _this.util.currecny = '$';
                document.documentElement.dir = _this.util.direction;
            });
        }
        var uid = localStorage.getItem('uid');
        if (uid && uid !== null && uid !== 'null') {
            var param = {
                id: uid
            };
            this.api.post('stores/getByUid', param).then(function (data) {
                console.log('*******************', data);
                if (data && data.status === 200 && data.data && data.data.length) {
                    _this.util.storeInfo = data.data[0];
                }
                else {
                    localStorage.clear();
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.getLangs();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.getLangs = function () {
        var _this = this;
        this.api.get('lang').then(function (data) {
            console.log(data);
            if (data && data.status === 200) {
                var info = data.data.filter(function (x) { return x.status === '1'; });
                _this.util.languages = info;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
