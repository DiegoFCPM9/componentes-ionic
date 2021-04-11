(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slides-slides-module"],{

/***/ "0sid":
/*!*******************************************************!*\
  !*** ./src/app/pages/slides/slides-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SlidesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageRoutingModule", function() { return SlidesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides.page */ "PrxK");




const routes = [
    {
        path: '',
        component: _slides_page__WEBPACK_IMPORTED_MODULE_3__["SlidesPage"]
    }
];
let SlidesPageRoutingModule = class SlidesPageRoutingModule {
};
SlidesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SlidesPageRoutingModule);



/***/ }),

/***/ "INly":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slides/slides.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Slides\"></app-header>\n<app-menu></app-menu>\n\n<ion-content fullscreen scroll-y=\"false\" id='main'>\n  <ion-slides pager=\"ios\" class=\"slide-full\" [options]=\"slideOpts\">\n    <ion-slide *ngFor='let slide of slides'>\n      <ion-card mode='ios'>\n        <img [src]=\"slide.img\" class=\"slide-image\">\n        <ion-card-header>\n          <ion-card-subtitle>MyApp</ion-card-subtitle>\n          <ion-card-title>{{slide.titulo}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          {{slide.desc}}\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-button (click)=\"onClick()\" expand=\"block\" shape=\"round\" class=\"btn\">\n        ¡Empezemos!\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"presentInfo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n      ¿Qúe es esto?\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "PrxK":
/*!*********************************************!*\
  !*** ./src/app/pages/slides/slides.page.ts ***!
  \*********************************************/
/*! exports provided: SlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPage", function() { return SlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slides_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slides.page.html */ "INly");
/* harmony import */ var _slides_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slides.page.scss */ "xqe7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SlidesPage = class SlidesPage {
    constructor(alertController, navController) {
        this.alertController = alertController;
        this.navController = navController;
        this.slides = [
            {
                img: '/assets/slides/photos.svg',
                titulo: 'Comparte Fotos',
                desc: 'Mira y comparte increíbles fotos de todo el mundo'
            }, {
                img: '/assets/slides/music-player-2.svg',
                titulo: 'Escucha Música',
                desc: 'Toda tu música favorita está aquí'
            }, {
                img: '/assets/slides/calendar.svg',
                titulo: 'Nunca olvides nada',
                desc: 'El mejor calendario del mundo a tu disposición'
            }, {
                img: '/assets/slides/placeholder-1.svg',
                titulo: 'Tu ubicación',
                desc: '¡Siempre sabremos donde estás!'
            }
        ];
        //Optional parameters to pass to the swiper instance.
        //See http://idangero.us/swiper/api/ for valid options.
        this.slideOpts = {
            initialSlide: 0,
            speed: 500
        };
    }
    onClick() {
        this.navController.navigateBack('/');
    }
    clickInfo() {
        this.presentInfo();
    }
    presentInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente slides',
                subHeader: 'Traducido por Google.',
                message: 'El componente slides es un contenedor de varias secciones. Cada sección se puede deslizar o arrastrar entre ellas. Contiene cualquier número de componentes slide.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
};
SlidesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
SlidesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slides',
        template: _raw_loader_slides_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slides_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlidesPage);



/***/ }),

/***/ "vG9B":
/*!***********************************************!*\
  !*** ./src/app/pages/slides/slides.module.ts ***!
  \***********************************************/
/*! exports provided: SlidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides-routing.module */ "0sid");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides.page */ "PrxK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let SlidesPageModule = class SlidesPageModule {
};
SlidesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
    })
], SlidesPageModule);



/***/ }),

/***/ "xqe7":
/*!***********************************************!*\
  !*** ./src/app/pages/slides/slides.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Without setting height the slides will take up the height of the slide's content */\n.slide-full {\n  height: 100% !important;\n}\nion-card {\n  overflow: unset !important;\n}\nion-card {\n  height: 230px;\n  width: 300px;\n}\n.slide-image {\n  width: 100px;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px;\n}\nion-card-header {\n  position: relative;\n  top: -50px;\n}\nion-card-content {\n  position: relative;\n  top: -50px;\n}\n.avatar {\n  width: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.btn {\n  font-size: 31pt;\n  height: auto;\n  padding: 47px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQUE7QUFDQTtFQUNFLHVCQUFBO0FBQ0Y7QUFDQTtFQUNFLDBCQUFBO0FBRUY7QUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBR0Y7QUFEQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FBRUY7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUdGO0FBREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFJRjtBQUZBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS0Y7QUFIQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1GIiwiZmlsZSI6InNsaWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXaXRob3V0IHNldHRpbmcgaGVpZ2h0IHRoZSBzbGlkZXMgd2lsbCB0YWtlIHVwIHRoZSBoZWlnaHQgb2YgdGhlIHNsaWRlJ3MgY29udGVudCAqL1xuLnNsaWRlLWZ1bGx7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmR7XG4gIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmR7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5zbGlkZS1pbWFnZXtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xufVxuaW9uLWNhcmQtaGVhZGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG5pb24tY2FyZC1jb250ZW50e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG4uYXZhdGFye1xuICB3aWR0aDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uYnRue1xuICBmb250LXNpemU6IDMxcHQ7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNDdweDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-slides-slides-module.js.map