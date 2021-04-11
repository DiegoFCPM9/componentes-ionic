(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-datetime-datetime-module"],{

/***/ "2WCR":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datetime/datetime.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Datetime\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-list class=\"ion-padding\">\n    <h3>Default</h3>\n    <ion-item>\n      <ion-label>Fecha:</ion-label>\n      <ion-datetime></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class=\"ion-padding\">\n    <h3>Value</h3>\n    <ion-item>\n      <ion-label>Fecha:</ion-label>\n      <ion-datetime [value]=\"fechaNacimiento.toISOString()\"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class=\"ion-padding\">\n    <h3>Tidy</h3>\n    <ion-item>\n      <ion-label>Fecha:</ion-label>\n      <ion-datetime [value]=\"fechaNacimiento.toISOString()\" display-format=\"DD MMMM YYYY\"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class=\"ion-padding\">\n    <h3>ionChange</h3>\n    <ion-item>\n      <ion-label>Fecha:</ion-label>\n      <ion-datetime [value]=\"fechaNacimiento.toISOString()\" (ionChange)=\"changeDate($event)\"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class=\"ion-padding\">\n    <h3>Min & Max</h3>\n    <ion-item>\n      <ion-label>Fecha:</ion-label>\n      <ion-datetime [value]=\"fechaNacimiento.toISOString()\" min=\"2015-01-01\" max=\"2025-12-31\"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class=\"ion-padding\">\n    <h3>Year</h3>\n    <ion-item>\n      <ion-label>Fecha:</ion-label>\n      <ion-datetime [value]=\"fechaNacimiento.toISOString()\" display-format=\"YYYY\" min=\"2015-01-01\" max=\"2025-12-31\"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class=\"ion-padding\">\n    <h3>Custom options</h3>\n    <ion-item>\n      <ion-label>Fecha:</ion-label>\n      <ion-datetime [pickerOptions]=\"customPickerOptions\"></ion-datetime>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "In1+":
/*!*************************************************!*\
  !*** ./src/app/pages/datetime/datetime.page.ts ***!
  \*************************************************/
/*! exports provided: DatetimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePage", function() { return DatetimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datetime_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datetime.page.html */ "2WCR");
/* harmony import */ var _datetime_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datetime.page.scss */ "m+/e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DatetimePage = class DatetimePage {
    constructor() {
        this.fechaNacimiento = new Date();
        this.customPickerOptions = {
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (event) => {
                        console.log(event);
                    }
                }, {
                    text: 'Listo',
                    handler: (event) => {
                        console.log(event);
                    }
                }
            ]
        };
    }
    changeDate(event) {
        console.log(event);
        console.log(new Date(event.detail.value));
    }
};
DatetimePage.ctorParameters = () => [];
DatetimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-datetime',
        template: _raw_loader_datetime_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_datetime_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DatetimePage);



/***/ }),

/***/ "gM5W":
/*!***********************************************************!*\
  !*** ./src/app/pages/datetime/datetime-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DatetimePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePageRoutingModule", function() { return DatetimePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datetime_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datetime.page */ "In1+");




const routes = [
    {
        path: '',
        component: _datetime_page__WEBPACK_IMPORTED_MODULE_3__["DatetimePage"]
    }
];
let DatetimePageRoutingModule = class DatetimePageRoutingModule {
};
DatetimePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatetimePageRoutingModule);



/***/ }),

/***/ "m+/e":
/*!***************************************************!*\
  !*** ./src/app/pages/datetime/datetime.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRldGltZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "u/Ec":
/*!***************************************************!*\
  !*** ./src/app/pages/datetime/datetime.module.ts ***!
  \***************************************************/
/*! exports provided: DatetimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePageModule", function() { return DatetimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _datetime_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datetime-routing.module */ "gM5W");
/* harmony import */ var _datetime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datetime.page */ "In1+");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let DatetimePageModule = class DatetimePageModule {
};
DatetimePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _datetime_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatetimePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_datetime_page__WEBPACK_IMPORTED_MODULE_6__["DatetimePage"]]
    })
], DatetimePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-datetime-datetime-module.js.map