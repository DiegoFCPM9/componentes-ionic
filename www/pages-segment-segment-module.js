(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-segment-segment-module"],{

/***/ "Ax9c":
/*!*********************************************************!*\
  !*** ./src/app/pages/segment/segment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SegmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageRoutingModule", function() { return SegmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _segment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segment.page */ "QQGb");




const routes = [
    {
        path: '',
        component: _segment_page__WEBPACK_IMPORTED_MODULE_3__["SegmentPage"]
    }
];
let SegmentPageRoutingModule = class SegmentPageRoutingModule {
};
SegmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SegmentPageRoutingModule);



/***/ }),

/***/ "BiDp":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/segment/segment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Segment</ion-title>\n  </ion-toolbar>\n  <ion-segment value=\"\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"\">\n      <ion-label>Todos</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"DC Comics\">\n      <ion-label>DC Comics</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Marvel\">\n      <ion-label>Marvel</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Segments\">\n      <ion-label>Segments</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-list id='skeleton' class=\"animate__animated animate__fadeIn animate__faster\" *ngIf='(superHeroes | async)===null'>\n    <ion-item *ngFor='let i of [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]'>\n      <ion-label>\n        <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n        <p><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></p>\n      </ion-label>\n      <ion-skeleton-text animated style=\"width: 30%\" slot=\"end\"></ion-skeleton-text>\n    </ion-item>\n  </ion-list>\n  <ion-list id=\"data\">\n    <ion-item *ngFor='let heroe of (superHeroes | async) | filter:textSearch:\"publisher\"'>\n      <ion-label>\n        <h3>{{heroe.superhero}} <small>{{heroe.alter_ego}}</small></h3>\n        <p>{{heroe.first_appearance}}</p>\n      </ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{heroe.publisher}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <br><br><br><br><br>\n  <!-- Default Segment -->\n  <ion-segment (ionChange)=\"segmentChanged($event)\" id=\"segment-1\">\n    <ion-segment-button value=\"friends\">\n      <ion-label>Friends</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"enemies\">\n      <ion-label>Enemies</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <br><br><br>\n  <!-- Disabled Segment -->\n  <ion-segment (ionChange)=\"segmentChanged($event)\" disabled value=\"sunny\" id=\"segment-2\">\n    <ion-segment-button value=\"sunny\">\n      <ion-label>Sunny</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"rainy\">\n      <ion-label>Rainy</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <br><br><br>\n  <!-- Segment with anchors -->\n  <ion-segment (ionChange)=\"segmentChanged($event)\" id=\"segment-3\">\n    <ion-segment-button value=\"dogs\">\n      <ion-label>Dogs</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"cats\">\n      <ion-label>Cats</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <br><br><br>\n  <!-- Scrollable Segment -->\n  <ion-segment scrollable value=\"heart\" id=\"segment-4\">\n    <ion-segment-button value=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"heart\">\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"pin\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"star\">\n      <ion-icon name=\"star\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"call\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"globe\">\n      <ion-icon name=\"globe\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"basket\">\n      <ion-icon name=\"basket\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  <br><br><br>\n  <!-- Segment with secondary color -->\n  <ion-segment (ionChange)=\"segmentChanged($event)\" color=\"secondary\" id=\"segment-5\">\n    <ion-segment-button value=\"standard\">\n      <ion-label>Standard</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"hybrid\">\n      <ion-label>Hybrid</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"sat\">\n      <ion-label>Satellite</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <br><br><br>\n  <!-- Segment with default selection -->\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"javascript\" id=\"segment-6\">\n    <ion-segment-button value=\"python\">\n      <ion-label>Python</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"javascript\">\n      <ion-label>Javascript</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-content>");

/***/ }),

/***/ "QQGb":
/*!***********************************************!*\
  !*** ./src/app/pages/segment/segment.page.ts ***!
  \***********************************************/
/*! exports provided: SegmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPage", function() { return SegmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_segment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./segment.page.html */ "BiDp");
/* harmony import */ var _segment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segment.page.scss */ "aN48");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");





let SegmentPage = class SegmentPage {
    constructor(dataService) {
        this.dataService = dataService;
        this.textSearch = '';
    }
    ngOnInit() {
        this.superHeroes = this.dataService.getHeroes();
    }
    segmentChanged(event) {
        this.textSearch = event.detail.value;
        console.log(this.textSearch);
        if (this.textSearch != 'Segments') {
            for (var K = 1; K <= document.getElementsByTagName('br').length; K++) {
                if (K <= 6) {
                    var id = 'segment-' + K.toString();
                    document.getElementById(id).style.display = 'none';
                }
                document.getElementsByTagName('br')[K].style.display = 'none';
            }
        }
        else {
            for (var K = 1; K <= document.getElementsByTagName('br').length; K++) {
                if (K <= 6) {
                    var id = 'segment-' + K.toString();
                    document.getElementById(id).style.display = 'contents';
                }
                document.getElementsByTagName('br')[K].style.display = 'contents';
            }
        }
    }
};
SegmentPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
SegmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-segment',
        template: _raw_loader_segment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_segment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SegmentPage);



/***/ }),

/***/ "RSS0":
/*!*************************************************!*\
  !*** ./src/app/pages/segment/segment.module.ts ***!
  \*************************************************/
/*! exports provided: SegmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageModule", function() { return SegmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _segment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./segment-routing.module */ "Ax9c");
/* harmony import */ var _segment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment.page */ "QQGb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");









let SegmentPageModule = class SegmentPageModule {
};
SegmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _segment_routing_module__WEBPACK_IMPORTED_MODULE_5__["SegmentPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_segment_page__WEBPACK_IMPORTED_MODULE_6__["SegmentPage"]]
    })
], SegmentPageModule);



/***/ }),

/***/ "aN48":
/*!*************************************************!*\
  !*** ./src/app/pages/segment/segment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWdtZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-segment-segment-module.js.map