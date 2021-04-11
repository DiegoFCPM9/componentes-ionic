(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "AV1k":
/*!****************************************************************!*\
  !*** ./src/app/pages/search/search-info/search-info.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Dwri":
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search.page.html */ "eQ5q");
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.page.scss */ "bHDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_info_search_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-info/search-info.page */ "KXdI");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");







let SearchPage = class SearchPage {
    constructor(dataService, modalController) {
        this.dataService = dataService;
        this.modalController = modalController;
        this.albumes = [];
        this.textSearch = '';
    }
    ngOnInit() {
        this.dataService.getAlbumes().subscribe(albumes => {
            this.albumes = albumes;
        });
    }
    onSearchChange(event) {
        this.textSearch = event.detail.value;
    }
    verModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _search_info_search_info_page__WEBPACK_IMPORTED_MODULE_5__["SearchInfoPage"],
                componentProps: {
                    nombre: 'Diego',
                    pais: 'Colombia'
                }
            });
            yield modal.present();
            //onDidDismiss
            const { data } = yield modal.onWillDismiss();
            console.log({ data });
        });
    }
};
SearchPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchPage);



/***/ }),

/***/ "KXdI":
/*!**************************************************************!*\
  !*** ./src/app/pages/search/search-info/search-info.page.ts ***!
  \**************************************************************/
/*! exports provided: SearchInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoPage", function() { return SearchInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-info.page.html */ "MF9n");
/* harmony import */ var _search_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-info.page.scss */ "AV1k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SearchInfoPage = class SearchInfoPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    volver() {
        this.modalController.dismiss();
    }
};
SearchInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SearchInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-info',
        template: _raw_loader_search_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchInfoPage);



/***/ }),

/***/ "MF9n":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search-info/search-info.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"volver()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-undo-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h5>Searchbar por defecto</h5>\n  <ion-searchbar></ion-searchbar>\n\n  <h5>Searchbar con botón de cancelar permanente</h5>\n  <ion-searchbar showCancelButton=\"always\"></ion-searchbar>\n\n  <h5>Searchbar con botón de cancelar en foco</h5>\n  <ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\n\n  <h5>Searchbar con color</h5>\n  <ion-searchbar color=\"primary\"></ion-searchbar>\n\n  <h5>Searchbar con valor</h5>\n  <ion-searchbar value=\"Ionic\"></ion-searchbar>\n\n  <h5>Searchbar de tipo teléfono</h5>\n  <ion-searchbar type=\"tel\"></ion-searchbar>\n\n  <h5>Searchbar de tipo númerico</h5>\n  <ion-searchbar inputmode=\"numeric\"></ion-searchbar>\n\n  <h5>Searchbar desabilitado</h5>\n  <ion-searchbar disabled=\"true\"></ion-searchbar>\n\n  <h5>Searchbar con botón de cancelar perzonalizado</h5>\n  <ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n\n  <h5>Searchbar animada</h5>\n  <ion-searchbar animated></ion-searchbar>\n\n  <h5>Searchbar con placeholder</h5>\n  <ion-searchbar placeholder=\"Placeholder\"></ion-searchbar>\n</ion-content>\n");

/***/ }),

/***/ "P8Ee":
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "Dwri");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    },
    {
        path: 'search-info',
        loadChildren: () => __webpack_require__.e(/*! import() | search-info-search-info-module */ "search-info-search-info-module").then(__webpack_require__.bind(null, /*! ./search-info/search-info.module */ "HfTo")).then(m => m.SearchInfoPageModule)
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "bHDT":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "eQ5q":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search</ion-title>\n  </ion-toolbar>\n  <ion-searchbar placeholder=\"Buscar álbum\" inputmode=\"text\" type=\"text\" debounce=\"250\" (ionChange)=\"onSearchChange($event)\" mode=\"ios\" animated></ion-searchbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item *ngFor='let a of albumes | filter:textSearch:\"title\"'>\n      <ion-label class=\"ion-text-wrap\">{{a.title}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"verModal()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Ver tipos de searchbar\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "vuQK":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "P8Ee");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "Dwri");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map