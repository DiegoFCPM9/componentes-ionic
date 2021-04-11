(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-range-range-module"],{

/***/ "lY/W":
/*!*********************************************!*\
  !*** ./src/app/pages/range/range.module.ts ***!
  \*********************************************/
/*! exports provided: RangePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePageModule", function() { return RangePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _range_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range-routing.module */ "sRLx");
/* harmony import */ var _range_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./range.page */ "v3wJ");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let RangePageModule = class RangePageModule {
};
RangePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _range_routing_module__WEBPACK_IMPORTED_MODULE_5__["RangePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_range_page__WEBPACK_IMPORTED_MODULE_6__["RangePage"]]
    })
], RangePageModule);



/***/ }),

/***/ "sRLx":
/*!*****************************************************!*\
  !*** ./src/app/pages/range/range-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RangePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePageRoutingModule", function() { return RangePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _range_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range.page */ "v3wJ");




const routes = [
    {
        path: '',
        component: _range_page__WEBPACK_IMPORTED_MODULE_3__["RangePage"]
    }
];
let RangePageRoutingModule = class RangePageRoutingModule {
};
RangePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RangePageRoutingModule);



/***/ }),

/***/ "uel0":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/range/range.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Range\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-list>\n    <h3>Range por defecto</h3>\n    <ion-item>\n      <ion-range color=\"danger\" pin=\"true\"></ion-range>\n    </ion-item>\n  \n    <h3>Range con intervalo</h3>\n    <ion-item>\n      <ion-range min=\"-100\" max=\"100\" color=\"secondary\">\n        <ion-label slot=\"start\">-100</ion-label>\n        <ion-label slot=\"end\">100</ion-label>\n      </ion-range>\n    </ion-item>\n  \n    <h3>Range \"controlador de brillo\"</h3>\n    <ion-item>\n      <ion-range min=\"20\" max=\"80\" step=\"2\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"sunny\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"sunny\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  \n    <h3>Range con intervalos de posición</h3>\n    <ion-item>\n      <ion-range min=\"1000\" max=\"2000\" step=\"100\" snaps=\"true\" color=\"secondary\"></ion-range>\n    </ion-item>\n  \n    <h3>Range con intervalos de posición sin vista</h3>\n    <ion-item>\n      <ion-range min=\"1000\" max=\"2000\" step=\"100\" snaps=\"true\" ticks=\"false\" color=\"secondary\"></ion-range>\n    </ion-item>\n  \n    <h3>Range doble</h3>\n    <ion-item>\n      <ion-range dualKnobs=\"true\" min=\"21\" max=\"72\" step=\"3\" snaps=\"true\"></ion-range>\n    </ion-item>\n\n    <h1>Ejemplo de IONIC</h1>\n    <ion-list>\n      <ion-list-header>\n        Adjust Display\n      </ion-list-header>\n\n      <ion-item>\n        <ion-range value=\"20\">\n          <ion-icon slot=\"start\" size=\"small\" name=\"sunny\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"sunny\"></ion-icon>\n        </ion-range>\n      </ion-item>\n\n      <ion-item>\n        <ion-range min=\"-200\" max=\"200\" pin color=\"secondary\">\n          <ion-icon slot=\"start\" size=\"small\" name=\"contrast\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"contrast\"></ion-icon>\n        </ion-range>\n      </ion-item>\n\n      <ion-item>\n        <ion-range id=\"dual-range\" dual-knobs pin color=\"dark\">\n          <ion-icon slot=\"start\" size=\"small\" name=\"brush\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"brush\"></ion-icon>\n        </ion-range>\n      </ion-item>\n\n      <ion-item>\n        <ion-range min=\"1000\" max=\"2000\" step=\"100\" value=\"1400\" snaps color=\"danger\">\n          <ion-icon slot=\"start\" size=\"small\" color=\"danger\" name=\"thermometer\"></ion-icon>\n          <ion-icon slot=\"end\" color=\"danger\" name=\"thermometer\"></ion-icon>\n        </ion-range>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "v3wJ":
/*!*******************************************!*\
  !*** ./src/app/pages/range/range.page.ts ***!
  \*******************************************/
/*! exports provided: RangePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePage", function() { return RangePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_range_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./range.page.html */ "uel0");
/* harmony import */ var _range_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.page.scss */ "xO8z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RangePage = class RangePage {
    constructor() { }
    ngOnInit() {
    }
};
RangePage.ctorParameters = () => [];
RangePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-range',
        template: _raw_loader_range_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_range_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RangePage);



/***/ }),

/***/ "xO8z":
/*!*********************************************!*\
  !*** ./src/app/pages/range/range.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYW5nZS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-range-range-module.js.map