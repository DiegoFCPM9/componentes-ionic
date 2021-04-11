(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-progress-bar-progress-bar-module"],{

/***/ "F4Su":
/*!*********************************************************!*\
  !*** ./src/app/pages/progress-bar/progress-bar.page.ts ***!
  \*********************************************************/
/*! exports provided: ProgressBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPage", function() { return ProgressBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_progress_bar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./progress-bar.page.html */ "XPrC");
/* harmony import */ var _progress_bar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-bar.page.scss */ "V/ch");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProgressBarPage = class ProgressBarPage {
    constructor() {
        this.percent = 0.0;
        this.value = 0;
    }
    rangeChange(event) {
        this.percent = event.detail.value * 0.01;
        this.value = event.detail.value;
    }
};
ProgressBarPage.ctorParameters = () => [];
ProgressBarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-progress-bar',
        template: _raw_loader_progress_bar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_progress_bar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProgressBarPage);



/***/ }),

/***/ "V/ch":
/*!***********************************************************!*\
  !*** ./src/app/pages/progress-bar/progress-bar.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "XPrC":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress-bar/progress-bar.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Progress Bar\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <h5>Progressbar por defecto</h5>\n  <ion-progress-bar></ion-progress-bar>\n\n  <h5>Progressbar por defecto con 50%</h5>\n  <ion-progress-bar value=\"0.5\"></ion-progress-bar>\n\n  <h5>Progressbar de colores</h5>\n  <ion-progress-bar color=\"secondary\" value=\"0.5\"></ion-progress-bar>\n  <br>\n  <ion-progress-bar color=\"tertiary\" value=\"0.5\"></ion-progress-bar>\n\n  <h5>Progressbar con buffer</h5>\n  <ion-progress-bar value=\"0.25\" buffer=\"0.5\"></ion-progress-bar>\n  \n  <h5>Progressbar \"indeterminate\"</h5>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  \n  <h5>Progressbar \"indeterminate\" en reversa</h5>\n  <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n\n  <h3>Progressbar personalizado con Range</h3>\n  <ion-progress-bar type=\"determinate\" [value]=\"percent\" color=\"warning\"></ion-progress-bar>\n  <center>\n    <ion-item>\n      <ion-text color=\"success\">{{value}}</ion-text>\n      <ion-range min=\"0\" max=\"100\" color=\"success\" pin=\"true\" (ionChange)=\"rangeChange($event)\"></ion-range>\n    </ion-item>\n  </center>\n</ion-content>\n");

/***/ }),

/***/ "qsfl":
/*!*******************************************************************!*\
  !*** ./src/app/pages/progress-bar/progress-bar-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressBarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPageRoutingModule", function() { return ProgressBarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _progress_bar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar.page */ "F4Su");




const routes = [
    {
        path: '',
        component: _progress_bar_page__WEBPACK_IMPORTED_MODULE_3__["ProgressBarPage"]
    }
];
let ProgressBarPageRoutingModule = class ProgressBarPageRoutingModule {
};
ProgressBarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgressBarPageRoutingModule);



/***/ }),

/***/ "w18g":
/*!***********************************************************!*\
  !*** ./src/app/pages/progress-bar/progress-bar.module.ts ***!
  \***********************************************************/
/*! exports provided: ProgressBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPageModule", function() { return ProgressBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-bar-routing.module */ "qsfl");
/* harmony import */ var _progress_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-bar.page */ "F4Su");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ProgressBarPageModule = class ProgressBarPageModule {
};
ProgressBarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgressBarPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_progress_bar_page__WEBPACK_IMPORTED_MODULE_6__["ProgressBarPage"]]
    })
], ProgressBarPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-progress-bar-progress-bar-module.js.map