"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
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
var admin_component_1 = require("./layouts/admin/admin.component");
var auth_component_1 = require("./layouts/auth/auth.component");
var auth_guard_1 = require("./guard/auth.guard");
var leaved_guard_1 = require("./leaved/leaved.guard");
var routes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/dashboard/dashboard.module'); }).then(function (m) { return m.DashboardModule; }); },
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'stats',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/stats/stats.module'); }).then(function (m) { return m.StatsModule; }); }
            },
            {
                path: 'manage-orders',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/manage-orders/manage-orders.module'); }).then(function (m) { return m.ManageOrdersModule; }); }
            },
            {
                path: 'contacts',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/contacts/contacts.module'); }).then(function (m) { return m.ContactsModule; }); },
                canDeactivate: [leaved_guard_1.LeaveGuard]
            },
            {
                path: 'products',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/products/products.module'); }).then(function (m) { return m.ProductsModule; }); }
            },
            {
                path: 'manage-products',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/manage-products/manage-products.module'); }).then(function (m) { return m.ManageProductsModule; }); }
            },
            {
                path: 'reviews',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/reviews/reviews.module'); }).then(function (m) { return m.ReviewsModule; }); }
            },
        ]
    },
    {
        path: '',
        component: auth_component_1.AuthComponent,
        children: [
            {
                path: 'login',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/login/login.module'); }).then(function (m) { return m.LoginModule; }); }
            },
            {
                path: 'reset',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/reset/reset.module'); }).then(function (m) { return m.ResetModule; }); }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: false })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
