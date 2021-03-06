"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.SpinnerComponent = void 0;
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
var spinkits_1 = require("./spinkits");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = spinkits_1.Spinkit;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.spinner = spinkits_1.Spinkit.skLine;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof router_1.NavigationEnd || event instanceof router_1.NavigationCancel || event instanceof router_1.NavigationError) {
                _this.isSpinnerVisible = false;
            }
        }, function (error) {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    __decorate([
        core_1.Input()
    ], SpinnerComponent.prototype, "backgroundColor");
    __decorate([
        core_1.Input()
    ], SpinnerComponent.prototype, "spinner");
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'app-spinner',
            templateUrl: './spinner.component.html',
            styleUrls: [
                './spinner.component.scss',
                './spinkit-css/sk-double-bounce.scss',
                './spinkit-css/sk-chasing-dots.scss',
                './spinkit-css/sk-cube-grid.scss',
                './spinkit-css/sk-rotating-plane.scss',
                './spinkit-css/sk-spinner-pulse.scss',
                './spinkit-css/sk-three-bounce.scss',
                './spinkit-css/sk-wandering-cubes.scss',
                './spinkit-css/sk-wave.scss',
                './spinkit-css/sk-line-material.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(common_1.DOCUMENT))
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
