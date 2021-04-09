"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalAnimationComponent = void 0;
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
var ModalAnimationComponent = /** @class */ (function () {
    function ModalAnimationComponent() {
        this.backDrop = false;
    }
    ModalAnimationComponent.prototype.ngOnInit = function () {
    };
    ModalAnimationComponent.prototype.close = function (event) {
        document.querySelector("#" + event).classList.remove('md-show');
    };
    __decorate([
        core_1.Input()
    ], ModalAnimationComponent.prototype, "modalClass");
    __decorate([
        core_1.Input()
    ], ModalAnimationComponent.prototype, "contentClass");
    __decorate([
        core_1.Input()
    ], ModalAnimationComponent.prototype, "modalID");
    __decorate([
        core_1.Input()
    ], ModalAnimationComponent.prototype, "backDrop");
    ModalAnimationComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-animation',
            templateUrl: './modal-animation.component.html',
            styleUrls: ['./modal-animation.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], ModalAnimationComponent);
    return ModalAnimationComponent;
}());
exports.ModalAnimationComponent = ModalAnimationComponent;
