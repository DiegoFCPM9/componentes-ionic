(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-skeleton-text-skeleton-text-module"],{

/***/ "6A0g":
/*!*************************************************************!*\
  !*** ./src/app/pages/skeleton-text/skeleton-text.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#data {\n  display: none;\n}\n\n#skeleton {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NrZWxldG9uLXRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKIiwiZmlsZSI6InNrZWxldG9uLXRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RhdGF7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiNza2VsZXRvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "AoTh":
/*!*********************************************************************!*\
  !*** ./src/app/pages/skeleton-text/skeleton-text-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SkeletonTextPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonTextPageRoutingModule", function() { return SkeletonTextPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _skeleton_text_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton-text.page */ "dzvO");




const routes = [
    {
        path: '',
        component: _skeleton_text_page__WEBPACK_IMPORTED_MODULE_3__["SkeletonTextPage"]
    }
];
let SkeletonTextPageRoutingModule = class SkeletonTextPageRoutingModule {
};
SkeletonTextPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SkeletonTextPageRoutingModule);



/***/ }),

/***/ "dzvO":
/*!***********************************************************!*\
  !*** ./src/app/pages/skeleton-text/skeleton-text.page.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonTextPage", function() { return SkeletonTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skeleton_text_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skeleton-text.page.html */ "uSta");
/* harmony import */ var _skeleton_text_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skeleton-text.page.scss */ "6A0g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SkeletonTextPage = class SkeletonTextPage {
    constructor() { }
    ngOnInit() {
    }
    toggleSkeleton() {
        const skeletonID = document.getElementById('skeleton'), skeletonStyle = window.getComputedStyle(skeletonID), skeletonDisplay = skeletonStyle.getPropertyValue('display');
        const dataEl = document.getElementById('data'), dataStyle = window.getComputedStyle(dataEl), dataDisplay = dataStyle.getPropertyValue('display');
        document.getElementById('skeleton').style.display = skeletonDisplay === 'none' ? 'block' : 'none';
        document.getElementById('data').style.display = dataDisplay === 'none' ? 'block' : 'none';
    }
};
SkeletonTextPage.ctorParameters = () => [];
SkeletonTextPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skeleton-text',
        template: _raw_loader_skeleton_text_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skeleton_text_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SkeletonTextPage);



/***/ }),

/***/ "onu5":
/*!*************************************************************!*\
  !*** ./src/app/pages/skeleton-text/skeleton-text.module.ts ***!
  \*************************************************************/
/*! exports provided: SkeletonTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonTextPageModule", function() { return SkeletonTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _skeleton_text_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skeleton-text-routing.module */ "AoTh");
/* harmony import */ var _skeleton_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skeleton-text.page */ "dzvO");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let SkeletonTextPageModule = class SkeletonTextPageModule {
};
SkeletonTextPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _skeleton_text_routing_module__WEBPACK_IMPORTED_MODULE_5__["SkeletonTextPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_skeleton_text_page__WEBPACK_IMPORTED_MODULE_6__["SkeletonTextPage"]]
    })
], SkeletonTextPageModule);



/***/ }),

/***/ "uSta":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/skeleton-text/skeleton-text.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Skeleton Text</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"toggleSkeleton()\">Toggle</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullsreen>\n  <ion-list id=\"data\">\n    <ion-list-header>Álbumes</ion-list-header>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://img.discogs.com/WUQhoZcmR3jGFjnekY0G01F0Ctw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9660512-1509544465-3544.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Meet The Orphans</h3>\n        <p>Don Omar</p>\n        <p>2010</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://img.discogs.com/XL2g1DrgKrz3FqPENkuKx3pkDRs=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4096880-1497650927-3449.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>El Ritmo Mundial</h3>\n        <p>Los Fabulosos Cadillacs</p>\n        <p>1988</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://www.cancioneros.com/fotos/ep010312_1.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Elementales</h3>\n        <p>Santiago Cruz</p>\n        <p>2019</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://www.humonegro.com/wp-content/99-POR-CIENTO.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>99%</h3>\n        <p>Ska-P</p>\n        <p>2013</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://img.discogs.com/5JGVyoBqYITLtFapCPfpcoC3ORk=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12547230-1537379625-5875.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>El Vals del Obrero</h3>\n        <p>Ska-P</p>\n        <p>1996</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://img.discogs.com/5YVIsl5YqmeJ3DauIIaH2JBQAWU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13167472-1549215657-2487.jpeg.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Manuel Medrano</h3>\n        <p>Manuel Medrano</p>\n        <p>2015</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://www.signos.fm/wp-content/uploads/2017/03/molotovnin%CC%83as.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>¿Dónde Jugarán las Niñas?</h3>\n        <p>Molotov</p>\n        <p>1997</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://cdns-images.dzcdn.net/images/cover/693f4b95ab11d207cd0f3478487becc9/500x500.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Sanazion</h3>\n        <p>Zona Ganja</p>\n        <p>2007</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list id=\"skeleton\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 80px\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-skeleton-text-skeleton-text-module.js.map