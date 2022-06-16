(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazyLoad-registro-registro-routing-module"],{

/***/ "qmKo":
/*!**************************************************************!*\
  !*** ./src/app/lazyLoad/registro/registro-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: RegistroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroRoutingModule", function() { return RegistroRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registro_administradores_administradores_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registro/administradores/administradores.component */ "rMQq");
/* harmony import */ var _registro_especialistas_especialistas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../registro/especialistas/especialistas.component */ "RakD");
/* harmony import */ var _registro_pacientes_pacientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../registro/pacientes/pacientes.component */ "fdgF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'paciente',
        component: _registro_pacientes_pacientes_component__WEBPACK_IMPORTED_MODULE_3__["PacientesComponent"]
    },
    {
        path: 'especialista',
        component: _registro_especialistas_especialistas_component__WEBPACK_IMPORTED_MODULE_2__["EspecialistasComponent"]
    },
    {
        path: 'administrador',
        component: _registro_administradores_administradores_component__WEBPACK_IMPORTED_MODULE_1__["AdministradoresComponent"]
    },
];
class RegistroRoutingModule {
}
RegistroRoutingModule.ɵfac = function RegistroRoutingModule_Factory(t) { return new (t || RegistroRoutingModule)(); };
RegistroRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RegistroRoutingModule });
RegistroRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RegistroRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=lazyLoad-registro-registro-routing-module.js.map