(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");











function AppComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onPageSelected(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, item_r3.value));
} }
function AppComponent_div_6_mat_radio_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r9.value)("disabled", item_r9.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.label, " ");
} }
function AppComponent_div_6_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r11.key, ": ", item_r11.value, "");
} }
function AppComponent_div_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Validation Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_6_div_12_div_5_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Raw text output");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx_r8.validationResponse.badwordcount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Safe reading score: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx_r8.validationResponse.safetyScore), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.validationResponse.rawtext, " ");
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_6_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.selectedValidationType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_6_mat_radio_button_2_Template, 2, 3, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Insert the url or text here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onValidateText(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "double_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_6_div_12_Template, 15, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedValidationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.validationTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.validationResponse);
} }
function AppComponent_div_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r21, " ");
} }
function AppComponent_div_7_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22, " ");
} }
function AppComponent_div_7_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r23, " ");
} }
function AppComponent_div_7_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r24, " ");
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Setup Blocklisted words (for NLP Expanded Filtering)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add word to block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onAddBlockWordToLocal(_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "double_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Local blocked words");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_7_div_18_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onAddBlockedWordsToCloud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cloud blocked words");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_div_7_div_26_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Setup Blessed URLs (for AI Models)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add youtube url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onAddYoutubeUrls(_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "double_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Local clean urls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AppComponent_div_7_div_45_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onAddYoutubeUrlsToCloud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cloud clean urls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AppComponent_div_7_div_53_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.localWordsToBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cloudWordsToBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.localYoutubeUrls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.whiteListUrls);
} }
const VALIDATION = 'validation';
const CONFIGURATION = 'configuration (ai/ml)';
const HOW_IT_WORKS = 'How it works?';
const ABOUT_ME = 'About Me';
var VALIDATION_TYPES;
(function (VALIDATION_TYPES) {
    VALIDATION_TYPES["YOUTUBE"] = "youtube";
    VALIDATION_TYPES["DEFAULT"] = "";
})(VALIDATION_TYPES || (VALIDATION_TYPES = {}));
class AppComponent {
    constructor(validationService, configurationService) {
        this.validationService = validationService;
        this.configurationService = configurationService;
        this.title = 'arnav-project';
        this.localWordsToBlock = [];
        this.cloudWordsToBlock = [];
        this.whiteListUrls = [];
        this.localYoutubeUrls = [];
        this.navigationItems = [
            { value: VALIDATION, icon: 'assignment', disabled: false },
            { value: CONFIGURATION, icon: 'settings', disabled: false },
            { value: HOW_IT_WORKS, icon: 'science', disabled: true },
            { value: ABOUT_ME, icon: 'sentiment_satisfied_alt', disabled: true },
        ];
        this.validationTypes = [
            { label: 'Youtube', value: VALIDATION_TYPES.YOUTUBE, disabled: false },
            { label: 'Text', value: VALIDATION_TYPES.DEFAULT, disabled: true },
            {
                label: 'Music comes later',
                value: VALIDATION_TYPES.DEFAULT,
                disabled: true,
            },
            {
                label: 'Saving comes later',
                value: VALIDATION_TYPES.DEFAULT,
                disabled: true,
            },
        ];
        this.selectedValidationType = this.validationTypes[0].value;
        this.isConfigPage = true;
        this.isValidationPage = false;
    }
    ngOnInit() {
        this.configurationService.getConfigs();
        // Called after the constructor and called  after the first ngOnChanges()
    }
    onPageSelected(navItem) {
        const selectedPage = navItem.value;
        this.isConfigPage = selectedPage === CONFIGURATION;
        this.isValidationPage = selectedPage === VALIDATION;
        if (this.isConfigPage) {
            this.configurationService.getConfigs();
        }
    }
    onValidateText(validationTextElement) {
        // capture value
        const inputValue = validationTextElement.value;
        // reset value
        validationTextElement.value = '';
        const request = {
            Yturl: inputValue,
            reqtype: 'youtube',
        };
        this.validationService.validateQuery(request).subscribe((response) => {
            this.validationResponse = response;
            console.log(this.validationResponse);
        });
    }
    onAddBlockWordToLocal(validationTextElement) {
        const value = validationTextElement.value;
        if (!value || !value.trim()) {
            return;
        }
        validationTextElement.value = '';
        this.localWordsToBlock.push(value);
    }
    onAddBlockedWordsToCloud() {
        this.configurationService
            .addWordsToBlock(this.localWordsToBlock)
            .subscribe((result) => {
            this.cloudWordsToBlock = result;
            this.localWordsToBlock = [];
        });
    }
    onAddYoutubeUrls(urlInput) {
        const value = urlInput.value;
        if (!value || !value.trim) {
            return;
        }
        urlInput.value = '';
        this.localYoutubeUrls.push(value);
    }
    onAddYoutubeUrlsToCloud() {
        this.configurationService
            .addWhiteListUrl(this.localYoutubeUrls)
            .subscribe((result) => {
            this.whiteListUrls = result;
            this.localYoutubeUrls = [];
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 3, consts: [[1, "whole-app"], [1, "navigation-section"], [1, "logo"], ["src", "/assets/logo.png", "alt", "image"], [1, "navigation-items"], ["mat-flat-button", "", "color", "primary", "class", "navigation-item", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "validation-page page", 4, "ngIf"], ["class", "config-page page", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "navigation-item", 3, "disabled", "click"], [1, "validation-page", "page"], ["name", "validationTypeList", 1, "validation-options", 3, "ngModel", "ngModelChange"], ["class", "validation-checkbox", "name", "validationTypeList", 3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "validation-text-input-section"], ["matInput", "", "type", "text", "placeholder", "Insert the url or text here", 1, "validation-input"], ["validationTextElement", ""], ["mat-icon-button", "", 1, "validation-submit-button", 3, "click"], ["class", "validation-results-section", 4, "ngIf"], ["name", "validationTypeList", 1, "validation-checkbox", 3, "value", "disabled"], [1, "validation-results-section"], [1, "validation-result-section"], [1, "validation-result-title"], [1, "validation-result"], ["class", "validation-result-word-item", 4, "ngFor", "ngForOf"], [1, "validation-raw-text-section"], [1, "validation-raw-text-title"], [1, "validation-raw-text"], [1, "validation-result-word-item"], [1, "config-page", "page"], [1, "add-word-section"], [1, "blacklist-section-title"], ["matInput", "", "type", "text", "placeholder", "Add word to block"], ["wordToBlock", ""], ["mat-icon-button", "", 3, "click"], [1, "blacklist-section"], [1, "added-words-locally"], ["class", "word-item", 4, "ngFor", "ngForOf"], [1, "added-words-cloud"], [1, "line"], [1, "whitelist-section-title"], [1, "add-url-section"], [1, "add-url-input"], ["matInput", "", "type", "text", "placeholder", "Add youtube urls"], ["youtubeUrlsAdd", ""], [1, "whitelist-section"], [1, "word-item"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_button_5_Template, 6, 5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 13, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 54, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigationItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValidationPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConfigPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PercentPipe"]], styles: [".whole-app[_ngcontent-%COMP%] {\n  background: #5ec3da;\n  height: 100%;\n  display: grid;\n  grid-template-areas: \"navigation \" \"page\" \"footer\";\n  grid-template-rows: -webkit-min-content 1fr 100px;\n  grid-template-rows: min-content 1fr 100px;\n  padding: 0 10em;\n}\n.whole-app[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  grid-area: page;\n}\n.whole-app[_ngcontent-%COMP%]   .navigation-section[_ngcontent-%COMP%] {\n  grid-area: navigation;\n  grid-template-areas: \"logo navigationItems\";\n  display: grid;\n  grid-template-columns: -webkit-min-content 1fr;\n  grid-template-columns: min-content 1fr;\n  padding: 2em 0;\n}\n.whole-app[_ngcontent-%COMP%]   .navigation-section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  grid-area: logo;\n}\n.whole-app[_ngcontent-%COMP%]   .navigation-section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 110px;\n}\n.whole-app[_ngcontent-%COMP%]   .navigation-section[_ngcontent-%COMP%]   .navigation-items[_ngcontent-%COMP%] {\n  grid-area: navigationItems;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  display: grid;\n}\n.whole-app[_ngcontent-%COMP%]   .navigation-section[_ngcontent-%COMP%]   .navigation-items[_ngcontent-%COMP%]   .navigation-item[_ngcontent-%COMP%] {\n  background: black;\n  border-radius: 0;\n}\n.whole-app[_ngcontent-%COMP%]   .navigation-section[_ngcontent-%COMP%]   .navigation-items[_ngcontent-%COMP%]   .navigation-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.whole-app[_ngcontent-%COMP%]   .navigation-section[_ngcontent-%COMP%]   .navigation-items[_ngcontent-%COMP%]   .navigation-item[_ngcontent-%COMP%]:disabled {\n  color: grey;\n}\n.whole-app[_ngcontent-%COMP%]   .validation-page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: -webkit-min-content -webkit-min-content 1fr;\n  grid-template-rows: min-content min-content 1fr;\n  grid-row-gap: 2em;\n}\n.whole-app[_ngcontent-%COMP%]   .validation-page[_ngcontent-%COMP%]   .validation-options[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-column-gap: 1em;\n  display: grid;\n}\n.whole-app[_ngcontent-%COMP%]   .validation-page[_ngcontent-%COMP%]   .validation-options[_ngcontent-%COMP%]   .validation-checkbox[_ngcontent-%COMP%] {\n  background-color: #0357a5;\n  color: white;\n  height: 2em;\n  padding: 1em;\n  border-radius: 1em;\n}\n.whole-app[_ngcontent-%COMP%]   .validation-page[_ngcontent-%COMP%]   .validation-results-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-column-gap: 2em;\n}\n.whole-app[_ngcontent-%COMP%]   .validation-page[_ngcontent-%COMP%]   .validation-results-section[_ngcontent-%COMP%]   .validation-result-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1em 2em;\n  border-radius: 1em;\n}\n.whole-app[_ngcontent-%COMP%]   .validation-page[_ngcontent-%COMP%]   .validation-results-section[_ngcontent-%COMP%]   .validation-result-section[_ngcontent-%COMP%]   .validation-result[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minMax(100px, -webkit-max-content));\n  grid-template-columns: repeat(auto-fill, minMax(100px, max-content));\n  grid-column-gap: 1em;\n}\n.whole-app[_ngcontent-%COMP%]   .validation-page[_ngcontent-%COMP%]   .validation-results-section[_ngcontent-%COMP%]   .validation-result-section[_ngcontent-%COMP%]   .validation-result[_ngcontent-%COMP%]   .validation-result-word-item[_ngcontent-%COMP%] {\n  background: #0357a5;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  border-radius: 1em;\n  height: 35px;\n  color: white;\n}\n.whole-app[_ngcontent-%COMP%]   .validation-page[_ngcontent-%COMP%]   .validation-raw-text-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1em 2em;\n  border-radius: 1em;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .blacklist-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2em;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .blacklist-section[_ngcontent-%COMP%]   .add-word-section[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 50px;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .blacklist-section[_ngcontent-%COMP%]   .added-words-locally[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 50px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minMax(100px, -webkit-max-content));\n  grid-template-columns: repeat(auto-fill, minMax(100px, max-content));\n  grid-column-gap: 1em;\n  grid-row-gap: 0.5em;\n  padding: 0.8em;\n  border-radius: 1em;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .blacklist-section[_ngcontent-%COMP%]   .added-words-cloud[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 50px;\n  background: white;\n  min-height: 50px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minMax(100px, -webkit-max-content));\n  grid-template-columns: repeat(auto-fill, minMax(100px, max-content));\n  grid-column-gap: 1em;\n  grid-row-gap: 0.5em;\n  padding: 0.8em;\n  border-radius: 1em;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .word-item[_ngcontent-%COMP%] {\n  background: #0357a5;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  border-radius: 1em;\n  height: 35px;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  border: 1px solid #408696;\n  margin: 1em 0;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .add-url-input[_ngcontent-%COMP%] {\n  min-width: 20em;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .whitelist-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2em;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .whitelist-section[_ngcontent-%COMP%]   .add-url-section[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 50px;\n  background: white;\n  min-height: 50px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minMax(100px, -webkit-max-content));\n  grid-template-columns: repeat(auto-fill, minMax(100px, max-content));\n  grid-column-gap: 1em;\n  grid-row-gap: 0.5em;\n  padding: 0.8em;\n  border-radius: 1em;\n}\n.whole-app[_ngcontent-%COMP%]   .config-page[_ngcontent-%COMP%]   .whitelist-section[_ngcontent-%COMP%]   .added-urls-locally[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 50px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minMax(100px, -webkit-max-content));\n  grid-template-columns: repeat(auto-fill, minMax(100px, max-content));\n  grid-column-gap: 1em;\n  grid-row-gap: 0.5em;\n  padding: 0.8em;\n  border-radius: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUNFO0VBR0YsaURBQUE7RUFBQSx5Q0FBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0UsZUFBQTtBQUpKO0FBUUU7RUFDRSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLDhDQUFBO0VBQUEsc0NBQUE7RUFDQSxjQUFBO0FBTko7QUFRSTtFQUNFLGVBQUE7QUFOTjtBQVFNO0VBQ0UsYUFBQTtBQU5SO0FBVUk7RUFDRSwwQkFBQTtFQUNBLDJEQUFBO0VBQ0EsYUFBQTtBQVJOO0FBVU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBUlI7QUFVUTtFQUNFLGtCQUFBO0FBUlY7QUFZUTtFQUNFLFdBQUE7QUFWVjtBQWtCRTtFQUNFLGFBQUE7RUFDQSwrREFBQTtFQUFBLCtDQUFBO0VBQ0EsaUJBQUE7QUFoQko7QUFrQkk7RUFDRSwyREFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQWhCTjtBQWtCTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFoQlI7QUEyQkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQXpCTjtBQTJCTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXpCUjtBQTZCUTtFQUNFLGFBQUE7RUFDQSw0RUFBQTtFQUFBLG9FQUFBO0VBQ0Esb0JBQUE7QUEzQlY7QUE2QlU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTNCWjtBQWlDSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQS9CTjtBQTBDSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBeENOO0FBMENNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQXhDUjtBQTZDTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsNEVBQUE7RUFBQSxvRUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUE1Q1I7QUFpRE07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFFQSw0RUFBQTtFQUFBLG9FQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWhEUjtBQXFESTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBbkROO0FBdURJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBckROO0FBMERJO0VBQ0UsZUFBQTtBQXhETjtBQTJESTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBekROO0FBMkRNO0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsNEVBQUE7RUFBQSxvRUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEzRFI7QUErRE07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLDRFQUFBO0VBQUEsb0VBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBOURSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvLyBmb3Igc3R5bGluZ1xyXG5cclxuLndob2xlLWFwcCB7XHJcbiAgYmFja2dyb3VuZDogIzVlYzNkYTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJuYXZpZ2F0aW9uIFwiXHJcbiAgICBcInBhZ2VcIlxyXG4gICAgXCJmb290ZXJcIjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciAxMDBweDtcclxuICBwYWRkaW5nOiAwIDEwZW07XHJcblxyXG4gIC5wYWdlIHtcclxuICAgIGdyaWQtYXJlYTogcGFnZTtcclxuXHJcbiAgfVxyXG5cclxuICAubmF2aWdhdGlvbi1zZWN0aW9uIHtcclxuICAgIGdyaWQtYXJlYTogbmF2aWdhdGlvbjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibG9nbyBuYXZpZ2F0aW9uSXRlbXNcIjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcclxuICAgIHBhZGRpbmc6IDJlbSAwO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgZ3JpZC1hcmVhOiBsb2dvO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24taXRlbXMge1xyXG4gICAgICBncmlkLWFyZWE6IG5hdmlnYXRpb25JdGVtcztcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gICAgICAubmF2aWdhdGlvbi1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnZhbGlkYXRpb24tcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCAxZnI7XHJcbiAgICBncmlkLXJvdy1nYXA6IDJlbTtcclxuXHJcbiAgICAudmFsaWRhdGlvbi1vcHRpb25zIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICAgICAgLnZhbGlkYXRpb24tY2hlY2tib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzU3YTU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnZhbGlkYXRpb24tdGV4dC1pbnB1dC1zZWN0aW9uIHtcclxuICAgICAgLnZhbGlkYXRpb24taW5wdXQge31cclxuXHJcbiAgICAgIC52YWxpZGF0aW9uLXN1Ym1pdC1idXR0b24ge31cclxuICAgIH1cclxuXHJcbiAgICAudmFsaWRhdGlvbi1yZXN1bHRzLXNlY3Rpb24ge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMmVtO1xyXG5cclxuICAgICAgLnZhbGlkYXRpb24tcmVzdWx0LXNlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG5cclxuICAgICAgICAudmFsaWRhdGlvbi1yZXN1bHQtdGl0bGUge31cclxuXHJcbiAgICAgICAgLnZhbGlkYXRpb24tcmVzdWx0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbk1heCgxMDBweCwgbWF4LWNvbnRlbnQpKTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG5cclxuICAgICAgICAgIC52YWxpZGF0aW9uLXJlc3VsdC13b3JkLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM1N2E1O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmFsaWRhdGlvbi1yYXctdGV4dC1zZWN0aW9uIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuXHJcbiAgICAgIC52YWxpZGF0aW9uLXJhdy10ZXh0LXRpdGxlIHt9XHJcblxyXG4gICAgICAudmFsaWRhdGlvbi1yYXctdGV4dCB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbmZpZy1wYWdlIHtcclxuICAgIC5ibGFja2xpc3Qtc2VjdGlvbi10aXRsZSB7fVxyXG5cclxuICAgIC5ibGFja2xpc3Qtc2VjdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XHJcblxyXG4gICAgICAuYWRkLXdvcmQtc2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAuYWRkZWQtd29yZHMtbG9jYWxseSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbk1heCgxMDBweCwgbWF4LWNvbnRlbnQpKTtcclxuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcclxuICAgICAgICBncmlkLXJvdy1nYXA6IC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogMC44ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZGRlZC13b3Jkcy1jbG91ZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWluTWF4KDEwMHB4LCBtYXgtY29udGVudCkpO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICAgICAgIGdyaWQtcm93LWdhcDogLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmQtaXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMzU3YTU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDA4Njk2O1xyXG4gICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC53aGl0ZWxpc3Qtc2VjdGlvbi10aXRsZSB7fVxyXG5cclxuICAgIC5hZGQtdXJsLWlucHV0IHtcclxuICAgICAgbWluLXdpZHRoOiAyMGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC53aGl0ZWxpc3Qtc2VjdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XHJcblxyXG4gICAgICAuYWRkLXVybC1zZWN0aW9uIHtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWluTWF4KDEwMHB4LCBtYXgtY29udGVudCkpO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICAgICAgIGdyaWQtcm93LWdhcDogLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWRkZWQtdXJscy1sb2NhbGx5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWluTWF4KDEwMHB4LCBtYXgtY29udGVudCkpO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICAgICAgIGdyaWQtcm93LWdhcDogLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"] }, { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/configuration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/configuration.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ConfigurationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://76c949e5bc5b.ngrok.io/';
    }
    getConfigs() {
        console.log('getting configs');
        const configUrlPath = 'config';
        const configUrl = this.baseUrl + configUrlPath;
        return this.http.get(configUrl);
    }
    addWordsToBlock(wordsToBlock) {
        console.log('words to block', wordsToBlock);
        const addWordsToBlockUrlPath = 'rawbadwords';
        const addWordsToBlockUrl = this.baseUrl + addWordsToBlockUrlPath;
        const request = {
            'raw-bad-words': wordsToBlock.join(','),
        };
        return this.http.put(addWordsToBlockUrl, request);
    }
    clearWordsToBlock(wordsToBlock) {
        console.log('words to block', wordsToBlock);
        const clearWordsToBlockUrlPath = 'clearrawwords';
        const clearWordsToBlockUrl = this.baseUrl + clearWordsToBlockUrlPath;
        const request = {};
        return this.http.put(clearWordsToBlockUrl, request);
    }
    addWhiteListUrl(urlToWhiteList) {
        console.log('url to whitelist', urlToWhiteList);
        const addWhiteListUrlPath = 'whitelisturls';
        const addWhiteListUrl = this.baseUrl + addWhiteListUrlPath;
        const request = {
            whitelisturls: urlToWhiteList.join(','),
        };
        return this.http.put(addWhiteListUrl, request);
    }
    clearWhiteListUrl(urlToWhiteList) {
        console.log('url to whitelist', urlToWhiteList);
        const clearWhiteListUrlPath = 'whitelisturls';
        const clearWhiteListUrl = this.baseUrl + clearWhiteListUrlPath;
        const request = {};
        return this.http.put(clearWhiteListUrl, request);
    }
}
ConfigurationService.ɵfac = function ConfigurationService_Factory(t) { return new (t || ConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigurationService, factory: ConfigurationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ValidationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://76c949e5bc5b.ngrok.io/';
    }
    validateQuery(validationQuery) {
        console.log('validationQuery', validationQuery);
        const validationUrlPath = 'ytvalidate';
        const validationUrl = this.baseUrl + validationUrlPath;
        return this.http.post(validationUrl, validationQuery);
    }
}
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\akacr\Desktop\youtube-divyTag\Arnav project\arnav-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map