(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popover-popover-module"],{

/***/ "+3bJ":
/*!************************************************************************!*\
  !*** ./src/app/pages/popover/popover-info/popover-info.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "6ZXX":
/*!***********************************************!*\
  !*** ./src/app/pages/popover/popover.page.ts ***!
  \***********************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_popover_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./popover.page.html */ "WEWd");
/* harmony import */ var _popover_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.page.scss */ "BRn6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-info/popover-info.component */ "RSLo");






let PopoverPage = class PopoverPage {
    constructor(popoverController, alertController) {
        this.popoverController = popoverController;
        this.alertController = alertController;
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_5__["PopoverInfoComponent"],
                event: ev,
                translucent: true,
                backdropDismiss: false
            });
            yield popover.present();
            //onDidDismiss
            const { data } = yield popover.onWillDismiss();
            console.log({ data });
        });
    }
    clickInfo() {
        this.presentInfo();
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente popover',
                subHeader: 'Traducido por Google.',
                message: 'Un popover es un diálogo que aparece en la parte superior de la página actual. Se puede usar para cualquier cosa, pero generalmente se usa para acciones de desbordamiento que no caben en la barra de navegación.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
PopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popover',
        template: _raw_loader_popover_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PopoverPage);



/***/ }),

/***/ "BRn6":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "HeTV":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover-info/popover-info.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item *ngFor='let i of items; let ii=index' (click)=\"onClick(ii+1)\">\n    <ion-label>Item: {{ii+1}}</ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "HtpK":
/*!**************************************************************************!*\
  !*** ./src/app/pages/popover/popover-module/popover-component.module.ts ***!
  \**************************************************************************/
/*! exports provided: PopoverComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponentModule", function() { return PopoverComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover-info/popover-info.component */ "RSLo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let PopoverComponentModule = class PopoverComponentModule {
};
PopoverComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_3__["PopoverInfoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_3__["PopoverInfoComponent"]]
    })
], PopoverComponentModule);



/***/ }),

/***/ "RSLo":
/*!**********************************************************************!*\
  !*** ./src/app/pages/popover/popover-info/popover-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: PopoverInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverInfoComponent", function() { return PopoverInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_popover_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./popover-info.component.html */ "HeTV");
/* harmony import */ var _popover_info_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-info.component.scss */ "+3bJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let PopoverInfoComponent = class PopoverInfoComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.items = Array(9);
    }
    ngOnInit() { }
    onClick(valor) {
        console.log(valor);
        this.popoverController.dismiss({
            item: valor
        });
    }
};
PopoverInfoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
PopoverInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popover-info',
        template: _raw_loader_popover_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_info_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PopoverInfoComponent);



/***/ }),

/***/ "WEWd":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" color=\"primary\" mode=\"ios\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Popover</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"person-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscren>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <ion-button (click)=\"presentPopover($event)\" expand=\"block\" shape=\"round\">\n    Ver popover\n  </ion-button>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"person\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Footer del popover</ion-title>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "kXnM":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.module.ts ***!
  \*************************************************/
/*! exports provided: PopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-routing.module */ "kqRO");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.page */ "6ZXX");
/* harmony import */ var _popover_module_popover_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover-module/popover-component.module */ "HtpK");








let PopoverPageModule = class PopoverPageModule {
};
PopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopoverPageRoutingModule"],
            _popover_module_popover_component_module__WEBPACK_IMPORTED_MODULE_7__["PopoverComponentModule"]
        ],
        declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
    })
], PopoverPageModule);



/***/ }),

/***/ "kqRO":
/*!*********************************************************!*\
  !*** ./src/app/pages/popover/popover-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PopoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageRoutingModule", function() { return PopoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.page */ "6ZXX");




const routes = [
    {
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"]
    }
];
let PopoverPageRoutingModule = class PopoverPageRoutingModule {
};
PopoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PopoverPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-popover-popover-module.js.map