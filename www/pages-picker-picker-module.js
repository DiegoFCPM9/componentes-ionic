(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-picker-picker-module"],{

/***/ "2iWE":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/picker/picker.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Picker\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n  <ion-button (click)=\"clickInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n    ¿Qúe es esto?\n  </ion-button>\n\n  <ion-button expand=\"block\" (click)=\"openPicker()\">Show Single Column Picker</ion-button>\n  <ion-button expand=\"block\" (click)=\"openPicker(2, 5, multiColumnOptions)\">Show Multi Column Picker</ion-button>\n</ion-content>");

/***/ }),

/***/ "Anv1":
/*!*******************************************************!*\
  !*** ./src/app/pages/picker/picker-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PickerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerPageRoutingModule", function() { return PickerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _picker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picker.page */ "ruTr");




const routes = [
    {
        path: '',
        component: _picker_page__WEBPACK_IMPORTED_MODULE_3__["PickerPage"]
    }
];
let PickerPageRoutingModule = class PickerPageRoutingModule {
};
PickerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PickerPageRoutingModule);



/***/ }),

/***/ "CPQd":
/*!***********************************************!*\
  !*** ./src/app/pages/picker/picker.module.ts ***!
  \***********************************************/
/*! exports provided: PickerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerPageModule", function() { return PickerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _picker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picker-routing.module */ "Anv1");
/* harmony import */ var _picker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./picker.page */ "ruTr");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let PickerPageModule = class PickerPageModule {
};
PickerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _picker_routing_module__WEBPACK_IMPORTED_MODULE_5__["PickerPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_picker_page__WEBPACK_IMPORTED_MODULE_6__["PickerPage"]]
    })
], PickerPageModule);



/***/ }),

/***/ "ruTr":
/*!*********************************************!*\
  !*** ./src/app/pages/picker/picker.page.ts ***!
  \*********************************************/
/*! exports provided: PickerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerPage", function() { return PickerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_picker_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./picker.page.html */ "2iWE");
/* harmony import */ var _picker_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picker.page.scss */ "zO1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_core___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/core/ */ "1Bn7");






let PickerPage = class PickerPage {
    constructor(alertController) {
        this.alertController = alertController;
        this.defaultColumnOptions = [
            [
                'Diego',
                'Felipe',
                'Cortés',
                'Perdomo',
                'AKOD'
            ]
        ];
        this.multiColumnOptions = [
            [
                'Universidad',
                'Distrital',
                'Francisco',
                'José',
                'de',
                'Caldas'
            ], [
                'Universidad',
                'Distrital',
                'Francisco',
                'José',
                'de',
                'Caldas'
            ]
        ];
    }
    openPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const picker = yield _ionic_core___WEBPACK_IMPORTED_MODULE_5__["pickerController"].create({
                columns: this.getColumns(numColumns, numOptions, columnOptions),
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }, {
                        text: 'Listo',
                        handler: (event) => {
                            console.log(event.col_0.text);
                        }
                    }
                ]
            });
            yield picker.present();
        });
    }
    getColumns(numColumns, numOptions, columnOptions) {
        let columns = [];
        for (let i = 0; i < numColumns; i++) {
            columns.push({
                name: `col_${i}`,
                options: this.getColumnOptions(i, numOptions, columnOptions)
            });
        }
        return columns;
    }
    getColumnOptions(columnIndex, numOptions, columnOptions) {
        let options = [];
        for (let i = 0; i < numOptions; i++) {
            options.push({
                text: columnOptions[columnIndex][i % numOptions],
                value: i
            });
        }
        return options;
    }
    clickInfo() {
        this.presentInfo();
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Picker',
                subHeader: 'Traducido por Google.',
                message: 'Un picker es un cuadro de diálogo que muestra una fila de botones y columnas debajo. Aparece en la parte superior del contenido de la aplicación y en la parte inferior de la ventana gráfica.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
PickerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PickerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-picker',
        template: _raw_loader_picker_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_picker_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PickerPage);



/***/ }),

/***/ "zO1L":
/*!***********************************************!*\
  !*** ./src/app/pages/picker/picker.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrZXIucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-picker-picker-module.js.map