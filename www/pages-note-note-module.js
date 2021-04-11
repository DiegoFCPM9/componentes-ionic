(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-note-note-module"],{

/***/ "G7Vs":
/*!***************************************************!*\
  !*** ./src/app/pages/note/note-routing.module.ts ***!
  \***************************************************/
/*! exports provided: NotePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePageRoutingModule", function() { return NotePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _note_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note.page */ "RRFI");




const routes = [
    {
        path: '',
        component: _note_page__WEBPACK_IMPORTED_MODULE_3__["NotePage"]
    }
];
let NotePageRoutingModule = class NotePageRoutingModule {
};
NotePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotePageRoutingModule);



/***/ }),

/***/ "IH04":
/*!*******************************************!*\
  !*** ./src/app/pages/note/note.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "RRFI":
/*!*****************************************!*\
  !*** ./src/app/pages/note/note.page.ts ***!
  \*****************************************/
/*! exports provided: NotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePage", function() { return NotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_note_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./note.page.html */ "lArw");
/* harmony import */ var _note_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.page.scss */ "IH04");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let NotePage = class NotePage {
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
                header: 'Componente Note',
                subHeader: 'Traducido por Google.',
                message: 'Las notas son elementos de texto que generalmente se utilizan como subtítulos que proporcionan más información. Las notas tienen un estilo que aparece en gris de forma predeterminada. Las notas se pueden utilizar en un elemento como texto de metadatos.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
NotePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
NotePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-note',
        template: _raw_loader_note_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_note_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotePage);



/***/ }),

/***/ "cVlS":
/*!*******************************************!*\
  !*** ./src/app/pages/note/note.module.ts ***!
  \*******************************************/
/*! exports provided: NotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePageModule", function() { return NotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _note_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-routing.module */ "G7Vs");
/* harmony import */ var _note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note.page */ "RRFI");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let NotePageModule = class NotePageModule {
};
NotePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _note_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_note_page__WEBPACK_IMPORTED_MODULE_6__["NotePage"]]
    })
], NotePageModule);



/***/ }),

/***/ "lArw":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/note/note.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Note\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <ion-list>\n    <ion-list-header>Nota básica</ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-note>Default</ion-note>\n        </ion-col>\n        <ion-col>\n          <ion-note color=\"primary\">Primary</ion-note>\n        </ion-col>\n        <ion-col>\n          <ion-note color=\"secondary\">Secondary</ion-note>\n        </ion-col>\n        <ion-col>\n          <ion-note color=\"tertiary\">Tertiary</ion-note>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-note color=\"success\">Success</ion-note>\n        </ion-col>\n        <ion-col>\n          <ion-note color=\"warning\">warning</ion-note>\n        </ion-col>\n        <ion-col>\n          <ion-note color=\"danger\">Danger</ion-note>\n        </ion-col>\n        <ion-col>\n          <ion-note color=\"dark\">Dark</ion-note>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-list-header>Notas en listas</ion-list-header>\n    <ion-item>\n      <ion-label>Default</ion-label>\n      <ion-note slot=\"end\">11</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Primary</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">22</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Secondary</ion-label>\n      <ion-note slot=\"end\" color=\"secondary\">33</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tertiary</ion-label>\n      <ion-note slot=\"end\" color=\"tertiary\">44</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Success</ion-label>\n      <ion-note slot=\"start\" color=\"success\">55</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Warning</ion-label>\n      <ion-note slot=\"start\" color=\"warning\">66</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Danger</ion-label>\n      <ion-note slot=\"start\" color=\"danger\">77</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Dark</ion-label>\n      <ion-note slot=\"start\" color=\"dark\">88</ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<style>\n  ion-grid{\n    padding-left: 9px;\n  }\n  ion-row{\n    margin-bottom: 10px;\n  }\n</style>");

/***/ })

}]);
//# sourceMappingURL=pages-note-note-module.js.map