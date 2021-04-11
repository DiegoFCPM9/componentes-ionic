(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-item-module"],{

/***/ "+bZj":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Items\"></app-header>\n<app-menu></app-menu>\n\n<ion-content class=\"ion-padding\" id=\"main\" fullscreen>\n    <ion-button (click)=\"clickInfo_1()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n        ¿Qúe es esto?\n    </ion-button>\n\n    <h5>Item por defecto</h5>\n    <ion-item>\n        <ion-label>\n            Lorem ipsum dolor sit amet.\n        </ion-label>\n    </ion-item>\n    \n    <h5>Item-Button</h5>\n    <ion-item button (click)=\"buttonClickItem()\">\n        <ion-label>\n            Item-Button\n        </ion-label>\n    </ion-item>\n    \n    <h5>Item con anchor</h5>\n    <ion-item href=\"https://www.ionicframework.com\">\n        <ion-label>\n            Item con anchor\n        </ion-label>\n    </ion-item>\n    \n    <h5>Item de color</h5>\n    <ion-item color=\"primary\">\n        <ion-label>\n            Primary color Item\n        </ion-label>\n    </ion-item>\n    <ion-item color=\"secondary\">\n        <ion-label>\n            Secondary color Item\n        </ion-label>\n    </ion-item>\n    <ion-item color=\"tertiary\">\n        <ion-label>\n            Tertiary color Item\n        </ion-label>\n    </ion-item>\n    <ion-item color=\"success\">\n        <ion-label>\n            Success color Item\n        </ion-label>\n    </ion-item>\n    <ion-item color=\"warning\">\n        <ion-label>\n            Warning color Item\n        </ion-label>\n    </ion-item>\n    <ion-item color=\"danger\">\n        <ion-label>\n            Danger color Item\n        </ion-label>\n    </ion-item>\n\n    <h5>Item con detalle</h5>\n    <ion-item detail>\n        <ion-label>\n            Artículo estándar con flecha de detalle.\n        </ion-label>\n    </ion-item>\n    <h5>Item-Button con detalle</h5>\n    <ion-item button (click)=\"buttonClickItem()\" detail>\n        <ion-label>\n            Item-Button con flecha de detalle.\n        </ion-label>\n    </ion-item>\n    <h5>Item con anchor y detalle</h5>\n    <ion-item detail href=\"https://www.ionicframework.com\">\n        <ion-label>\n            Item con anchor con flecha de detalle.\n        </ion-label>\n    </ion-item>\n\n    <h5>Item de lista</h5>\n    <ion-list>\n        <ion-item>\n          <ion-label>\n            Item de lista por defecto.\n          </ion-label>\n        </ion-item>\n      \n        <ion-item lines=\"none\">\n          <ion-label>\n            Item sin lineas.\n          </ion-label>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">\n            Texto de varias líneas que debe ajustarse cuando es demasiado largo\n            para que quepa en una línea del artículo. \n          </ion-label>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">\n            <ion-text color=\"primary\">\n                <h3>Título con H3. (primary).</h3>\n            </ion-text>\n            <p>Linea 1 del párrafo.</p>\n            <ion-text color=\"secondary\">\n                <p>Linea 1 del párrafo. (secondary).</p>\n            </ion-text>\n            <ion-text color=\"tertiary\">\n                <p>Item con varios párrafos con propiedades distintas. (tertiary).</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n    </ion-list>\n\n    <h3>Item multimedia</h3>\n    <ion-item button (click)=\"buttonClickItem()\">\n        <ion-avatar slot=\"start\">\n            <img src=\"/assets/Avatar.jpg\">\n        </ion-avatar>\n        <ion-label>\n            Item-Button con avatar y datelle.\n        </ion-label>\n    </ion-item>\n    <ion-item href=\"#\">\n        <ion-label>\n            Item-thumbnail con anchor. (end).\n        </ion-label>\n        <ion-thumbnail slot=\"end\">\n            <img src=\"/assets/shapes.svg\">\n        </ion-thumbnail>\n    </ion-item>\n    <ion-item>\n        <ion-thumbnail slot=\"start\">\n            <img src=\"/assets/shapes.svg\">\n        </ion-thumbnail>\n        <ion-label>\n            <h2>Título con H2</h2>\n            <p>Item-thumbnail con anchor. (strat).</p>\n        </ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">Ver</ion-button>\n    </ion-item>\n    <ion-item button (click)=\"buttonClickItem()\" detail=\"false\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"/assets/shapes.svg\">\n        </ion-thumbnail>\n        <ion-label>\n            <h3>Título con H3</h3>\n            <p>Item-thumbnail con button. (strat).</p>\n        </ion-label>\n        <ion-icon name=\"close-circle\" color=\"danger\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <h3>Item-Button</h3>\n    <ion-item>\n        <ion-button slot=\"start\">\n            Button. (start).\n        </ion-button>\n        <ion-label class=\"ion-text-wrap\">Item-Button. (start - end).</ion-label>\n        <ion-button slot=\"end\">\n            Button. (end).\n        </ion-button>\n    </ion-item>\n    <br>\n    <ion-item>\n        <ion-button slot=\"start\">\n            Icon (start).\n            <ion-icon name=\"home\" slot=\"end\"></ion-icon>\n        </ion-button>\n        <ion-label class=\"ion-text-wrap\">Item-Button con iconos. (start - end).</ion-label>\n        <ion-button slot=\"end\">\n            <ion-icon name=\"star\" slot=\"end\"></ion-icon>\n            Icon 'end'.\n        </ion-button>\n    </ion-item>\n      \n    <ion-item>\n        <ion-button slot=\"start\">\n            <ion-icon slot=\"icon-only\" name=\"navigate\"></ion-icon>\n        </ion-button>\n        <ion-label class=\"ion-text-wrap\">Item-Button con sólo iconos.</ion-label>\n        <ion-button slot=\"end\">\n            <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n        </ion-button>\n    </ion-item>\n\n    <h3>Item-Icon</h3>\n    <ion-item>\n        <ion-label>\n            Item-Icon. (end).\n        </ion-label>\n        <ion-icon name=\"logo-html5\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item>\n        <ion-label>\n            Item-Icon large. (end).\n        </ion-label>\n        <ion-icon name=\"logo-css3\" size=\"large\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item>\n        <ion-label>\n            Item-Icon small. (end).\n        </ion-label>\n        <ion-icon name=\"logo-javascript\" size=\"small\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item>\n        <ion-icon name=\"logo-tux\" slot=\"start\"></ion-icon>\n        <ion-label>\n            Item-Icon. (strat).\n        </ion-label>\n    </ion-item>\n      \n    <ion-item>\n        <ion-label>\n            Doble Item-Icon. (end).\n        </ion-label>\n        <ion-icon name=\"logo-apple\" slot=\"end\"></ion-icon>\n        <ion-icon name=\"logo-android\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <section [hidden]=\"dividerState\">\n        <h3>Item-Divider</h3>\n\n        <ion-button (click)=\"clickInfo_2()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n            <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n            ¿Qúe es esto?\n        </ion-button>\n\n        <ion-item-divider color=\"primary\">\n            <ion-label>\n                Item-Divider básico. (primary).\n            </ion-label>\n        </ion-item-divider>\n        <ion-item-divider color=\"secondary\">\n            <ion-label>\n                Item-Divider básico. (secondary).\n            </ion-label>\n        </ion-item-divider>\n        <ion-item-divider color=\"tertiary\">\n            <ion-label>\n                Item-Divider básico. (tertiary).\n            </ion-label>\n        </ion-item-divider>\n          \n        <h3>Item-Divider en una lista</h3>\n        <ion-list>\n            <ion-item-divider color=\"primary\">\n                <ion-label>\n                    Sección A\n                </ion-label>\n            </ion-item-divider>\n            <ion-item><ion-label>Item A1</ion-label></ion-item>\n            <ion-item><ion-label>Item A2</ion-label></ion-item>\n            <ion-item><ion-label>Item A3</ion-label></ion-item>\n            <ion-item><ion-label>Item A4</ion-label></ion-item>\n            <ion-item><ion-label>Item A5</ion-label></ion-item>\n            <br>\n            <ion-item-divider color=\"secondary\">\n                <ion-label>\n                    Section B\n                </ion-label>\n            </ion-item-divider>\n            <ion-item><ion-label>Item B1</ion-label></ion-item>\n            <ion-item><ion-label>Item B2</ion-label></ion-item>\n            <ion-item><ion-label>Item B3</ion-label></ion-item>\n            <ion-item><ion-label>Item B4</ion-label></ion-item>\n            <ion-item><ion-label>Item B5</ion-label></ion-item>\n            <br>\n            <ion-item-divider color=\"tertiary\">\n                <ion-label>\n                    Section C\n                </ion-label>\n            </ion-item-divider>\n            <ion-item><ion-label>Item C1</ion-label></ion-item>\n            <ion-item><ion-label>Item C2</ion-label></ion-item>\n            <ion-item><ion-label>Item C3</ion-label></ion-item>\n            <ion-item><ion-label>Item C4</ion-label></ion-item>\n            <ion-item><ion-label>Item C5</ion-label></ion-item>\n            <br>\n            <ion-item-divider>\n                <ion-label>\n                    Section D\n                </ion-label>\n            </ion-item-divider>\n            <ion-item><ion-label>Item D1</ion-label></ion-item>\n            <ion-item><ion-label>Item D2</ion-label></ion-item>\n            <ion-item><ion-label>Item D3</ion-label></ion-item>\n            <ion-item><ion-label>Item D4</ion-label></ion-item>\n            <ion-item><ion-label>Item D5</ion-label></ion-item>\n        </ion-list>\n    </section>\n\n    <section [hidden]=\"groupsState\">\n        <h3>Item-Group</h3>\n\n        <ion-button (click)=\"clickInfo_3()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n            <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n            ¿Qúe es esto?\n        </ion-button>\n\n        <ion-item-group color=\"primary\">\n            <ion-item-divider>\n                <ion-label>Grupo E</ion-label>\n            </ion-item-divider>\n          \n            <ion-item>\n                <ion-label>España</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Etiopía</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Estambul</ion-label>\n            </ion-item>\n        </ion-item-group>\n          \n        <ion-item-group>\n            <ion-item-divider>\n                <ion-label>Grupo F</ion-label>\n            </ion-item-divider>\n          \n            <ion-item>\n                <ion-label>Foca</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Flamenco</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Fúlica</ion-label>\n            </ion-item>\n        </ion-item-group>\n          \n          \n        <h6>También se pueden utilizar para agrupar elementos deslizantes. (ver en la siguiente sección).</h6>\n        <ion-item-group>\n            <ion-item-divider>\n                <ion-label>\n                    Frutas\n                </ion-label>\n            </ion-item-divider>\n\n            <ion-item-sliding>\n              <ion-item>\n                <ion-label>\n                  <h3>Mandarina</h3>\n                </ion-label>\n              </ion-item>\n              <ion-item-options>\n                <ion-item-option color=\"success\">\n                  Favorita\n                </ion-item-option>\n              </ion-item-options>\n            </ion-item-sliding>\n          \n            <ion-item-sliding>\n              <ion-item>\n                <ion-label>\n                  <h3>Banana</h3>\n                </ion-label>\n              </ion-item>\n              <ion-item-options>\n                <ion-item-option color=\"warning\">\n                  Deliciosa\n                </ion-item-option>\n              </ion-item-options>\n            </ion-item-sliding>\n        </ion-item-group>\n    </section>\n\n    <section [hidden]=\"slidingState\">\n        <h3>Item-Sliding</h3>\n\n        <ion-button (click)=\"clickInfo_4()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n            <ion-icon slot=\"start\" name=\"help-circle-outline\" color=\"primary\"></ion-icon>\n            ¿Qúe es esto?\n        </ion-button>\n\n        <ion-list>\n            <h3>Item-Sliding con opciones de texto en ambos lados</h3>\n            <ion-item-sliding>\n                <ion-item-options side=\"start\">\n                    <ion-item-option color=\"danger\" (click)=\"slidingClickItem()\">Favoritos</ion-item-option>\n                    <ion-item-option color=\"warning\" (click)=\"slidingClickItem()\">Lista de reproducción</ion-item-option>\n                </ion-item-options>\n          \n                <ion-item>\n                    <ion-label>Una canción</ion-label>\n                </ion-item>\n          \n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"tertiary\" (click)=\"slidingClickItem()\">Compartir</ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n          \n            <h3>Item-Sliding con opciones ampliables en ambos lados</h3>\n            <ion-item-sliding>\n                <ion-item-options side=\"start\">\n                    <ion-item-option color=\"danger\" expandable>\n                        Borar\n                    </ion-item-option>\n                </ion-item-options>\n          \n                <ion-item>\n                    <ion-label>Un Archivo</ion-label>\n                </ion-item>\n          \n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"success\" expandable>\n                        Compartir\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n          \n            <h3>Item-Sliding de varias líneas con opciones en ambos lados</h3>\n            <ion-item-sliding id=\"item100\">\n                <ion-item href=\"#\">\n                    <ion-label>\n                        <h2>Notificaciones de HubStruck</h2>\n                        <p>Un nuevo mensaje en tu network</p>\n                        <p>Oceanic Next se ha unido a tu network</p>\n                    </ion-label>\n                    <ion-note slot=\"end\">\n                        10:45 AM\n                    </ion-note>\n                </ion-item>\n          \n                <ion-item-options side=\"start\">\n                    <ion-item-option>\n                    <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n          \n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\">\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-item-option>\n                    <ion-item-option>\n                    <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </section>\n\n    <ion-infinite-scroll threshold=\"47px\" (ionInfinite)=\"loadData()\">\n        <center>\n            <section><ion-img src=\"/assets/Infinite.png\" class=\"infinite\"></ion-img></section>\n            <section><ion-label class=\"infinite-label\">{{statusChange}}</ion-label></section>\n        </center>\n    </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "1fA2":
/*!***************************************************!*\
  !*** ./src/app/pages/item/item-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageRoutingModule", function() { return ItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.page */ "LbwY");




const routes = [
    {
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_3__["ItemPage"]
    }
];
let ItemPageRoutingModule = class ItemPageRoutingModule {
};
ItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemPageRoutingModule);



/***/ }),

/***/ "9Nu0":
/*!*******************************************!*\
  !*** ./src/app/pages/item/item.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".infinite {\n  width: 15%;\n  height: auto;\n}\n\n.infinite-label {\n  font-size: 15pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSiIsImZpbGUiOiJpdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZpbml0ZXtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5pbmZpbml0ZS1sYWJlbHtcbiAgICBmb250LXNpemU6IDE1cHQ7XG59Il19 */");

/***/ }),

/***/ "LbwY":
/*!*****************************************!*\
  !*** ./src/app/pages/item/item.page.ts ***!
  \*****************************************/
/*! exports provided: ItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPage", function() { return ItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item.page.html */ "+bZj");
/* harmony import */ var _item_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.page.scss */ "9Nu0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let ItemPage = class ItemPage {
    constructor(alertController) {
        this.alertController = alertController;
        this.dividerState = true;
        this.groupsState = true;
        this.slidingState = true;
    }
    buttonClickItem() {
        console.log('Click en el item button.');
    }
    slidingClickItem() {
        console.log('Click en el item sliding.');
    }
    clickInfo_1() {
        this.presentInfo_1();
    }
    presentInfo_1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Item',
                subHeader: 'Traducido por Google.',
                message: 'Los items son elementos que pueden contener texto, iconos, avatares, imágenes, entradas y cualquier otro elemento nativo o personalizado. Generalmente se colocan en una lista con otros elementos. Los elementos se pueden deslizar, eliminar, reordenar, editar y más.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
    clickInfo_2() {
        this.presentInfo_2();
    }
    presentInfo_2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Item-Divider',
                subHeader: 'Traducido por Google.',
                message: 'Los Item-Divider son elementos de bloque que se pueden utilizar para separar elementos en una lista. Son similares a los encabezados de lista, pero en lugar de colocarse en la parte superior de una lista, deben ir entre grupos de elementos.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
    clickInfo_3() {
        this.presentInfo_3();
    }
    presentInfo_3() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Item-Group',
                subHeader: 'Traducido por Google.',
                message: 'Los Item-Group son contenedores que organizan artículos similares juntos. Pueden contener divisores de elementos para dividir los elementos en varias secciones. También se pueden utilizar para agrupar elementos deslizantes.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
    clickInfo_4() {
        this.presentInfo_4();
    }
    presentInfo_4() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                header: 'Componente Item-Sliding',
                subHeader: 'Traducido por Google.',
                message: 'Los Item-Sliding contienen un elemento que se puede arrastrar para revelar botones. Requiere un componente de elemento como hijo. Todas las opciones para revelar deben colocarse en el elemento de opciones del artículo.',
                buttons: [{
                        text: 'De acuerdo'
                    }]
            });
            yield alert.present();
        });
    }
    loadData() {
        if (this.dividerState) {
            this.statusChange = 'Cargando Item-Divider...';
        }
        else if (this.groupsState) {
            this.statusChange = 'Cargando Item-Group...';
        }
        else if (this.slidingState) {
            this.statusChange = 'Cargando Item-Sliding...';
        }
        setTimeout(() => {
            if (this.dividerState) {
                this.dividerState = false;
            }
            else if (this.groupsState) {
                this.groupsState = false;
            }
            else if (this.slidingState) {
                this.slidingState = false;
                this.infiniteScroll.disabled = true;
            }
            this.infiniteScroll.complete();
        }, 1447);
    }
};
ItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ItemPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }]
};
ItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item',
        template: _raw_loader_item_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemPage);



/***/ }),

/***/ "bVhl":
/*!*******************************************!*\
  !*** ./src/app/pages/item/item.module.ts ***!
  \*******************************************/
/*! exports provided: ItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageModule", function() { return ItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-routing.module */ "1fA2");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item.page */ "LbwY");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ItemPageModule = class ItemPageModule {
};
ItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]]
    })
], ItemPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-item-item-module.js.map