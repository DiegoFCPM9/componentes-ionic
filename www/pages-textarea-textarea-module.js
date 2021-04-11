(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-textarea-textarea-module"],{

/***/ "D6fI":
/*!***************************************************!*\
  !*** ./src/app/pages/textarea/textarea.module.ts ***!
  \***************************************************/
/*! exports provided: TextareaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaPageModule", function() { return TextareaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _textarea_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textarea-routing.module */ "qTzW");
/* harmony import */ var _textarea_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textarea.page */ "JPPt");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let TextareaPageModule = class TextareaPageModule {
};
TextareaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _textarea_routing_module__WEBPACK_IMPORTED_MODULE_5__["TextareaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_textarea_page__WEBPACK_IMPORTED_MODULE_6__["TextareaPage"]]
    })
], TextareaPageModule);



/***/ }),

/***/ "JPPt":
/*!*************************************************!*\
  !*** ./src/app/pages/textarea/textarea.page.ts ***!
  \*************************************************/
/*! exports provided: TextareaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaPage", function() { return TextareaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_textarea_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./textarea.page.html */ "yZW+");
/* harmony import */ var _textarea_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea.page.scss */ "VbXq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let TextareaPage = class TextareaPage {
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
                header: 'Componente Textarea',
                subHeader: 'Traducido por Google.',
                message: 'El componente textarea se utiliza para la entrada de texto de varias líneas. Un elemento de área de texto nativo se representa dentro del componente. La experiencia del usuario y la interactividad del componente textarea se mejoran al tener control sobre el textarea nativo. A diferencia del elemento nativo de área de texto, el área de texto iónica no admite la carga de su valor desde el contenido interno. El valor del área de texto debe establecerse en el atributo de valor. El componente textarea acepta los atributos nativos textarea además de las propiedades IONIC.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
TextareaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
TextareaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-textarea',
        template: _raw_loader_textarea_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_textarea_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TextareaPage);



/***/ }),

/***/ "VbXq":
/*!***************************************************!*\
  !*** ./src/app/pages/textarea/textarea.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0YXJlYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "qTzW":
/*!***********************************************************!*\
  !*** ./src/app/pages/textarea/textarea-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TextareaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaPageRoutingModule", function() { return TextareaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _textarea_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea.page */ "JPPt");




const routes = [
    {
        path: '',
        component: _textarea_page__WEBPACK_IMPORTED_MODULE_3__["TextareaPage"]
    }
];
let TextareaPageRoutingModule = class TextareaPageRoutingModule {
};
TextareaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TextareaPageRoutingModule);



/***/ }),

/***/ "yZW+":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/textarea/textarea.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Textarea\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <h5>Textarea por defecto</h5>\n  <ion-textarea></ion-textarea>\n\n  <h5>Textarea en un item con placeholder</h5>\n  <ion-item>\n    <ion-textarea placeholder=\"Placeholder\"></ion-textarea>\n  </ion-item>\n\n  <h5>Textarea en un item con un label floating</h5>\n  <ion-item>\n    <ion-label position=\"floating\">Floating</ion-label>\n    <ion-textarea></ion-textarea>\n  </ion-item>\n\n  <h5>Textarea desabilitado y sólo lectura en un item con un label stacked</h5>\n  <ion-item>\n    <ion-label position=\"stacked\">Resumen</ion-label>\n    <ion-textarea\n      disabled\n      readonly\n      value=\"IONIC permite a los desarrolladores crear aplicaciones móviles de alta calidad y rendimiento.\">\n    </ion-textarea>\n  </ion-item>\n\n  <h5>Textarea que borra el valor al editar</h5>\n  <ion-item>\n    <ion-label>Comment</ion-label>\n    <ion-textarea value=\"Pruébame\" clearOnEdit=\"true\"></ion-textarea>\n  </ion-item>\n\n  <h5>Textarea con número personalizado de filas y columnas</h5>\n  <ion-item>\n    <ion-label>Notes</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\"></ion-textarea>\n  </ion-item>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-textarea-textarea-module.js.map