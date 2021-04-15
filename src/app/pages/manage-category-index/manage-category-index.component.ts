import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { _, orderBy } from 'lodash';

import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-manage-category-index',
  templateUrl: './manage-category-index.component.html',
  styleUrls: ['./manage-category-index.component.css']
})
export class ManageCategoryIndexComponent implements OnInit {
  categories:any;
  dummCategories:any;
  categoriesDeafault:any;
  indexedCategories:any;
  dummy:any;
  lastIndex = 0;
   MaxLenghth: any[] = [];
  constructor(
    public api: ApisService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastyService: ToastyService,
    public util: UtilService
  ) {
    this.getCategories();
   }

  ngOnInit(): void {
  }


 




  getCategories(){
    const parms = {
      id: localStorage.getItem('uid'),
    }
    this.api.post('categories/getByStoreId',parms).then((data: any) => {
      this.dummy = [];
      if (data && data.status === 200 &&  data.data.catIndex  && data.data.catIndex != '' ) {
        if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(data.data.catIndex )) {
          this.categories =  JSON.parse(data.data['catIndex']);
          this.dummCategories = JSON.parse(data.data['catIndex']);
          // this.categories['lastIndex'] = data.data.last_index;
          // this.lastIndex =  parseInt(this.categories.lastIndex);
          this.MaxLenghth = []
          for(let i = 1; i < this.categories.length ; i++){
            this.MaxLenghth.push(i);
            console.log('11',this.MaxLenghth)
          }

        }

        
      }else{
        this.api.get('categories').then((data: any) => {
          this.dummy = [];
          if (data && data.status === 200 && data.data.length ) {
            this.categories = data.data;
            this.dummCategories = data.data;
            this.categories['lastIndex'] = 0;
            this.MaxLenghth = []
            for(let i = 1;  i < this.categories.length ; i++){
              this.MaxLenghth.push(i);
            }
            this.categories.forEach(elem => {
              elem['index'] = this.categories.length
            });
          }
        }, error => {
          console.log(error);
          this.error(this.util.getString('Something went wrong'));
          this.dummy = [];
        });
      }
    }, error => {
      console.log(error);
      this.error(this.util.getString('Something went wrong'));
      this.dummy = [];
    });
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

  // resetAll(){

  //   const param = {
  //     id:localStorage.getItem('uid'),
  //   }
  //   this.spinner.show();
  //   this.api.post('Categories/deleteByStoreId' ,param).then((data: any) => {
  //     this.dummy = [];
  //     if (data && data.status === 200  ) {
  //       this.spinner.hide();
  //       this.api.get('categories').then((data: any) => {
  //         this.dummy = [];
  //         if (data && data.status === 200 && data.data.length ) {
  //           this.spinner.hide();
  //           this.categories = data.data;
  //           this.dummCategories = data.data;
  //           this.categories['lastIndex'] = 0
  //           this.MaxLenghth = []
  //           for(let i = 1;  i < this.categories.length ; i++){
  //             this.MaxLenghth.push(i)
  //             console.log('33',this.MaxLenghth)
  //           }
  //         }
  //       }, error => {
  //         console.log(error);
  //         this.error(this.util.getString('Something went wrong'));
  //         this.dummy = [];
  //       });
  //     }
  //   }, error => {
  //     console.log(error);
  //     this.error(this.util.getString('Something went wrong'));
  //     this.dummy = [];
  //   });
    

  // }

  save(){
    const param ={
      store_id:localStorage.getItem('uid'),
      last_index:0,
      catIndex:JSON.stringify(this.categories)
    }
    this.spinner.show();
    console.log('this.lastIndex',param)
    this.api.post('Categories/saveCatIndex', param).then((datas: any) => {
      this.spinner.hide();
      if (datas && datas.status === 200) {
        this.getCategories();
      } else {
        this.spinner.hide();
        this.error(this.api.translate('Something went wrong'));
      }

    }, error => {
      this.spinner.hide();
      console.log(error);
      this.error(this.api.translate('Something went wrong'));
    }).catch(error => {
      this.spinner.hide();
      console.log(error);
      this.error(this.api.translate('Something went wrong'));
    });
  }

  setIndex(event,index){
    console.log('event',event.target.value)
    this.categories[index]['index'] = parseInt(event.target.value);
  }

  getClass(item) {
    if (item === '1') {
      return 'btn btn-primary btn-round';
    } else if (item === '0') {
      return 'btn btn-danger btn-round';
    }
    return 'btn btn-warning btn-round';
  }
}
