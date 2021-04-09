"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
require("rxjs/add/operator/filter");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(menuItems, api, router, util) {
        this.menuItems = menuItems;
        this.api = api;
        this.router = router;
        this.util = util;
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.chatToggle = 'out';
        this.chatInnerToggle = 'off';
        this.isScrolled = false;
        this.isCollapsedMobile = 'no-block';
        this.toggleOn = true;
        var scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributs(this.windowWidth);
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent.prototype.onClickedOutside = function (e) {
        if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    };
    AdminComponent.prototype.changeLng = function (item) {
        console.log(item);
        localStorage.setItem('language', item.file);
        localStorage.setItem('language_id', item.id);
        window.location.reload();
    };
    AdminComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        var reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        if (reSizeFlag) {
            this.setMenuAttributs(this.windowWidth);
        }
    };
    AdminComponent.prototype.setMenuAttributs = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    AdminComponent.prototype.searchFriendList = function (event) {
        var search = (this.search_friends.nativeElement.value).toLowerCase();
        var search_input;
        var search_parent;
        var friendList = document.querySelectorAll('.userlist-box .media-body .chat-header');
        Array.prototype.forEach.call(friendList, function (elements, index) {
            search_input = (elements.innerHTML).toLowerCase();
            search_parent = (elements.parentNode).parentNode;
            if (search_input.indexOf(search) !== -1) {
                search_parent.classList.add('show');
                search_parent.classList.remove('hide');
            }
            else {
                search_parent.classList.add('hide');
                search_parent.classList.remove('show');
            }
        });
    };
    AdminComponent.prototype.toggleChat = function () {
        this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
    };
    AdminComponent.prototype.toggleChatInner = function () {
        this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
    };
    AdminComponent.prototype.toggleOpened = function () {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
        }
        else {
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
        }
    };
    AdminComponent.prototype.onMobileMenu = function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    AdminComponent.prototype.onScroll = function (event) {
        this.isScrolled = false;
    };
    AdminComponent.prototype.logout = function () {
        var lng = localStorage.getItem('lng');
        localStorage.clear();
        localStorage.setItem('lng', lng);
        this.router.navigate(['/login']);
    };
    AdminComponent.prototype.getName = function (name) {
        return this.util.getString(name);
        // return name;
    };
    __decorate([
        core_1.ViewChild('searchFriends', /* TODO: add static flag */ { static: false })
    ], AdminComponent.prototype, "search_friends");
    __decorate([
        core_1.ViewChild('toggleButton', /* TODO: add static flag */ { static: false })
    ], AdminComponent.prototype, "toggle_button");
    __decorate([
        core_1.ViewChild('sideMenu', /* TODO: add static flag */ { static: false })
    ], AdminComponent.prototype, "side_menu");
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                animations_1.trigger('slideInOut', [
                    animations_1.state('in', animations_1.style({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    animations_1.state('out', animations_1.style({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    animations_1.transition('in => out', animations_1.animate('400ms ease-in-out')),
                    animations_1.transition('out => in', animations_1.animate('400ms ease-in-out'))
                ]),
                animations_1.trigger('slideOnOff', [
                    animations_1.state('on', animations_1.style({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    animations_1.state('off', animations_1.style({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    animations_1.transition('on => off', animations_1.animate('400ms ease-in-out')),
                    animations_1.transition('off => on', animations_1.animate('400ms ease-in-out'))
                ]),
                animations_1.trigger('mobileMenuTop', [
                    animations_1.state('no-block, void', animations_1.style({
                        overflow: 'hidden',
                        height: '0px'
                    })),
                    animations_1.state('yes-block', animations_1.style({
                        height: animations_1.AUTO_STYLE
                    })),
                    animations_1.transition('no-block <=> yes-block', [
                        animations_1.animate('400ms ease-in-out')
                    ])
                ])
            ]
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
