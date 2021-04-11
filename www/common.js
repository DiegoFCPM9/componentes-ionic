(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.component.html */ "AabN");
/* harmony import */ var _menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component.scss */ "nfPh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");






let MenuComponent = class MenuComponent {
    constructor(dataService, menuController /* , private navController:NavController */) {
        this.dataService = dataService;
        this.menuController = menuController;
    }
    ngOnInit() {
        this.pages = this.dataService.getMenuOpts();
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuComponent);



/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "yxfS");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "oHuE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let HeaderComponent = class HeaderComponent {
    constructor(menuController) {
        this.menuController = menuController;
    }
    verMenu() {
        this.menuController.enable(true, 'mainMenu');
        this.menuController.open('mainMenu');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "331r":
/*!*****************************************!*\
  !*** ./src/app/pages/card/card.page.ts ***!
  \*****************************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card.page.html */ "riBT");
/* harmony import */ var _card_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.page.scss */ "kZ1m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CardPage = class CardPage {
    constructor() { }
    ngOnInit() {
    }
};
CardPage.ctorParameters = () => [];
CardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-card',
        template: _raw_loader_card_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CardPage);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8IXr":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.module.ts ***!
  \*******************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-routing.module */ "bNQI");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "331r");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CardPageModule = class CardPageModule {
};
CardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _card_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]]
    })
], CardPageModule);



/***/ }),

/***/ "A2gu":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-bda125fb.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-cf6e85ee.js */ "Ke8Y");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "AabN":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"end\" menuId=\"mainMenu\" contentId=\"main\" type=\"push\"><!-- \"overlay\", \"reveal\", \"push\". -->\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Componentes</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-menu-toggle *ngFor=\"let p of pages | async\">\n      <ion-list>\n        <ion-item [routerLink]=\"p.redirectTo\" detail>\n          <ion-icon [name]=\"p.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n            <p color=\"secondary\">{{p.name}}</p>\n        </ion-item> \n      </ion-list>\n    </ion-menu-toggle>\n  </ion-content>\n</ion-menu>");

/***/ }),

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FilterPipe = class FilterPipe {
    transform(value, text = '', column = '') {
        if (text === '') {
            return value;
        }
        else if (!value) {
            return value;
        }
        else if (text == '') {
        }
        text = text.toLocaleLowerCase();
        return value.filter(item => item[column].toLowerCase().includes(text));
    }
};
FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "C38Z":
/*!***************************************************************!*\
  !*** ./src/app/pages/infinite-scroll/infinite-scroll.page.ts ***!
  \***************************************************************/
/*! exports provided: InfiniteScrollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollPage", function() { return InfiniteScrollPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_infinite_scroll_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./infinite-scroll.page.html */ "KkZv");
/* harmony import */ var _infinite_scroll_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infinite-scroll.page.scss */ "qlQT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let InfiniteScrollPage = class InfiniteScrollPage {
    constructor() {
        this.data = Array(19);
    }
    loadData( /*event*/) {
        //console.log(event);
        setTimeout(() => {
            if (this.data.length > 101) {
                this.infiniteScroll.complete();
                this.infiniteScroll.disabled = true;
                return;
            }
            else {
                const nuevoArreglo = Array(19);
                this.data.push(...nuevoArreglo);
            }
            //event.target.complete();
            this.infiniteScroll.complete();
        }, 1001);
    }
};
InfiniteScrollPage.ctorParameters = () => [];
InfiniteScrollPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }]
};
InfiniteScrollPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-infinite-scroll',
        template: _raw_loader_infinite_scroll_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_infinite_scroll_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfiniteScrollPage);



/***/ }),

/***/ "KkZv":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infinite-scroll/infinite-scroll.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Infinite-Scroll\"></app-header>\n<app-menu></app-menu>\n\n<ion-content id=\"main\" fullscreen>\n  <ion-list>\n    <ion-item *ngFor=\"let d of data; let i=index;\">\n      <ion-label>Item {{i+1}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"99px\" (ionInfinite)=\"loadData($event)\">\n    <!-- <br> -->\n    <!-- Modos de gif de carga: bubbles, circles, circular, crescent, dots, lines, lines-small --> \n    <!-- <ion-infinite-scroll-content\n      loadingSpinner=\"/assets/Infinite.svg\"\n      loadingText=\"Cargando información...\">\n    </ion-infinite-scroll-content> -->\n    <center>\n      <section><ion-img src=\"/assets/Infinite.png\" class=\"infinite\"></ion-img></section>\n      <section><ion-label class=\"infinite-label\">Cargando información...</ion-label></section>\n    </center>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "UxwB":
/*!***************************************************!*\
  !*** ./src/app/pages/chip/chip-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChipPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipPageRoutingModule", function() { return ChipPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chip.page */ "s8Hs");




const routes = [
    {
        path: '',
        component: _chip_page__WEBPACK_IMPORTED_MODULE_3__["ChipPage"]
    }
];
let ChipPageRoutingModule = class ChipPageRoutingModule {
};
ChipPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChipPageRoutingModule);



/***/ }),

/***/ "Xwz7":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chip/chip.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Chip\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <h3>Basic</h3>\n  <ion-chip>\n    <ion-label>Default</ion-label>\n  </ion-chip>\n  <ion-chip>\n    <ion-icon name=\"checkmark-circle\" color=\"primary\"></ion-icon>\n    <ion-label>Icon</ion-label>\n  </ion-chip>\n  <ion-chip>\n    <ion-avatar>\n      <img src=\"/assets/Avatar.jpg\"/>\n    </ion-avatar>\n    <ion-label>Avatar</ion-label>\n  </ion-chip>\n  \n  <h3>Colors</h3>\n  <ion-chip color=\"primary\">\n    <ion-label>Primary</ion-label>\n  </ion-chip>\n  <ion-chip color=\"secondary\">\n    <ion-label>Secondary</ion-label>\n  </ion-chip>\n  <ion-chip color=\"tertiary\">\n    <ion-label>Tertiary</ion-label>\n  </ion-chip>\n  <ion-chip color=\"medium\">\n    <ion-label>Medium</ion-label>\n  </ion-chip>\n  <ion-chip color=\"warning\">\n    <ion-label>Warning</ion-label>\n  </ion-chip>\n  \n  <h3>Icons</h3>\n  <ion-chip outline color=\"primary\">\n    <ion-icon name=\"pin\"></ion-icon>\n    <ion-label>Madison</ion-label>\n    <ion-icon name=\"close-circle\"></ion-icon>\n  </ion-chip>\n  <ion-chip outline color=\"secondary\">\n    <ion-icon name=\"wine\"></ion-icon>\n    <ion-label>Nightlife</ion-label>\n    <ion-icon name=\"close-circle\"></ion-icon>\n  </ion-chip>\n  <ion-chip outline color=\"tertiary\">\n    <ion-icon name=\"restaurant\"></ion-icon>\n    <ion-label>Dining</ion-label>\n    <ion-icon name=\"close-circle\"></ion-icon>\n  </ion-chip>\n  <ion-chip outline color=\"dark\">\n    <ion-icon name=\"videocam\"></ion-icon>\n    <ion-label>Entertainment</ion-label>\n    <ion-icon name=\"close-circle\"></ion-icon>\n  </ion-chip>\n\n  <h3>Two Colors</h3>\n  <ion-chip color=\"warning\">\n    <ion-label color=\"danger\">warning/danger</ion-label>\n  </ion-chip>\n  <ion-chip color=\"danger\">\n    <ion-label color=\"warning\">danger/warning</ion-label>\n  </ion-chip>\n\n  <h3>Disabled</h3>\n  <ion-chip [disabled]=\"true\">\n    <ion-label>Disabled Chip</ion-label>\n  </ion-chip>\n</ion-content>\n");

/***/ }),

/***/ "bNQI":
/*!***************************************************!*\
  !*** ./src/app/pages/card/card-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageRoutingModule", function() { return CardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.page */ "331r");




const routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_3__["CardPage"]
    }
];
let CardPageRoutingModule = class CardPageRoutingModule {
};
CardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardPageRoutingModule);



/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ "BhhM");



let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]],
        exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]]
    })
], PipesModule);



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "2MiI");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "0oYm");







const routes = [
    {
        path: '',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]
    }
];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "j9s4":
/*!*******************************************!*\
  !*** ./src/app/pages/chip/chip.module.ts ***!
  \*******************************************/
/*! exports provided: ChipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipPageModule", function() { return ChipPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chip-routing.module */ "UxwB");
/* harmony import */ var _chip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chip.page */ "s8Hs");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ChipPageModule = class ChipPageModule {
};
ChipPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chip_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChipPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_chip_page__WEBPACK_IMPORTED_MODULE_6__["ChipPage"]]
    })
], ChipPageModule);



/***/ }),

/***/ "kZ1m":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "nfPh":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "o+6V":
/*!*************************************************************************!*\
  !*** ./src/app/pages/infinite-scroll/infinite-scroll-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: InfiniteScrollPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollPageRoutingModule", function() { return InfiniteScrollPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _infinite_scroll_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infinite-scroll.page */ "C38Z");




const routes = [
    {
        path: '',
        component: _infinite_scroll_page__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollPage"]
    }
];
let InfiniteScrollPageRoutingModule = class InfiniteScrollPageRoutingModule {
};
InfiniteScrollPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfiniteScrollPageRoutingModule);



/***/ }),

/***/ "oHuE":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "pX2f":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-e272e3f1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3ccd7557.js */ "2atR");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "qlQT":
/*!*****************************************************************!*\
  !*** ./src/app/pages/infinite-scroll/infinite-scroll.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".infinite {\n  width: 15%;\n  height: auto;\n}\n\n.infinite-label {\n  font-size: 15pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luZmluaXRlLXNjcm9sbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKIiwiZmlsZSI6ImluZmluaXRlLXNjcm9sbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5maW5pdGV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uaW5maW5pdGUtbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNXB0O1xufSJdfQ== */");

/***/ }),

/***/ "riBT":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Card\"></app-header>\n<app-menu></app-menu>\n\n<ion-content id=\"main\" fullscreen>\n  <ion-card>\n    <ion-item color=\"primary\">\n      <ion-icon slot=\"start\" name=\"card-outline\"></ion-icon>\n      <ion-card-title>Tarjeta</ion-card-title>\n    </ion-item>\n    <ion-card-content>\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eius asperiores laborum enim, dolor a sapiente, laudantium ab, odio aspernatur voluptate. Amet quaerat facilis hic ullam facere obcaecati quia labore.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Nido de ratas</ion-card-subtitle>\n      <ion-card-title>Colombia</ion-card-title>\n    </ion-card-header>\n    <ion-img src=\"https://cnnespanol.cnn.com/wp-content/uploads/2020/09/bogot-a-protestas-colombia-GettyImages-1228446384.jpg?quality=100&strip=info\"></ion-img>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>Label for pin</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n  \n    <ion-card-content>\n      This is content, without any paragraph or header tags,\n      within an ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item href=\"#\" class=\"ion-activated\">\n      <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n      <ion-label>Card Link Item 1 activated</ion-label>\n    </ion-item>\n  \n    <ion-item href=\"#\">\n      <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n      <ion-label>Card Link Item 2</ion-label>\n    </ion-item>\n  \n    <ion-item class=\"ion-activated\">\n      <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n      <ion-label>Card Button Item 1 activated</ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n      <ion-label>Card Button Item 2</ion-label>\n    </ion-item>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "s8Hs":
/*!*****************************************!*\
  !*** ./src/app/pages/chip/chip.page.ts ***!
  \*****************************************/
/*! exports provided: ChipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipPage", function() { return ChipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chip_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chip.page.html */ "Xwz7");
/* harmony import */ var _chip_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chip.page.scss */ "yiGZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ChipPage = class ChipPage {
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
                message: 'Los chips representan entidades complejas en pequeños bloques, como un contacto. Un chip puede contener varios elementos diferentes, como avatares, texto e iconos.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
ChipPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ChipPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chip',
        template: _raw_loader_chip_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chip_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChipPage);



/***/ }),

/***/ "tTrA":
/*!*****************************************************************!*\
  !*** ./src/app/pages/infinite-scroll/infinite-scroll.module.ts ***!
  \*****************************************************************/
/*! exports provided: InfiniteScrollPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollPageModule", function() { return InfiniteScrollPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _infinite_scroll_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infinite-scroll-routing.module */ "o+6V");
/* harmony import */ var _infinite_scroll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infinite-scroll.page */ "C38Z");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let InfiniteScrollPageModule = class InfiniteScrollPageModule {
};
InfiniteScrollPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _infinite_scroll_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_infinite_scroll_page__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollPage"]]
    })
], InfiniteScrollPageModule);



/***/ }),

/***/ "yiGZ":
/*!*******************************************!*\
  !*** ./src/app/pages/chip/chip.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "yxfS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" color=\"primary\" mode=\"ios\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-capitalize\">{{title}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"verMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>");

/***/ })

}]);
//# sourceMappingURL=common.js.map