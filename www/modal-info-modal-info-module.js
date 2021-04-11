(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-info-modal-info-module"],{

/***/ "6LMl":
/*!*************************************************************!*\
  !*** ./src/app/pages/modal/modal-info/modal-info.module.ts ***!
  \*************************************************************/
/*! exports provided: ModalInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPageModule", function() { return ModalInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-info-routing.module */ "UQMh");
/* harmony import */ var _modal_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-info.page */ "cPCS");







let ModalInfoPageModule = class ModalInfoPageModule {
};
ModalInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalInfoPageRoutingModule"]
        ],
        declarations: [_modal_info_page__WEBPACK_IMPORTED_MODULE_6__["ModalInfoPage"]]
    })
], ModalInfoPageModule);



/***/ }),

/***/ "UQMh":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal/modal-info/modal-info-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ModalInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPageRoutingModule", function() { return ModalInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-info.page */ "cPCS");




const routes = [
    {
        path: '',
        component: _modal_info_page__WEBPACK_IMPORTED_MODULE_3__["ModalInfoPage"]
    }
];
let ModalInfoPageRoutingModule = class ModalInfoPageRoutingModule {
};
ModalInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalInfoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modal-info-modal-info-module.js.map