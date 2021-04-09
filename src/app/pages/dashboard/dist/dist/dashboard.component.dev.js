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

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.DashboardComponent = void 0;
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

var DashboardComponent =
/** @class */
function () {
  function DashboardComponent(api, router, modalService, util, spinner, toastyService) {
    var _this = this;

    this.api = api;
    this.router = router;
    this.modalService = modalService;
    this.util = util;
    this.spinner = spinner;
    this.toastyService = toastyService;
    this.dummy = Array(5);
    this.page = 1;
    this.orders = [];
    this.dummOrders = [];
    this.stores = [];
    this.users = [];
    this.newOrders = [];
    this.onGoingOrders = [];
    this.oldOrders = [];
    this.allOrders = [];
    this.orderStatus = [];
    this.orderDetail = [];
    this.statusText = '';
    this.assignee = [];
    this.assigneeDriver = [];
    this.drivers = [];
    this.dummyDrivers = [];
    this.selectedDriver = '';
    this.current = 'all';

    this.resetChanges = function () {
      _this.orders = _this.dummOrders;
    };

    this.getData();
    console.log(this.util.storeInfo);
    var uid = localStorage.getItem('uid');

    if (uid && uid !== null && uid !== 'null') {
      var param = {
        id: uid
      };
      this.api.post('stores/getByUid', param).then(function (data) {
        console.log('*******************', data);

        if (data && data.status === 200 && data.data && data.data.length) {
          _this.util.storeInfo = data.data[0];
          _this.statusText = ' by ' + _this.util.storeInfo.name;
        } else {
          localStorage.clear();

          _this.router.navigate(['login']);
        }
      }, function (error) {
        console.log(error);
      });
    }
  }

  DashboardComponent.prototype.getData = function () {
    var _this = this;

    var param = {
      id: localStorage.getItem('uid')
    };
    this.api.post('orders/getByStoreWithNames', param).then(function (data) {
      console.log(data);
      _this.dummy = [];
      _this.orders = [];
      _this.newOrders = [];
      _this.onGoingOrders = [];
      _this.oldOrders = [];

      if (data && data.status === 200 && data.data.length > 0) {
        data.data.forEach(function (element) {
          return __awaiter(_this, void 0, void 0, function () {
            var _a, info, selected, status;

            return __generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  if (!function (x) {
                    try {
                      JSON.parse(x);
                      return true;
                    } catch (e) {
                      return false;
                    }
                  }(element.orders)) return [3
                  /*break*/
                  , 2];
                  element.orders = JSON.parse(element.orders);
                  _a = element;
                  return [4
                  /*yield*/
                  , element.orders.filter(function (x) {
                    return x.store_id === localStorage.getItem('uid');
                  })];

                case 1:
                  _a.orders = _b.sent();

                  if (function (x) {
                    try {
                      JSON.parse(x);
                      return true;
                    } catch (e) {
                      return false;
                    }
                  }(element.status)) {
                    info = JSON.parse(element.status);
                    selected = info.filter(function (x) {
                      return x.id === localStorage.getItem('uid');
                    });

                    if (selected && selected.length) {
                      status = selected[0].status;
                      element['storeStatus'] = status;
                      element.orders.forEach(function (order) {
                        console.log(element.id, '=>', order.variations);

                        if (order.variations && order.variations !== '' && typeof order.variations === 'string') {
                          console.log('strings', element.id);
                          order.variations = JSON.parse(order.variations);
                          console.log(order['variant']);

                          if (order["variant"] === undefined) {
                            order['variant'] = 0;
                          }
                        }
                      });
                      this.orders.push(element);
                      this.dummOrders.push(element);

                      if (status === 'created') {
                        this.newOrders.push(element);
                      } else if (status === 'accepted' || status === 'picked' || status === 'ongoing') {
                        this.onGoingOrders.push(element);
                      } else if (status === 'rejected' || status === 'cancelled' || status === 'delivered' || status === 'refund') {
                        this.oldOrders.push(element);
                      }
                    }
                  }

                  _b.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        });
      }
    }, function (error) {
      console.log(error);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  DashboardComponent.prototype.ngOnInit = function () {};

  DashboardComponent.prototype.getCurrency = function () {// return this.api.getCurrencySymbol();
  };

  DashboardComponent.prototype.getClass = function (item) {
    if (item === 'created' || item === 'accepted' || item === 'picked') {
      return 'btn btn-primary btn-round';
    } else if (item === 'delivered') {
      return 'btn btn-success btn-round';
    } else if (item === 'rejected' || item === 'cancel') {
      return 'btn btn-danger btn-round';
    }

    return 'btn btn-warning btn-round';
  };

  DashboardComponent.prototype.getDates = function (date) {
    return moment(date).format('llll');
  };

  DashboardComponent.prototype.openOrder = function (item) {
    console.log(item);
    var navData = {
      queryParams: {
        id: item.id
      }
    };
    this.router.navigate(['manage-orders'], navData);
  };

  DashboardComponent.prototype.openIt = function (item) {
    this.router.navigate([item]);
  };

  DashboardComponent.prototype.open = function (status) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        console.log(status);
        this.close();
        return [2
        /*return*/
        ];
      });
    });
  };

  DashboardComponent.prototype.close = function () {
    var _this = this; // const driver = this.dummyDrivers.filter(x => x.id === this.selectedDriver);


    console.log("dummy driver", this.dummyDrivers);
    this.dummyDrivers.forEach(function (element) {
      _this.drivers.push(element);
    }); // this.modalService.dismissAll();

    console.log('selected', this.drivers.join(','));

    if (this.drivers) {
      var newOrderNotes = {
        status: 1,
        value: 'Order ' + 'accepted' + this.statusText,
        time: moment().format('lll')
      };
      this.orderDetail.push(newOrderNotes);
      this.spinner.show();
      var assignee = {
        driver: this.assigneeDriver.join(','),
        assignee: localStorage.getItem('uid')
      };
      this.assignee.push(assignee);
      console.log('*********************************', this.assignee);
      console.log('////////////////////////////', this.assigneeDriver);
      var param = {
        id: this.id,
        notes: JSON.stringify(this.orderDetail),
        status: JSON.stringify(this.orderStatus),
        driver_id: this.assigneeDriver.join(','),
        assignee: JSON.stringify(this.assignee)
      };
      console.log('===================================', param);
      this.api.post('orders/editList', param).then(function (data) {
        console.log('order', data);

        _this.spinner.hide(); // this.updateDriver(this.drivers[0].id, 'busy');


        _this.getData();

        if (data && data.status === 200) {
          _this.sendNotification('accepted');
        } else {
          _this.error(_this.util.getString('Something went wrong'));
        }
      }, function (error) {
        console.log(error);

        _this.spinner.hide();

        _this.error(_this.util.getString('Something went wrong'));
      });
    }
  };

  DashboardComponent.prototype.getDrivers = function () {
    var _this = this;

    if (this.util.storeInfo && this.util.storeInfo.cid) {
      var param = {
        id: this.util.storeInfo.cid
      };
      this.spinner.show();
      this.api.post('drivers/geyByCity', param).then(function (data) {
        console.log('driver data--------------->>', data);

        _this.spinner.hide();

        if (data && data.status === 200 && data.data.length) {
          var info = data.data.filter(function (x) {
            return x.status === '1';
          });
          info.forEach(function (element) {
            return __awaiter(_this, void 0, void 0, function () {
              var distance;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng))];

                  case 1:
                    distance = _a.sent();
                    console.log('distance---------->>', distance);

                    if (distance < 50 && element.current === 'active' && element.status === '1') {
                      this.dummyDrivers.push(element);
                    } // this.dummyDrivers.push(element); // fetch all


                    console.log('dummtasedr', this.dummyDrivers);
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
        }
      }, function (error) {
        console.log(error);

        _this.spinner.hide();

        _this.error(_this.util.getString('Something went wrong'));
      })["catch"](function (error) {
        console.log(error);

        _this.spinner.hide();

        _this.error(_this.util.getString('Something went wrong'));
      });
    }
  };

  DashboardComponent.prototype.degreesToRadians = function (degrees) {
    return degrees * Math.PI / 180;
  };

  DashboardComponent.prototype.distanceInKmBetweenEarthCoordinates = function (lat1, lon1, lat2, lon2) {
    console.log(lat1, lon1, lat2, lon2);
    var earthRadiusKm = 6371;
    var dLat = this.degreesToRadians(lat2 - lat1);
    var dLon = this.degreesToRadians(lon2 - lon1);
    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  };

  DashboardComponent.prototype.changeStatus = function (value, item) {
    var _this = this;

    console.log(value, item);
    this.id = item.id;
    this.driverId = item.driver_id;
    var storesStatus = JSON.parse(item.status);
    console.log('------------------', storesStatus);
    this.orderStatus = storesStatus;
    this.orderDetail = JSON.parse(item.notes);

    if (item.uid) {
      var userinfo = {
        id: item.uid
      };
      this.api.post('users/getById', userinfo).then(function (data) {
        console.log('user info=>', data);

        if (data && data.status === 200 && data.data && data.data.length) {
          _this.userInfo = data.data[0];
          console.log(_this.userInfo);
        }
      }, function (error) {
        console.log(error);
      });
    }

    if (item.order_to === 'home') {
      var address = JSON.parse(item.address);
      console.log('---address', address);

      if (address && address.address) {
        this.userLat = address.lat;
        this.userLng = address.lng;
        this.address = address.address;
        this.getDrivers();
      }

      if (item.assignee && item.assignee !== '') {
        var assignee = JSON.parse(item.assignee);
        this.assignee = assignee;
        var driver = this.assignee.filter(function (x) {
          return x.assignee === localStorage.getItem('uid');
        });
        console.log('-------------', driver);

        if (driver && driver.length) {
          this.driverId = driver[0].driver;
          console.log('driverid===================', this.driverId);
        }
      }

      if (item.driver_id && item.driver_id !== '') {
        var drivers = item.driver_id.split(',');
        this.assigneeDriver = drivers;
      }

      console.log('----', this.assignee);
      console.log('----', this.assigneeDriver);
    }

    if (value === 'accepted' || value === 'ongoing') {
      console.log('***********////////////////////////', this.orderStatus);
      this.orderStatus.forEach(function (element) {
        if (element.id === localStorage.getItem('uid')) {
          element.status = value;
        }
      });

      if (value === 'accepted' && item.order_to === 'home') {
        this.open(item.storeStatus);
      } else if (value === 'accepted' && item.order_to !== 'home') {
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

          _this.getData();

          if (data && data.status === 200) {
            _this.sendNotification('accepted');
          } else {
            _this.error(_this.util.getString('Something went wrong'));
          }
        }, function (error) {
          console.log(error);

          _this.spinner.hide();

          _this.error(_this.util.getString('Something went wrong'));
        });
      } else {
        this.updateStatus(value);
      }
    } else {
      this.orderStatus.forEach(function (element) {
        if (element.id === localStorage.getItem('uid')) {
          element.status = value;
        }
      });

      if (value !== 'ongoing' && item.order_to === 'home' && this.driverId !== '0') {
        // release driver from this order
        console.log('relase driver');
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

          _this.getData();

          _this.updateDriver(_this.driverId, 'active');

          if (data && data.status === 200) {
            _this.sendNotification(value);
          } else {
            _this.error(_this.util.getString('Something went wrong'));
          }
        }, function (error) {
          console.log(error);

          _this.spinner.hide();

          _this.error(_this.util.getString('Something went wrong'));
        });
      } else {
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

          _this.getData();

          if (data && data.status === 200) {
            _this.sendNotification(value);
          } else {
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

  DashboardComponent.prototype.sendNotification = function (value) {
    if (this.userInfo && this.userInfo.fcm_token) {
      this.api.sendNotification2('Your order #' + this.id + ' ' + value, 'Order ' + value, this.userInfo.fcm_token).subscribe(function (data) {
        console.log('onesignal', data);
      }, function (error) {
        console.log('onesignal error', error);
      });
    }
  };

  DashboardComponent.prototype.updateDriver = function (uid, value) {
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

  DashboardComponent.prototype.updateStatus = function (value) {
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
        _this.getData();

        _this.sendNotification(value);
      } else {
        _this.error(_this.util.getString('Something went wrong'));
      }
    }, function (error) {
      console.log(error);

      _this.spinner.hide();

      _this.error(_this.util.getString('Something went wrong'));
    });
  };

  DashboardComponent.prototype.orderChanged = function (event) {
    console.log(event); // this.open(this.content,);
  };

  DashboardComponent.prototype.error = function (message) {
    var toastOptions = {
      title: this.util.getString('Error'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: function onAdd(toast) {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function onRemove() {
        console.log('Toast  has been removed!');
      }
    }; // Add see all possible types in one shot

    this.toastyService.error(toastOptions);
  };

  DashboardComponent.prototype.success = function (message) {
    var toastOptions = {
      title: this.util.getString('Success'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: function onAdd(toast) {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function onRemove() {
        console.log('Toast  has been removed!');
      }
    }; // Add see all possible types in one shot

    this.toastyService.success(toastOptions);
  };

  DashboardComponent.prototype.search = function (str) {
    this.current = 'all';
    this.resetChanges();
    console.log('string', str);
    this.orders = this.filterItems(str);
  };

  DashboardComponent.prototype.filterItems = function (searchTerm) {
    return this.orders.filter(function (item) {
      return item.id.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  };

  DashboardComponent.prototype.changeOrders = function () {
    console.log(this.current);
  };

  __decorate([core_1.ViewChild('content', {
    "static": false
  })], DashboardComponent.prototype, "content");

  DashboardComponent = __decorate([core_1.Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })], DashboardComponent);
  return DashboardComponent;
}();

exports.DashboardComponent = DashboardComponent;