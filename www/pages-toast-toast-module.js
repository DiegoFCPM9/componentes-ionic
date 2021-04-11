(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-toast-toast-module"],{

/***/ "+GpE":
/*!*********************************************!*\
  !*** ./src/app/pages/toast/toast.module.ts ***!
  \*********************************************/
/*! exports provided: ToastPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPageModule", function() { return ToastPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _toast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-routing.module */ "QO0F");
/* harmony import */ var _toast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast.page */ "jmXZ");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ToastPageModule = class ToastPageModule {
};
ToastPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _toast_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToastPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_toast_page__WEBPACK_IMPORTED_MODULE_6__["ToastPage"]]
    })
], ToastPageModule);



/***/ }),

/***/ "MoY9":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/toast/toast.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Toast\"></app-header>\n<app-menu></app-menu>\n\n<ion-content id=\"main\" class=\"ion-padding\" fullscreen>\n  <ion-button (click)=\"presentInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n  <br><br><br><br><br>\n  <ion-button (click)=\"presentToast()\" expand=\"block\" shape=\"round\">\n    Ver toast\n  </ion-button>\n  <br>\n  <ion-button (click)=\"presentToastWithOptions()\" expand=\"block\" shape=\"round\">\n    Ver toast con opciones\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "QO0F":
/*!*****************************************************!*\
  !*** ./src/app/pages/toast/toast-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ToastPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPageRoutingModule", function() { return ToastPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toast_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.page */ "jmXZ");




const routes = [
    {
        path: '',
        component: _toast_page__WEBPACK_IMPORTED_MODULE_3__["ToastPage"]
    }
];
let ToastPageRoutingModule = class ToastPageRoutingModule {
};
ToastPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ToastPageRoutingModule);



/***/ }),

/***/ "jmXZ":
/*!*******************************************!*\
  !*** ./src/app/pages/toast/toast.page.ts ***!
  \*******************************************/
/*! exports provided: ToastPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPage", function() { return ToastPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toast_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toast.page.html */ "MoY9");
/* harmony import */ var _toast_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.page.scss */ "sj+O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let ToastPage = class ToastPage {
    constructor(toastController, alertController) {
        this.toastController = toastController;
        this.alertController = alertController;
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Tus nuevas configuraciones se han aplicado.',
                duration: 3000
            });
            toast.present();
        });
    }
    presentToastWithOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Nuevo Favorito',
                message: 'Click para confirmar',
                position: 'top',
                mode: 'ios',
                color: 'success',
                buttons: [
                    {
                        side: 'start',
                        icon: 'star',
                        text: 'Fav',
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'OK',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente toass',
                subHeader: 'Traducido por Google.',
                message: 'El toast es una notificación sutil que se usa comúnmente en aplicaciones modernas. Se puede utilizar para proporcionar información sobre una operación o para mostrar un mensaje del sistema. El brindis aparece en la parte superior del contenido de la aplicación y la aplicación puede descartarlo para reanudar la interacción del usuario con la aplicación.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
ToastPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ToastPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-toast',
        template: _raw_loader_toast_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_toast_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ToastPage);



/***/ }),

/***/ "sj+O":
/*!*********************************************!*\
  !*** ./src/app/pages/toast/toast.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-toast-toast-module.js.map