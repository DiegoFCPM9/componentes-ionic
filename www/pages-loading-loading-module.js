(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loading-loading-module"],{

/***/ "76Y9":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loading/loading.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Loading\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"mostrarLoading(1, 'Espera 3 segundos...')\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Mostrar loading\n  </ion-button>\n\n  <ion-button (click)=\"mostrarLoading(2, 'Espera 3 segundos...')\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Mostrar loading perzonalizado\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "R094":
/*!***********************************************!*\
  !*** ./src/app/pages/loading/loading.page.ts ***!
  \***********************************************/
/*! exports provided: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loading_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loading.page.html */ "76Y9");
/* harmony import */ var _loading_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.page.scss */ "RCIu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let LoadingPage = class LoadingPage {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    mostrarLoading(type, message) {
        switch (type) {
            case 1:
                this.presentLoading(message);
                break;
            case 2:
                this.presentLoadingWithOptions(message);
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.loading.dismiss();
        }, 3000);
    }
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: message,
            });
            yield this.loading.present();
        });
    }
    presentLoadingWithOptions(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                //'bubbles', 'circles', 'circular', 'crescent', 'dots', 'lines', 'lines-small'.
                spinner: null,
                message: message,
                translucent: true,
                //duration: 5000,
                backdropDismiss: true //,
                //cssClass: 'custom-class custom-loading'
            });
            yield this.loading.present();
            const option = yield this.loading.onDidDismiss();
            console.log('Loading Cancelado.');
        });
    }
};
LoadingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
LoadingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loading',
        template: _raw_loader_loading_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loading_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoadingPage);



/***/ }),

/***/ "RCIu":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "XRIH":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.module.ts ***!
  \*************************************************/
/*! exports provided: LoadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-routing.module */ "xCyh");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.page */ "R094");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let LoadingPageModule = class LoadingPageModule {
};
LoadingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _loading_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoadingPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]]
    })
], LoadingPageModule);



/***/ }),

/***/ "xCyh":
/*!*********************************************************!*\
  !*** ./src/app/pages/loading/loading-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoadingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageRoutingModule", function() { return LoadingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.page */ "R094");




const routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"]
    }
];
let LoadingPageRoutingModule = class LoadingPageRoutingModule {
};
LoadingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoadingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-loading-loading-module.js.map