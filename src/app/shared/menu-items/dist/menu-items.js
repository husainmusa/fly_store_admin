"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenuItems = void 0;
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
var MENUITEMS = [
    {
        label: 'Main',
        main: [
            {
                state: 'dashboard',
                name: 'Dashboard',
                type: 'link',
                icon: 'ti-home'
            },
            {
                state: 'products',
                name: 'Products',
                type: 'link',
                icon: 'ti-envelope'
            },
            {
                state: 'reviews',
                name: 'Reviews',
                type: 'link',
                icon: 'ti-face-smile'
            }
        ]
    },
    {
        label: 'Manage',
        main: [
            {
                state: 'stats',
                name: 'Store Stats',
                type: 'link',
                icon: 'ti-stats-up'
            },
            {
                state: 'contacts',
                name: 'Support',
                type: 'link',
                icon: 'ti-comments-smiley'
            },
        ]
    },
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems = __decorate([
        core_1.Injectable()
    ], MenuItems);
    return MenuItems;
}());
exports.MenuItems = MenuItems;
