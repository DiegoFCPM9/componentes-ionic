(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-alert-alert-module"],{

/***/ "3Qz6":
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.module.ts ***!
  \*********************************************/
/*! exports provided: AlertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageModule", function() { return AlertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-routing.module */ "LGqY");
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.page */ "OfL/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let AlertPageModule = class AlertPageModule {
};
AlertPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_alert_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"]]
    })
], AlertPageModule);



/***/ }),

/***/ "4rH/":
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "LGqY":
/*!*****************************************************!*\
  !*** ./src/app/pages/alert/alert-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AlertPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageRoutingModule", function() { return AlertPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.page */ "OfL/");




const routes = [
    {
        path: '',
        component: _alert_page__WEBPACK_IMPORTED_MODULE_3__["AlertPage"]
    }
];
let AlertPageRoutingModule = class AlertPageRoutingModule {
};
AlertPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlertPageRoutingModule);



/***/ }),

/***/ "OfL/":
/*!*******************************************!*\
  !*** ./src/app/pages/alert/alert.page.ts ***!
  \*******************************************/
/*! exports provided: AlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPage", function() { return AlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.page.html */ "dtAw");
/* harmony import */ var _alert_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.page.scss */ "4rH/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let AlertPage = class AlertPage {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    clickAlert(alert) {
        switch (alert) {
            case 1:
                this.presentAlert();
                break;
            case 2:
                this.presentAlertMultipleButtons();
                break;
            case 3:
                this.presentAlertConfirm();
                break;
            case 4:
                this.presentAlertPrompt();
                break;
            case 5:
                this.presentAlertRadio();
                break;
            case 6:
                this.presentAlertCheckbox();
                break;
            default:
                break;
        }
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Alerta',
                subHeader: '¿Seguro?',
                message: 'Mensaje',
                buttons: [{
                        text: 'De acuerdo',
                        handler: () => {
                            //Función que se dispara cuando dan click.
                        }
                    }]
            });
            yield alert.present();
        });
    }
    presentAlertMultipleButtons() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Alerta',
                subHeader: '¿Seguro?',
                message: 'Mensage.',
                buttons: [{
                        text: 'De acuerdo',
                        handler: () => {
                            //Función que se dispara cuando dan click.
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'red',
                        handler: () => {
                            //Función que se dispara cuando dan click.
                        }
                    }]
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Confirma',
                message: '¡Mensage <strong>importante</strong>!',
                buttons: [{
                        text: 'Salir',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('No confirmación.');
                        }
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            console.log('Confimación.');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Formulario',
                inputs: [{
                        name: 'Input-1',
                        type: 'text',
                        placeholder: 'InputText'
                    }, {
                        name: 'Input-2',
                        type: 'text',
                        id: 'Input-2-id',
                        value: 'Valor',
                        placeholder: 'InputText'
                    },
                    //Input multilinea.
                    {
                        name: 'Párrafo',
                        id: 'paragraph',
                        type: 'textarea',
                        placeholder: 'InputTextParagraph'
                    }, {
                        name: 'Párrafo',
                        value: 'http://ionicframework.com',
                        type: 'url',
                        placeholder: 'Favorite site ever'
                    },
                    //Input date con min & max.
                    {
                        name: 'FechaConLímites',
                        type: 'date',
                        min: '2017-03-01',
                        max: '2018-01-12'
                    },
                    //Input date sin min o max.
                    {
                        name: 'FechaSinLímites',
                        type: 'date'
                    },
                    //Input number.
                    {
                        name: 'NúmeroConLímites',
                        type: 'number',
                        min: -5,
                        max: 10
                    }, {
                        name: 'NúmeroSinLímites',
                        type: 'number'
                    },
                    //Password
                    {
                        name: 'Contraseña',
                        type: 'password',
                        placeholder: 'Advanced Attributes',
                        cssClass: 'specialClass',
                        attributes: {
                            maxlength: 4,
                            inputmode: 'decimal'
                        }
                    }
                ],
                buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Cancelado');
                        }
                    }, {
                        text: 'Listo',
                        handler: () => {
                            console.log('Listo');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertRadio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Radio',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Radio 1',
                        value: 'value1',
                        checked: true
                    }, {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Radio 2',
                        value: 'value2'
                    }, {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Radio 3',
                        value: 'value3'
                    }, {
                        name: 'radio4',
                        type: 'radio',
                        label: 'Radio 4',
                        value: 'value4'
                    }, {
                        name: 'radio5',
                        type: 'radio',
                        label: 'Radio 5',
                        value: 'value5'
                    }, {
                        name: 'radio6',
                        type: 'radio',
                        label: 'Radio 6',
                        value: 'value6'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertCheckbox() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Checkbox',
                inputs: [
                    {
                        name: 'checkbox1',
                        type: 'checkbox',
                        label: 'Checkbox 1',
                        value: 'value1',
                        checked: true
                    }, {
                        name: 'checkbox2',
                        type: 'checkbox',
                        label: 'Checkbox 2',
                        value: 'value2'
                    }, {
                        name: 'checkbox3',
                        type: 'checkbox',
                        label: 'Checkbox 3',
                        value: 'value3'
                    }, {
                        name: 'checkbox4',
                        type: 'checkbox',
                        label: 'Checkbox 4',
                        value: 'value4'
                    }, {
                        name: 'checkbox5',
                        type: 'checkbox',
                        label: 'Checkbox 5',
                        value: 'value5'
                    }, {
                        name: 'checkbox6',
                        type: 'checkbox',
                        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                        value: 'value6'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AlertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
AlertPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertPage);



/***/ }),

/***/ "dtAw":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" color=\"primary\" mode=\"ios\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Alert</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header title=\"Alert\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickAlert(1)\" expand=\"block\">\n    Mostrar Alert\n  </ion-button>\n  <ion-button (click)=\"clickAlert(2)\" expand=\"block\">\n    Mostrar Alert Multiple Buttons\n  </ion-button>\n  <ion-button (click)=\"clickAlert(3)\" expand=\"block\">\n    Mostrar Alert Confirm\n  </ion-button>\n  <ion-button (click)=\"clickAlert(4)\" expand=\"block\">\n    Mostrar Alert Prompt\n  </ion-button>\n  <ion-button (click)=\"clickAlert(5)\" expand=\"block\">\n    Mostrar Alert Radio\n  </ion-button>\n  <ion-button (click)=\"clickAlert(6)\" expand=\"block\">\n    Mostrar Alert Checkbox\n  </ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-alert-alert-module.js.map