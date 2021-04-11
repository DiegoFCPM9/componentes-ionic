(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-modal-module"],{

/***/ "IJhC":
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "JAFY":
/*!*******************************************!*\
  !*** ./src/app/pages/modal/modal.page.ts ***!
  \*******************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.page.html */ "lg3r");
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.page.scss */ "IJhC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-info/modal-info.page */ "cPCS");






let ModalPage = class ModalPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    verModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_5__["ModalInfoPage"],
                componentProps: {
                    nombre: 'Diego',
                    pais: 'Colombia'
                }
            });
            yield modal.present();
            //onDidDismiss
            const { data } = yield modal.onWillDismiss();
            console.log({ data });
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPage);



/***/ }),

/***/ "cPCS":
/*!***********************************************************!*\
  !*** ./src/app/pages/modal/modal-info/modal-info.page.ts ***!
  \***********************************************************/
/*! exports provided: ModalInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPage", function() { return ModalInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-info.page.html */ "zDAc");
/* harmony import */ var _modal_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-info.page.scss */ "i/Ul");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ModalInfoPage = class ModalInfoPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    salirSinArgumentos() {
        this.modalController.dismiss();
    }
    salirConArgumentos() {
        this.modalController.dismiss({
            nombre: 'Felipe',
            pais: 'URSS'
        });
    }
};
ModalInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalInfoPage.propDecorators = {
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pais: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-info',
        template: _raw_loader_modal_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalInfoPage);



/***/ }),

/***/ "i/Ul":
/*!*************************************************************!*\
  !*** ./src/app/pages/modal/modal-info/modal-info.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1pbmZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "lg3r":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Modal\"></app-header>\n<app-menu></app-menu>\n\n<ion-content id=\"main\" class=\"ion-padding\">\n  <ion-button (click)=\"verModal()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Ver modal\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "uLFO":
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.module.ts ***!
  \*********************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-routing.module */ "y3bK");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.page */ "JAFY");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ModalPageModule = class ModalPageModule {
};
ModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
    })
], ModalPageModule);



/***/ }),

/***/ "y3bK":
/*!*****************************************************!*\
  !*** ./src/app/pages/modal/modal-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageRoutingModule", function() { return ModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.page */ "JAFY");




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
    },
    {
        path: 'modal-info',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-info-modal-info-module */ "modal-info-modal-info-module").then(__webpack_require__.bind(null, /*! ./modal-info/modal-info.module */ "6LMl")).then(m => m.ModalInfoPageModule)
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ "zDAc":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal-info/modal-info.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Modal Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-button (click)=\"salirSinArgumentos()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Salir sin argumentos\n  </ion-button>\n  <ion-label>{{nombre}} de {{pais}}</ion-label>\n  <ion-button (click)=\"salirConArgumentos()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Salir con argumentos\n  </ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-modal-modal-module.js.map