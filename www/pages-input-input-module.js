(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-input-input-module"],{

/***/ "1Eu7":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title || 'Inputs'\" ></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-list class=\"ion-padding\">\n    <h5>Input por defecto</h5>\n    <ion-item>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <h5>Input con valor</h5>\n    <ion-item>\n      <ion-input value=\"Valor\"></ion-input>\n    </ion-item>\n\n    <h5>Input con placeholder</h5>\n    <ion-item>\n      <ion-input placeholder=\"Placeholder\"></ion-input>\n    </ion-item>\n\n    <h5>Input con botón de limpieza para el valor</h5>\n    <ion-item>\n      <ion-input clearInput value=\"Bórrame\"></ion-input>\n    </ion-item>\n\n    <h5>Input númerico</h5>\n    <ion-item>\n      <ion-input type=\"number\" placeholder=\"Número\"></ion-input>\n    </ion-item>\n\n    <h5>Input desabilitado</h5>\n    <ion-item>\n      <ion-input value=\"Desabilitado\" disabled></ion-input>\n    </ion-item>\n\n    <h5>Input sólo lectura</h5>\n    <ion-item>\n      <ion-input value=\"Sólo lectura\" readonly></ion-input>\n    </ion-item>\n    \n    <h3>Inputs con labels</h3>\n    <h5>Label por defecto</h5>\n    <ion-item>\n      <ion-label>Label por defecto: </ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <h5>Label en floating</h5>\n    <ion-item>\n      <ion-label position=\"floating\">Label en floating</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <h5>Label en fixed</h5>\n    <ion-item>\n      <ion-label position=\"fixed\">Label en fixed: </ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <h5>Label en stacked</h5>\n    <ion-item>\n      <ion-label position=\"stacked\">Label en stacked</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <h3>Personaliza el título</h3>\n    <ion-item>\n      <ion-label position=\"floating\">Título</ion-label>\n      <ion-input placeholder=\"Título\" [(ngModel)]=\"title\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"formSubmit(form)\" [hidden]=\"formState\">\n    <ion-list-header>\n      <ion-label>Ingresa tus datos</ion-label>\n      <ion-chip outline color=\"success\" [color]=\"form.valid ? 'success' : 'danger'\">\n        <ion-icon [name]=\"form.valid ? 'checkmark-circle' : 'close-circle'\"></ion-icon>\n        <ion-label>{{form.valid ? 'Válido' : 'Inválido'}}</ion-label>\n      </ion-chip>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label position=\"floating\">E-Mail<ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input \n        type=\"email\"\n        placeholder=\"E-Mail\"\n        name=\"E-Mail\"\n        [(ngModel)]=\"user.email\"\n        pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña<ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input \n        type=\"password\"\n        placeholder=\"Contraseña\"\n        name=\"Contraseña\"\n        [(ngModel)]=\"user.password\"\n        required></ion-input>\n    </ion-item>\n    \n    <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">\n      Listo\n    </ion-button>\n  </form>\n\n  <ion-infinite-scroll threshold=\"47px\" (ionInfinite)=\"loadData()\">\n    <center>\n      <section><ion-img src=\"/assets/Infinite.png\" class=\"infinite\"></ion-img></section>\n      <section><ion-label class=\"infinite-label\">Cargando el formulario...</ion-label></section>\n    </center>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "A0wQ":
/*!*******************************************!*\
  !*** ./src/app/pages/input/input.page.ts ***!
  \*******************************************/
/*! exports provided: InputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPage", function() { return InputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_input_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./input.page.html */ "1Eu7");
/* harmony import */ var _input_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.page.scss */ "D1oE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let InputPage = class InputPage {
    constructor() {
        this.user = {
            email: '',
            password: ''
        };
        this.formState = true;
    }
    formSubmit(form) {
        console.log(form);
        console.log(this.user.email);
        console.log(this.user.password);
    }
    loadData() {
        setTimeout(() => {
            this.formState = false;
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;
        }, 1447);
    }
};
InputPage.ctorParameters = () => [];
InputPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }]
};
InputPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-input',
        template: _raw_loader_input_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_input_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InputPage);



/***/ }),

/***/ "D1oE":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  color: #3F4065;\n}\n\nh3 {\n  color: #DCDBDF;\n}\n\n.infinite {\n  width: 15%;\n  height: auto;\n}\n\n.infinite-label {\n  font-size: 15pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2lucHV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0oiLCJmaWxlIjoiaW5wdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDV7XG4gICAgY29sb3I6ICMzRjQwNjU7XG59XG5oM3tcbiAgICBjb2xvcjogI0RDREJERjtcbn1cblxuLmluZmluaXRle1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmluZmluaXRlLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTVwdDtcbn0iXX0= */");

/***/ }),

/***/ "UYdf":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.module.ts ***!
  \*********************************************/
/*! exports provided: InputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageModule", function() { return InputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _input_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-routing.module */ "tCcL");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.page */ "A0wQ");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let InputPageModule = class InputPageModule {
};
InputPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _input_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_input_page__WEBPACK_IMPORTED_MODULE_6__["InputPage"]]
    })
], InputPageModule);



/***/ }),

/***/ "tCcL":
/*!*****************************************************!*\
  !*** ./src/app/pages/input/input-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InputPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageRoutingModule", function() { return InputPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.page */ "A0wQ");




const routes = [
    {
        path: '',
        component: _input_page__WEBPACK_IMPORTED_MODULE_3__["InputPage"]
    }
];
let InputPageRoutingModule = class InputPageRoutingModule {
};
InputPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InputPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-input-input-module.js.map