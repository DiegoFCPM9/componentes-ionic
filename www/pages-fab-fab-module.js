(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fab-fab-module"],{

/***/ "8Bs8":
/*!*************************************************!*\
  !*** ./src/app/pages/fab/fab-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPageRoutingModule", function() { return FabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fab.page */ "Ku2N");




const routes = [
    {
        path: '',
        component: _fab_page__WEBPACK_IMPORTED_MODULE_3__["FabPage"]
    }
];
let FabPageRoutingModule = class FabPageRoutingModule {
};
FabPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FabPageRoutingModule);



/***/ }),

/***/ "Fza+":
/*!*****************************************!*\
  !*** ./src/app/pages/fab/fab.module.ts ***!
  \*****************************************/
/*! exports provided: FabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPageModule", function() { return FabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fab-routing.module */ "8Bs8");
/* harmony import */ var _fab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab.page */ "Ku2N");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let FabPageModule = class FabPageModule {
};
FabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fab_routing_module__WEBPACK_IMPORTED_MODULE_5__["FabPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]]
    })
], FabPageModule);



/***/ }),

/***/ "Ku2N":
/*!***************************************!*\
  !*** ./src/app/pages/fab/fab.page.ts ***!
  \***************************************/
/*! exports provided: FabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPage", function() { return FabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fab_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fab.page.html */ "dGRr");
/* harmony import */ var _fab_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fab.page.scss */ "YOKa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FabPage = class FabPage {
    constructor() {
        this.data = Array(47);
    }
};
FabPage.ctorParameters = () => [];
FabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fab',
        template: _raw_loader_fab_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fab_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FabPage);



/***/ }),

/***/ "YOKa":
/*!*****************************************!*\
  !*** ./src/app/pages/fab/fab.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "dGRr":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fab/fab.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Fab\"></app-header>\n<app-menu></app-menu>\n\n<ion-content id=\"main\" fullscreen>\n  <!-- fab ubicado arriba la la derecha -->\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- fab ubicado abajo la la derecha con hijos -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"ionic\"><ion-icon name=\"logo-ionic\"></ion-icon></ion-fab-button>\n      <ion-fab-button color=\"angular\"><ion-icon name=\"logo-angular\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button color=\"facebook\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\n      <ion-fab-button color=\"twitter\"><ion-icon name=\"logo-twitter\"></ion-icon></ion-fab-button>\n      <ion-fab-button color=\"youtube\"><ion-icon name=\"logo-youtube\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item *ngFor=\"let d of data\">\n      <ion-label>Pizza</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Footer</ion-title>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=pages-fab-fab-module.js.map