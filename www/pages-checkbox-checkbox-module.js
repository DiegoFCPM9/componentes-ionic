(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkbox-checkbox-module"],{

/***/ "AAWZ":
/*!***************************************************!*\
  !*** ./src/app/pages/checkbox/checkbox.module.ts ***!
  \***************************************************/
/*! exports provided: CheckboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPageModule", function() { return CheckboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-routing.module */ "TdjG");
/* harmony import */ var _checkbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox.page */ "rzwZ");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CheckboxPageModule = class CheckboxPageModule {
};
CheckboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckboxPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_checkbox_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxPage"]]
    })
], CheckboxPageModule);



/***/ }),

/***/ "TdjG":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkbox/checkbox-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPageRoutingModule", function() { return CheckboxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox.page */ "rzwZ");




const routes = [
    {
        path: '',
        component: _checkbox_page__WEBPACK_IMPORTED_MODULE_3__["CheckboxPage"]
    }
];
let CheckboxPageRoutingModule = class CheckboxPageRoutingModule {
};
CheckboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckboxPageRoutingModule);



/***/ }),

/***/ "bZQT":
/*!***************************************************!*\
  !*** ./src/app/pages/checkbox/checkbox.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "q/9g":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkbox/checkbox.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Checkbox\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-list class=\"ion-padding\">\n    <ion-item>\n      <ion-label>Default Checkbox</ion-label>\n      <ion-checkbox slot=\"end\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class=\"ion-padding\">\n    <ion-item>\n      <ion-label>Disabled Checkbox</ion-label>\n      <ion-checkbox disabled=\"true\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n    \n  <ion-list class=\"ion-padding\">\n    <ion-item>\n      <ion-label>Checked Checkbox</ion-label>\n      <ion-checkbox checked=\"true\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n    \n  <ion-list class=\"ion-padding\">\n    <h3>Checkbox Colors</h3>\n    <ion-item>\n      <ion-label>Primary</ion-label>\n      <ion-checkbox color=\"primary\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Secondary</ion-label>\n      <ion-checkbox color=\"secondary\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Danger</ion-label>\n      <ion-checkbox color=\"danger\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Light</ion-label>\n      <ion-checkbox color=\"light\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dark</ion-label>\n      <ion-checkbox color=\"dark\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n    \n  <ion-list class=\"ion-padding\">\n    <h3>Checkboxes in a List</h3>\n    <ion-item *ngFor=\"let c of colors\" (click)=clickCheckbox(c)>\n      <ion-label>{{c.name}}</ion-label>\n      <ion-checkbox [(ngModel)]=\"c.selected\" [color]=\"c.color\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n    \n  <ion-button (click)=\"clickData()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Ver Datos\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "rzwZ":
/*!*************************************************!*\
  !*** ./src/app/pages/checkbox/checkbox.page.ts ***!
  \*************************************************/
/*! exports provided: CheckboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPage", function() { return CheckboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkbox.page.html */ "q/9g");
/* harmony import */ var _checkbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.page.scss */ "bZQT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CheckboxPage = class CheckboxPage {
    constructor() {
        this.colors = [
            {
                name: 'Primary',
                color: 'primary',
                selected: false
            }, {
                name: 'Secondary',
                color: 'secondary',
                selected: true
            }, {
                name: 'Tertiary',
                color: 'tertiary',
                selected: false
            }, {
                name: 'Danger',
                color: 'danger',
                selected: true
            }, {
                name: 'Succes',
                color: 'succes',
                selected: false
            }
        ];
    }
    clickCheckbox(check) {
        console.log(check);
    }
    clickData() {
        console.log(this.colors);
    }
};
CheckboxPage.ctorParameters = () => [];
CheckboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkbox',
        template: _raw_loader_checkbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckboxPage);



/***/ })

}]);
//# sourceMappingURL=pages-checkbox-checkbox-module.js.map