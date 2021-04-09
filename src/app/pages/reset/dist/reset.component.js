"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResetComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var ResetComponent = /** @class */ (function () {
    function ResetComponent(navCtrl, api, toastyService, spinner, util) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.toastyService = toastyService;
        this.spinner = spinner;
        this.util = util;
        this.currentDiv = 1;
        this.sent = false;
        this.email = '';
        this.otp = '';
        this.password = '';
        this.repass = '';
        this.verified = false;
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent.prototype.login = function () {
        this.back();
    };
    ResetComponent.prototype.error = function (message) {
        var toastOptions = {
            title: this.util.getString('Error'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function () {
                console.log('Toast  has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.error(toastOptions);
    };
    ResetComponent.prototype.success = function (message) {
        var toastOptions = {
            title: this.util.getString('Success'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function () {
                console.log('Toast  has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.success(toastOptions);
    };
    ResetComponent.prototype.sendOTP = function () {
        var _this = this;
        console.log(this.email, ';sendOTPDriver');
        if (!this.email) {
            this.error(this.util.getString('Email is required'));
            return false;
        }
        var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailfilter.test(this.email)) {
            this.error(this.util.getString('Please enter valid email'));
            return false;
        }
        // this.util.start();
        this.spinner.show();
        var param = {
            email: this.email
        };
        this.api.post('users/sendOTP', param).then(function (data) {
            console.log(data);
            _this.spinner.hide();
            if (data && data.status === 200) {
                _this.id = data.data.id;
                _this.spinner.hide();
                _this.currentDiv = 2;
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    // this.util.errorToast(data.data.message);
                    _this.error(data.data.message);
                    return false;
                }
                // this.util.errorToast('Something went wrong');
                _this.error(_this.util.getString('Something went wrong'));
                return false;
            }
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            _this.error(_this.util.getString('Something went wrong'));
        });
    };
    ResetComponent.prototype.verifyOTP = function () {
        var _this = this;
        // this.currentDiv = 3;
        if (!this.otp || this.otp === '') {
            // this.util.showToast('otp is required', 'dark', 'bottom');
            this.error(this.util.getString('otp is required'));
            return false;
        }
        this.spinner.show();
        var param = {
            id: this.id,
            otp: this.otp
        };
        this.api.post('users/verifyOTP', param).then(function (data) {
            console.log(data);
            _this.spinner.hide();
            if (data && data.status === 200) {
                _this.spinner.hide();
                _this.currentDiv = 3;
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    _this.error(data.data.message);
                    return false;
                }
                _this.error(_this.util.getString('Something went wrong'));
                return false;
            }
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            _this.error(_this.util.getString('Something went wrong'));
        });
    };
    ResetComponent.prototype.sendEmail = function () {
        var _this = this;
        console.log('pwddd0<<<<<<', this.password);
        if (!this.password || !this.repass || this.password === '' || this.repass === '') {
            this.error(this.util.getString('All Field are required'));
            return false;
        }
        var param = {
            email: this.email,
            pwd: this.password
        };
        this.spinner.show();
        this.api.post('users/update_password', param).then(function (data) {
            console.log(data);
            _this.spinner.hide();
            if (data && data.status === 200) {
                _this.spinner.hide();
                var Toast = sweetalert2_1["default"].mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: function (toast) {
                        toast.addEventListener('mouseenter', sweetalert2_1["default"].stopTimer);
                        toast.addEventListener('mouseleave', sweetalert2_1["default"].resumeTimer);
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: _this.util.getString('Password Updated')
                });
                _this.back();
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    _this.error(data.data.message);
                    return false;
                }
                _this.error(_this.util.getString('Something went wrong'));
                return false;
            }
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            _this.error(_this.util.getString('Something went wrong'));
        });
    };
    ResetComponent.prototype.back = function () {
        this.navCtrl.back();
    };
    ResetComponent = __decorate([
        core_1.Component({
            selector: 'app-reset',
            templateUrl: './reset.component.html',
            styleUrls: ['./reset.component.css']
        })
    ], ResetComponent);
    return ResetComponent;
}());
exports.ResetComponent = ResetComponent;
