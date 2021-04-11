(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-toolbar-toolbar-module"],{

/***/ "06DC":
/*!***********************************************!*\
  !*** ./src/app/pages/toolbar/toolbar.page.ts ***!
  \***********************************************/
/*! exports provided: ToolbarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarPage", function() { return ToolbarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toolbar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toolbar.page.html */ "le4n");
/* harmony import */ var _toolbar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar.page.scss */ "OspF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ToolbarPage = class ToolbarPage {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente toolbar',
                subHeader: 'Traducido por Google.',
                message: 'Toolbars se colocan encima o debajo del contenido. Cuando una barra de herramientas se coloca en un <ion-header>, aparecerá fija en la parte superior del contenido, y cuando está en un <ion-footer>, aparecerá fija en la parte inferior. El contenido de pantalla completa se desplazará detrás de una barra de herramientas en un encabezado o pie de página. Cuando se coloca dentro de un <ion-content>, las barras de herramientas se desplazarán con el contenido.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
ToolbarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ToolbarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-toolbar',
        template: _raw_loader_toolbar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_toolbar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ToolbarPage);



/***/ }),

/***/ "19xY":
/*!*************************************************!*\
  !*** ./src/app/pages/toolbar/toolbar.module.ts ***!
  \*************************************************/
/*! exports provided: ToolbarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarPageModule", function() { return ToolbarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _toolbar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar-routing.module */ "ho+e");
/* harmony import */ var _toolbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar.page */ "06DC");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ToolbarPageModule = class ToolbarPageModule {
};
ToolbarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _toolbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_toolbar_page__WEBPACK_IMPORTED_MODULE_6__["ToolbarPage"]]
    })
], ToolbarPageModule);



/***/ }),

/***/ "OspF":
/*!*************************************************!*\
  !*** ./src/app/pages/toolbar/toolbar.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sYmFyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ho+e":
/*!*********************************************************!*\
  !*** ./src/app/pages/toolbar/toolbar-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarPageRoutingModule", function() { return ToolbarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toolbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar.page */ "06DC");




const routes = [
    {
        path: '',
        component: _toolbar_page__WEBPACK_IMPORTED_MODULE_3__["ToolbarPage"]
    }
];
let ToolbarPageRoutingModule = class ToolbarPageRoutingModule {
};
ToolbarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ToolbarPageRoutingModule);



/***/ }),

/***/ "le4n":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/toolbar/toolbar.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Toolbar</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-title>Sólo título</ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-title>Botón de volver (end)</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref='/'></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-title size=\"small\">Un gran título de página, el título se adapta a ello</ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Iconos</ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-button fill=\"solid\">\n        <ion-icon slot=\"start\" name=\"person-circle\"></ion-icon>\n        Contacto\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Botones sólidos</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button fill=\"solid\" color=\"secondary\">\n        Ayuda\n        <ion-icon slot=\"end\" name=\"help-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-button fill=\"outline\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n        Fav\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Botones outline</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"danger\" fill=\"outline\">\n        Editar\n        <ion-icon slot=\"end\" name=\"create\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-button>\n        Cuenta\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"danger\">\n        Salir\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Botones sólo texto</ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Menú izquierdo</ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedStar()\">\n        <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Menú derecho</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Búsqueda\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">\n        Todo\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Favoritos\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  \n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"secondary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"primary\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Toolbar con color</ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"secondary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"danger\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Toolbar con color</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-button (click)=\"presentInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-toolbar-toolbar-module.js.map