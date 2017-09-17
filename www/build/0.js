webpackJsonp([0],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listings = [
            {
                address: "I N Waterside Dr, Lanexa, VA 23089, USA",
                lat: 37.408998417,
                long: -76.925099812,
                price: 493.96,
                title: "Senior Accountant (37 1/2 Hour Work Week)",
                distance: 36.4
            },
            {
                address: "2010 Clint Ln, Quinton, VA 23141, USA",
                lat: 37.527229746,
                long: -77.196926546,
                price: 164.88,
                title: "Commericial A/R ",
                distance: 17.6
            },
            {
                address: "5579-5593 Sandy Valley Rd, Mechanicsville, VA 23111, USA",
                lat: 37.598863041,
                long: -77.299085976,
                price: 207.15,
                title: "Payroll/Billing Specialist",
                distance: 11.1
            },
            {
                address: "16001 Exter Mill Rd, Chesterfield, VA 23838, USA",
                lat: 37.275277132,
                long: -77.578651371,
                price: 389.33,
                title: "Commercial Loan Account Manager",
                distance: 30.5
            },
            {
                address: "Mill Rd, Blackstone, VA 23824, USA",
                lat: 37.031523104,
                long: -78.017178316,
                price: 331.16,
                title: "Chief Financial Operating Officer",
                distance: 65
            },
            {
                address: "9994 Beach Rd, Hampton, VA 23664, USA",
                lat: 37.083487476,
                long: -76.194075551,
                price: 405.9,
                title: "Bookkeeper Needed for Richmond CPA Firm",
                distance: 83.1
            },
            {
                address: "8037 Namozine Rd, Crewe, VA 23930, USA",
                lat: 37.2264879,
                long: -78.14197173,
                price: 385.32,
                title: "BUSY NEW CAR DEALER SEEKING EXPERIENCED TITLE CLERK",
                distance: 52.1
            },
            {
                address: "1194 Turkey Island Rd, Crewe, VA 23930, USA",
                lat: 37.215659824,
                long: -78.062992912,
                price: 65.41,
                title: "FT Full Charge Bookkeeper $17-$20/hr (construction)",
                distance: 51.9
            },
            {
                address: "355 Carlton Rd, Crewe, VA 23930, USA",
                lat: 37.22533583,
                long: -78.13968498,
                price: 342.5,
                title: "Law firm Billing/Collections",
                distance: 52.4
            },
            {
                address: "Dismal Swamp Canal Trail, Chesapeake, VA 23323, USA",
                lat: 36.685674521,
                long: -76.358694076,
                price: 434.07,
                title: "Insurance Premium Auditor",
                distance: 108
            },
            {
                address: "1451 Donavon Mill Ln, Powhatan, VA 23139, USA",
                lat: 37.496169133,
                long: -77.902391,
                price: 224.95,
                title: "AUTOMOTIVE TITLE CLERK",
                distance: 33.7
            },
            {
                address: "Carlton Rd, Crewe, VA 23930, USA",
                lat: 37.232878976,
                long: -78.138374236,
                price: 291.16,
                title: "Experienced Accountant/Bookkeeper wanted",
                distance: 52.5
            },
            {
                address: "4000 Roxbury Rd, Charles City, VA 23030, USA",
                lat: 37.435111646,
                long: -77.165201503,
                price: 445.41,
                title: "PART TIME ACCOUNTS RECEIVABLES CLERK",
                distance: 24.1
            },
            {
                address: "740 Shirley Plantation Rd, Charles City, VA 23030, USA",
                lat: 37.35200539,
                long: -77.26250031,
                price: 164.69,
                title: "Recent Accounting/Finance grad? A/P Staff Accountant",
                distance: 29.7
            },
            {
                address: "12207-12211 Setzer Rd, Stony Creek, VA 23882, USA",
                lat: 36.956410166,
                long: -77.378220414,
                price: 9.61,
                title: "Senior Internal Auditor (No Travel) 40 Hour Work Week",
                distance: 45.5
            },
            {
                address: "5164 W Military Hwy, Chesapeake, VA 23321, USA",
                lat: 36.783889973,
                long: -76.44831731,
                price: 135.21,
                title: "Accounting Manager (Great Benefits) Work from Home 2 Days a week",
                distance: 95.4
            },
            {
                address: "Unnamed Road, Suffolk, VA 23435, USA",
                lat: 36.774493513,
                long: -76.514212272,
                price: 128.75,
                title: "Auto Repair Shop needs Office and Bookkeepers Assistant",
                distance: 80.8
            },
            {
                address: "6241 W Creek Rd, Amelia Court House, VA 23002, USA",
                lat: 37.289301227,
                long: -77.998001946,
                price: 202.42,
                title: "Great Opportunity! Real Estate Co. Searching For Great AP Coordinator",
                distance: 43.4
            },
            {
                address: "Willcox Neck Road, Charles City, VA 23030, USA",
                lat: 37.393438828,
                long: -76.919340129,
                price: 412.66,
                title: "Accounting/Bookkeeper",
                distance: 39.8
            },
            {
                address: "8238 Christian Ridge Dr, Mechanicsville, VA 23111, USA",
                lat: 37.613444468,
                long: -77.160604207,
                price: 66.98,
                title: "Financial Services - Entry Level",
                distance: 20.1
            },
            {
                address: "474 Dundas Rd, Kenbridge, VA 23944, USA",
                lat: 36.928513317,
                long: -78.08002075,
                price: 59.1,
                title: "Part Time Seasonal Tax Accountant",
                distance: 79.2
            },
            {
                address: "285 Chesapeake Bay Bridge Tunnel, Cape Charles, VA 23310, USA",
                lat: 37.146546241,
                long: -76.129600596,
                price: 120.69,
                title: "Accounts Payable Specialist",
                distance: 109
            },
            {
                address: "355 Carlton Rd, Crewe, VA 23930, USA",
                lat: 37.229353419,
                long: -78.136587617,
                price: 95.76,
                title: "Bookkeeper! Data entry",
                distance: 52.4
            },
            {
                address: "Twin Wood Ln, Kenbridge, VA 23944, USA",
                lat: 36.934017204,
                long: -78.068104633,
                price: 197.15,
                title: "Accountant/bookkeeper wanted",
                distance: 78.6
            },
            {
                address: "6002-6062 Sandy Valley Rd, Mechanicsville, VA 23111, USA",
                lat: 37.599388564,
                long: -77.303598522,
                price: 478.7,
                title: "Billing Specialist-Costpoint 7-Immediate Need- Contract 6 months",
                distance: 10.9
            },
            {
                address: "Unnamed Road, Williamsburg, VA 23188, USA",
                lat: 37.281328796,
                long: -76.845606926,
                price: 218.82,
                title: "Accounting Assistant",
                distance: 48.5
            },
            {
                address: "State Rte 625, Crewe, VA 23930, USA",
                lat: 37.121392352,
                long: -78.045655273,
                price: 355.14,
                title: "Finance Associate- Great firm!",
                distance: 65.3
            },
            {
                address: "Williamson Ditch Trail, Suffolk, VA 23434, USA",
                lat: 36.737698738,
                long: -76.506528162,
                price: 400.97,
                title: "Senior Accountant Position",
                distance: 106
            },
            {
                address: "1209 Nelson St, Richmond, VA 23231, USA",
                lat: 37.511434519,
                long: -77.402997102,
                price: 404.12,
                title: "Service Representative/Accountant",
                distance: 4.8
            },
            {
                address: "1873-1999 C C Rd, Charles City, VA 23030, USA",
                lat: 37.463989378,
                long: -77.158176288,
                price: 355.95,
                title: "ATTENTION SEASONAL TAX PROFESSIONALS",
                distance: 23.4
            },
            {
                address: "9319 Wheaton Rd, Petersburg, VA 23803, USA",
                lat: 37.144670027,
                long: -77.472752844,
                price: 285.33,
                title: "Finance Analyst/Advisor Internship",
                distance: 34
            },
            {
                address: "7103 Twin Girls Ln, Mechanicsville, VA 23111, USA",
                lat: 37.594294432,
                long: -77.245475697,
                price: 237.26,
                title: "Tax Accountant",
                distance: 17
            },
            {
                address: "400 Colony Trail, Lanexa, VA 23089, USA",
                lat: 37.391285479,
                long: -76.909644841,
                price: 133.74,
                title: "Senior Accountant CPA for Law firm",
                distance: 35.9
            },
            {
                address: "10200 Pocahontas Trail, Providence Forge, VA 23140, USA",
                lat: 37.43609798,
                long: -77.01495596,
                price: 468.75,
                title: "Automotive Finance Manager",
                distance: 27.8
            },
            {
                address: "Unnamed Road, Spring Grove, VA 23881, USA",
                lat: 37.126392316,
                long: -76.919971108,
                price: 448.6,
                title: "Staff Accountant",
                distance: 44.7
            },
            {
                address: "12 Atkins Rd, Farmville, VA 23901, USA",
                lat: 37.356119879,
                long: -78.389418829,
                price: 192,
                title: "Accounting Manager with Real Estate Experience",
                distance: 65.2
            },
            {
                address: "Patrick Henry Hwy, Jetersville, VA 23083, USA",
                lat: 37.29020827,
                long: -78.10637506,
                price: 438.1,
                title: "Staff Accountant-Experienced",
                distance: 47.3
            },
            {
                address: "205 Kristen Ln, Chester, VA 23836, USA",
                lat: 37.353837308,
                long: -77.364851204,
                price: 5.33,
                title: "Quantitative Analytics Manager",
                distance: 17.8
            },
            {
                address: "7100 Morris Ln, Jetersville, VA 23083, USA",
                lat: 37.307378118,
                long: -78.122384017,
                price: 363.66,
                title: "Flexible P/T Accountant/Account receivable",
                distance: 48.6
            },
            {
                address: "4300 New Kent Hwy, Quinton, VA 23141, USA",
                lat: 37.533360274,
                long: -77.144402283,
                price: 483.47,
                title: "CONTROLLER _ Real Estate Investment Company",
                distance: 18.9
            },
            {
                address: "B Adkins Rd, Providence Forge, VA 23140, USA",
                lat: 37.434945737,
                long: -77.058978018,
                price: 419.89,
                title: "Internal Auditors",
                distance: 25.6
            },
            {
                address: "20621 Patrick Henry Hwy, Jetersville, VA 23083, USA",
                lat: 37.30738569,
                long: -78.072143287,
                price: 109.44,
                title: "GREAT OFFICE ",
                distance: 47.3
            },
            {
                address: "7619 Ansley Rd, Richmond, VA 23231, USA",
                lat: 37.455946392,
                long: -77.38956757,
                price: 15.08,
                title: "Tax manager",
                distance: 8.1
            },
            {
                address: "Pleasant Hill Ln, Kenbridge, VA 23944, USA",
                lat: 36.931731496,
                long: -78.118359916,
                price: 64.68,
                title: "AUTOMOTIVE DEAL BILLING CLERK",
                distance: 75.5
            },
            {
                address: "20109-20217 Perkinson Rd, Jetersville, VA 23083, USA",
                lat: 37.27775888,
                long: -78.08114202,
                price: 340.86,
                title: "Member Assistance Program Tech LG13",
                distance: 47.6
            },
            {
                address: "156-1544 Mayflower Rd, Kenbridge, VA 23944, USA",
                lat: 36.923625335,
                long: -78.128880068,
                price: 151.28,
                title: "Part-Time Bookkeeper",
                distance: 77.7
            },
            {
                address: "Plank Rd, Kenbridge, VA 23944, USA",
                lat: 36.898435968,
                long: -78.240496732,
                price: 95.4,
                title: "Accounting Dept./ AIA Billing Clerk",
                distance: 79.7
            },
            {
                address: "355 Carlton Rd, Crewe, VA 23930, USA",
                lat: 37.22719257,
                long: -78.14055261,
                price: 241.05,
                title: "Staff Accountant for Certified Public Accounting Firm",
                distance: 52.4
            },
            {
                address: "1001 Dabbs House Rd, Richmond, VA 23223, USA",
                lat: 37.5586328,
                long: -77.37621698,
                price: 206.37,
                title: "Detailed Senior Government Buyer [AD214390]",
                distance: 6.4
            },
            {
                address: "1031 Bay Tree Beach Rd, Seaford, VA 23696, USA",
                lat: 37.182148129,
                long: -76.369425594,
                price: 53.96,
                title: "Senior Accountant (Professional Sports Organization)",
                distance: 71.9
            },
            {
                address: "336 Ligontown Rd, Farmville, VA 23901, USA",
                lat: 37.372635727,
                long: -78.270286009,
                price: 80.61,
                title: "Bookkeeper",
                distance: 61.3
            },
            {
                address: "Soap Stone Rd, Jetersville, VA 23083, USA",
                lat: 37.30608675,
                long: -78.14980217,
                price: 212.49,
                title: "CPA Wanted",
                distance: 49.8
            },
            {
                address: "1001-1421 Switch Back Rd, Kenbridge, VA 23944, USA",
                lat: 36.938425475,
                long: -78.067994022,
                price: 14.79,
                title: " ",
                distance: 79.6
            },
            {
                address: "5098 Spring Branch Rd, Waverly, VA 23890, USA",
                lat: 37.049741169,
                long: -77.099353318,
                price: 437.39,
                title: "Controller _ Construction/General Contractor",
                distance: 47.3
            },
            {
                address: "530 Mowbray Arch, Norfolk, VA 23507, USA",
                lat: 36.8564734,
                long: -76.29905037,
                price: 467.67,
                title: "Budget Analyst - $60K Benefits - SECRET Clearance Required",
                distance: 97.3
            },
            {
                address: "1155 Rodophil Rd, Amelia Court House, VA 23002, USA",
                lat: 37.37335794,
                long: -78.16576092,
                price: 464.16,
                title: "CPA - Local Firm",
                distance: 48.9
            },
            {
                address: "James Town Rd, Jetersville, VA 23083, USA",
                lat: 37.306297222,
                long: -78.198255556,
                price: 43.38,
                title: "Accountant",
                distance: 55
            },
            {
                address: "355 Carlton Rd, Crewe, VA 23930, USA",
                lat: 37.22937244,
                long: -78.13384129,
                price: 181.49,
                title: "Executive Assistant - $55K- 65K - Silver Spring, MD",
                distance: 52.4
            },
            {
                address: "18277 Fairview Farm Ln, Windsor, VA 23487, USA",
                lat: 36.878660311,
                long: -76.615788777,
                price: 411.45,
                title: "Restaurant/Hospitality Bookkeeper (Flex or Full time)",
                distance: 82
            },
            {
                address: "4701 Olivet Church Rd, Providence Forge, VA 23140, USA",
                lat: 37.461468572,
                long: -77.060796844,
                price: 283.13,
                title: "Title Clerk - Automotive",
                distance: 27.4
            },
            {
                address: "Selma Rd, Jetersville, VA 23083, USA",
                lat: 37.29988244,
                long: -78.20582633,
                price: 294,
                title: "Senior Real Estate Acquisitions Analyst",
                distance: 52.2
            },
            {
                address: "8460-8474 Timberstone Dr, Chesterfield, VA 23838, USA",
                lat: 37.385056596,
                long: -77.701455805,
                price: 124.36,
                title: "Accountant Opportunity",
                distance: 22.4
            },
            {
                address: "144 Atkins Rd, Farmville, VA 23901, USA",
                lat: 37.360821986,
                long: -78.397249685,
                price: 148.71,
                title: "Grants and Financial Accountant",
                distance: 65.8
            },
            {
                address: "Willcox Neck Road, Charles City, VA 23030, USA",
                lat: 37.397317899,
                long: -76.910661048,
                price: 189.19,
                title: "ACCOUNTS PAYABLE",
                distance: 39.8
            },
            {
                address: "4070 Coppers Ln, Providence Forge, VA 23140, USA",
                lat: 37.45788378,
                long: -77.031331436,
                price: 487.93,
                title: "Corporate Accountant",
                distance: 27.8
            },
            {
                address: "6509 Confederate Hill Dr, Mechanicsville, VA 23111, USA",
                lat: 37.58002775,
                long: -77.259222439,
                price: 228.46,
                title: "Accountant with Tax Experience",
                distance: 16.9
            },
            {
                address: "8463 Rumleys Ln, Providence Forge, VA 23140, USA",
                lat: 37.479318074,
                long: -77.052893597,
                price: 102.54,
                title: "Office Manager",
                distance: 27.9
            },
            {
                address: "450 Colony Trail, Lanexa, VA 23089, USA",
                lat: 37.391979413,
                long: -76.907643641,
                price: 25.74,
                title: "Full Time- Entry Level Financial Services",
                distance: 35.8
            },
            {
                address: "Kings Rd, Green Bay, VA 23942, USA",
                lat: 37.066753696,
                long: -78.245444219,
                price: 101.97,
                title: "Accountants / CPA / EA - Public Accounting",
                distance: 68.3
            },
            {
                address: "Mill Rd, Blackstone, VA 23824, USA",
                lat: 37.031523104,
                long: -78.017178316,
                price: 57.61,
                title: "Commercial Paving Admin position",
                distance: 65
            },
            {
                address: "4530-4598 Crossgate Rd, Chester, VA 23831, USA",
                lat: 37.339485698,
                long: -77.449159938,
                price: 444,
                title: "Entry-Level Staff Accountant",
                distance: 17.9
            },
            {
                address: "1272-1598 Co Rd 600, Farmville, VA 23901, USA",
                lat: 37.381663943,
                long: -78.403006201,
                price: 316.31,
                title: "Assistant Controller",
                distance: 66.4
            },
            {
                address: "3700 Weiss Ln, Chesapeake, VA 23323, USA",
                lat: 36.729692942,
                long: -76.372912803,
                price: 101.53,
                title: "Senior Accountant (Pro Sports Team)",
                distance: 101
            },
            {
                address: "5151 Wildlife Ridge Trail, Quinton, VA 23141, USA",
                lat: 37.556732828,
                long: -77.125668206,
                price: 24.94,
                title: "Jackson Hewitt is Hiring Tax Preparers - No Experience Required",
                distance: 23.5
            },
            {
                address: "Kentland Trail, Providence Forge, VA 23140, USA",
                lat: 37.488466523,
                long: -77.022582125,
                price: 250.69,
                title: "Controller (Telecommute on Monday's and/or Friday's)",
                distance: 27.3
            }
        ];
        this.range = 500;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/chranmurugapandi/github/Fetch/src/pages/home/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n      <ion-item>\n          <ion-range min="5" max="500" [(ngModel)]="range" color="secondary">\n              <ion-label range-left>5</ion-label>\n              <ion-label range-right>500</ion-label>\n            </ion-range>  \n      </ion-item>    \n      <ion-item>\n        {{range}}\n      </ion-item>\n      <ng-container *ngFor="let list of listings">\n        <ion-item *ngIf="list.distance <= range">\n            <h2>{{list.title}}</h2>\n            <h3>Description </h3>\n            <p>{{list.distance}} miles away</p>\n            <button ion-button clear large item-end>${{list.price}}</button>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chranmurugapandi/github/Fetch/src/pages/home/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map