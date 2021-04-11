(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-badge-badge-module"],{

/***/ "63lG":
/*!*****************************************************!*\
  !*** ./src/app/pages/badge/badge-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BadgePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgePageRoutingModule", function() { return BadgePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _badge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge.page */ "YoBH");




const routes = [
    {
        path: '',
        component: _badge_page__WEBPACK_IMPORTED_MODULE_3__["BadgePage"]
    }
];
let BadgePageRoutingModule = class BadgePageRoutingModule {
};
BadgePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BadgePageRoutingModule);



/***/ }),

/***/ "S4Au":
/*!*********************************************!*\
  !*** ./src/app/pages/badge/badge.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWRnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "YoBH":
/*!*******************************************!*\
  !*** ./src/app/pages/badge/badge.page.ts ***!
  \*******************************************/
/*! exports provided: BadgePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgePage", function() { return BadgePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_badge_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./badge.page.html */ "bUIx");
/* harmony import */ var _badge_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge.page.scss */ "S4Au");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let BadgePage = class BadgePage {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    clickInfo() {
        this.presentInfo();
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Badge',
                subHeader: 'Traducido por Google.',
                message: 'Los badges son elementos de bloque en línea que suelen aparecer cerca de otro elemento. Normalmente contienen un número u otros caracteres. Se pueden usar como una notificación de que hay elementos adicionales asociados con un elemento e indicar cuántos elementos hay.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
BadgePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
BadgePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-badge',
        template: _raw_loader_badge_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_badge_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BadgePage);



/***/ }),

/***/ "bUIx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/badge/badge.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Badge\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n  \n  <ion-list>\n    <!-- Colores -->\n    <ion-item>\n      <p>Primary</p><ion-badge slot=\"end\" color=\"primary\">badge</ion-badge>\n    </ion-item>\n    <ion-item>\n      <p>Secondary</p><ion-badge slot=\"end\" color=\"secondary\">badge</ion-badge>\n    </ion-item>\n    <ion-item>\n      <p>Tertiary</p><ion-badge slot=\"end\" color=\"tertiary\">badge</ion-badge>\n    </ion-item>\n    <ion-item>\n      <p>Success</p><ion-badge slot=\"end\" color=\"success\">badge</ion-badge>\n    </ion-item>\n    <ion-item>\n      <p>Warning</p><ion-badge slot=\"end\" color=\"warning\">badge</ion-badge>\n    </ion-item>\n    <ion-item>\n      <p>Danger</p><ion-badge slot=\"end\" color=\"danger\">badge</ion-badge>\n    </ion-item>\n    <ion-item>\n      <p>Light</p><ion-badge slot=\"end\" color=\"light\">badge</ion-badge>\n    </ion-item>\n    <ion-item>\n      <p>Meduim</p><ion-badge slot=\"end\" color=\"medium\">badge</ion-badge>\n    </ion-item>\n    <ion-item>\n      <p>Dark</p><ion-badge slot=\"end\" color=\"dark\">badge</ion-badge>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list>\n    <!-- Item con badge en strat and end -->\n    <ion-item>\n      <ion-badge slot=\"start\">badgeStart</ion-badge>\n      <ion-label>Item</ion-label>\n      <ion-badge slot=\"end\">badgeEnd</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "buL5":
/*!*********************************************!*\
  !*** ./src/app/pages/badge/badge.module.ts ***!
  \*********************************************/
/*! exports provided: BadgePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgePageModule", function() { return BadgePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _badge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge-routing.module */ "63lG");
/* harmony import */ var _badge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge.page */ "YoBH");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let BadgePageModule = class BadgePageModule {
};
BadgePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _badge_routing_module__WEBPACK_IMPORTED_MODULE_5__["BadgePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_badge_page__WEBPACK_IMPORTED_MODULE_6__["BadgePage"]]
    })
], BadgePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-badge-badge-module.js.map