(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-radio-radio-module"],{

/***/ "JC0K":
/*!*********************************************!*\
  !*** ./src/app/pages/radio/radio.module.ts ***!
  \*********************************************/
/*! exports provided: RadioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPageModule", function() { return RadioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _radio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-routing.module */ "bhC8");
/* harmony import */ var _radio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio.page */ "dYZG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let RadioPageModule = class RadioPageModule {
};
RadioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _radio_routing_module__WEBPACK_IMPORTED_MODULE_5__["RadioPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_radio_page__WEBPACK_IMPORTED_MODULE_6__["RadioPage"]]
    })
], RadioPageModule);



/***/ }),

/***/ "JFWm":
/*!*********************************************!*\
  !*** ./src/app/pages/radio/radio.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "RbBa":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/radio/radio.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Radio\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-list>\n    <ion-radio-group value=\"grape\">\n      <ion-list-header>\n        <ion-label>Fruit</ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Apple</ion-label>\n        <ion-radio slot=\"start\" color=\"success\" value=\"apple\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Grape</ion-label>\n        <ion-radio slot=\"start\" color=\"tertiary\" value=\"grape\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Cherry</ion-label>\n        <ion-radio slot=\"start\" color=\"danger\" value=\"cherry\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n    <ion-radio-group allow-empty-selection value=\"anchovies\">\n      <ion-list-header>\n        <ion-label>Pizza Topping</ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Beef</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"beef\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Anchovies</ion-label>\n        <ion-radio slot=\"end\" color=\"secondary\" value=\"anchovies\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sausage</ion-label>\n        <ion-radio slot=\"end\" color=\"tertiary\" value=\"sausage\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Bellpepper</ion-label>\n        <ion-radio slot=\"end\" color=\"success\" value=\"tomato\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Tomato</ion-label>\n        <ion-radio slot=\"end\" color=\"warning\" value=\"carrot\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Pepperoni</ion-label>\n        <ion-radio slot=\"end\" color=\"danger\" value=\"pepperoni\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "bhC8":
/*!*****************************************************!*\
  !*** ./src/app/pages/radio/radio-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RadioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPageRoutingModule", function() { return RadioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _radio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio.page */ "dYZG");




const routes = [
    {
        path: '',
        component: _radio_page__WEBPACK_IMPORTED_MODULE_3__["RadioPage"]
    }
];
let RadioPageRoutingModule = class RadioPageRoutingModule {
};
RadioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RadioPageRoutingModule);



/***/ }),

/***/ "dYZG":
/*!*******************************************!*\
  !*** ./src/app/pages/radio/radio.page.ts ***!
  \*******************************************/
/*! exports provided: RadioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPage", function() { return RadioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_radio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./radio.page.html */ "RbBa");
/* harmony import */ var _radio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio.page.scss */ "JFWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RadioPage = class RadioPage {
    constructor() { }
    ngOnInit() {
    }
};
RadioPage.ctorParameters = () => [];
RadioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-radio',
        template: _raw_loader_radio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_radio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RadioPage);



/***/ })

}]);
//# sourceMappingURL=pages-radio-radio-module.js.map