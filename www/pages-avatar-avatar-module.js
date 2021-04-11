(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-avatar-avatar-module"],{

/***/ "Gq1W":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" color=\"primary\" mode=\"ios\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\">Avatar</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-avatar>\n        <!-- <img src=\"/assets/Avatar.jpg\"/> -->\n        <ion-img src=\"/assets/Avatar.jpg\" style=\"width:69%; height:69%; margin:19%\"></ion-img>\n      </ion-avatar>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" *ngFor=\"let a of [0,0,0,0,0]\">\n    <ion-avatar>\n      <ion-img src=\"/assets/Avatar.jpg\"></ion-img>\n    </ion-avatar>\n    <ion-label>User</ion-label>\n  </ion-chip>\n\n  <ion-list>\n    <ion-item *ngFor=\"let a of [0,0,0,0,0]\">\n      <ion-avatar slot=\"start\">\n        <ion-img src=\"/assets/Avatar.jpg\"></ion-img>\n      </ion-avatar>\n      <ion-label>User</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "HLNf":
/*!***********************************************!*\
  !*** ./src/app/pages/avatar/avatar.module.ts ***!
  \***********************************************/
/*! exports provided: AvatarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPageModule", function() { return AvatarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatar-routing.module */ "WsdT");
/* harmony import */ var _avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar.page */ "QJ/u");







let AvatarPageModule = class AvatarPageModule {
};
AvatarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvatarPageRoutingModule"]
        ],
        declarations: [_avatar_page__WEBPACK_IMPORTED_MODULE_6__["AvatarPage"]]
    })
], AvatarPageModule);



/***/ }),

/***/ "QJ/u":
/*!*********************************************!*\
  !*** ./src/app/pages/avatar/avatar.page.ts ***!
  \*********************************************/
/*! exports provided: AvatarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPage", function() { return AvatarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_avatar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./avatar.page.html */ "Gq1W");
/* harmony import */ var _avatar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar.page.scss */ "Zt6R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AvatarPage = class AvatarPage {
    constructor() { }
    ngOnInit() {
    }
};
AvatarPage.ctorParameters = () => [];
AvatarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-avatar',
        template: _raw_loader_avatar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_avatar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AvatarPage);



/***/ }),

/***/ "WsdT":
/*!*******************************************************!*\
  !*** ./src/app/pages/avatar/avatar-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AvatarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPageRoutingModule", function() { return AvatarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _avatar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar.page */ "QJ/u");




const routes = [
    {
        path: '',
        component: _avatar_page__WEBPACK_IMPORTED_MODULE_3__["AvatarPage"]
    }
];
let AvatarPageRoutingModule = class AvatarPageRoutingModule {
};
AvatarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AvatarPageRoutingModule);



/***/ }),

/***/ "Zt6R":
/*!***********************************************!*\
  !*** ./src/app/pages/avatar/avatar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmF0YXIucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-avatar-avatar-module.js.map