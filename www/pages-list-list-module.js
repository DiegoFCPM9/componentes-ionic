(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-list-module"],{

/***/ "O3HO":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Lists\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n  \n  <ion-list>\n  \n    <ion-item-sliding *ngFor=\"let u of users | async\">\n\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"favorite(u)\">\n          <ion-icon slot=\"top\" name=\"heart-circle\"></ion-icon>\n          Favorito\n        </ion-item-option>\n        <ion-item-option color=\"success\" (click)=\"share(u)\">\n          <ion-icon slot=\"top\" name=\"share\"></ion-icon>\n          Compartir\n        </ion-item-option>\n      </ion-item-options>\n\n      <ion-item>\n        <ion-label>\n          <h3>{{u.name}}</h3>\n          <p>{{u.email}}</p>\n        </ion-label>\n        <ion-label slot=\"end\" class=\"ion-text-end\">{{u.phone}}</ion-label>\n      </ion-item>\n    \n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"tertiary\" (click)=\"delete(u)\">\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\n          Borrar\n        </ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "cA8+":
/*!*****************************************!*\
  !*** ./src/app/pages/list/list.page.ts ***!
  \*****************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list.page.html */ "O3HO");
/* harmony import */ var _list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.page.scss */ "ll5S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let ListPage = class ListPage {
    constructor(dataService, alertController) {
        this.dataService = dataService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.users = this.dataService.getUserList();
    }
    favorite(option) {
        console.log('Favorito: ', option);
        this.ionList.closeSlidingItems();
    }
    share(option) {
        console.log('Compartir: ', option);
        this.ionList.closeSlidingItems();
    }
    delete(option) {
        console.log('Borrar', option);
        this.ionList.closeSlidingItems();
    }
    clickInfo() {
        this.presentInfo();
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente List',
                subHeader: '¿Qué estás viendo?',
                message: 'Trae datos en formato JSON de la web y los enseña en una lista.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ListPage.propDecorators = {
    ionList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"],] }]
};
ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list',
        template: _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListPage);



/***/ }),

/***/ "jD90":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "oNf1");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "cA8+");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ListPageModule = class ListPageModule {
};
ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "ll5S":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "oNf1":
/*!***************************************************!*\
  !*** ./src/app/pages/list/list-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "cA8+");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-list-list-module.js.map