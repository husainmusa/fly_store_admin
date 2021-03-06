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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = require("@angular/core");

var CardRefreshDirective = function () {
  function CardRefreshDirective(el) {
    this.el = el;
  }

  CardRefreshDirective.prototype.open = function () {
    this.el.nativeElement.classList.add('rotate-refresh');
  };

  CardRefreshDirective.prototype.close = function () {
    this.el.nativeElement.classList.remove('rotate-refresh');
  };

  return CardRefreshDirective;
}();

__decorate([core_1.HostListener('mouseenter')], CardRefreshDirective.prototype, "open", null);

__decorate([core_1.HostListener('mouseleave')], CardRefreshDirective.prototype, "close", null);

CardRefreshDirective = __decorate([core_1.Directive({
  selector: '[cardRefresh]'
})], CardRefreshDirective);
exports.CardRefreshDirective = CardRefreshDirective;