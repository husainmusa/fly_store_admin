"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReviewsModule = void 0;
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
var common_1 = require("@angular/common");
var reviews_routing_module_1 = require("./reviews-routing.module");
var reviews_component_1 = require("./reviews.component");
var ReviewsModule = /** @class */ (function () {
    function ReviewsModule() {
    }
    ReviewsModule = __decorate([
        core_1.NgModule({
            declarations: [reviews_component_1.ReviewsComponent],
            imports: [
                common_1.CommonModule,
                reviews_routing_module_1.ReviewsRoutingModule
            ]
        })
    ], ReviewsModule);
    return ReviewsModule;
}());
exports.ReviewsModule = ReviewsModule;
