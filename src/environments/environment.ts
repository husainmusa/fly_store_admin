/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseURL: 'https://most-api.flyvip.biz/index.php/',
  // mediaURL: 'https://most-api.flyvip.biz/uploads/',
  
  // baseURL: 'http://192.168.1.33/most-api/index.php/',
  // mediaURL: 'http://192.168.1.33/most-api/uploads/',

    // baseURL: 'https://fly.manytranslations.com/index.php/',
    // mediaURL: 'https://fly.manytranslations.com/uploads/',

    // baseURL: 'https://most-api.flyvip.biz/index.php/',
    // mediaURL: 'https://most-api.flyvip.biz/uploads/',

    baseURL: 'https://most-api.flyvip.co.il/index.php/',
    mediaURL: 'https://most-api.flyvip.co.il/uploads/',


  // onesignal: {
  //   appId: '67ce0dc4-d91b-47b1-9461-e5435a59ef4d',
  //   googleProjectNumber: '62057288644',
  //   restKey: 'NzE1YmEyZjItNThjOS00ZDk2LThiNDktNmJmYzk1ZjQ2ZGQ3'
  // },


  ///FlyVip Onesignal Keys
  onesignal: {
    appId: '0a0822e8-efcc-40d6-bd4c-d69a8a68ee59',
    googleProjectNumber: '364812891343',
    restKey: 'ZjE5MzdlNDEtMTA4ZS00MzI1LWI1Y2QtNjI4ZmY5MGM4NGUz'
  },
  general: {
    symbol: '₪',
    code: 'ILS'
  },
  authToken: '175162159'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
