"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LeaveGuard = void 0;
var core_1 = require("@angular/core");
var LeaveGuard = /** @class */ (function () {
    function LeaveGuard(util) {
        this.util = util;
    }
    LeaveGuard.prototype.canDeactivate = function (component) {
        console.log('ok closed this stufff');
        this.util.ejectMsg();
        return true;
    };
    LeaveGuard = __decorate([
        core_1.Injectable()
    ], LeaveGuard);
    return LeaveGuard;
}());
exports.LeaveGuard = LeaveGuard;
;
