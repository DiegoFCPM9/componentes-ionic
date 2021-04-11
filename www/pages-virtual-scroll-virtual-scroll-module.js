(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-virtual-scroll-virtual-scroll-module"],{

/***/ "69d9":
/*!***************************************************************!*\
  !*** ./src/app/pages/virtual-scroll/virtual-scroll.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXJ0dWFsLXNjcm9sbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "8PP1":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/virtual-scroll/virtual-scroll.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Virtual-Scroll\"></app-header>\n<app-menu></app-menu>\n\n<ion-content id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <ion-content>\n    <ion-virtual-scroll [items]=\"items\" approxItemHeight=\"320px\">\n      <ion-card *virtualItem=\"let item; let itemBounds = bounds;\">\n        <div>\n          <ion-img [src]=\"item.imgSrc\" [height]=\"item.imgHeight\" [alt]=\"item.name\"></ion-img>\n        </div>\n      <ion-card-header>\n        <ion-card-title>{{item.name}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>{{item.content}}</ion-card-content>\n      </ion-card>\n    </ion-virtual-scroll>\n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ "9tUG":
/*!*************************************************************!*\
  !*** ./src/app/pages/virtual-scroll/virtual-scroll.page.ts ***!
  \*************************************************************/
/*! exports provided: VirtualScrollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollPage", function() { return VirtualScrollPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_virtual_scroll_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./virtual-scroll.page.html */ "8PP1");
/* harmony import */ var _virtual_scroll_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-scroll.page.scss */ "69d9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let VirtualScrollPage = class VirtualScrollPage {
    constructor(alertController) {
        this.alertController = alertController;
        this.items = [];
        for (let i = 0; i < 1000; i++) {
            this.items.push({
                name: i + ' - ' + images[rotateImg],
                imgSrc: getImgSrc(),
                avatarSrc: getImgSrc(),
                imgHeight: Math.floor(Math.random() * 50 + 150),
                content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
            });
            rotateImg++;
            if (rotateImg === images.length) {
                rotateImg = 0;
            }
        }
    }
    clickInfo() {
        this.presentInfo();
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Virtual-Scroll',
                subHeader: 'Traducido por Google.',
                message: 'Virtual-Scroll muestra una lista virtual "infinita". Se pasa una matriz de registros al desplazamiento virtual que contiene los datos para los que se crearán plantillas. La plantilla creada para cada registro, denominada celda, puede constar de elementos, encabezados y pies de página. Por motivos de rendimiento, no todos los registros de la lista se procesan a la vez; en su lugar, un pequeño subconjunto de registros (suficiente para llenar la ventana gráfica) se renderiza y reutiliza a medida que el usuario se desplaza.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
VirtualScrollPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
VirtualScrollPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-virtual-scroll',
        template: _raw_loader_virtual_scroll_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_virtual_scroll_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VirtualScrollPage);

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let rotateImg = 0;
const images = [
    'bandit',
    'batmobile',
    'blues-brothers',
    'bueller',
    'delorean',
    'eleanor',
    'general-lee',
    'ghostbusters',
    'knight-rider',
    'mirth-mobile'
];
function getImgSrc() {
    const src = 'https://dummyimage.com/600x400/${' + Math.round(Math.random() * 99999) + '}/fff.png';
    rotateImg++;
    if (rotateImg === images.length) {
        rotateImg = 0;
    }
    return src;
}


/***/ }),

/***/ "QxYW":
/*!***********************************************************************!*\
  !*** ./src/app/pages/virtual-scroll/virtual-scroll-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: VirtualScrollPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollPageRoutingModule", function() { return VirtualScrollPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _virtual_scroll_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual-scroll.page */ "9tUG");




const routes = [
    {
        path: '',
        component: _virtual_scroll_page__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollPage"]
    }
];
let VirtualScrollPageRoutingModule = class VirtualScrollPageRoutingModule {
};
VirtualScrollPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VirtualScrollPageRoutingModule);



/***/ }),

/***/ "e2+6":
/*!***************************************************************!*\
  !*** ./src/app/pages/virtual-scroll/virtual-scroll.module.ts ***!
  \***************************************************************/
/*! exports provided: VirtualScrollPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollPageModule", function() { return VirtualScrollPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _virtual_scroll_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./virtual-scroll-routing.module */ "QxYW");
/* harmony import */ var _virtual_scroll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./virtual-scroll.page */ "9tUG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let VirtualScrollPageModule = class VirtualScrollPageModule {
};
VirtualScrollPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _virtual_scroll_routing_module__WEBPACK_IMPORTED_MODULE_5__["VirtualScrollPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_virtual_scroll_page__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollPage"]]
    })
], VirtualScrollPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-virtual-scroll-virtual-scroll-module.js.map