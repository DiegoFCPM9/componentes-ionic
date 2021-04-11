(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reorder-reorder-module"],{

/***/ "+JLq":
/*!*************************************************!*\
  !*** ./src/app/pages/reorder/reorder.module.ts ***!
  \*************************************************/
/*! exports provided: ReorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderPageModule", function() { return ReorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reorder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reorder-routing.module */ "nvHw");
/* harmony import */ var _reorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reorder.page */ "x/dh");







let ReorderPageModule = class ReorderPageModule {
};
ReorderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reorder_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReorderPageRoutingModule"]
        ],
        declarations: [_reorder_page__WEBPACK_IMPORTED_MODULE_6__["ReorderPage"]]
    })
], ReorderPageModule);



/***/ }),

/***/ "6wBB":
/*!*************************************************!*\
  !*** ./src/app/pages/reorder/reorder.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW9yZGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "X+Kp":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reorder/reorder.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" mode=\"ios\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Reorder</ion-title>\n    <ion-chip outline color=\"secondary\" (click)=\"reorder()\" mode=\"ios\" slot=\"end\">\n      <ion-icon name=\"reorder-three-outline\"></ion-icon>\n      <ion-label style=\"text-size-adjust: 5pt;\">Reordenar</ion-label>\n    </ion-chip>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" [disabled]=\"reorderState\">\n    <ion-item *ngFor=\"let p of personajes\">\n      <ion-label>{{p}}</ion-label>\n        <ion-reorder slot=\"end\">\n          <ion-icon color=\"secondary\" size=\"large\" name=\"extension-puzzle-outline\"></ion-icon>\n        </ion-reorder>\n    </ion-item>\n  </ion-reorder-group>\n</ion-content>\n");

/***/ }),

/***/ "nvHw":
/*!*********************************************************!*\
  !*** ./src/app/pages/reorder/reorder-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReorderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderPageRoutingModule", function() { return ReorderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reorder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reorder.page */ "x/dh");




const routes = [
    {
        path: '',
        component: _reorder_page__WEBPACK_IMPORTED_MODULE_3__["ReorderPage"]
    }
];
let ReorderPageRoutingModule = class ReorderPageRoutingModule {
};
ReorderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReorderPageRoutingModule);



/***/ }),

/***/ "x/dh":
/*!***********************************************!*\
  !*** ./src/app/pages/reorder/reorder.page.ts ***!
  \***********************************************/
/*! exports provided: ReorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderPage", function() { return ReorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reorder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reorder.page.html */ "X+Kp");
/* harmony import */ var _reorder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reorder.page.scss */ "6wBB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReorderPage = class ReorderPage {
    constructor() {
        this.reorderState = true;
        this.personajes = [
            'Aquaman',
            'Superman',
            'Batman',
            'Mujer Maravilla',
            'Flash'
        ];
    }
    reorder() {
        this.reorderState = !this.reorderState;
    }
    doReorder(event) {
        console.log(event);
        const moverItem = this.personajes.splice(event.detail.from, 1)[0];
        this.personajes.splice(event.detail.to, 0, moverItem);
        console.log(this.personajes);
        event.detail.complete();
    }
};
ReorderPage.ctorParameters = () => [];
ReorderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reorder',
        template: _raw_loader_reorder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reorder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReorderPage);



/***/ })

}]);
//# sourceMappingURL=pages-reorder-reorder-module.js.map