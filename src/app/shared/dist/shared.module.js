"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
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
var menu_items_1 = require("./menu-items/menu-items");
var accordion_1 = require("./accordion");
var toggle_fullscreen_directive_1 = require("./fullscreen/toggle-fullscreen.directive");
var card_refresh_directive_1 = require("./card/card-refresh.directive");
var card_toggle_directive_1 = require("./card/card-toggle.directive");
var card_component_1 = require("./card/card.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var parent_remove_directive_1 = require("./elements/parent-remove.directive");
var forms_1 = require("@angular/forms");
var modal_animation_component_1 = require("./modal-animation/modal-animation.component");
var modal_basic_component_1 = require("./modal-basic/modal-basic.component");
var ng2_toasty_1 = require("ng2-toasty");
var angular2_notifications_1 = require("angular2-notifications");
var css_animator_1 = require("css-animator");
var data_filter_pipe_1 = require("./elements/data-filter.pipe");
var ngx_scroll_to_1 = require("@nicky-lenaers/ngx-scroll-to");
var core_2 = require("@agm/core");
var todo_service_1 = require("./todo/todo.service");
var ng_click_outside_1 = require("ng-click-outside");
var spinner_component_1 = require("./spinner/spinner.component");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var angular2_notifications_2 = require("angular2-notifications");
var ngx_skeleton_loader_1 = require("ngx-skeleton-loader");
var ngx_spinner_1 = require("ngx-spinner");
var ngx_pagination_1 = require("ngx-pagination");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                ng2_toasty_1.ToastyModule.forRoot(),
                angular2_notifications_1.SimpleNotificationsModule.forRoot(),
                css_animator_1.AnimatorModule,
                ngx_scroll_to_1.ScrollToModule.forRoot(),
                core_2.AgmCoreModule.forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' }),
                ng_click_outside_1.ClickOutsideModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ngx_skeleton_loader_1.NgxSkeletonLoaderModule,
                ngx_spinner_1.NgxSpinnerModule,
                ngx_pagination_1.NgxPaginationModule
            ],
            declarations: [
                accordion_1.AccordionAnchorDirective,
                accordion_1.AccordionLinkDirective,
                accordion_1.AccordionDirective,
                toggle_fullscreen_directive_1.ToggleFullscreenDirective,
                card_refresh_directive_1.CardRefreshDirective,
                card_toggle_directive_1.CardToggleDirective,
                parent_remove_directive_1.ParentRemoveDirective,
                card_component_1.CardComponent,
                spinner_component_1.SpinnerComponent,
                modal_animation_component_1.ModalAnimationComponent,
                modal_basic_component_1.ModalBasicComponent,
                data_filter_pipe_1.DataFilterPipe,
            ],
            exports: [
                accordion_1.AccordionAnchorDirective,
                accordion_1.AccordionLinkDirective,
                accordion_1.AccordionDirective,
                toggle_fullscreen_directive_1.ToggleFullscreenDirective,
                card_refresh_directive_1.CardRefreshDirective,
                card_toggle_directive_1.CardToggleDirective,
                parent_remove_directive_1.ParentRemoveDirective,
                card_component_1.CardComponent,
                spinner_component_1.SpinnerComponent,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                modal_basic_component_1.ModalBasicComponent,
                modal_animation_component_1.ModalAnimationComponent,
                ng2_toasty_1.ToastyModule,
                angular2_notifications_1.SimpleNotificationsModule,
                css_animator_1.AnimatorModule,
                data_filter_pipe_1.DataFilterPipe,
                ngx_scroll_to_1.ScrollToModule,
                core_2.AgmCoreModule,
                ng_click_outside_1.ClickOutsideModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ngx_spinner_1.NgxSpinnerModule,
                ngx_skeleton_loader_1.NgxSkeletonLoaderModule,
                ngx_pagination_1.NgxPaginationModule
            ],
            providers: [
                menu_items_1.MenuItems,
                todo_service_1.TodoService,
                angular2_notifications_2.NotificationsService,
                {
                    provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
