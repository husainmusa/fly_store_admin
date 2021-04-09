"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResetModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var reset_routing_module_1 = require("./reset-routing.module");
var reset_component_1 = require("./reset.component");
var shared_module_1 = require("src/app/shared/shared.module");
var ResetModule = /** @class */ (function () {
    function ResetModule() {
    }
    ResetModule = __decorate([
        core_1.NgModule({
            declarations: [reset_component_1.ResetComponent],
            imports: [
                common_1.CommonModule,
                reset_routing_module_1.ResetRoutingModule,
                shared_module_1.SharedModule
            ]
        })
    ], ResetModule);
    return ResetModule;
}());
exports.ResetModule = ResetModule;
