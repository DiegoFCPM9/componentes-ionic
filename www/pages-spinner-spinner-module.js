(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-spinner-spinner-module"],{

/***/ "JNa1":
/*!*********************************************************!*\
  !*** ./src/app/pages/spinner/spinner-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerPageRoutingModule", function() { return SpinnerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _spinner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner.page */ "wzKk");




const routes = [
    {
        path: '',
        component: _spinner_page__WEBPACK_IMPORTED_MODULE_3__["SpinnerPage"]
    }
];
let SpinnerPageRoutingModule = class SpinnerPageRoutingModule {
};
SpinnerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SpinnerPageRoutingModule);



/***/ }),

/***/ "nCcg":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/spinner/spinner.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Spinner\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n  \n  <ion-list>\n    <ion-item>\n      <ion-label>Default</ion-label>\n      <ion-spinner></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Lines</ion-label>\n      <ion-spinner name=\"lines\"></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Lines Small</ion-label>\n      <ion-spinner name=\"lines-small\"></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Dots</ion-label>\n      <ion-spinner name=\"dots\"></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Bubbles</ion-label>\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Circles</ion-label>\n      <ion-spinner name=\"circles\"></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Crescent</ion-label>\n      <ion-spinner name=\"crescent\"></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Paused</ion-label>\n      <ion-spinner paused></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Primary</ion-label>\n      <ion-spinner color=\"primary\"></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Secondary</ion-label>\n      <ion-spinner color=\"secondary\"></ion-spinner>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tertiary</ion-label>\n      <ion-spinner color=\"tertiary\"></ion-spinner>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "uLw6":
/*!*************************************************!*\
  !*** ./src/app/pages/spinner/spinner.module.ts ***!
  \*************************************************/
/*! exports provided: SpinnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerPageModule", function() { return SpinnerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _spinner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinner-routing.module */ "JNa1");
/* harmony import */ var _spinner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner.page */ "wzKk");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let SpinnerPageModule = class SpinnerPageModule {
};
SpinnerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _spinner_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpinnerPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_spinner_page__WEBPACK_IMPORTED_MODULE_6__["SpinnerPage"]]
    })
], SpinnerPageModule);



/***/ }),

/***/ "wzKk":
/*!***********************************************!*\
  !*** ./src/app/pages/spinner/spinner.page.ts ***!
  \***********************************************/
/*! exports provided: SpinnerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerPage", function() { return SpinnerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spinner_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spinner.page.html */ "nCcg");
/* harmony import */ var _spinner_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.page.scss */ "zY+F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SpinnerPage = class SpinnerPage {
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
                header: 'Componente spinner.',
                subHeader: 'Traducido por Google.',
                message: 'El componente spinner proporciona una variedad de spinners SVG animados. Los spinners son indicadores visuales de que la aplicación está cargando contenido o realizando otro proceso que el usuario debe esperar. El spinner predeterminado para usar se basa en la plataforma. El spinner predeterminado para ios es "lines", y la predeterminado para Android es "crescent". Si la plataforma no es ios o android, el spinner se establecerá de forma predeterminada en crecent. Si se establece la propiedad de nombre, entonces se utilizará ese spinner en lugar del spinner específico de la plataforma.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
SpinnerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SpinnerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-spinner',
        template: _raw_loader_spinner_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SpinnerPage);



/***/ }),

/***/ "zY+F":
/*!*************************************************!*\
  !*** ./src/app/pages/spinner/spinner.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-spinner-spinner-module.js.map