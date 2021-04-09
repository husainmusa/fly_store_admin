import { Location } from '@angular/common';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ToastyService, ToastData, ToastOptions } from 'ng2-toasty';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { element } from 'protractor';


@Component({
  selector: 'app-manage-variation',
  templateUrl: './manage-variation.component.html',
  styleUrls: ['./manage-variation.component.css']
})
export class ManageVariationComponent implements OnInit {
  @ViewChild('content', { static: false }) content: any;
  @ViewChild('contentSub', { static: false }) contentSub: any;
  @ViewChild('contentVarient', { static: false }) contentVarient: any;

  isNew: boolean;

  name: any = '';
  price: any = '';
  coverImage: any = '';
  id: any;
  sub: boolean;
  hb_name: any = '';
  constructor(
    public api: ApisService,
    public util: UtilService,
    public route: ActivatedRoute,
    private navCtrl: Location,
    private toastyService: ToastyService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
  ) {
    this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      if (data && data.id) {
        this.id = data.id;
        this.isNew = false;
        this.getVariationDetail();
      } else {
        this.isNew = true;
      }
    });
  }

  // getProducts() {
  //   const param = {
  //     id: localStorage.getItem('uid'),
  //     limit: 5000,
  //   };
  //   this.api.post('products/getByStoreId', param).then((data: any) => {
  //     console.log(data);
  //     this.dummy = [];
  //     if (data && data.status === 200) {
  //       this.products = data.data;
  //       this.dummProducts = data.data;
  //     }
  //   }, error => {
  //     console.log(error);
  //     this.error(this.util.getString('Something went wrong'));
  //     this.dummy = [];
  //   });
  // }

  // getProduct() {
  //   const param = {
  //     id: this.id
  //   };
  //   console.log("product id", this.id );
    
  //   this.spinner.show();
  //   this.api.post('products/getById', param).then((data: any) => {
  //     console.log(data);
  //     this.spinner.hide();
  //     if (data && data.status === 200 && data.data.length) {
  //       const info = data.data[0];
  //       // if(this.id == info.parent_id){
  //       //   this.sameparent = true;
  //       // }

  //       this.cateId = info.cate_id;
  //       this.subId = "";
  //       this.name = info.name;  
  //       this.description = info.descriptions;
  //       this.coverImage = info.cover;
  //       this.key_features = info.key_features;
  //       this.disclaimer = info.disclaimer;
  //       this.discount = info.discount;
  //       this.exp_date = info.exp_date;
  //       this.gram = info.gram;
  //       this.have_gram = info.have_gram;
  //       this.kg = info.kg;
  //       this.have_kg = info.have_kg;
  //       this.liter = info.liter;
  //       this.have_liter = info.have_liter;
  //       this.ml = info.ml;
  //       this.have_ml = info.have_ml;
  //       this.pcs = info.pcs;
  //       this.have_pcs = info.have_pcs;
  //       this.in_offer = info.in_offer;
  //       this.in_stoke = info.in_stoke;
  //       this.is_single = info.is_single;
  //       this.veg = info.kind;
  //       this.realPrice = parseFloat(info.original_price);
  //       this.sellPrice = parseFloat(info.sell_price);
  //       this.status = info.status;
  //       this.size = info && info.size && info.size === '1' ? '1' : '0';
  //       if (info && info.variations && info.variations !== '') {
  //         if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(info.variations)) {
  //           this.variations = JSON.parse(info.variations);
  //         }
  //       }
  //       if (info.images) {
  //         const images = JSON.parse(info.images);
  //         console.log('images======>>>', images);
  //         if (images[0]) {
  //           this.image1 = images[0];
  //         }
  //         if (images[1]) {
  //           this.image2 = images[1];
  //         }
  //         if (images[2]) {
  //           this.image3 = images[2];
  //         }
  //         if (images[3]) {
  //           this.image4 = images[3];
  //         }
  //         if (images[4]) {
  //           this.image5 = images[4];
  //         }
  //         if (images[5]) {
  //           this.image6 = images[5];
  //         }
  //       }
  //       this.api.get('categories').then((cates: any) => {
  //         console.log(cates);
  //         if (cates && cates.status === 200 && cates.data && cates.data.length) {
  //           console.log(cates.data);
  //           this.category = cates.data;
  //           this.dummyCates = cates.data;
  //           const name = cates.data.filter(x => x.id === this.cateId);
  //           console.log('cate name=-=====>>>', name);
  //           this.cateName = name[0].name;
  //         } else {
  //           this.error(this.util.getString('No category found'));
  //         }
  //       }, error => {
  //         this.error(this.util.getString('Something went wrong'));
  //         console.log(error);
  //       });

  //       // const subCate = {
  //       //   id: info.cate_id
  //       // };
  //       // this.api.post('subcate/getByCId', subCate).then((sub: any) => {
  //       //   console.log(sub);
  //       //   if (sub && sub.status === 200 && sub.data && sub.data.length) {
  //       //     // this.category = sub.data;
  //       //     console.log(sub);
  //       //     const name = sub.data.filter(x => x.id === this.subId);
  //       //     console.log('cate name=-=====>>>', name);
  //       //     this.subName = name[0].name;
  //       //   } else {
  //       //     this.error(this.util.getString('No category found'));
  //       //   }
  //       // }, error => {
  //       //   this.error(this.util.getString('Something went wrong'));
  //       // });

  //     }
  //   }, error => {
  //     this.spinner.hide();
  //     this.error(this.util.getString('Something went wrong'));
  //     console.log(error);
  //   }).catch(error => {
  //     this.spinner.hide();
  //     console.log(error);
  //     this.error(this.util.getString('Something went wrong'));
  //   });
  // }


  ngOnInit(): void {
    // this.getProducts();
  }

  error(message) {
    const toastOptions: ToastOptions = {
      title: this.util.getString('Error'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: () => {
        console.log('Toast  has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.error(toastOptions);
  }

  success(message) {
    const toastOptions: ToastOptions = {
      title: this.util.getString('Success'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: () => {
        console.log('Toast  has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.success(toastOptions);
  }


  preview_banner(files) {

    console.log('fle', files);

    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    if (files) {
      console.log('ok');
      this.spinner.show();
      this.api.uploadFile(files).subscribe((data: any) => {
        console.log('==>>', data);
        this.spinner.hide();
        if (data && data.status === 200 && data.data) {
          this.coverImage = data.data;
        }
      }, err => {
        console.log(err);
        this.spinner.hide();
      });
    } else {
      console.log('no');
    }
  }


  create() {

    if(!this.name || !this.hb_name || !this.coverImage || !this.price){
      this.error(this.util.getString('Please Fill Complete information'));
      return;
    }
    const param = {
      uid: localStorage.getItem('uid'),
      image: this.coverImage,
      items_title: this.name,
      price: this.price,
      hb_title:this.hb_name,
      title:'size',
      type:'radio'
    };
    this.spinner.show();
    this.api.post('variation/save', param).then((data: any) => {
      console.log(data);
      this.spinner.hide();
      if (data && data.status === 200) {
        // this.util.showToast('Product added successfully', 'success', 'bottom');
        this.navCtrl.back();
      } else {
        this.error(this.util.getString('Something went wrong'));
      }
    }, error => {
      this.spinner.hide();
      this.error(this.util.getString('Something went wrong'));
      console.log('error', error);
    });
  }


 getVariationDetail() {
   console.log()
  const param = {
    id: this.id
  };
  console.log("variation id", this.id );
  
  this.spinner.show();
  this.api.post('variation/getById', param).then((data: any) => {
    this.spinner.hide();
    if (data && data.status === 200 && data.data.length) {
      const info = data.data[0];
      console.log('info==>',info)
      this.name = info.items_title;  
      this.price = info.price;
      this.coverImage = info.image;
      this.hb_name = info.hb_title;
    }
  }, error => {
    this.spinner.hide();
    this.error(this.util.getString('Something went wrong'));
    console.log(error);
  }).catch(error => {
    this.spinner.hide();
    console.log(error);
    this.error(this.util.getString('Something went wrong'));
  });
}

  submit() {

    if (!this.price || this.price === '') {
      this.error(this.util.getString('Please enter variation price'));
      return false;
    }
    if (!this.name || this.name === '') {
      this.error(this.util.getString('Please enter variation name'));
      return false;
    }
    if (!this.coverImage || this.coverImage === '') {
      this.error(this.util.getString('Please add variation image'));
      return false;
    }

    if (this.isNew) {
      this.create();
    } else {
      this.update();
    }
  }



  update() {
    const param = {
      id:this.id,
      image: this.coverImage,
      items_title: this.name,
      price: this.price,
      hb_title:this.hb_name,
      title:'size',
      type:'radio',
    };
    this.spinner.show();
    this.api.post('variation/editList', param).then((data: any) => {
      console.log(data);
      this.spinner.hide();
      if (data && data.status === 200) {

        this.navCtrl.back();
      } else {
        this.error(this.util.getString('Something went wrong'));
      }
    }, error => {
      this.spinner.hide();
      this.error(this.util.getString('Something went wrong'));
      console.log('error', error);
    });
  }

}
