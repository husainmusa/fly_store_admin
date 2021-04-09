"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = void 0 && (void 0).__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = require("@angular/core");

var accordionlink_directive_1 = require("./accordionlink.directive");

var AccordionAnchorDirective = function () {
  function AccordionAnchorDirective(navlink) {
    this.navlink = navlink;
  }

  AccordionAnchorDirective.prototype.onClick = function (e) {
    this.navlink.toggle();
  };

  return AccordionAnchorDirective;
}();

__decorate([core_1.HostListener('click', ['$event'])], AccordionAnchorDirective.prototype, "onClick", null);

AccordionAnchorDirective = __decorate([core_1.Directive({
  selector: '[appAccordionToggle]'
}), __param(0, core_1.Inject(accordionlink_directive_1.AccordionLinkDirective))], AccordionAnchorDirective);
exports.AccordionAnchorDirective = AccordionAnchorDirective;