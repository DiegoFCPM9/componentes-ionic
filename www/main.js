(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/diegofcmp9/Documentos/DesarrolloMóvil/SmartphoneAppDevelopment/componentes-ionic/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getMenuOpts() {
        return this.http.get('/assets/data/menu-opts.json');
    }
    getUserList() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
    getAlbumes() {
        return this.http.get('https://jsonplaceholder.typicode.com/albums');
    }
    getHeroes() {
        return this.http.get('assets/data/superheroes.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3001));
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");






let AppComponent = class AppComponent {
    constructor(dataService, menuController, /* , private navController:NavController */ platform) {
        this.dataService = dataService;
        this.menuController = menuController;
        this.platform = platform;
        this.initializeApp();
    }
    ngOnInit() {
        this.pages = this.dataService.getMenuOpts();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.CheckDarkTheme();
        });
    }
    CheckDarkTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        console.log(prefersDark);
        if (prefersDark.matches) {
            document.body.classList.toggle('dark');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main\" when=\"md\">\n    <ion-menu side=\"start\" menuId=\"mainMenu\" contentId=\"main\"><!-- \"overlay\", \"reveal\", \"push\". -->\n      <ion-header>\n        <ion-toolbar color=\"primary\">\n          <ion-title>Componentes</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-menu-toggle *ngFor=\"let p of pages | async\" autoHide=false>\n          <ion-list>\n            <ion-item [routerLink]=\"p.redirectTo\" detail>\n              <ion-icon [name]=\"p.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n                <p color=\"secondary\">{{p.name}}</p>\n            </ion-item> \n          </ion-list>\n        </ion-menu-toggle>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'index',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-index-index-module */ "pages-index-index-module").then(__webpack_require__.bind(null, /*! ./pages/index/index.module */ "lOnp")).then(mpg => mpg.IndexPageModule)
    }, {
        path: 'alert',
        loadChildren: () => Promise.all(/*! import() | pages-alert-alert-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-alert-alert-module")]).then(__webpack_require__.bind(null, /*! ./pages/alert/alert.module */ "3Qz6")).then(mpg => mpg.AlertPageModule)
    }, {
        path: 'action-sheet',
        loadChildren: () => Promise.all(/*! import() | pages-action-sheet-action-sheet-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-action-sheet-action-sheet-module")]).then(__webpack_require__.bind(null, /*! ./pages/action-sheet/action-sheet.module */ "1dbX")).then(mpg => mpg.ActionSheetPageModule)
    }, {
        path: 'avatar',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-avatar-avatar-module */ "pages-avatar-avatar-module").then(__webpack_require__.bind(null, /*! ./pages/avatar/avatar.module */ "HLNf")).then(mpg => mpg.AvatarPageModule)
    }, {
        path: 'backdrop',
        loadChildren: () => Promise.all(/*! import() | pages-backdrop-backdrop-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-backdrop-backdrop-module")]).then(__webpack_require__.bind(null, /*! ./pages/backdrop/backdrop.module */ "eEqm")).then(mpg => mpg.BackdropPageModule)
    }, {
        path: 'badge',
        loadChildren: () => Promise.all(/*! import() | pages-badge-badge-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-badge-badge-module")]).then(__webpack_require__.bind(null, /*! ./pages/badge/badge.module */ "buL5")).then(mpg => mpg.BadgePageModule)
    }, {
        path: 'button',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-button-button-module */ "pages-button-button-module").then(__webpack_require__.bind(null, /*! ./pages/button/button.module */ "NEiM")).then(mpg => mpg.ButtonPageModule)
    }, {
        path: 'card',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-card-card-module */ "common").then(__webpack_require__.bind(null, /*! ./pages/card/card.module */ "8IXr")).then(mpg => mpg.CardPageModule)
    }, {
        path: 'checkbox',
        loadChildren: () => Promise.all(/*! import() | pages-checkbox-checkbox-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-checkbox-checkbox-module")]).then(__webpack_require__.bind(null, /*! ./pages/checkbox/checkbox.module */ "AAWZ")).then(mpg => mpg.CheckboxPageModule)
    }, {
        path: 'chip',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-chip-chip-module */ "common").then(__webpack_require__.bind(null, /*! ./pages/chip/chip.module */ "j9s4")).then(mpg => mpg.ChipPageModule)
    }, {
        path: 'datetime',
        loadChildren: () => Promise.all(/*! import() | pages-datetime-datetime-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-datetime-datetime-module")]).then(__webpack_require__.bind(null, /*! ./pages/datetime/datetime.module */ "u/Ec")).then(mpg => mpg.DatetimePageModule)
    }, {
        path: 'fab',
        loadChildren: () => Promise.all(/*! import() | pages-fab-fab-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-fab-fab-module")]).then(__webpack_require__.bind(null, /*! ./pages/fab/fab.module */ "Fza+")).then(mpg => mpg.FabPageModule)
    }, {
        path: 'grid',
        loadChildren: () => Promise.all(/*! import() | pages-grid-grid-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-grid-grid-module")]).then(__webpack_require__.bind(null, /*! ./pages/grid/grid.module */ "2U0e")).then(mpg => mpg.GridPageModule)
    }, {
        path: 'infinite-scroll',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-infinite-scroll-infinite-scroll-module */ "common").then(__webpack_require__.bind(null, /*! ./pages/infinite-scroll/infinite-scroll.module */ "tTrA")).then(mpg => mpg.InfiniteScrollPageModule)
    }, {
        path: 'input',
        loadChildren: () => Promise.all(/*! import() | pages-input-input-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-input-input-module")]).then(__webpack_require__.bind(null, /*! ./pages/input/input.module */ "UYdf")).then(mpg => mpg.InputPageModule)
    }, {
        path: 'item',
        loadChildren: () => Promise.all(/*! import() | pages-item-item-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-item-item-module")]).then(__webpack_require__.bind(null, /*! ./pages/item/item.module */ "bVhl")).then(mpg => mpg.ItemPageModule)
    }, {
        path: 'list',
        loadChildren: () => Promise.all(/*! import() | pages-list-list-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-list-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/list/list.module */ "jD90")).then(mpg => mpg.ListPageModule)
    }, {
        path: 'loading',
        loadChildren: () => Promise.all(/*! import() | pages-loading-loading-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-loading-loading-module")]).then(__webpack_require__.bind(null, /*! ./pages/loading/loading.module */ "XRIH")).then(mpg => mpg.LoadingPageModule)
    }, {
        path: 'menu',
        loadChildren: () => Promise.all(/*! import() | pages-menu-menu-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-menu-menu-module")]).then(__webpack_require__.bind(null, /*! ./pages/menu/menu.module */ "+eMj")).then(mpg => mpg.MenuPageModule)
    }, {
        path: 'modal',
        loadChildren: () => Promise.all(/*! import() | pages-modal-modal-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-modal-modal-module")]).then(__webpack_require__.bind(null, /*! ./pages/modal/modal.module */ "uLFO")).then(mpg => mpg.ModalPageModule)
    }, {
        path: 'note',
        loadChildren: () => Promise.all(/*! import() | pages-note-note-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-note-note-module")]).then(__webpack_require__.bind(null, /*! ./pages/note/note.module */ "cVlS")).then(mpg => mpg.NotePageModule)
    }, {
        path: 'picker',
        loadChildren: () => Promise.all(/*! import() | pages-picker-picker-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-picker-picker-module")]).then(__webpack_require__.bind(null, /*! ./pages/picker/picker.module */ "CPQd")).then(mpg => mpg.PickerPageModule)
    }, {
        path: 'popover',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-popover-popover-module */ "pages-popover-popover-module").then(__webpack_require__.bind(null, /*! ./pages/popover/popover.module */ "kXnM")).then(mpg => mpg.PopoverPageModule)
    }, {
        path: 'progress-bar',
        loadChildren: () => Promise.all(/*! import() | pages-progress-bar-progress-bar-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-progress-bar-progress-bar-module")]).then(__webpack_require__.bind(null, /*! ./pages/progress-bar/progress-bar.module */ "w18g")).then(mpg => mpg.ProgressBarPageModule)
    }, {
        path: 'radio',
        loadChildren: () => Promise.all(/*! import() | pages-radio-radio-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-radio-radio-module")]).then(__webpack_require__.bind(null, /*! ./pages/radio/radio.module */ "JC0K")).then(mpg => mpg.RadioPageModule)
    }, {
        path: 'range',
        loadChildren: () => Promise.all(/*! import() | pages-range-range-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-range-range-module")]).then(__webpack_require__.bind(null, /*! ./pages/range/range.module */ "lY/W")).then(mpg => mpg.RangePageModule)
    }, {
        path: 'refresher',
        loadChildren: () => Promise.all(/*! import() | pages-refresher-refresher-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-refresher-refresher-module")]).then(__webpack_require__.bind(null, /*! ./pages/refresher/refresher.module */ "YteZ")).then(mpg => mpg.RefresherPageModule)
    }, {
        path: 'reorder',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-reorder-reorder-module */ "pages-reorder-reorder-module").then(__webpack_require__.bind(null, /*! ./pages/reorder/reorder.module */ "+JLq")).then(mpg => mpg.ReorderPageModule)
    }, {
        path: 'search',
        loadChildren: () => Promise.all(/*! import() | pages-search-search-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-search-search-module")]).then(__webpack_require__.bind(null, /*! ./pages/search/search.module */ "vuQK")).then(mpg => mpg.SearchPageModule)
    }, {
        path: 'segment',
        loadChildren: () => Promise.all(/*! import() | pages-segment-segment-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-segment-segment-module")]).then(__webpack_require__.bind(null, /*! ./pages/segment/segment.module */ "RSS0")).then(mpg => mpg.SegmentPageModule)
    }, {
        path: 'select',
        loadChildren: () => Promise.all(/*! import() | pages-select-select-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-select-select-module")]).then(__webpack_require__.bind(null, /*! ./pages/select/select.module */ "4JOY")).then(mpg => mpg.SelectPageModule)
    }, {
        path: 'skeleton-text',
        loadChildren: () => Promise.all(/*! import() | pages-skeleton-text-skeleton-text-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-skeleton-text-skeleton-text-module")]).then(__webpack_require__.bind(null, /*! ./pages/skeleton-text/skeleton-text.module */ "onu5")).then(mpg => mpg.SkeletonTextPageModule)
    }, {
        path: 'slides',
        loadChildren: () => Promise.all(/*! import() | pages-slides-slides-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-slides-slides-module")]).then(__webpack_require__.bind(null, /*! ./pages/slides/slides.module */ "vG9B")).then(mpg => mpg.SlidesPageModule)
    }, {
        path: 'spinner',
        loadChildren: () => Promise.all(/*! import() | pages-spinner-spinner-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-spinner-spinner-module")]).then(__webpack_require__.bind(null, /*! ./pages/spinner/spinner.module */ "uLw6")).then(mpg => mpg.SpinnerPageModule)
    }, {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() | pages-tabs-tabs-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./pages/tabs/tabs.module */ "qiIP")).then(mpg => mpg.TabsPageModule)
    }, {
        path: 'textarea',
        loadChildren: () => Promise.all(/*! import() | pages-textarea-textarea-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-textarea-textarea-module")]).then(__webpack_require__.bind(null, /*! ./pages/textarea/textarea.module */ "D6fI")).then(mpg => mpg.TextareaPageModule)
    }, {
        path: 'thumbnail',
        loadChildren: () => Promise.all(/*! import() | pages-thumbnail-thumbnail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-thumbnail-thumbnail-module")]).then(__webpack_require__.bind(null, /*! ./pages/thumbnail/thumbnail.module */ "LlcC")).then(mpg => mpg.ThumbnailPageModule)
    }, {
        path: 'toast',
        loadChildren: () => Promise.all(/*! import() | pages-toast-toast-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-toast-toast-module")]).then(__webpack_require__.bind(null, /*! ./pages/toast/toast.module */ "+GpE")).then(mpg => mpg.ToastPageModule)
    }, {
        path: 'toggle',
        loadChildren: () => Promise.all(/*! import() | pages-toggle-toggle-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-toggle-toggle-module")]).then(__webpack_require__.bind(null, /*! ./pages/toggle/toggle.module */ "3Yz1")).then(mpg => mpg.TogglePageModule)
    }, {
        path: 'toolbar',
        loadChildren: () => Promise.all(/*! import() | pages-toolbar-toolbar-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-toolbar-toolbar-module")]).then(__webpack_require__.bind(null, /*! ./pages/toolbar/toolbar.module */ "19xY")).then(mpg => mpg.ToolbarPageModule)
    }, {
        path: 'virtual-scroll',
        loadChildren: () => Promise.all(/*! import() | pages-virtual-scroll-virtual-scroll-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-virtual-scroll-virtual-scroll-module")]).then(__webpack_require__.bind(null, /*! ./pages/virtual-scroll/virtual-scroll.module */ "e2+6")).then(mpg => mpg.VirtualScrollPageModule)
    }, {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: 'index',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map