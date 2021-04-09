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
exports.ManageProductsComponent = void 0;
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
var ManageProductsComponent = /** @class */ (function () {
    function ManageProductsComponent(api, util, route, navCtrl, toastyService, spinner, modalService) {
        var _this = this;
        this.api = api;
        this.util = util;
        this.route = route;
        this.navCtrl = navCtrl;
        this.toastyService = toastyService;
        this.spinner = spinner;
        this.modalService = modalService;
        this.cateId = '';
        this.cateName = '';
        this.subId = '';
        this.subName = '';
        this.parent = '';
        this.name = '';
        this.is_single = '0';
        this.status = '1';
        this.coverImage = '';
        this.veg = '0';
        this.have_gram = '0';
        this.gram = '0';
        this.have_kg = '0';
        this.kg = '0';
        this.have_pcs = '0';
        this.pcs = '0';
        this.have_liter = '0';
        this.liter = '0';
        this.have_ml = '0';
        this.ml = '0';
        this.in_stoke = '1';
        this.in_offer = '0';
        this.key_features = '';
        this.disclaimer = '';
        this.variations = [];
        this.size = '0';
        this.category = [];
        this.dummyCates = [];
        this.cateString = '';
        this.subCates = [];
        this.dummySubCates = [];
        this.subString = '';
        this.products = [];
        this.dummProducts = [];
        this.dummy = Array(5);
        this.page = 1;
        this.variant_title = '';
        this.sameparent = false;
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            if (data && data.id) {
                _this.id = data.id;
                _this.isNew = false;
                _this.getProduct();
            }
            else {
                _this.isNew = true;
                _this.getCates();
            }
        });
    }
    ManageProductsComponent.prototype.getProducts = function () {
        var _this = this;
        var param = {
            id: localStorage.getItem('uid'),
            limit: 5000
        };
        this.api.post('products/getByStoreId', param).then(function (data) {
            console.log(data);
            _this.dummy = [];
            if (data && data.status === 200) {
                _this.products = data.data;
                _this.dummProducts = data.data;
            }
        }, function (error) {
            console.log(error);
            _this.error(_this.util.getString('Something went wrong'));
            _this.dummy = [];
        });
    };
    ManageProductsComponent.prototype.getProduct = function () {
        var _this = this;
        var param = {
            id: this.id
        };
        console.log("product id", this.id);
        this.spinner.show();
        this.api.post('products/getById', param).then(function (data) {
            console.log(data);
            _this.spinner.hide();
            if (data && data.status === 200 && data.data.length) {
                var info = data.data[0];
                // if(this.id == info.parent_id){
                //   this.sameparent = true;
                // }
                _this.cateId = info.cate_id;
                _this.subId = "";
                _this.name = info.name;
                _this.description = info.descriptions;
                _this.coverImage = info.cover;
                _this.key_features = info.key_features;
                _this.disclaimer = info.disclaimer;
                _this.discount = info.discount;
                _this.exp_date = info.exp_date;
                _this.gram = info.gram;
                _this.have_gram = info.have_gram;
                _this.kg = info.kg;
                _this.have_kg = info.have_kg;
                _this.liter = info.liter;
                _this.have_liter = info.have_liter;
                _this.ml = info.ml;
                _this.have_ml = info.have_ml;
                _this.pcs = info.pcs;
                _this.have_pcs = info.have_pcs;
                _this.in_offer = info.in_offer;
                _this.in_stoke = info.in_stoke;
                _this.is_single = info.is_single;
                _this.veg = info.kind;
                _this.realPrice = parseFloat(info.original_price);
                _this.sellPrice = parseFloat(info.sell_price);
                _this.status = info.status;
                _this.size = info && info.size && info.size === '1' ? '1' : '0';
                if (info && info.variations && info.variations !== '') {
                    if ((function (x) { try {
                        JSON.parse(x);
                        return true;
                    }
                    catch (e) {
                        return false;
                    } })(info.variations)) {
                        _this.variations = JSON.parse(info.variations);
                    }
                }
                if (info.images) {
                    var images = JSON.parse(info.images);
                    console.log('images======>>>', images);
                    if (images[0]) {
                        _this.image1 = images[0];
                    }
                    if (images[1]) {
                        _this.image2 = images[1];
                    }
                    if (images[2]) {
                        _this.image3 = images[2];
                    }
                    if (images[3]) {
                        _this.image4 = images[3];
                    }
                    if (images[4]) {
                        _this.image5 = images[4];
                    }
                    if (images[5]) {
                        _this.image6 = images[5];
                    }
                }
                _this.api.get('categories').then(function (cates) {
                    console.log(cates);
                    if (cates && cates.status === 200 && cates.data && cates.data.length) {
                        console.log(cates.data);
                        _this.category = cates.data;
                        _this.dummyCates = cates.data;
                        var name = cates.data.filter(function (x) { return x.id === _this.cateId; });
                        console.log('cate name=-=====>>>', name);
                        _this.cateName = name[0].name;
                    }
                    else {
                        _this.error(_this.util.getString('No category found'));
                    }
                }, function (error) {
                    _this.error(_this.util.getString('Something went wrong'));
                    console.log(error);
                });
                // const subCate = {
                //   id: info.cate_id
                // };
                // this.api.post('subcate/getByCId', subCate).then((sub: any) => {
                //   console.log(sub);
                //   if (sub && sub.status === 200 && sub.data && sub.data.length) {
                //     // this.category = sub.data;
                //     console.log(sub);
                //     const name = sub.data.filter(x => x.id === this.subId);
                //     console.log('cate name=-=====>>>', name);
                //     this.subName = name[0].name;
                //   } else {
                //     this.error(this.util.getString('No category found'));
                //   }
                // }, error => {
                //   this.error(this.util.getString('Something went wrong'));
                // });
            }
        }, function (error) {
            _this.spinner.hide();
            _this.error(_this.util.getString('Something went wrong'));
            console.log(error);
        })["catch"](function (error) {
            _this.spinner.hide();
            console.log(error);
            _this.error(_this.util.getString('Something went wrong'));
        });
    };
    ManageProductsComponent.prototype.getCates = function () {
        var _this = this;
        this.api.get('categories').then(function (cates) {
            console.log(cates);
            if (cates && cates.status === 200 && cates.data && cates.data.length) {
                console.log(cates.data);
                _this.category = cates.data;
                _this.dummyCates = cates.data;
            }
            else {
                _this.error(_this.util.getString('No category found'));
            }
        }, function (error) {
            _this.error(_this.util.getString('Something went wrong'));
            console.log(error);
        });
    };
    ManageProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ManageProductsComponent.prototype.error = function (message) {
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
    ManageProductsComponent.prototype.success = function (message) {
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
    ManageProductsComponent.prototype.onDicount = function (value) {
        value = parseFloat(value);
        console.log(value);
        if (this.realPrice && value <= 99) {
            this.percentage(this.discount, this.realPrice);
        }
        else {
            this.discount = 0;
            this.percentage(this.discount, this.realPrice);
        }
    };
    ManageProductsComponent.prototype.onRealPrice = function (value) {
        value = parseFloat(value);
        console.log(value);
        if (this.sellPrice && value > 1) {
            this.percentage(this.discount, this.realPrice);
        }
    };
    ManageProductsComponent.prototype.percentage = function (percent, total) {
        this.sellPrice = 0;
        var price = ((percent / 100) * total);
        this.sellPrice = this.realPrice - price;
    };
    ManageProductsComponent.prototype.openCate = function () {
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
    };
    ManageProductsComponent.prototype.openSub = function () {
        var _this = this;
        if (this.cateId && this.cateName) {
            console.log(status);
            var param = {
                id: this.cateId
            };
            this.spinner.show();
            this.api.post('subcate/getByCId', param).then(function (data) {
                _this.spinner.hide();
                console.log(data);
                if (data && data.status === 200 && data.data && data.data.length) {
                    _this.subCates = data.data;
                    _this.dummySubCates = data.data;
                }
                else {
                    _this.error(_this.util.getString('No category found'));
                }
            }, function (error) {
                _this.spinner.hide();
                _this.error(_this.util.getString('Something went wrong'));
                console.log(error);
            });
            try {
                this.modalService.open(this.contentSub, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                    console.log(result);
                }, function (reason) {
                    console.log(reason);
                });
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            this.error('Please select category first');
        }
    };
    ManageProductsComponent.prototype.close = function () {
        var _this = this;
        console.log('category');
        if (this.cateId) {
            var name = this.category.filter(function (x) { return x.id === _this.cateId; });
            console.log('name', name[0].name);
            this.cateName = name[0].name;
            this.subId = '';
            this.subName = '';
            this.subCates = [];
            this.dummySubCates = [];
        }
        this.modalService.dismissAll();
    };
    // close2() {
    //   console.log('sub categoryt');
    //   if (this.subId) {
    //     const name = this.subCates.filter(x => x.id === this.subId);
    //     console.log('name', name[0].name);
    //     this.subName = "";
    //   }
    //   this.modalService.dismissAll();
    // }
    ManageProductsComponent.prototype.searchCates = function (str) {
        console.log(str);
        this.category = this.dummyCates.filter(function (ele) {
            return ele.name.toLowerCase().includes(str.toLowerCase());
        });
    };
    ManageProductsComponent.prototype.searchSubCate = function (str) {
        console.log(str);
        this.subCates = this.dummySubCates.filter(function (ele) {
            return ele.name.toLowerCase().includes(str.toLowerCase());
        });
    };
    ManageProductsComponent.prototype.changeSize = function (event) {
        console.log(event);
        this.size = event;
        console.log(this.size);
        if (this.size === '1') {
            var items = this.variations.filter(function (x) { return x.title === 'size'; });
            console.log('length', items);
            if (!items.length) {
                var item = {
                    title: 'size',
                    type: 'radio',
                    items: []
                };
                this.variations.push(item);
                console.log(this.variations);
            }
        }
        else {
            this.variations = this.variations.filter(function (x) { return x.title !== 'size'; });
            console.log(this.variations);
        }
    };
    ManageProductsComponent.prototype.addItem = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(this.variations[index]);
                this.sub = false;
                this.variatIndex = index;
                console.log(status);
                try {
                    this.modalService.open(this.contentVarient, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
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
    ManageProductsComponent.prototype["delete"] = function (item) {
        console.log(item);
        if (item.title === 'size') {
            this.size = false;
        }
        this.variations = this.variations.filter(function (x) { return x.title !== item.title; });
    };
    ManageProductsComponent.prototype.close3 = function () {
        if (this.sub === false) {
            if (this.variant_title && this.variant_price >= 0) {
                var item = {
                    title: this.variant_title,
                    price: parseFloat(this.variant_price),
                    discount: this.variant_discount && this.variant_discount ? parseFloat(this.variant_discount) : 0
                };
                this.variations[this.variatIndex].items.push(item);
                console.log("close3 variations", this.variations);
                this.modalService.dismissAll();
                this.variant_title = '';
                this.variant_price = 0;
                this.variant_discount = 0;
                this.variatIndex = '';
            }
            else {
                this.error(this.util.getString('Please add title and price'));
            }
        }
        else {
            if (this.variant_title && this.variant_price && this.variant_price !== 0 && this.variant_price > 0) {
                this.variations[this.variatIndex].items[this.subIndex].title = this.variant_title;
                this.variations[this.variatIndex].items[this.subIndex].price = parseFloat(this.variant_price),
                    this.variations[this.variatIndex].items[this.subIndex].discount =
                        this.variant_discount && this.variant_discount ? parseFloat(this.variant_discount) : 0;
                this.modalService.dismissAll();
            }
            else {
                this.error(this.util.getString('Please add title and price'));
            }
        }
    };
    ManageProductsComponent.prototype.deleteSub = function (index, item) {
        console.log(index);
        console.log(item);
        var selected = this.variations[index].items;
        console.log('selected', selected);
        var data = selected.filter(function (x) { return x.title !== item.title; });
        console.log(data);
        this.variations[index].items = data;
        console.log('done', this.variations);
    };
    ManageProductsComponent.prototype.editSub = function (index, items, subIndex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(this.variations[index], "variation index");
                this.sub = true;
                this.variatIndex = index;
                this.subIndex = subIndex;
                this.variant_title = this.variations[index].items[subIndex].title;
                this.variant_price = this.variations[index].items[subIndex].price;
                this.variant_discount = this.variations[index].items[subIndex].discount;
                try {
                    this.modalService.open(this.contentVarient, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
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
    ManageProductsComponent.prototype.others = function (files, num) {
        var _this = this;
        if (files.length === 0) {
            return;
        }
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        if (files) {
            console.log('ok');
            this.spinner.show();
            this.api.uploadFile(files).subscribe(function (data) {
                console.log('==>>', data);
                _this.spinner.hide();
                if (data && data.status === 200 && data.data) {
                    if (num === 1 || num === '1') {
                        _this.image1 = data.data;
                    }
                    if (num === 2 || num === '2') {
                        _this.image2 = data.data;
                    }
                    if (num === 3 || num === '3') {
                        _this.image3 = data.data;
                    }
                    if (num === 4 || num === '4') {
                        _this.image4 = data.data;
                    }
                    if (num === 5 || num === '5') {
                        _this.image5 = data.data;
                    }
                    if (num === 6 || num === '6') {
                        _this.image6 = data.data;
                    }
                }
            }, function (err) {
                console.log(err);
                _this.spinner.hide();
            });
        }
        else {
            console.log('no');
        }
    };
    ManageProductsComponent.prototype.preview_banner = function (files) {
        var _this = this;
        console.log('fle', files);
        if (files.length === 0) {
            return;
        }
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        if (files) {
            console.log('ok');
            this.spinner.show();
            this.api.uploadFile(files).subscribe(function (data) {
                console.log('==>>', data);
                _this.spinner.hide();
                if (data && data.status === 200 && data.data) {
                    _this.coverImage = data.data;
                }
            }, function (err) {
                console.log(err);
                _this.spinner.hide();
            });
        }
        else {
            console.log('no');
        }
    };
    ManageProductsComponent.prototype.create = function () {
        var _this = this;
        var image = [
            this.image1 ? this.image1 : '',
            this.image2 ? this.image2 : '',
            this.image3 ? this.image3 : '',
            this.image4 ? this.image4 : '',
            this.image5 ? this.image5 : '',
            this.image6 ? this.image6 : ''
        ];
        var param = {
            store_id: localStorage.getItem('uid'),
            // parent_id: this.parent ? this.parent.toString() : 0,
            parent_id: 0,
            cover: this.coverImage,
            name: this.name,
            images: JSON.stringify(image),
            original_price: this.realPrice,
            sell_price: this.sellPrice ? this.sellPrice : 0,
            discount: this.discount ? this.discount : 0,
            kind: this.veg,
            cate_id: this.cateId,
            sub_cate_id: this.subId,
            have_gram: this.have_gram,
            gram: this.have_gram === '1' ? this.gram : 0,
            have_kg: this.have_kg,
            kg: this.have_kg === '1' ? this.kg : 0,
            have_pcs: this.have_pcs,
            pcs: this.have_pcs === '1' ? this.pcs : 0,
            have_liter: this.have_liter,
            liter: this.have_liter === '1' ? this.liter : 0,
            have_ml: this.have_ml,
            ml: this.have_ml === '1' ? this.ml : 0,
            descriptions: this.description,
            exp_date: moment(this.exp_date).format('YYYY-MM-DD'),
            type_of: 1,
            in_stoke: this.in_stoke,
            status: this.status,
            in_offer: this.in_offer,
            key_features: this.key_features,
            disclaimer: this.disclaimer,
            is_single: this.is_single,
            in_home: 0,
            rating: 0,
            total_rating: 0,
            size: this.size,
            variations: JSON.stringify(this.variations)
        };
        console.log('*****', param);
        this.spinner.show();
        this.api.post('products/save', param).then(function (data) {
            console.log(data);
            _this.spinner.hide();
            if (data && data.status === 200) {
                // this.util.showToast('Product added successfully', 'success', 'bottom');
                _this.navCtrl.back();
            }
            else {
                _this.error(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            _this.spinner.hide();
            _this.error(_this.util.getString('Something went wrong'));
            console.log('error', error);
        });
    };
    ManageProductsComponent.prototype.submit = function () {
        console.log('size-->>', this.size);
        console.log('submited', this.veg);
        if (!this.cateId || this.cateId === '') {
            this.error(this.util.getString('Please select category'));
            return false;
        }
        // if (!this.subId || this.subId === '') {
        //   this.error(this.util.getString('Please select sub category'));
        //   return false;
        // }
        if (!this.realPrice || this.realPrice === '') {
            this.error(this.util.getString('Please enter product price'));
            return false;
        }
        if (!this.description || this.description === '') {
            this.error(this.util.getString('Please enter product description'));
            return false;
        }
        if (!this.name || this.name === '') {
            this.error(this.util.getString('Please enter product name'));
            return false;
        }
        if (!this.coverImage || this.coverImage === '') {
            this.error(this.util.getString('Please add product image'));
            return false;
        }
        if (!this.exp_date || this.exp_date === '') {
            this.error(this.util.getString('Please product expire date'));
            return false;
        }
        if (this.isNew) {
            console.log('new');
            this.create();
        }
        else {
            console.log('update');
            this.update();
        }
    };
    ManageProductsComponent.prototype.update = function () {
        var _this = this;
        var image = [
            this.image1 ? this.image1 : '',
            this.image2 ? this.image2 : '',
            this.image3 ? this.image3 : '',
            this.image4 ? this.image4 : '',
            this.image5 ? this.image5 : '',
            this.image6 ? this.image6 : ''
        ];
        var param = {
            id: this.id,
            store_id: localStorage.getItem('uid'),
            // parent_id: this.parent ? this.parent.toString() : 0,
            parent_id: 0,
            cover: this.coverImage,
            name: this.name,
            images: JSON.stringify(image),
            original_price: this.realPrice,
            sell_price: this.sellPrice ? this.sellPrice : 0,
            discount: this.discount ? this.discount : 0,
            kind: this.veg,
            cate_id: this.cateId,
            sub_cate_id: this.subId,
            have_gram: this.have_gram,
            gram: this.have_gram === '1' ? this.gram : 0,
            have_kg: this.have_kg,
            kg: this.have_kg === '1' ? this.kg : 0,
            have_pcs: this.have_pcs,
            pcs: this.have_pcs === '1' ? this.pcs : 0,
            have_liter: this.have_liter,
            liter: this.have_liter === '1' ? this.liter : 0,
            have_ml: this.have_ml,
            ml: this.have_ml === '1' ? this.ml : 0,
            descriptions: this.description,
            exp_date: moment(this.exp_date).format('YYYY-MM-DD'),
            type_of: 1,
            in_stoke: this.in_stoke,
            status: this.status,
            in_offer: this.in_offer,
            key_features: this.key_features,
            disclaimer: this.disclaimer,
            is_single: this.is_single,
            size: this.size,
            variations: JSON.stringify(this.variations)
        };
        console.log('*****', param);
        this.spinner.show();
        this.api.post('products/editList', param).then(function (data) {
            console.log(data);
            _this.spinner.hide();
            if (data && data.status === 200) {
                _this.navCtrl.back();
            }
            else {
                _this.error(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            _this.spinner.hide();
            _this.error(_this.util.getString('Something went wrong'));
            console.log('error', error);
        });
    };
    __decorate([
        core_1.ViewChild('content', { static: false })
    ], ManageProductsComponent.prototype, "content");
    __decorate([
        core_1.ViewChild('contentSub', { static: false })
    ], ManageProductsComponent.prototype, "contentSub");
    __decorate([
        core_1.ViewChild('contentVarient', { static: false })
    ], ManageProductsComponent.prototype, "contentVarient");
    ManageProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-products',
            templateUrl: './manage-products.component.html',
            styleUrls: ['./manage-products.component.css']
        })
    ], ManageProductsComponent);
    return ManageProductsComponent;
}());
exports.ManageProductsComponent = ManageProductsComponent;
