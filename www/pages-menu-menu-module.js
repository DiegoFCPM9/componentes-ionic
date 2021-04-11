(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "+eMj":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "ckNQ");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "agdb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "3Gdt":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "V3Oe":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" color=\"primary\" mode=\"ios\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\">Menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Start Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-menu-toggle *ngFor=\"let p of pages | async\">\n      <ion-list>\n        <ion-item [routerLink]=\"p.redirectTo\" detail>\n          <ion-icon [name]=\"p.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n            <p color=\"secondary\">{{p.name}}</p>\n        </ion-item> \n      </ion-list>\n    </ion-menu-toggle>\n  </ion-content>\n</ion-menu>\n\n<ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\n  <ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-title>Custom Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-menu-toggle *ngFor=\"let p of pages | async\">\n      <ion-list>\n        <ion-item [routerLink]=\"p.redirectTo\" detail>\n          <ion-icon [name]=\"p.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n            <p color=\"secondary\">{{p.name}}</p>\n        </ion-item> \n      </ion-list>\n    </ion-menu-toggle>\n  </ion-content>\n</ion-menu>\n\n<ion-menu side=\"end\" type=\"push\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-title>End Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-menu-toggle *ngFor=\"let p of pages | async\">\n      <ion-list>\n        <ion-item [routerLink]=\"p.redirectTo\" detail>\n          <ion-icon [name]=\"p.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n            <p color=\"secondary\">{{p.name}}</p>\n        </ion-item> \n      </ion-list>\n    </ion-menu-toggle>\n  </ion-content>\n</ion-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n    <ion-button (click)=\"openFirst()\" color=\"secondary\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      <ion-icon slot=\"start\" name=\"menu\"></ion-icon>\n      Ver menú por defecto.\n    </ion-button>\n    \n    <ion-button (click)=\"openCustom()\" color=\"tertiary\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Ver menú con CSS personalizado.\n    </ion-button>\n    \n    <ion-button (click)=\"openEnd()\" color=\"warning\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Ver menú corredizo al final.\n      <ion-icon slot=\"end\" name=\"menu\"></ion-icon>\n    </ion-button>\n</ion-content>");

/***/ }),

/***/ "agdb":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "V3Oe");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "3Gdt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");






let MenuPage = class MenuPage {
    constructor(menu, dataService) {
        this.menu = menu;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.pages = this.dataService.getMenuOpts();
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
    openEnd() {
        this.menu.open('end');
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ }),

/***/ "ckNQ":
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "agdb");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module.js.map