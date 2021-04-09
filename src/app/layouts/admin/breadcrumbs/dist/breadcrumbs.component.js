"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BreadcrumbsComponent = void 0;
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
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.tempState = [];
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            _this.breadcrumbs = [];
            _this.tempState = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        var routeSnapshot = routes.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        if (routes.snapshot.data.breadcrumb !== undefined) {
                            var status = true;
                            if (routes.snapshot.data.status !== undefined) {
                                status = routes.snapshot.data.status;
                            }
                            if (!_this.tempState.includes(routes.snapshot.data.breadcrumb)) {
                                _this.tempState.push(routes.snapshot.data.breadcrumb);
                                _this.breadcrumbs.push({
                                    label: routes.snapshot.data.breadcrumb,
                                    status: status,
                                    url: url
                                });
                            }
                        }
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumbs',
            templateUrl: './breadcrumbs.component.html',
            styleUrls: ['./breadcrumbs.component.scss']
        })
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
exports.BreadcrumbsComponent = BreadcrumbsComponent;
