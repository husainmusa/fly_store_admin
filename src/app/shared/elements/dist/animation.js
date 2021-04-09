"use strict";
exports.__esModule = true;
exports.fadeInOutTranslate = void 0;
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
var animations_1 = require("@angular/animations");
exports.fadeInOutTranslate = animations_1.trigger('fadeInOutTranslate', [
    animations_1.transition(':enter', [
        animations_1.style({ opacity: 0 }),
        animations_1.animate('400ms ease-in-out', animations_1.style({ opacity: 1 }))
    ]),
    animations_1.transition(':leave', [
        animations_1.style({ transform: 'translate(0)' }),
        animations_1.animate('400ms ease-in-out', animations_1.style({ opacity: 0 }))
    ])
]);
