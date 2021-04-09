"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ContactsComponent = void 0;
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
var moment = require("moment");
var core_2 = require("@angular/core");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(api, util) {
        var _this = this;
        this.api = api;
        this.util = util;
        this.users = [];
        this.dummy = [];
        this.messages = [];
        this.resetChanges = function () {
            _this.users = _this.dummy;
        };
        this.getChats();
        this.uid = localStorage.getItem('uid');
    }
    ContactsComponent.prototype.canDeactivate = function () {
        console.log('ok');
    };
    ;
    ContactsComponent.prototype.getChats = function () {
        var _this = this;
        var param = {
            id: localStorage.getItem('uid')
        };
        this.dummy = Array(10);
        this.api.post('chats/getByGroup', param).then(function (data) {
            console.log(data);
            if (data && data.status === 200) {
                var info_1 = [];
                data.data.forEach(function (element) {
                    info_1.push(element.from_id);
                    info_1.push(element.room_id);
                });
                var uniq = __spreadArrays(new Set(info_1));
                uniq = uniq.filter(function (x) { return x !== localStorage.getItem('uid'); });
                console.log('uniq->>', uniq);
                var uid = {
                    id: uniq.join()
                };
                _this.api.post('users/getChatsNames', uid).then(function (uids) {
                    _this.dummy = [];
                    if (uids && uids.status === 200) {
                        _this.users = uids.data;
                        console.log('users ----->', _this.users);
                    }
                }, function (error) {
                    console.log(error);
                    _this.users = [];
                    _this.dummy = [];
                });
            }
            else {
                _this.dummy = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.search = function (str) {
        this.resetChanges();
        console.log('string', str);
        this.users = this.filterItems(str);
    };
    ContactsComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ContactsComponent.prototype.setFilteredItems = function () {
        console.log('clear');
        this.users = [];
        this.users = this.dummy;
    };
    ContactsComponent.prototype.filterItems = function (searchTerm) {
        return this.users.filter(function (item) {
            if (item.type === 'venue') {
                return item.fname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }
            else {
                return item.fullname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }
        });
    };
    ContactsComponent.prototype.admin = function () {
        var _this = this;
        this.id = '0';
        this.name = 'Support';
        this.getChatss();
        this.interval = setInterval(function () {
            console.log('calling in interval');
            _this.getChatss();
        }, 12000);
    };
    ContactsComponent.prototype.chatUser = function (item) {
        var _this = this;
        console.log(item);
        this.id = item.id;
        this.name = item.name;
        this.getChatss();
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            console.log('calling in interval');
            _this.getChatss();
        }, 12000);
    };
    ContactsComponent.prototype.getChatss = function () {
        var _this = this;
        // store _ opponent
        var param = {
            id: localStorage.getItem('uid') + '_' + this.id,
            oid: this.id
        };
        this.api.post('chats/getById', param).then(function (data) {
            console.log(data);
            if (data && data.status === 200) {
                _this.messages = data.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ContactsComponent.prototype.send = function () {
        var _this = this;
        // store to opponent
        console.log(this.message);
        if (!this.message || this.message === '') {
            return false;
        }
        var msg = this.message;
        this.message = '';
        var param = {
            room_id: this.id,
            uid: localStorage.getItem('uid') + '_' + this.id,
            from_id: localStorage.getItem('uid'),
            message: msg,
            message_type: 'store',
            status: 1,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
        };
        this.api.post('chats/save', param).then(function (data) {
            console.log(data);
            if (data && data.status === 200) {
                _this.getChatss();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('scrollMe', { static: false })
    ], ContactsComponent.prototype, "myScrollContainer");
    __decorate([
        core_1.ViewChildren('messages')
    ], ContactsComponent.prototype, "messagesList");
    __decorate([
        core_2.HostListener('window:beforeunload')
    ], ContactsComponent.prototype, "canDeactivate");
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.scss']
        })
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
