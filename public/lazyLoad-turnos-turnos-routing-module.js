(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazyLoad-turnos-turnos-routing-module"],{

/***/ "Kj+S":
/*!**********************************************************!*\
  !*** ./src/app/lazyLoad/turnos/turnos-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TurnosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnosRoutingModule", function() { return TurnosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_paginas_mis_turnos_mis_turnos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/paginas/mis-turnos/mis-turnos.component */ "Bu+M");
/* harmony import */ var src_app_paginas_solicitar_turno_solicitar_turno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/paginas/solicitar-turno/solicitar-turno.component */ "W+Vm");
/* harmony import */ var src_app_paginas_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/paginas/turnos/turnos.component */ "LH+C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'solicitar-turno',
        component: src_app_paginas_solicitar_turno_solicitar_turno_component__WEBPACK_IMPORTED_MODULE_2__["SolicitarTurnoComponent"]
    },
    {
        path: 'turnos',
        component: src_app_paginas_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_3__["TurnosComponent"]
    },
    {
        path: 'mis-turnos',
        component: src_app_paginas_mis_turnos_mis_turnos_component__WEBPACK_IMPORTED_MODULE_1__["MisTurnosComponent"]
    },
];
class TurnosRoutingModule {
}
TurnosRoutingModule.ɵfac = function TurnosRoutingModule_Factory(t) { return new (t || TurnosRoutingModule)(); };
TurnosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TurnosRoutingModule });
TurnosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TurnosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=lazyLoad-turnos-turnos-routing-module.js.map