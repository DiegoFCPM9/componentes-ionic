(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index-module"],{

/***/ "483b":
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Q+c0":
/*!*****************************************************!*\
  !*** ./src/app/pages/index/index-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "jZxj");




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ "j624":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n    <ion-title color=\"primary\"><b>Componentes</b></ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"sunny\" size=\"small\"></ion-icon>\n      <ion-toggle (ionChange)=toggleDarkMode() [ngModel]=\"darkMode\"></ion-toggle>\n      <ion-icon name=\"moon\" size=\"small\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item *ngFor=\"let p of pages | async\" [routerLink]=\"p.redirectTo\" detail>\n      <ion-icon [name]=\"p.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n        <p color=\"secondary\">{{p.name}}</p>\n    </ion-item> \n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "jZxj":
/*!*******************************************!*\
  !*** ./src/app/pages/index/index.page.ts ***!
  \*******************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.page.html */ "j624");
/* harmony import */ var _index_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.page.scss */ "483b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");





let IndexPage = class IndexPage {
    constructor(dataService) {
        this.dataService = dataService;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    }
    ngOnInit() {
        this.pages = this.dataService.getMenuOpts();
    }
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark');
    }
};
IndexPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IndexPage);



/***/ }),

/***/ "lOnp":
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.module.ts ***!
  \*********************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-routing.module */ "Q+c0");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "jZxj");







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"],
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-index-index-module.js.map