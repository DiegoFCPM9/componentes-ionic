(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-action-sheet-action-sheet-module"],{

/***/ "1dbX":
/*!***********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.module.ts ***!
  \***********************************************************/
/*! exports provided: ActionSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPageModule", function() { return ActionSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-sheet-routing.module */ "vb6O");
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-sheet.page */ "VIHP");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ActionSheetPageModule = class ActionSheetPageModule {
};
ActionSheetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionSheetPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_action_sheet_page__WEBPACK_IMPORTED_MODULE_6__["ActionSheetPage"]]
    })
], ActionSheetPageModule);



/***/ }),

/***/ "C3be":
/*!***********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tc2hlZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "VIHP":
/*!*********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.page.ts ***!
  \*********************************************************/
/*! exports provided: ActionSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPage", function() { return ActionSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_action_sheet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./action-sheet.page.html */ "nbLD");
/* harmony import */ var _action_sheet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-sheet.page.scss */ "C3be");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ActionSheetPage = class ActionSheetPage {
    constructor(actionSheetController, alertController) {
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.codes = [
            "clickActionSheet(){",
            "  this.presentActionSheet();",
            "}",
            "async presentActionSheet(){",
            "  const actionSheet=await this.actionSheetController.create({",
            "    header: 'Albums',",
            "    backdropDismiss: false,",
            "    cssClass: 'as-red',",
            "    buttons: [{",
            "      text: 'Delete',",
            "      role: 'destructive',",
            "      icon: 'trash-outline',",
            "      cssClass: 'red',",
            "      handler:()=>{",
            "        console.log('Delete clicked');",
            "      }",
            "    },{",
            "      text: 'Share',",
            "      icon: 'share-outline',",
            "      handler:()=>{",
            "        console.log('Share clicked');",
            "      }",
            "    },{",
            "      text: 'Play (open modal)',",
            "      icon: 'caret-forward-circle-outline',",
            "      handler:()=>{",
            "        console.log('Play clicked');",
            "      }",
            "    },{",
            "      text: 'Favorite',",
            "      icon: 'heart-outline',",
            "      handler:()=>{",
            "        console.log('Favorite clicked');",
            "      }",
            "    },{",
            "      text: 'Cancel',",
            "      icon: 'close-outline',",
            "      role: 'cancel',",
            "      handler:()=>{",
            "        console.log('Cancel clicked');",
            "      }",
            "    }]",
            "  });",
            "await actionSheet.present();",
            "}"
        ];
        this.code = '';
    }
    clickActionSheet() {
        this.presentActionSheet();
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Albums',
                backdropDismiss: false,
                cssClass: 'as-red',
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash-outline',
                        cssClass: 'red',
                        handler: () => {
                            console.log('Delete clicked');
                        }
                    }, {
                        text: 'Share',
                        icon: 'share-outline',
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Play (open modal)',
                        icon: 'caret-forward-circle-outline',
                        handler: () => {
                            console.log('Play clicked');
                        }
                    }, {
                        text: 'Favorite',
                        icon: 'heart-outline',
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close-outline',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    clickInfo() {
        this.presentInfo();
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Action-Sheet',
                subHeader: 'Traducido por Google.',
                message: 'Un action-sheet es un cuadro de diálogo que muestra un conjunto de opciones. Aparece en la parte superior del contenido de la aplicación y el usuario debe descartarlo manualmente antes de que pueda reanudar la interacción con la aplicación. Las opciones destructivas se hacen obvias en el modo IOS. Hay varias formas de descartar la hoja de acciones, incluido tocar el fondo o presionar la tecla de escape en el escritorio.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
ActionSheetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ActionSheetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-action-sheet',
        template: _raw_loader_action_sheet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_action_sheet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ActionSheetPage);



/***/ }),

/***/ "nbLD":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" color=\"primary\" mode=\"ios\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Action-Sheet</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header title=\"Action-Sheet\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n  <ion-button (click)=\"clickActionSheet()\" expand=\"block\">\n    Mostrar Action-Sheet\n  </ion-button>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <center>\n      <ion-chip color=\"secondary\" mode=\"ios\" outline=\"true\" (click)=\"copyCode()\">\n        <ion-label><b>Copiar código</b></ion-label>\n        <ion-icon name=\"terminal-outline\"></ion-icon>\n      </ion-chip>\n    </center>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "vb6O":
/*!*******************************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActionSheetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPageRoutingModule", function() { return ActionSheetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-sheet.page */ "VIHP");




const routes = [
    {
        path: '',
        component: _action_sheet_page__WEBPACK_IMPORTED_MODULE_3__["ActionSheetPage"]
    }
];
let ActionSheetPageRoutingModule = class ActionSheetPageRoutingModule {
};
ActionSheetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActionSheetPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-action-sheet-action-sheet-module.js.map