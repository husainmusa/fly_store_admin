"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManageOrdersModule = void 0;
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
var manage_orders_routing_module_1 = require("./manage-orders-routing.module");
var manage_orders_component_1 = require("./manage-orders.component");
var shared_module_1 = require("src/app/shared/shared.module");
var ManageOrdersModule = /** @class */ (function () {
    function ManageOrdersModule() {
    }
    ManageOrdersModule = __decorate([
        core_1.NgModule({
            declarations: [manage_orders_component_1.ManageOrdersComponent],
            imports: [
                common_1.CommonModule,
                manage_orders_routing_module_1.ManageOrdersRoutingModule,
                shared_module_1.SharedModule
            ]
        })
    ], ManageOrdersModule);
    return ManageOrdersModule;
}());
exports.ManageOrdersModule = ManageOrdersModule;
