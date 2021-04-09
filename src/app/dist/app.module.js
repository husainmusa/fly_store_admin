"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
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
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./layouts/admin/admin.component");
var title_component_1 = require("./layouts/admin/title/title.component");
var breadcrumbs_component_1 = require("./layouts/admin/breadcrumbs/breadcrumbs.component");
var auth_component_1 = require("./layouts/auth/auth.component");
var shared_module_1 = require("./shared/shared.module");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var service_worker_1 = require("@angular/service-worker");
var leaved_guard_1 = require("./leaved/leaved.guard");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                admin_component_1.AdminComponent,
                title_component_1.TitleComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                auth_component_1.AuthComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule,
                http_1.HttpClientModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
            ],
            providers: [leaved_guard_1.LeaveGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
