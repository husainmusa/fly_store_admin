/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import * as moment from 'moment';
import { ApisService } from 'src/app/services/apis.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stores: any[] = [];
  storeId: any;
  storecommission: any;
  from: any;
  to: any;
  allOrders: any[] = [];
  storeOrder: any[] = [];
  totalAmount: any = 0;
  TotalAmound:any = 0;
  commisionAmount: any = 0;
  toPay: any = 0;
  apiCalled: boolean;
  storename: any;

  totalAmountsFromOrder: any = 0;
  id: any;
  address: any;
  city: any;
  country: any;
  email: any;
  free: any;
  min: any;
  mobile: any;
  shippingPrice: any;
  shipping: any;
  state: any;
  tax: any;
  zip: any;
  constructor(
    private api: ApisService,
    private toastyService: ToastyService,
    private spinner: NgxSpinnerService,
    public util: UtilService
  ) {
    console.log(this.util.storeInfo);
    this.storeId = localStorage.getItem('uid');
    if (this.util.storeInfo && this.util.storeInfo.commission) {
      console.log('this.util.storeInfo.commission',this.util.storeInfo.commission)
      this.storecommission = parseInt(this.util.storeInfo.commission);
      console.log('this.storecommission',this.storecommission)
    } else {
      this.error(this.util.getString('No Store Found'));
    }
   
  }

  ngOnInit() {
    this.getCurrennt();
  }

  getStats() {
    console.log('from', this.from);
    console.log('to', this.to);
    if (this.storeId && this.from && this.to) {

      console.log('ok');
      const param = {
        sid: this.storeId,
        start: this.from + ' 00:00:00',
        end: this.to + ' 23:59:59'
      };
      console.log(param);
      this.spinner.show();
      this.apiCalled = false;
      this.storeOrder = [];
      this.api.post('orders/storeStats', param).then((data: any) => {
        console.log('data===>',data)
        this.apiCalled = true;
        this.spinner.hide();
        console.log(data);
        if (data && data.status === 200 && data.data.length) {
          let total = 0;
          data.data.forEach(async (element) => {
            if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(element.orders)) {
              element.orders = JSON.parse(element.orders);
              element.date_time = moment(element.date_time).format('dddd, MMMM Do YYYY');
              element.orders = await element.orders.filter(x => x.store_id === this.storeId);
              if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(element.status)) {
                const info = JSON.parse(element.status);
                const selected = await info.filter(x => x.id === this.storeId);
                console.log('outer')
                if (selected && selected.length) {
                  console.log('innefr',selected)
                  if (selected[0].status.trim() === 'delivered' || selected[0].status.trim() === 'accepted' || selected[0].status.trim() === 'ongoing') {
                    console.log('innessssfr',selected)
                    this.TotalAmound = this.TotalAmound + parseInt(element.total);
                    this.storeOrder.push(element);
                  }
                }


                await element.orders.forEach(calc => {
                  if (calc.variations && calc.variations !== '' && typeof calc.variations === 'string') {
                    calc.variations = JSON.parse(calc.variations);
                    console.log(calc['variant']);
                    if (calc["variant"] === undefined) {
                      calc['variant'] = 0;
                    }
                  }
                  console.log('calc oyter==>',calc);
                  // if (calc && calc.discount === '0') {
                    // if (calc.size === '1' || calc.size === 1) {
                    //   console.log('calc oyter==>',calc)
                    //   if (calc.variations![0].calc![calc.variant].discount && calc.variations![0].items[calc.variant].discount !== 0) {
                    //     console.log('calc==>',calc)
                    //     total = total + (parseFloat(calc.variations[0].items[calc.variant].discount) * calc.quantiy);
                    //   } else {
                    //     total = total + (parseFloat(calc.variations[0].items[calc.variant].price) * calc.quantiy);
                    //   }
                    // } else {
                    //   total = total + (parseFloat(calc.original_price) * calc.quantiy);
                    // }
                  // } else {
                    if (calc.size === '1' || calc.size === 1) {
                      if (calc.variations![0].items[calc.variant].discount && calc.variations![0].items[calc.variant].discount !== 0) {
                        total = total + (parseFloat(calc.variations[0].items[calc.variant].discount) * calc.quantiy);
                      } else {
                        total = total + (parseFloat(calc.variations[0].items[calc.variant].price) * calc.quantiy);
                      }
                    } else {
                      total = total + (parseFloat(calc.sell_price) * calc.quantiy);
                    }
                  // }
                });
                // const selected = await info.filter(x => x.id === this.storeId);
                // console.log('outer')
                // if (selected && selected.length) {
                //   console.log('innefr',selected)
                //   if (selected[0].status === 'delivered' || selected[0].status === 'accepted') {
                //     console.log('innessssfr',selected)
                //     this.TotalAmound = this.TotalAmound + parseInt(element.total);
                //     this.storeOrder.push(element);
                //   }
                // }
              }
            }
          });

          setTimeout(() => {
            function percentage(num, per) {
              return (num / 100) * per;
            }
            const totalPrice = percentage(this.TotalAmound, parseFloat(this.storecommission));
            this.commisionAmount = totalPrice.toFixed(2);
            this.totalAmount = total;
            this.toPay = this.commisionAmount;
          }, 1000);

        }
      }, error => {
        this.spinner.hide();
        console.log(error);
        this.apiCalled = true;
        this.error(this.util.getString('Something went wrong'));
      }).catch((error) => {
        this.spinner.hide();
        console.log(error);
        this.apiCalled = true;
        this.error(this.util.getString('Something went wrong'));
      });
    } else {
      console.log('not valid');
      this.error(this.util.getString('All Fields are required'));
      return false;
    }
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

  getCommisions(total) {
    return ((parseFloat(total) * this.storecommission) / 100).toFixed(2);
  }

  donwloadPDF() {

  }
  today() {
    return moment().format('ll');
  }
  getDate(date) {
    return moment(date).format('ll');
  }
  getName() {
    return this.storeOrder[0].name + '_' + moment(this.from).format('DDMMYYYY') + '_' + moment(this.to).format('DDMMYYYY');
  }
  getCurrency() {
    return this.api.getCurrecySymbol();
  }

  getCurrennt() {
    this.spinner.show();
    this.api.get('general').then((data: any) => {
      console.log(data);
      this.spinner.hide();
      if (data && data.status === 200) {
        if (data && data.data && data.data.length) {
          const info = data.data[0];
          this.id = info.id;
          this.address = info.address;
          this.city = info.city;
          this.country = info.country;
          this.email = info.email;
          this.free = info.free;
          this.min = info.min;
          this.mobile = info.mobile;
          this.shippingPrice = info.shippingPrice;
          this.shipping = info.shipping;
          this.state = info.state;
          this.tax = info.tax;
          this.zip = info.zip;
        }
      } else {
      }

    }, error => {
      console.log(error);
      this.spinner.hide();
      this.error(this.api.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.spinner.hide();
      this.error(this.api.translate('Something went wrong'));
    });
  }

}
