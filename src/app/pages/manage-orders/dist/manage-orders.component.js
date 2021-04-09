"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ManageOrdersComponent = void 0;
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
var ManageOrdersComponent = /** @class */ (function () {
    function ManageOrdersComponent(api, route, navCtrl, toastyService, spinner, util, modalService) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.navCtrl = navCtrl;
        this.toastyService = toastyService;
        this.spinner = spinner;
        this.util = util;
        this.modalService = modalService;
        this.orderDetail = [];
        this.orders = [];
        this.drivers = [];
        this.dummyDrivers = [];
        this.assignee = [];
        this.assigneeDriver = [];
        this.orderStatus = [];
        this.statusText = '';
        this.orderString = [];
        this.selectedDriver = '';
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            if (data && data.id) {
                _this.id = data.id;
                _this.loaded = false;
                _this.getOrder();
                console.log('store=-============---=-=0-=-=-=-', _this.util.storeInfo);
                if (_this.util.storeInfo && _this.util.storeInfo.name) {
                    _this.statusText = ' by ' + _this.util.storeInfo.name;
                }
            }
            else {
                _this.navCtrl.back();
            }
        });
    }
    ManageOrdersComponent.prototype.degreesToRadians = function (degrees) {
        return degrees * Math.PI / 180;
    };
    ManageOrdersComponent.prototype.distanceInKmBetweenEarthCoordinates = function (lat1, lon1, lat2, lon2) {
        console.log(lat1, lon1, lat2, lon2);
        var earthRadiusKm = 6371;
        var dLat = this.degreesToRadians(lat2 - lat1);
        var dLon = this.degreesToRadians(lon2 - lon1);
        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    };
    ManageOrdersComponent.prototype.getDrivers = function () {
        var _this = this;
        if (this.util.storeInfo && this.util.storeInfo.cid) {
            var param = {
                id: this.util.storeInfo.cid
            };
            this.api.post('drivers/geyByCity', param).then(function (data) {
                console.log('driver data--------------->>', data);
                if (data && data.status === 200 && data.data.length) {
                    var info = data.data.filter(function (x) { return x.status === '1'; });
                    info.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var distance;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng))];
                                case 1:
                                    distance = _a.sent();
                                    console.log('distance---------->>', distance);
                                    // if (distance < 50 && element.current === 'active' && element.status === '1') {
                                    this.dummyDrivers.push(element);
                                    // }
                                    console.log('dummtasedr', this.dummyDrivers);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
            }, function (error) {
                console.log(error);
                _this.error(_this.util.getString('Something went wrong'));
            });
        }
    };
    ManageOrdersComponent.prototype.ngOnInit = function () {
    };
    ManageOrdersComponent.prototype.back = function () {
        this.navCtrl.back();
    };
    ManageOrdersComponent.prototype.getOrder = function () {
        var _this = this;
        var param = {
            id: this.id
        };
        this.spinner.show();
        this.api.post('orders/getById', param).then(function (data) {
            console.log(data);
            _this.spinner.hide();
            _this.loaded = true;
            if (data && data.status === 200 && data.data.length > 0) {
                var info = data.data[0];
                _this.grandTotal = info.grand_total;
                console.log(info);
                _this.orderDetail = JSON.parse(info.notes);
                var order = JSON.parse(info.orders);
                _this.orders = order.filter(function (x) { return x.store_id === localStorage.getItem('uid'); });
                console.log('order=====>>', _this.orders);
                var total_1 = 0;
                _this.orders.forEach(function (element) {
                    var price = 0;
                    console.log('-->', element);
                    if (element.variations && element.variations !== '' && typeof element.variations === 'string') {
                        console.log('strings', element.id);
                        element.variations = JSON.parse(element.variations);
                        console.log(element['variant']);
                        if (element["variant"] === undefined) {
                            element['variant'] = 0;
                        }
                    }
                    if (element && element.discount === '0') {
                        if (element.size === '1' || element.size === 1) {
                            if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                                price = price + (parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy);
                            }
                            else {
                                price = price + (parseFloat(element.variations[0].items[element.variant].price) * element.quantiy);
                            }
                        }
                        else {
                            price = price + (parseFloat(element.original_price) * element.quantiy);
                        }
                    }
                    else {
                        if (element.size === '1' || element.size === 1) {
                            if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                                price = price + (parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy);
                            }
                            else {
                                price = price + (parseFloat(element.variations[0].items[element.variant].price) * element.quantiy);
                            }
                        }
                        else {
                            price = price + (parseFloat(element.sell_price) * element.quantiy);
                        }
                    }
                    console.log('PRICEEE-->', price);
                    var items = '<div style="border-bottom:1px dashed lightgray;display:flex;flex-direction:row;justify-content:space-between;"> <p style="font-weight:bold">'
                        + element.name + ' X ' + element.quantiy + '</p> <p style="font-weight:bold">' + price + '$ </p>  </div>';
                    _this.orderString.push(items);
                    console.log(total_1, price);
                    total_1 = total_1 + price;
                });
                console.log('==>', total_1);
                var storesStatus = JSON.parse(info.status);
                console.log('------------------', storesStatus);
                _this.orderStatus = storesStatus;
                var current = storesStatus.filter(function (x) { return x.id === localStorage.getItem('uid'); });
                console.log('*************************', current);
                if (current && current.length) {
                    _this.status = current[0].status;
                }
                _this.datetime = moment(info.date_time).format('dddd, MMMM Do YYYY');
                _this.payMethod = info.paid_method === 'cod' ? 'COD' : 'PAID';
                _this.orderAt = info.order_to;
                _this.tax = info.tax;
                _this.driverId = info.driver_id;
                if (info.uid) {
                    var userinfo = {
                        id: info.uid
                    };
                    _this.api.post('users/getById', userinfo).then(function (data) {
                        console.log('user info=>', data);
                        if (data && data.status === 200 && data.data && data.data.length) {
                            _this.userInfo = data.data[0];
                            console.log(_this.userInfo);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
                if (_this.orderAt === 'home') {
                    var address = JSON.parse(info.address);
                    console.log('---address', address);
                    if (address && address.address) {
                        _this.userLat = address.lat;
                        _this.userLng = address.lng;
                        _this.address = address.landmark + ' ' + address.house + ' ' + address.address + ' ' + address.pincode;
                        _this.getDrivers();
                    }
                    if (info.assignee && info.assignee !== '') {
                        var assignee = JSON.parse(info.assignee);
                        _this.assignee = assignee;
                        var driver = _this.assignee.filter(function (x) { return x.assignee === localStorage.getItem('uid'); });
                        console.log('-------------', driver);
                        if (driver && driver.length) {
                            _this.driverId = driver[0].driver;
                            console.log('driverid===================', _this.driverId);
                        }
                    }
                    if (info.driver_id && info.driver_id !== '') {
                        var drivers = info.driver_id.split(',');
                        _this.assigneeDriver = drivers;
                    }
                    console.log('----', _this.assignee);
                    console.log('----', _this.assigneeDriver);
                }
            }
            else {
                _this.error(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.loaded = true;
            _this.spinner.hide();
            _this.error(_this.util.getString('Something went wrong'));
        });
    };
    ManageOrdersComponent.prototype.error = function (message) {
        var toastOptions = {
            title: this.util.getString('Error'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function () {
                console.log('Toast  has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.error(toastOptions);
    };
    ManageOrdersComponent.prototype.success = function (message) {
        var toastOptions = {
            title: this.util.getString('Success'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function () {
                console.log('Toast  has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.success(toastOptions);
    };
    ManageOrdersComponent.prototype.call = function () {
        if (this.userInfo.mobile) {
            window.open('tel:' + this.userInfo.mobile);
        }
        else {
            this.error('Number not found');
        }
    };
    ManageOrdersComponent.prototype.email = function () {
        if (this.userInfo.email) {
            window.open('mailto:' + this.userInfo.email);
        }
        else {
            this.error('Email not found');
        }
    };
    ManageOrdersComponent.prototype.printOrder = function () {
        // console.log('print order');
        // const options: PrintOptions = {
        //   name: 'Groceryee App Summary',
        //   duplex: false,
        // };
        // const order = this.orderString.join('');
        // const content = '<div style="padding: 20px;display: flex;flex-direction: column;"> <h2 style="text-align: center;">Groceryee Order Summary</h2> <p style="float: left;margin:0px;"><b>' + this.util.store.name + '</b></p> <p style="float: left;margin:0px;"><b> ' + this.userInfo.first_name + ' ' + this.userInfo.last_name + ' </b></p> <p style="float: left;margin:0px;">' + this.datetime + ' </p> </div>' + order
        //   + '<p style="border-bottom: 1px solid black;margin:10px 0px;"> <span style="float: left;font-weight: bold;">SubTotal</span> <span style="float: right;font-weight: bold;">' + this.grandTotal +
        //   '$</span> </p> <br> <p style="border-bottom: 1px solid black;margin:10px 0px;"> <span style="float: left;font-weight: bold;">Delivery Charge</span> <span style="float: right;font-weight: bold;">' + this.grandTotal +
        //   '$</span> </p> <br> <p style="border-bottom: 1px solid black;margin:10px 0px;"> <span style="float: left;font-weight: bold;">Service Tax</span> <span style="float: right;font-weight: bold;">' + this.tax +
        //   '$</span> </p> <br> <p style="border-bottom: 1px solid black;margin:10px 0px;"> <span style="float: left;font-weight: bold;">Total</span> <span style="float: right;font-weight: bold;">' + this.grandTotal + '$</span> </p>';
        // console.log(content);
        // this.printer.print(content, options).then((data) => {
        //   console.log(data);
        // }).catch(error => {
        //   console.log(error);
        // });
    };
    ManageOrdersComponent.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(status);
                try {
                    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        console.log(result);
                    }, function (reason) {
                        console.log(reason);
                    });
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    ManageOrdersComponent.prototype.close = function () {
        var _this = this;
        console.log('dismiss');
        var driver = this.dummyDrivers.filter(function (x) { return x.id === _this.selectedDriver; });
        console.log(driver);
        this.modalService.dismissAll();
        if (driver && driver.length > 0) {
            console.log('selected');
            this.drivers = driver;
            if (this.drivers && this.drivers.length) {
                var newOrderNotes = {
                    status: 1,
                    value: 'Order ' + 'accepted' + this.statusText,
                    time: moment().format('lll')
                };
                this.orderDetail.push(newOrderNotes);
                this.spinner.show();
                var assignee = {
                    driver: this.drivers[0].id,
                    assignee: localStorage.getItem('uid')
                };
                this.assignee.push(assignee);
                console.log('*********************************', this.assignee);
                this.assigneeDriver.push(this.drivers[0].id);
                console.log('////////////////////////////', this.assigneeDriver);
                var param = {
                    id: this.id,
                    notes: JSON.stringify(this.orderDetail),
                    status: JSON.stringify(this.orderStatus),
                    driver_id: this.assigneeDriver.join(),
                    assignee: JSON.stringify(this.assignee)
                };
                console.log('===================================', param);
                this.api.post('orders/editList', param).then(function (data) {
                    console.log('order', data);
                    _this.spinner.hide();
                    _this.updateDriver(_this.drivers[0].id, 'busy');
                    _this.back();
                    if (data && data.status === 200) {
                        _this.sendNotification('accepted');
                    }
                    else {
                        _this.error(_this.util.getString('Something went wrong'));
                    }
                }, function (error) {
                    console.log(error);
                    _this.spinner.hide();
                    _this.error(_this.util.getString('Something went wrong'));
                });
            }
        }
    };
    ManageOrdersComponent.prototype.updateDriver = function (uid, value) {
        var param = {
            id: uid,
            current: value
        };
        console.log('param', param);
        this.api.post('drivers/edit_profile', param).then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ManageOrdersComponent.prototype.updateStatus = function (value) {
        var _this = this;
        var newOrderNotes = {
            status: 1,
            value: 'Order ' + value + this.statusText,
            time: moment().format('lll')
        };
        this.orderDetail.push(newOrderNotes);
        this.spinner.show();
        var param = {
            id: this.id,
            notes: JSON.stringify(this.orderDetail),
            status: JSON.stringify(this.orderStatus)
        };
        this.api.post('orders/editList', param).then(function (data) {
            console.log('order', data);
            _this.spinner.hide();
            if (data && data.status === 200) {
                _this.sendNotification(value);
                _this.back();
            }
            else {
                _this.error(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            _this.error(_this.util.getString('Something went wrong'));
        });
    };
    ManageOrdersComponent.prototype.changeStatus = function (value) {
        var _this = this;
        console.log(value);
        this.orderStatus.forEach(function (element) {
            if (element.id === localStorage.getItem('uid')) {
                element.status = value;
            }
        });
        console.log(this.orderDetail);
        if (value === 'accepted' && this.orderAt === 'home') {
            this.presentModal();
        }
        else if (value === 'accepted' && this.orderAt !== 'home') {
            this.spinner.show();
            var newOrderNotes = {
                status: 1,
                value: 'Order ' + value + this.statusText,
                time: moment().format('lll')
            };
            this.orderDetail.push(newOrderNotes);
            var param = {
                id: this.id,
                notes: JSON.stringify(this.orderDetail),
                status: JSON.stringify(this.orderStatus)
            };
            this.api.post('orders/editList', param).then(function (data) {
                console.log('order', data);
                _this.spinner.hide();
                if (data && data.status === 200) {
                    _this.sendNotification('accepted');
                    _this.back();
                }
                else {
                    _this.error(_this.util.getString('Something went wrong'));
                }
            }, function (error) {
                console.log(error);
                _this.spinner.hide();
                _this.error(_this.util.getString('Something went wrong'));
            });
        }
        else {
            this.updateStatus(value);
        }
        // this.api
    };
    ManageOrdersComponent.prototype.sendNotification = function (value) {
        if (this.userInfo && this.userInfo.fcm_token) {
            this.api.sendNotification2('Your order #' + this.id + ' ' + value, 'Order ' + value, this.userInfo.fcm_token)
                .subscribe(function (data) {
                console.log('onesignal', data);
            }, function (error) {
                console.log('onesignal error', error);
            });
        }
    };
    ManageOrdersComponent.prototype.changeOrderStatus = function () {
        var _this = this;
        console.log(this.changeStatusOrder);
        console.log(this.orderDetail);
        if (this.changeStatusOrder) {
            this.orderStatus.forEach(function (element) {
                if (element.id === localStorage.getItem('uid')) {
                    element.status = _this.changeStatusOrder;
                }
            });
            if (this.changeStatusOrder !== 'ongoing' && this.orderAt === 'home' && this.driverId !== '0') {
                // release driver from this order
                console.log('relase driver');
                var newOrderNotes = {
                    status: 1,
                    value: 'Order ' + this.changeStatusOrder + this.statusText,
                    time: moment().format('lll')
                };
                this.orderDetail.push(newOrderNotes);
                this.spinner.show();
                var param = {
                    id: this.id,
                    notes: JSON.stringify(this.orderDetail),
                    status: JSON.stringify(this.orderStatus)
                };
                this.api.post('orders/editList', param).then(function (data) {
                    console.log('order', data);
                    _this.spinner.hide();
                    _this.updateDriver(_this.driverId, 'active');
                    if (data && data.status === 200) {
                        _this.sendNotification(_this.changeStatusOrder);
                        _this.back();
                    }
                    else {
                        _this.error(_this.util.getString('Something went wrong'));
                    }
                }, function (error) {
                    console.log(error);
                    _this.spinner.hide();
                    _this.error(_this.util.getString('Something went wrong'));
                });
            }
            else {
                var newOrderNotes = {
                    status: 1,
                    value: 'Order ' + this.changeStatusOrder + this.statusText,
                    time: moment().format('lll')
                };
                this.orderDetail.push(newOrderNotes);
                this.spinner.show();
                var param = {
                    id: this.id,
                    notes: JSON.stringify(this.orderDetail),
                    status: JSON.stringify(this.orderStatus)
                };
                this.api.post('orders/editList', param).then(function (data) {
                    console.log('order', data);
                    _this.spinner.hide();
                    if (data && data.status === 200) {
                        _this.sendNotification(_this.changeStatusOrder);
                        _this.back();
                    }
                    else {
                        _this.error(_this.util.getString('Something went wrong'));
                    }
                }, function (error) {
                    console.log(error);
                    _this.spinner.hide();
                    _this.error(_this.util.getString('Something went wrong'));
                });
            }
        }
    };
    __decorate([
        core_1.ViewChild('content', { static: false })
    ], ManageOrdersComponent.prototype, "content");
    ManageOrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-orders',
            templateUrl: './manage-orders.component.html',
            styleUrls: ['./manage-orders.component.scss']
        })
    ], ManageOrdersComponent);
    return ManageOrdersComponent;
}());
exports.ManageOrdersComponent = ManageOrdersComponent;
