(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-refresher-refresher-module"],{

/***/ "Nrj9":
/*!***************************************************!*\
  !*** ./src/app/pages/refresher/refresher.page.ts ***!
  \***************************************************/
/*! exports provided: RefresherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPage", function() { return RefresherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_refresher_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./refresher.page.html */ "cI85");
/* harmony import */ var _refresher_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refresher.page.scss */ "pOy5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RefresherPage = class RefresherPage {
    constructor() {
        this.items = Array(9);
    }
    ngOnInit() { }
    doRefresh(event) {
        setTimeout(() => {
            this.items = Array(21);
            event.target.complete();
        }, 1500);
    }
};
RefresherPage.ctorParameters = () => [];
RefresherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-refresher',
        template: _raw_loader_refresher_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_refresher_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RefresherPage);



/***/ }),

/***/ "YteZ":
/*!*****************************************************!*\
  !*** ./src/app/pages/refresher/refresher.module.ts ***!
  \*****************************************************/
/*! exports provided: RefresherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPageModule", function() { return RefresherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _refresher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refresher-routing.module */ "lgTE");
/* harmony import */ var _refresher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refresher.page */ "Nrj9");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let RefresherPageModule = class RefresherPageModule {
};
RefresherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _refresher_routing_module__WEBPACK_IMPORTED_MODULE_5__["RefresherPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_refresher_page__WEBPACK_IMPORTED_MODULE_6__["RefresherPage"]]
    })
], RefresherPageModule);



/***/ }),

/***/ "cI85":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refresher/refresher.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Refresher\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Baja para recaragar.\"\n      refreshingSpinner=\"dots\"\n      refreshingText=\"Cargando...\"\n    ><!-- \"bubbles\", \"circles\", \"circular\", \"crescent\", \"dots\", \"lines\", \"lines-small\"  -->\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item *ngFor='let i of items; let ii=index' class=\"animate__animated animate__fadeInUp\">\n      <ion-label>Item: {{ii+1}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "lgTE":
/*!*************************************************************!*\
  !*** ./src/app/pages/refresher/refresher-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RefresherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPageRoutingModule", function() { return RefresherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _refresher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refresher.page */ "Nrj9");




const routes = [
    {
        path: '',
        component: _refresher_page__WEBPACK_IMPORTED_MODULE_3__["RefresherPage"]
    }
];
let RefresherPageRoutingModule = class RefresherPageRoutingModule {
};
RefresherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RefresherPageRoutingModule);



/***/ }),

/***/ "pOy5":
/*!*****************************************************!*\
  !*** ./src/app/pages/refresher/refresher.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZyZXNoZXIucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-refresher-refresher-module.js.map