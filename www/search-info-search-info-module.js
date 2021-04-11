(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-info-search-info-module"],{

/***/ "HfTo":
/*!****************************************************************!*\
  !*** ./src/app/pages/search/search-info/search-info.module.ts ***!
  \****************************************************************/
/*! exports provided: SearchInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoPageModule", function() { return SearchInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-info-routing.module */ "YP01");
/* harmony import */ var _search_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-info.page */ "KXdI");







let SearchInfoPageModule = class SearchInfoPageModule {
};
SearchInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchInfoPageRoutingModule"]
        ],
        declarations: [_search_info_page__WEBPACK_IMPORTED_MODULE_6__["SearchInfoPage"]]
    })
], SearchInfoPageModule);



/***/ }),

/***/ "YP01":
/*!************************************************************************!*\
  !*** ./src/app/pages/search/search-info/search-info-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SearchInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoPageRoutingModule", function() { return SearchInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-info.page */ "KXdI");




const routes = [
    {
        path: '',
        component: _search_info_page__WEBPACK_IMPORTED_MODULE_3__["SearchInfoPage"]
    }
];
let SearchInfoPageRoutingModule = class SearchInfoPageRoutingModule {
};
SearchInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchInfoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=search-info-search-info-module.js.map