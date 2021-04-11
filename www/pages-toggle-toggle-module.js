(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-toggle-toggle-module"],{

/***/ "3Yz1":
/*!***********************************************!*\
  !*** ./src/app/pages/toggle/toggle.module.ts ***!
  \***********************************************/
/*! exports provided: TogglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglePageModule", function() { return TogglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _toggle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-routing.module */ "ViPz");
/* harmony import */ var _toggle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle.page */ "7Gzv");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let TogglePageModule = class TogglePageModule {
};
TogglePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _toggle_routing_module__WEBPACK_IMPORTED_MODULE_5__["TogglePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_toggle_page__WEBPACK_IMPORTED_MODULE_6__["TogglePage"]]
    })
], TogglePageModule);



/***/ }),

/***/ "7Gzv":
/*!*********************************************!*\
  !*** ./src/app/pages/toggle/toggle.page.ts ***!
  \*********************************************/
/*! exports provided: TogglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglePage", function() { return TogglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toggle_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toggle.page.html */ "nZl+");
/* harmony import */ var _toggle_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle.page.scss */ "l/hi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TogglePage = class TogglePage {
    constructor() { }
    ngOnInit() {
    }
};
TogglePage.ctorParameters = () => [];
TogglePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-toggle',
        template: _raw_loader_toggle_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_toggle_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TogglePage);



/***/ }),

/***/ "ViPz":
/*!*******************************************************!*\
  !*** ./src/app/pages/toggle/toggle-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TogglePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglePageRoutingModule", function() { return TogglePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toggle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle.page */ "7Gzv");




const routes = [
    {
        path: '',
        component: _toggle_page__WEBPACK_IMPORTED_MODULE_3__["TogglePage"]
    }
];
let TogglePageRoutingModule = class TogglePageRoutingModule {
};
TogglePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TogglePageRoutingModule);



/***/ }),

/***/ "l/hi":
/*!***********************************************!*\
  !*** ./src/app/pages/toggle/toggle.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-size: 15pt !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvZ2dsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKIiwiZmlsZSI6InRvZ2dsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNXB0IWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "nZl+":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/toggle/toggle.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Toggle\"></app-header>\n<app-menu></app-menu>\n\n<ion-content fullscreen class=\"ion-padding\" id=\"main\">\n  <ion-list>\n    <ion-item>\n      <ion-label>Blueberry</ion-label>\n      <ion-toggle slot=\"start\" name=\"blueberry\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Apple</ion-label>\n      <ion-toggle slot=\"start\" name=\"apple\" color=\"secondary\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Grape</ion-label>\n      <ion-toggle slot=\"start\" name=\"grape\" color=\"tertiary\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Kiwi</ion-label>\n      <ion-toggle slot=\"start\" name=\"kiwi\" color=\"success\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Orange</ion-label>\n      <ion-toggle slot=\"start\" name=\"banana\" color=\"warning\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cherry</ion-label>\n      <ion-toggle slot=\"start\" name=\"cherry\" color=\"danger\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Banana</ion-label>\n      <ion-toggle slot=\"start\" name=\"banana\" color=\"light\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cantaloupe</ion-label>\n      <ion-toggle slot=\"start\" name=\"cantaloupe\" color=\"medium\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Blackberry</ion-label>\n      <ion-toggle slot=\"start\" name=\"blackberry\" color=\"dark\" checked></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-toggle-toggle-module.js.map