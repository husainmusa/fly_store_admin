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
exports.AccordionLinkDirective = void 0;
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
var accordion_directive_1 = require("./accordion.directive");
var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            /*for slimscroll on and off*/
            document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    };
    __decorate([
        core_1.Input()
    ], AccordionLinkDirective.prototype, "group");
    __decorate([
        core_1.HostBinding('class.pcoded-trigger'),
        core_1.Input()
    ], AccordionLinkDirective.prototype, "open");
    AccordionLinkDirective = __decorate([
        core_1.Directive({
            selector: '[appAccordionLink]'
        }),
        __param(0, core_1.Inject(accordion_directive_1.AccordionDirective))
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());
exports.AccordionLinkDirective = AccordionLinkDirective;
