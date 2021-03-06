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

var ParentRemoveDirective = function () {
  function ParentRemoveDirective(elements) {
    this.elements = elements;
  }

  ParentRemoveDirective.prototype.onToggle = function ($event) {
    $event.preventDefault();
    this.alert_parent = this.elements.nativeElement.parentElement;
    this.alert_parent.remove();
  };

  return ParentRemoveDirective;
}();

__decorate([core_1.HostListener('click', ['$event'])], ParentRemoveDirective.prototype, "onToggle", null);

ParentRemoveDirective = __decorate([core_1.Directive({
  selector: '[parentRemove]'
})], ParentRemoveDirective);
exports.ParentRemoveDirective = ParentRemoveDirective;