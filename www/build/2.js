webpackJsonp([2],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    return AccountPageModule;
}());
AccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
        ],
    })
], AccountPageModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_landing__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, angFire, angFireAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angFire = angFire;
        this.angFireAuth = angFireAuth;
        this.photoUrl = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/20638138_1972390039661044_7930668379242096001_n.jpg?oh=c4f8820bd6673c0ee1f6423b53209c2a&oe=5A4B933C";
        this.displayName = "Chran Murugapandi";
    }
    AccountPage.prototype.logoutUser = function () {
        var _this = this;
        firebase.auth().signOut().then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__landing_landing_landing__["a" /* LandingPage */]); });
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/chranmurugapandi/github/Fetch/src/pages/home/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n    <div class="profile-image">\n        <img src="{{photoUrl}}">\n    </div>\n    <div style="text-align: center;">\n        <h2>{{displayName}}</h2>\n    </div>\n    <div class="spacer" style="height: 10px;"></div>\n\n    <div text-center>\n        <button mode="md" ion-button round icon-left color="secondary" style="width: 250px; height: 50px;" (click)="fbLogin()">\n          Get My Listings\n        </button>\n\n        <button mode="md" ion-button round icon-left color="card" style="width: 250px; height: 50px;" (click)="fbLogin()">\n          Get My Fetches\n        </button>\n\n        <button mode="md" ion-button round icon-left color="danger" style="width: 150px; height: 50px;" (click)="logoutUser()">\n          Logout\n        </button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chranmurugapandi/github/Fetch/src/pages/home/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuthModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuthModule */]) === "function" && _d || Object])
], AccountPage);

var _a, _b, _c, _d;
//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=2.js.map