(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-backdrop-backdrop-module"],{

/***/ "7rav":
/*!***************************************************!*\
  !*** ./src/app/pages/backdrop/backdrop.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrZHJvcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "P0Hw":
/*!*************************************************!*\
  !*** ./src/app/pages/backdrop/backdrop.page.ts ***!
  \*************************************************/
/*! exports provided: BackdropPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropPage", function() { return BackdropPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_backdrop_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./backdrop.page.html */ "ZXfD");
/* harmony import */ var _backdrop_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backdrop.page.scss */ "7rav");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let BackdropPage = class BackdropPage {
    constructor(alertController) {
        this.alertController = alertController;
    }
    clickInfo() {
        this.presentInfo();
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Backdrop',
                subHeader: 'Traducido por Google.',
                message: 'Backdrops son componentes de pantalla completa que se superponen a otros componentes. Son útiles detrás de los componentes que hacen la transición sobre otro contenido y se pueden usar para descartar ese componente.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
BackdropPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
BackdropPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-backdrop',
        template: _raw_loader_backdrop_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_backdrop_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BackdropPage);



/***/ }),

/***/ "ZXfD":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backdrop/backdrop.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Backdrop\"></app-header>\n<app-menu></app-menu>\n\n<ion-content id=\"main\">\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <!-- Default backdrop -->\n  <ion-backdrop></ion-backdrop>\n\n  <!-- Backdrop that is not tappable -->\n  <ion-backdrop tappable=\"false\"></ion-backdrop>\n\n  <!-- Backdrop that is not visible -->\n  <ion-backdrop visible=\"false\"></ion-backdrop>\n\n  <!-- Backdrop with propagation -->\n  <ion-backdrop stopPropagation=\"false\"></ion-backdrop>\n\n  <!-- Backdrop that sets dynamic properties -->\n  <ion-backdrop\n    [tappable]=\"enableBackdropDismiss\"\n    [visible]=\"showBackdrop\"\n    [stopPropagation]=\"shouldPropagate\">\n  </ion-backdrop>\n</ion-content>");

/***/ }),

/***/ "eEqm":
/*!***************************************************!*\
  !*** ./src/app/pages/backdrop/backdrop.module.ts ***!
  \***************************************************/
/*! exports provided: BackdropPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropPageModule", function() { return BackdropPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _backdrop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backdrop-routing.module */ "oTc6");
/* harmony import */ var _backdrop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backdrop.page */ "P0Hw");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let BackdropPageModule = class BackdropPageModule {
};
BackdropPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _backdrop_routing_module__WEBPACK_IMPORTED_MODULE_5__["BackdropPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_backdrop_page__WEBPACK_IMPORTED_MODULE_6__["BackdropPage"]]
    })
], BackdropPageModule);



/***/ }),

/***/ "oTc6":
/*!***********************************************************!*\
  !*** ./src/app/pages/backdrop/backdrop-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BackdropPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropPageRoutingModule", function() { return BackdropPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _backdrop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backdrop.page */ "P0Hw");




const routes = [
    {
        path: '',
        component: _backdrop_page__WEBPACK_IMPORTED_MODULE_3__["BackdropPage"]
    }
];
let BackdropPageRoutingModule = class BackdropPageRoutingModule {
};
BackdropPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BackdropPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-backdrop-backdrop-module.js.map