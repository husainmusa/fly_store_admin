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
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ToastyService, ToastData, ToastOptions } from 'ng2-toasty';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { element } from 'protractor';

@Component({
  selector: 'app-manage-secondry-variations',
  templateUrl: './manage-secondry-variations.component.html',
  styleUrls: ['./manage-secondry-variations.component.css']
})
export class ManageSecondryVariationsComponent implements OnInit {

  @ViewChild('content', { static: false }) content: any;
  @ViewChild('contentSub', { static: false }) contentSub: any;
  @ViewChild('contentVarient', { static: false }) contentVarient: any;
  // tslint:disable-next-line: whitespace
  
  
  @ViewChild('inputFile', { static: false }) inputFile: ElementRef;

  isNew: boolean;

  name: any = '';
  price = 0 ;
  coverImage: any = '';
  id: any;
  sub: boolean;
  hb_name: any = '';
  isSelection = 'single'
  var_cat_name: any = '';
  hb_var_cat_name: any = '';
  cat_name: any = '';
  hb_cat_name: any = '';
  VariationSubCategory = []
  type: any = '';
  qtyEnable =  false;
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

  clearSelectedPhoto() {
    console.log('IMPUTTTT',this.inputFile);
      // tslint:disable-next-line: align
      // tslint:disable-next-line: whitespace
      if(this.inputFile) this.inputFile.nativeElement.value = null;
  }

  ngOnInit(): void {
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
   

    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.clearSelectedPhoto();
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
        this.clearSelectedPhoto();
      });
    } else {
      console.log('no');
      this.clearSelectedPhoto();
    }
  }


  create() {

    if(!this.var_cat_name || !this.hb_var_cat_name ||  !this.type || this.VariationSubCategory == []){
      this.error(this.util.getString('Please Fill Complete information'));
      return;
    }
    const param = {
      uid: localStorage.getItem('uid'),
      en_cat_title: this.var_cat_name,
      hb_cat_title: this.hb_var_cat_name,
      type: this.type,
      sub_category: JSON.stringify(this.VariationSubCategory)
    };
    this.spinner.show();
    this.api.post('SecondVariation/save', param).then((data: any) => {
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
  this.api.post('SecondVariation/getById', param).then((data: any) => {
    this.spinner.hide();
    if (data && data.status === 200 && data.data.length) {
      const info = data.data[0];
      console.log('i am here==>',data)
      this.var_cat_name = info.en_cat_title;  
      this.hb_var_cat_name = info.hb_cat_title;
      this.type = info.type;
       this.VariationSubCategory = JSON.parse(info.sub_category)
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


    if (!this.var_cat_name || this.var_cat_name === '') {
      this.error(this.util.getString('Please enter variation category name'));
      return false;
    }

    if (!this.type || this.type === '') {
      this.error(this.util.getString('Please variation type'));
      return false;
    }

    if (this.isNew) {
      this.create();
    } else {
      this.update();
    }
  }



  update() {
    // const param = {
    //   id:this.id,
    //   image: this.coverImage,
    //   items_title: this.name,
    //   price: this.price,
    //   hb_title:this.hb_name,
    //   title:'size',
    //   type:'radio',
    // };

    const param ={
      uid: localStorage.getItem('uid'),
      id:this.id,
      en_cat_title: this.var_cat_name,
      hb_cat_title: this.hb_var_cat_name,
      type: this.type,
      sub_category: JSON.stringify(this.VariationSubCategory)
  
    }

    console.log('parms======>',param)
    this.spinner.show();
    this.api.post('SecondVariation/editList', param).then((data: any) => {
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

  SecondryForm(){

  }

  addSubcateory(){
   if(!this.cat_name || !this.hb_cat_name || !this.coverImage ){
    this.error(this.util.getString('Please fill complete information')); 
    return;
   }
    let arrayOFVar = {
        image: this.coverImage,
        en_title: this.cat_name,
        price: this.price,
        qty_enable:this.qtyEnable,
        hb_title:this.hb_cat_name,
    }
        
        this.VariationSubCategory.push(arrayOFVar);
        this.coverImage = '' ;
        this.cat_name  = '' ;
        this.price  = 0 ;
        this.hb_cat_name  = '' ;
        this.qtyEnable = false;

        this.clearSelectedPhoto();
    }

    // editSubcategory(item){
    //   this.coverImage = item.image;
    //   this.cat_name  = item.en_title;
    //   this.hb_cat_name  = item.hb_title;
    //   this.price  = item.price;
    // }
    deleteSubcategory(item ){
      const index = this.VariationSubCategory.findIndex((element, index) => {
        console.log(element)
        if (element.en_title === item.en_title && element.hb_title === item.hb_title && element.price === item.price) {
          console.log('element')
          return true
        }
      })
      console.log('index======>',index)
      if (index > -1) {
        this.VariationSubCategory.splice(index, 1);
      }
    }
}
