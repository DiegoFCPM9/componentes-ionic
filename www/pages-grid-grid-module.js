(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grid-grid-module"],{

/***/ "2U0e":
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.module.ts ***!
  \*******************************************/
/*! exports provided: GridPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPageModule", function() { return GridPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-routing.module */ "Wo/F");
/* harmony import */ var _grid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid.page */ "hgSK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let GridPageModule = class GridPageModule {
};
GridPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grid_routing_module__WEBPACK_IMPORTED_MODULE_5__["GridPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_grid_page__WEBPACK_IMPORTED_MODULE_6__["GridPage"]]
    })
], GridPageModule);



/***/ }),

/***/ "8PV6":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grid/grid.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Grid\"></app-header>\n<app-menu></app-menu>\n\n<ion-content id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"4\" size-sm=\"12\" *ngFor=\"let item of [0,0,0,0,0,0,0,0,0,0,0,0]\">\n        <ion-card>\n          <ion-img src=\"/assets/Avatar.jpg\"></ion-img>\n        </ion-card>\n\n        <ion-card-header>\n          <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n          <ion-card-title>Awesome Title</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores non placeat error dignissimos dolorem tenetur quisquam illo quidem? Non, id necessitatibus quia veritatis rerum illo suscipit soluta nostrum? Necessitatibus.\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"/assets/Avatar.jpg\"></ion-img>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-img src=\"/assets/Avatar.jpg\"></ion-img>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">6</ion-col>\n      <ion-col size=\"6\">6</ion-col>\n\n      <ion-col size=\"4\">4</ion-col>\n      <ion-col size=\"4\">4</ion-col>\n      <ion-col size=\"4\">4</ion-col>\n\n      <ion-col size=\"3\">3</ion-col>\n      <ion-col size=\"3\">3</ion-col>\n      <ion-col size=\"3\">3</ion-col>\n      <ion-col size=\"3\">3</ion-col>\n\n      <ion-col size=\"2\">2</ion-col>\n      <ion-col size=\"2\">2</ion-col>\n      <ion-col size=\"2\">2</ion-col>\n      <ion-col size=\"2\">2</ion-col>\n      <ion-col size=\"2\">2</ion-col>\n      <ion-col size=\"2\">2</ion-col>\n\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n      <ion-col size=\"1\">1</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "Wo/F":
/*!***************************************************!*\
  !*** ./src/app/pages/grid/grid-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GridPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPageRoutingModule", function() { return GridPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid.page */ "hgSK");




const routes = [
    {
        path: '',
        component: _grid_page__WEBPACK_IMPORTED_MODULE_3__["GridPage"]
    }
];
let GridPageRoutingModule = class GridPageRoutingModule {
};
GridPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GridPageRoutingModule);



/***/ }),

/***/ "e8u4":
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "hgSK":
/*!*****************************************!*\
  !*** ./src/app/pages/grid/grid.page.ts ***!
  \*****************************************/
/*! exports provided: GridPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPage", function() { return GridPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grid_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grid.page.html */ "8PV6");
/* harmony import */ var _grid_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.page.scss */ "e8u4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let GridPage = class GridPage {
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
                header: 'Componente Chip',
                subHeader: 'Traducido por Google.',
                message: 'La cuadrícula es un poderoso sistema de caja flexible para dispositivos móviles para crear diseños personalizados.<br>Se compone de tres unidades: una cuadrícula, fila (s) y columna (s). Las columnas se expandirán para llenar la fila y cambiarán de tamaño para adaptarse a columnas adicionales. Se basa en un diseño de 12 columnas con diferentes puntos de interrupción según el tamaño de la pantalla. El número de columnas se puede personalizar mediante CSS.<br>Consulte la documentación de Responsive Grid para obtener más información.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
GridPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
GridPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-grid',
        template: _raw_loader_grid_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grid_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GridPage);



/***/ })

}]);
//# sourceMappingURL=pages-grid-grid-module.js.map