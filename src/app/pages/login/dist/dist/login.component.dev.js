"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.LoginComponent = void 0;
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

var LoginComponent =
/** @class */
function () {
  function LoginComponent(router, api, toastyService, spinner, util, zone) {
    var _this = this;

    this.router = router;
    this.api = api;
    this.toastyService = toastyService;
    this.spinner = spinner;
    this.util = util;
    this.zone = zone;
    this.email = '';
    this.password = '';
    this.langs = [];
    this.zone.run(function () {
      _this.selected = localStorage.getItem('language');
    });
  }

  LoginComponent.prototype.ngOnInit = function () {};

  LoginComponent.prototype.login = function () {
    var _this = this;

    if (!this.email || this.email === '' || !this.password || this.password === '') {
      this.error(this.util.getString('All Fields are required'));
      return false;
    }

    var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailfilter.test(this.email)) {
      this.error(this.util.getString('Please enter valid email'));
      return false;
    }

    var param = {
      email: this.email,
      password: this.password
    };
    this.spinner.show();
    this.api.post('users/login', param).then(function (data) {
      console.log('datas', data);

      if (data && data.status === 200) {
        if (data && data.data && data.data.type && data.data.type === 'store') {
          localStorage.setItem('uid', data.data.id);
          var store = {
            id: data.data.id
          };

          _this.api.post('stores/getByUid', store).then(function (data) {
            _this.spinner.hide();

            console.log('*******************', data);

            if (data && data.status === 200 && data.data && data.data.length) {
              _this.util.storeInfo = data.data[0];

              _this.router.navigate(['']);
            }
          }, function (error) {
            _this.spinner.hide();

            _this.error(_this.util.getString('Something went wrong'));

            console.log(error);
          })["catch"](function (error) {
            _this.spinner.hide();

            console.log(error);
          });
        } else {
          _this.spinner.hide();

          _this.error(_this.util.getString('access denied'));

          return false;
        }
      } else if (data && data.status === 500) {
        _this.spinner.hide();

        if (data.data && data.data.message) {
          _this.error(data.data.message);
        } else {
          _this.error(_this.util.getString('Something went wrong'));
        }
      } else {
        _this.error(_this.util.getString('Something went wrong'));
      }
    })["catch"](function (error) {
      _this.spinner.hide();

      console.log('errror', error);

      _this.error(_this.util.getString('Something went wrong'));
    }); // localStorage.setItem('uid', 'admin');
    // localStorage.setItem('type', 'admin');
    // this.router.navigate(['admin']);
  };

  LoginComponent.prototype.error = function (message) {
    var toastOptions = {
      title: this.util.getString('Error'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: function onAdd(toast) {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function onRemove() {
        console.log('Toast  has been removed!');
      }
    }; // Add see all possible types in one shot

    this.toastyService.error(toastOptions);
  };

  LoginComponent.prototype.success = function (message) {
    var toastOptions = {
      title: this.util.getString('Success'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: function onAdd(toast) {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function onRemove() {
        console.log('Toast  has been removed!');
      }
    }; // Add see all possible types in one shot

    this.toastyService.success(toastOptions);
  };

  LoginComponent.prototype.reset = function () {
    this.router.navigate(['reset']);
  };

  LoginComponent.prototype.changeLng = function (item) {
    console.log(item);
    localStorage.setItem('language', item.file);
    window.location.reload();
  };

  LoginComponent = __decorate([core_1.Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })], LoginComponent);
  return LoginComponent;
}();

exports.LoginComponent = LoginComponent;