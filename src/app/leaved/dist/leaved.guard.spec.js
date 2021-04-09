"use strict";
exports.__esModule = true;
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
var testing_1 = require("@angular/core/testing");
var leaved_guard_1 = require("./leaved.guard");
describe('LeaveGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [leaved_guard_1.LeaveGuard]
        });
    });
    it('should ...', testing_1.inject([leaved_guard_1.LeaveGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
