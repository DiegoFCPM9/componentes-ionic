(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-select-select-module"],{

/***/ "/86c":
/*!*********************************************!*\
  !*** ./src/app/pages/select/select.page.ts ***!
  \*********************************************/
/*! exports provided: SelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPage", function() { return SelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select.page.html */ "A+st");
/* harmony import */ var _select_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.page.scss */ "VAjv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SelectPage = class SelectPage {
    constructor() {
        this.users = [
            {
                id: 1,
                first: 'Alice',
                last: 'Smith',
            }, {
                id: 2,
                first: 'Bob',
                last: 'Davis',
            }, {
                id: 3,
                first: 'Charlie',
                last: 'Rosenburg',
            }
        ];
    }
};
SelectPage.ctorParameters = () => [];
SelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select',
        template: _raw_loader_select_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectPage);



/***/ }),

/***/ "4JOY":
/*!***********************************************!*\
  !*** ./src/app/pages/select/select.module.ts ***!
  \***********************************************/
/*! exports provided: SelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageModule", function() { return SelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-routing.module */ "qpMd");
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.page */ "/86c");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let SelectPageModule = class SelectPageModule {
};
SelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_select_page__WEBPACK_IMPORTED_MODULE_6__["SelectPage"]]
    })
], SelectPageModule);



/***/ }),

/***/ "A+st":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select/select.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Select\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\">\n  <h3>Selección simple</h3>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Single Selection\n      </ion-label>\n    </ion-list-header>\n  \n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select placeholder=\"Select One\" mode=ios>\n        <ion-select-option value=\"f\">Female</ion-select-option>\n        <ion-select-option value=\"m\">Male</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Hair Color</ion-label>\n      <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"brown\">Brown</ion-select-option>\n        <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n        <ion-select-option value=\"black\">Black</ion-select-option>\n        <ion-select-option value=\"red\">Red</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n  </ion-list>\n  <br><br><br>\n  <h3>Selección multiple</h3>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Multiple Selection\n      </ion-label>\n    </ion-list-header>\n  \n    <ion-item>\n      <ion-label>Toppings</ion-label>\n      <ion-select multiple=\"true\" cancelText=\"Nah\" okText=\"Okay!\">\n        <ion-select-option value=\"bacon\">Bacon</ion-select-option>\n        <ion-select-option value=\"olives\">Black Olives</ion-select-option>\n        <ion-select-option value=\"xcheese\">Extra Cheese</ion-select-option>\n        <ion-select-option value=\"peppers\">Green Peppers</ion-select-option>\n        <ion-select-option value=\"mushrooms\">Mushrooms</ion-select-option>\n        <ion-select-option value=\"onions\">Onions</ion-select-option>\n        <ion-select-option value=\"pepperoni\">Pepperoni</ion-select-option>\n        <ion-select-option value=\"pineapple\">Pineapple</ion-select-option>\n        <ion-select-option value=\"sausage\">Sausage</ion-select-option>\n        <ion-select-option value=\"Spinach\">Spinach</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Pets</ion-label>\n      <ion-select multiple=\"true\" [value]=\"['bird', 'dog']\">\n        <ion-select-option value=\"bird\">Bird</ion-select-option>\n        <ion-select-option value=\"cat\">Cat</ion-select-option>\n        <ion-select-option value=\"dog\">Dog</ion-select-option>\n        <ion-select-option value=\"honeybadger\">Honey Badger</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <br><br><br>\n  <h3>Ojetos con valores</h3>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Objects as Values (compareWith)\n      </ion-label>\n    </ion-list-header>\n  \n    <ion-item>\n      <ion-label>Users</ion-label>\n      <ion-select [compareWith]=\"compareWith\">\n        <ion-select-option *ngFor=\"let user of users\" [value]=\"user\">{{user.first + ' ' + user.last}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "VAjv":
/*!***********************************************!*\
  !*** ./src/app/pages/select/select.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "qpMd":
/*!*******************************************************!*\
  !*** ./src/app/pages/select/select-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SelectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageRoutingModule", function() { return SelectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.page */ "/86c");




const routes = [
    {
        path: '',
        component: _select_page__WEBPACK_IMPORTED_MODULE_3__["SelectPage"]
    }
];
let SelectPageRoutingModule = class SelectPageRoutingModule {
};
SelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-select-select-module.js.map