(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-button-button-module"],{

/***/ "2Rl3":
/*!***********************************************!*\
  !*** ./src/app/pages/button/button.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "NEiM":
/*!***********************************************!*\
  !*** ./src/app/pages/button/button.module.ts ***!
  \***********************************************/
/*! exports provided: ButtonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPageModule", function() { return ButtonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _button_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button-routing.module */ "fyc0");
/* harmony import */ var _button_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button.page */ "ZZKm");







let ButtonPageModule = class ButtonPageModule {
};
ButtonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _button_routing_module__WEBPACK_IMPORTED_MODULE_5__["ButtonPageRoutingModule"],
        ],
        declarations: [_button_page__WEBPACK_IMPORTED_MODULE_6__["ButtonPage"]]
    })
], ButtonPageModule);



/***/ }),

/***/ "ZZKm":
/*!*********************************************!*\
  !*** ./src/app/pages/button/button.page.ts ***!
  \*********************************************/
/*! exports provided: ButtonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPage", function() { return ButtonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_button_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./button.page.html */ "umHK");
/* harmony import */ var _button_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.page.scss */ "2Rl3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ButtonPage = class ButtonPage {
    constructor() {
        this.fav = false;
    }
    ngOnInit() {
    }
    clickFavorite() {
        this.fav = !this.fav;
    }
};
ButtonPage.ctorParameters = () => [];
ButtonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-button',
        template: _raw_loader_button_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_button_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ButtonPage);



/***/ }),

/***/ "fyc0":
/*!*******************************************************!*\
  !*** ./src/app/pages/button/button-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ButtonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPageRoutingModule", function() { return ButtonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _button_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.page */ "ZZKm");




const routes = [
    {
        path: '',
        component: _button_page__WEBPACK_IMPORTED_MODULE_3__["ButtonPage"]
    }
];
let ButtonPageRoutingModule = class ButtonPageRoutingModule {
};
ButtonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ButtonPageRoutingModule);



/***/ }),

/***/ "umHK":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/button/button.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" color=\"primary\" mode=\"ios\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\">Button</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickFavorite()\">\n        <ion-icon [name]=\"fav ? 'heart' : 'heart-outline'\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen>\n  <h3>Default</h3>\n  <ion-button>Default</ion-button><br>\n\n  <h3>Anchor</h3>\n  <ion-button href=\"#\">Anchor</ion-button><br>\n\n  <h3>Colors</h3>\n  <ion-button color=\"primary\">Primary</ion-button>\n  <ion-button color=\"secondary\">Secondary</ion-button>\n  <ion-button color=\"tertiary\">Tertiary</ion-button>\n  <ion-button color=\"success\">Success</ion-button>\n  <ion-button color=\"warning\">Warning</ion-button>\n  <ion-button color=\"danger\">Danger</ion-button>\n  <ion-button color=\"light\">Light</ion-button>\n  <ion-button color=\"medium\">Medium</ion-button>\n  <ion-button color=\"dark\">Dark</ion-button><br>\n\n  <h3>Expand</h3>\n  <ion-button expand=\"full\">Full Button</ion-button>\n  <ion-button expand=\"block\">Block Button</ion-button>\n\n  <h3>Round</h3>\n  <ion-button shape=\"round\">Round Button</ion-button><br>\n\n  <h3>Fill</h3>\n  <ion-button expand=\"full\" fill=\"outline\">Outline + Full</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\">Outline + Block</ion-button>\n  <ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button><br>\n\n  <h3>Icons</h3>\n  <ion-button>\n    <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n    Left Icon\n  </ion-button>\n\n  <ion-button>\n    Right Icon\n    <ion-icon slot=\"end\" name=\"star\"></ion-icon>\n  </ion-button>\n\n  <ion-button>\n    <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n  </ion-button><br>\n\n  <h3>Sizes</h3>\n  <ion-button size=\"large\">Large</ion-button>\n  <ion-button>Default</ion-button>\n  <ion-button size=\"small\">Small</ion-button><br>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-button-button-module.js.map