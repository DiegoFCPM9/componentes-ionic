(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-thumbnail-thumbnail-module"],{

/***/ "Ahvz":
/*!*****************************************************!*\
  !*** ./src/app/pages/thumbnail/thumbnail.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-text-wrap {\n  font-family: \"CenturyGothic\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RodW1ibmFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtBQUNKIiwiZmlsZSI6InRodW1ibmFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXRleHQtd3JhcHtcbiAgICBmb250LWZhbWlseTogJ0NlbnR1cnlHb3RoaWMnIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "LlcC":
/*!*****************************************************!*\
  !*** ./src/app/pages/thumbnail/thumbnail.module.ts ***!
  \*****************************************************/
/*! exports provided: ThumbnailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailPageModule", function() { return ThumbnailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _thumbnail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thumbnail-routing.module */ "xLYM");
/* harmony import */ var _thumbnail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thumbnail.page */ "jxap");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ThumbnailPageModule = class ThumbnailPageModule {
};
ThumbnailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thumbnail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThumbnailPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_thumbnail_page__WEBPACK_IMPORTED_MODULE_6__["ThumbnailPage"]]
    })
], ThumbnailPageModule);



/***/ }),

/***/ "RRjc":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thumbnail/thumbnail.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Thumbnail\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <h3>Thumbnail por defecto</h3>\n  <ion-thumbnail>\n    <img src=\"https://img.discogs.com/Cf55M73NqChq1MF_aMOGYBi5dKs=/fit-in/600x539/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5624061-1598427961-8580.jpeg.jpg\">\n  </ion-thumbnail>\n  \n  <ion-list>\n    <h3>Thumbnail con texto</h3>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://img.discogs.com/pJQzgsz2O0Ef4T3vgJgMqpxHvgo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3136465-1467337248-7267.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\">Víctor Jara - Pongo en tus Manos Abiertas</ion-label>\n    </ion-item>\n    <h3>Thumbnail al final con texto</h3>\n    <ion-item>\n      <ion-thumbnail slot=\"end\">\n        <img src=\"https://img.discogs.com/0pdtMIb5uZTGMVEWmcIHhBCwIik=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9374435-1479468763-1420.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\">Facundo Cabral - Facundo Cabral</ion-label>\n    </ion-item>\n    <h3>Thumbnail con título y texto</h3>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://img.discogs.com/AvOa1dlbVh-Xyzq_Yp0DncXbZ0w=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8215425-1457290029-7178.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Diomedes Días</h3>\n        <p>Experiencias Vividas</p>\n      </ion-label>\n    </ion-item>\n    <h3>Thumbnail al final con título y texto</h3>\n    <ion-item>\n      <ion-thumbnail slot=\"end\">\n        <img src=\"https://img.discogs.com/jFP3mfSUfePZ1MzR-FbaIOMzzR4=/fit-in/600x530/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3239819-1506031079-6830.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Non Servium</h3>\n        <p>El Rodillo del Kaos</p>\n      </ion-label>\n    </ion-item>\n    <h3>Thumbnail con título y doble texto</h3>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://img.discogs.com/SxR2zO-WXNnhSl85TT-xgQC7a1A=/fit-in/600x601/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11384774-1515351260-2598.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Alan Menken, Glenn Slater</h3>\n        <p>Enredados</p>\n        <p class=\"ion-text-wrap\">(Banda Sonora Original De Walt Disney Records).</p>\n      </ion-label>\n    </ion-item>\n    <h3>Thumbnail al final con título y doble texto</h3>\n    <ion-item>\n      <ion-thumbnail slot=\"end\">\n        <img src=\"https://cdns-images.dzcdn.net/images/cover/ed187326ff5b16ee4e1f8772f026633d/500x500.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Gabylonia</h3>\n        <p>Abuso de poder - Remix</p>\n        <p class=\"ion-text-wrap\">(ft. Canserbero, ZPU, ELB, Norick, Silvito 'El Libre', I Nesta, Rotwaila, Químico, C-Kan).</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "jxap":
/*!***************************************************!*\
  !*** ./src/app/pages/thumbnail/thumbnail.page.ts ***!
  \***************************************************/
/*! exports provided: ThumbnailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailPage", function() { return ThumbnailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thumbnail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thumbnail.page.html */ "RRjc");
/* harmony import */ var _thumbnail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thumbnail.page.scss */ "Ahvz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ThumbnailPage = class ThumbnailPage {
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
                header: 'Componente Thumbnail',
                subHeader: 'Traducido por Google.',
                message: 'Los thumbnail son componentes cuadrados que normalmente envuelven una imagen o un icono. Se pueden utilizar para facilitar la visualización de un grupo de imágenes más grandes o para proporcionar una vista previa de la imagen a tamaño completo. Las miniaturas se pueden utilizar solas o dentro de cualquier elemento. Si se coloca dentro de un elemento de iones, la miniatura cambiará de tamaño para adaptarse al componente principal. Para colocar una miniatura en el lado izquierdo o derecho de un elemento, configure el espacio para comenzar o finalizar, respectivamente.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
ThumbnailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ThumbnailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-thumbnail',
        template: _raw_loader_thumbnail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thumbnail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ThumbnailPage);



/***/ }),

/***/ "xLYM":
/*!*************************************************************!*\
  !*** ./src/app/pages/thumbnail/thumbnail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ThumbnailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailPageRoutingModule", function() { return ThumbnailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thumbnail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thumbnail.page */ "jxap");




const routes = [
    {
        path: '',
        component: _thumbnail_page__WEBPACK_IMPORTED_MODULE_3__["ThumbnailPage"]
    }
];
let ThumbnailPageRoutingModule = class ThumbnailPageRoutingModule {
};
ThumbnailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThumbnailPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-thumbnail-thumbnail-module.js.map