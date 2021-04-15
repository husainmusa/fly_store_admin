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
  selector: 'app-secondry-variations',
  templateUrl: './secondry-variations.component.html',
  styleUrls: ['./secondry-variations.component.css']
})
export class SecondryVariationsComponent implements OnInit {

  products: any[] = [];
  dummProducts: any[] = [];
  dummy = Array(5);
  page = 1;
  constructor(
    public api: ApisService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastyService: ToastyService,
    public util: UtilService
  ) {
    this.getVariation();
  }

  ngOnInit(): void {
  }

  getVariation() {
    const param = {
      id: localStorage.getItem('uid'),
    };
    this.api.post('SecondVariation/getByUid', param).then((data: any) => {
      console.log(data);
      this.dummy = [];
      if (data && data.status === 200) {
        this.products = data.data;
        this.dummProducts = data.data;
      }
    }, error => {
      console.log(error);
      this.error(this.util.getString('Something went wrong'));
      this.dummy = [];
    });
  }

  search(string) {
    this.resetChanges();
    console.log('string', string);
    this.products = this.filterItems(string);
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

  protected resetChanges = () => {
    this.products = this.dummProducts;
  }

  setFilteredItems() {
    console.log('clear');
    this.products = [];
    this.products = this.dummProducts;
  }

  filterItems(searchTerm) {
    return this.products.filter((item) => {
      return item.items_title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  sortByName() {
    this.products = orderBy(this.products, ['items_title'], ['asc']);
  }


  getClass(item) {
    if (item === '1') {
      return 'btn btn-primary btn-round';
    } else if (item === '0') {
      return 'btn btn-danger btn-round';
    }
    return 'btn btn-warning btn-round';
  }

  openVariation(item) {
    console.log(item);
    const navData: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };
    this.router.navigate(['manage-secondry-variation'], navData);
  }
  getDates(date) {
    return moment(date).format('llll');
  }

  getCurrency() {
    return this.api.getCurrecySymbol();
  }


  deleteVariation(item){
    Swal.fire({
      title: this.util.getString('Are you sure?'),
      text: 'Want to delete this variation',
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: this.util.getString('Yes'),
      showCancelButton: true,
      cancelButtonText: this.util.getString('Cancle'),
      backdrop: false,
      background: 'white'
    }).then((data) => {
      if (data && data.value) {
        console.log('update it');
        const param = {
          id: item.id,
        };
        this.spinner.show();
        this.api.post('SecondVariation/deleteList', param).then((datas) => {
          this.spinner.hide();
          this.getVariation();
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
    });
  }




  createNew() {
    this.router.navigate(['manage-secondry-variation']);
  }


  createDuplicate(item){
    const param ={
      id : item.id
    }
    this.spinner.show();
    this.api.post('SecondVariation/copyThisSecondVriation', param).then((datas) => {
      this.spinner.hide();
      this.getVariation();
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
}
