(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>\n\n<h1> goog</h1>\n<div align-text=\"center\"><router-outlet></router-outlet></div>\n\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clickable-cuisine/clickable-cuisine.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clickable-cuisine/clickable-cuisine.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<span [hidden]=\"clicked\" class=\"card-body border\" (click)=\"addToArray()\">\n        <!-- style=\"height:200px; width:200px;\" -->\n    {{cuisine}}\n</span>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cuisines/cuisines.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cuisines/cuisines.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <label for=\"registration\">Registration form</label>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"logRegisterValues()\">\n        <label for=\"address\">Address</label>\n        <input type=\"text\" formControlName=\"address\">\n        <div *ngIf=\"!registerForm.controls.address.valid && registerForm.controls.address.touched\">Invalid address</div>\n        <input type=\"submit\"[disabled]=\"!registerForm.valid\">\n        <!-- <div *ngIf=\"!registerForm.valid && registerForm.touched\">Invalid</div> -->\n    </form>\n    <p>Entered address: {{address}}</p>\n    <br>\n\n    <div class=\"container-fluid\" id=\"preferences-form-container\">\n            <div class=\"container-fluid\" id=\"clickables-container\">\n\n        <h1>Which cuisines do you prefer?</h1>                    \n                    </div>\n                    <div class=\"row\">\n                        <app-clickable-cuisine [cuisine]=\"cuisine\" *ngFor=\"let cuisine of cuisines\"></app-clickable-cuisine>\n                    \n                    </div>\n                    </div>\n                    <br>\n        \n                    <h1>Liked Cuisines</h1>\n                    <div class=\"container\">\n                        <app-clickable-cuisine [cuisine]=\"cuisine\" *ngFor=\"let cuisine of likedCuisines\"></app-clickable-cuisine>\n                    </div>\n\n                    <button class=\"btn btn-primary\" (click)=\"submitPreferences()\">Done</button>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Hi {{currentUser.firstName}}!</h1>\n<p>Welcome back! You want more nom noms?</p>\n<h3>Hungry? </h3>\n<ul>\n\n<div class=\"row\">\n<!-- col lg 6 -->\n<app-image-box (click)=\"addToWinners(food)\" [link]=\"food.link\" [name]=\"food.name\" *ngFor=\"let food of battle\"></app-image-box>\n\n\n</div>\n\n    <!-- <li *ngFor=\"let user of users\">\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\n    </li> -->\n\n\n        <!-- <li *ngFor=\"let item of items\">\n    </li> -->\n<!--\n\n\n\n\n</div> -->\n\n\n\n\n\n</ul>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-box/image-box.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-box/image-box.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  <!-- <hr/>List of Images<hr/> -->\n<div class=\"box\" >\n\n  <!-- <div class=\"box\"> -->\n      <div class=\"card\">\n        <div class=\"imgBx\">\n\n\n<!-- <div *ngFor=\"let i of foods\"> -->\n<img [src]=\"image\">\n<!-- </div> -->\n\n\n </div>\n        <div class=\"details\">\n            <h2>{{name}}<br></h2>\n        </div>\n\n\n      <!-- </div> -->\n\n\t  </div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Login</h2>\n<!-- attribute directive binding form to the loginForm prop of login component \nwhen form submitted, formGrup emits ngSubmit event that triggers onSubmit(). binds ngSubmit event to the onSubmit() -->\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <!--  -->\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n\n        <!-- message appear red  -->\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <!-- renders message -->\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    \n<!--     \n\n    <form *ngFor=\"let cuisine of cuisines\"> \n    <label class=\"checkbox-inline\">\n          </label>\n    <input type=\"checkbox\" value=\"\">0\n    </label>\n    <label class=\"checkbox-inline\">\n      <input type=\"checkbox\" value=\"\">1\n    </label>\n    <label class=\"checkbox-inline\">\n      <input type=\"checkbox\" value=\"\">2\n    </label>\n    <label class=\"checkbox-inline\">\n      <input type=\"checkbox\" value=\"\">3\n\n  </form> -->\n\n\n\n\n<div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/_components/alert.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/_components/alert.component.ts ***!
          \************************************************/
        /*! exports provided: AlertComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function () { return AlertComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var AlertComponent = /** @class */ (function () {
                function AlertComponent(alertService) {
                    this.alertService = alertService;
                }
                AlertComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.alertService.getMessage().subscribe(function (message) {
                        _this.message = message;
                    });
                };
                AlertComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                return AlertComponent;
            }());
            AlertComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
            ]; };
            AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'alert',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert.component.html")).default
                })
            ], AlertComponent);
            /***/ 
        }),
        /***/ "./src/app/_components/index.ts": 
        /*!**************************************!*\
          !*** ./src/app/_components/index.ts ***!
          \**************************************/
        /*! exports provided: AlertComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function () { return _alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/_guards/auth.guard.ts": 
        /*!***************************************!*\
          !*** ./src/app/_guards/auth.guard.ts ***!
          \***************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser) {
                        // authorised so return true
                        return true;
                    }
                    // not logged in so redirect to login page with the return url
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/_guards/index.ts": 
        /*!**********************************!*\
          !*** ./src/app/_guards/index.ts ***!
          \**********************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });
            /***/ 
        }),
        /***/ "./src/app/_helpers/error.interceptor.ts": 
        /*!***********************************************!*\
          !*** ./src/app/_helpers/error.interceptor.ts ***!
          \***********************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                ErrorInterceptor.prototype.intercept = function (request, next) {
                    var _this = this;
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                        if (err.status === 401) {
                            // auto logout if 401 response returned from api
                            _this.authenticationService.logout();
                            location.reload(true);
                        }
                        var error = err.error.message || err.statusText;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                    }));
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ErrorInterceptor);
            /***/ 
        }),
        /***/ "./src/app/_helpers/fake-backend.ts": 
        /*!******************************************!*\
          !*** ./src/app/_helpers/fake-backend.ts ***!
          \******************************************/
        /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () { return FakeBackendInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () { return fakeBackendProvider; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var FakeBackendInterceptor = /** @class */ (function () {
                function FakeBackendInterceptor() {
                }
                FakeBackendInterceptor.prototype.intercept = function (request, next) {
                    // array in local storage for registered users
                    var users = JSON.parse(localStorage.getItem('users')) || [];
                    // wrap in delayed observable to simulate server api call
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
                        // authenticate
                        if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                            // find if any user matches login credentials
                            var filteredUsers = users.filter(function (user) {
                                return user.username === request.body.username && user.password === request.body.password;
                            });
                            if (filteredUsers.length) {
                                // if login details are valid return 200 OK with user details and fake jwt token
                                var user = filteredUsers[0];
                                var body = {
                                    id: user.id,
                                    username: user.username,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    token: 'fake-jwt-token'
                                };
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
                            }
                            else {
                                // else return 400 bad request
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                            }
                        }
                        // get users
                        if (request.url.endsWith('/users') && request.method === 'GET') {
                            // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: users }));
                            }
                            else {
                                // return 401 not authorised if token is null or invalid
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                            }
                        }
                        // get user by id
                        if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                            // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                                // find user by id in users array
                                var urlParts = request.url.split('/');
                                var id_1 = parseInt(urlParts[urlParts.length - 1]);
                                var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                                var user = matchedUsers.length ? matchedUsers[0] : null;
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: user }));
                            }
                            else {
                                // return 401 not authorised if token is null or invalid
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                            }
                        }
                        // register user
                        if (request.url.endsWith('/users/register') && request.method === 'POST') {
                            // get new user object from post body
                            var newUser_1 = request.body;
                            // validation
                            var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                            if (duplicateUser) {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                            }
                            // save new user
                            newUser_1.id = users.length + 1;
                            users.push(newUser_1);
                            localStorage.setItem('users', JSON.stringify(users));
                            // respond 200 OK
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
                        }
                        // delete user
                        if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                            // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                                // find user by id in users array
                                var urlParts = request.url.split('/');
                                var id = parseInt(urlParts[urlParts.length - 1]);
                                for (var i = 0; i < users.length; i++) {
                                    var user = users[i];
                                    if (user.id === id) {
                                        // delete user
                                        users.splice(i, 1);
                                        localStorage.setItem('users', JSON.stringify(users));
                                        break;
                                    }
                                }
                                // respond 200 OK
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
                            }
                            else {
                                // return 401 not authorised if token is null or invalid
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                            }
                        }
                        // pass through any requests not handled above
                        return next.handle(request);
                    }))
                        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
                };
                return FakeBackendInterceptor;
            }());
            FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], FakeBackendInterceptor);
            var fakeBackendProvider = {
                // use fake backend in place of Http service for backend-less development
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: FakeBackendInterceptor,
                multi: true
            };
            /***/ 
        }),
        /***/ "./src/app/_helpers/index.ts": 
        /*!***********************************!*\
          !*** ./src/app/_helpers/index.ts ***!
          \***********************************/
        /*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });
            /* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });
            /* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });
            /***/ 
        }),
        /***/ "./src/app/_helpers/jwt.interceptor.ts": 
        /*!*********************************************!*\
          !*** ./src/app/_helpers/jwt.interceptor.ts ***!
          \*********************************************/
        /*! exports provided: JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return JwtInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var JwtInterceptor = /** @class */ (function () {
                function JwtInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                JwtInterceptor.prototype.intercept = function (request, next) {
                    // add authorization header with jwt token if available
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser && currentUser.token) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: "Bearer " + currentUser.token
                            }
                        });
                    }
                    return next.handle(request);
                };
                return JwtInterceptor;
            }());
            JwtInterceptor.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], JwtInterceptor);
            /***/ 
        }),
        /***/ "./src/app/_services/alert.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/_services/alert.service.ts ***!
          \********************************************/
        /*! exports provided: AlertService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function () { return AlertService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AlertService = /** @class */ (function () {
                function AlertService(router) {
                    var _this = this;
                    this.router = router;
                    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.keepAfterNavigationChange = false;
                    // clear alert message on route change
                    router.events.subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                            if (_this.keepAfterNavigationChange) {
                                // only keep for a single location change
                                _this.keepAfterNavigationChange = false;
                            }
                            else {
                                // clear alert
                                _this.subject.next();
                            }
                        }
                    });
                }
                AlertService.prototype.success = function (message, keepAfterNavigationChange) {
                    if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
                    this.keepAfterNavigationChange = keepAfterNavigationChange;
                    this.subject.next({ type: 'success', text: message });
                };
                AlertService.prototype.error = function (message, keepAfterNavigationChange) {
                    if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
                    this.keepAfterNavigationChange = keepAfterNavigationChange;
                    this.subject.next({ type: 'error', text: message });
                };
                AlertService.prototype.getMessage = function () {
                    return this.subject.asObservable();
                };
                return AlertService;
            }());
            AlertService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AlertService);
            /***/ 
        }),
        /***/ "./src/app/_services/authentication.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/_services/authentication.service.ts ***!
          \*****************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http) {
                    //BehaviorSubject (from RxJS) keeps hold of the current value and emits it to any new subscribers as soon as they subscribe
                    this.http = http;
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    //
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthenticationService.prototype.login = function (username, password) {
                    var _this = this;
                    return this.http.post("/users/authenticate", { username: username, password: password })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
                        // login successful if there's a jwt token in the response
                        if (user && user.token) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('currentUser', JSON.stringify(user));
                            _this.currentUserSubject.next(user);
                        }
                        return user;
                    }));
                };
                AuthenticationService.prototype.logout = function () {
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');
                    //Observable get notified of changes and are sent to this method, currentUser is passed into each subscriber
                    this.currentUserSubject.next(null);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/_services/index.ts": 
        /*!************************************!*\
          !*** ./src/app/_services/index.ts ***!
          \************************************/
        /*! exports provided: AlertService, AuthenticationService, UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function () { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });
            /***/ 
        }),
        /***/ "./src/app/_services/user.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/_services/user.service.ts ***!
          \*******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                }
                UserService.prototype.getAll = function () {
                    return this.http.get("/users");
                };
                UserService.prototype.getById = function (id) {
                    return this.http.get("/users/" + id);
                };
                UserService.prototype.register = function (user) {
                    return this.http.post("/users/register", user);
                };
                UserService.prototype.update = function (user) {
                    return this.http.put("/users/" + user.id, user);
                };
                UserService.prototype.delete = function (id) {
                    return this.http.delete("/users/" + id);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, 
                //subscribes to this.authenticationService.currentUser observable
                //updates currentUser when user logs in/out
                authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                    //
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authenticationService.currentUser.subscribe(function (x) {
                        if (!x) {
                            _this.router.navigate(["/login?return=%2F]"]);
                        }
                        else {
                            _this.currentUser = x;
                        }
                    });
                };
                AppComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                    //logs out then redirects back to login page
                    this.router.navigate(['/login']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
            /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
            /* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
            /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
            /* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
            /* harmony import */ var _image_box_image_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image-box/image-box.component */ "./src/app/image-box/image-box.component.ts");
            /* harmony import */ var _clickable_cuisine_clickable_cuisine_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clickable-cuisine/clickable-cuisine.component */ "./src/app/clickable-cuisine/clickable-cuisine.component.ts");
            /* harmony import */ var _cuisines_cuisines_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cuisines/cuisines.component */ "./src/app/cuisines/cuisines.component.ts");
            // used to create fake backend
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"]
                    ],
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                        _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                        _login__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                        _register__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                        _image_box_image_box_component__WEBPACK_IMPORTED_MODULE_12__["ImageBoxComponent"],
                        _cuisines_cuisines_component__WEBPACK_IMPORTED_MODULE_14__["CuisinesComponent"],
                        _clickable_cuisine_clickable_cuisine_component__WEBPACK_IMPORTED_MODULE_13__["ClickableCuisineComponent"],
                    ],
                    providers: [
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
                        // provider used to create fake backend
                        _helpers__WEBPACK_IMPORTED_MODULE_5__["fakeBackendProvider"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routing.ts": 
        /*!********************************!*\
          !*** ./src/app/app.routing.ts ***!
          \********************************/
        /*! exports provided: routing */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function () { return routing; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
            /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
            /* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
            /* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
            var appRoutes = [
                { path: '', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);
            /***/ 
        }),
        /***/ "./src/app/clickable-cuisine/clickable-cuisine.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/clickable-cuisine/clickable-cuisine.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-body {\n    /* border: 3px, firebrick; */\n    border-width: 3px;\n    border-style: double;\n    margin: 15px, 15px;\n}\nspan {\n    /* margin: 15px, 20px;\n     */\n     margin-left: 20px;\n     margin-top: 20px;\n     margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpY2thYmxlLWN1aXNpbmUvY2xpY2thYmxlLWN1aXNpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7TUFDRTtLQUNELGlCQUFpQjtLQUNqQixnQkFBZ0I7S0FDaEIsbUJBQW1CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY2xpY2thYmxlLWN1aXNpbmUvY2xpY2thYmxlLWN1aXNpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkge1xuICAgIC8qIGJvcmRlcjogM3B4LCBmaXJlYnJpY2s7ICovXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gICAgbWFyZ2luOiAxNXB4LCAxNXB4O1xufVxuc3BhbiB7XG4gICAgLyogbWFyZ2luOiAxNXB4LCAyMHB4O1xuICAgICAqL1xuICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/clickable-cuisine/clickable-cuisine.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/clickable-cuisine/clickable-cuisine.component.ts ***!
          \******************************************************************/
        /*! exports provided: ClickableCuisineComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickableCuisineComponent", function () { return ClickableCuisineComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_cuisine_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cuisine-service.service */ "./src/app/services/cuisine-service.service.ts");
            var ClickableCuisineComponent = /** @class */ (function () {
                //inject the cuisine service for access to the data it holds
                function ClickableCuisineComponent(cuisineServiceService) {
                    this.cuisineServiceService = cuisineServiceService;
                }
                ClickableCuisineComponent.prototype.ngOnInit = function () {
                };
                ClickableCuisineComponent.prototype.addToArray = function () {
                    // if the clicked cuisine is not already in likedCuisines, 
                    if (this.cuisineServiceService.likedCuisines.indexOf(this.cuisine) === -1) {
                        //add the clicked cuisine to the 'likedCuisines' array in the service.
                        this.cuisineServiceService.likedCuisines.push(this.cuisine);
                        //log the array as it grows
                        console.log(this.cuisineServiceService.likedCuisines);
                        //set clicked to true to hide the clicked cuisine
                        this.clicked = true;
                    }
                    else {
                        //the cuisine has already been added to likedCuisines on the service and should not be added again
                        alert("Already liked.");
                    }
                };
                return ClickableCuisineComponent;
            }());
            ClickableCuisineComponent.ctorParameters = function () { return [
                { type: _services_cuisine_service_service__WEBPACK_IMPORTED_MODULE_2__["CuisineServiceService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ClickableCuisineComponent.prototype, "cuisine", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ClickableCuisineComponent.prototype, "clicked", void 0);
            ClickableCuisineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-clickable-cuisine',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clickable-cuisine.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clickable-cuisine/clickable-cuisine.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clickable-cuisine.component.css */ "./src/app/clickable-cuisine/clickable-cuisine.component.css")).default]
                })
            ], ClickableCuisineComponent);
            /***/ 
        }),
        /***/ "./src/app/cuisines/cuisines.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/cuisines/cuisines.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1aXNpbmVzL2N1aXNpbmVzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/cuisines/cuisines.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/cuisines/cuisines.component.ts ***!
          \************************************************/
        /*! exports provided: CuisinesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuisinesComponent", function () { return CuisinesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _services_cuisine_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cuisine-service.service */ "./src/app/services/cuisine-service.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var CuisinesComponent = /** @class */ (function () {
                function CuisinesComponent(cuisineServiceService) {
                    this.cuisineServiceService = cuisineServiceService;
                }
                CuisinesComponent.prototype.ngOnInit = function () {
                    //set the cuisines on this component equal to the cuisineService cuisines.
                    this.cuisines = this.cuisineServiceService.cuisines;
                    //set the likedCuisines array of this component to the likedCuisines of the cuisineService
                    this.likedCuisines = this.cuisineServiceService.likedCuisines;
                    //form group with one form control for address.
                    this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                    });
                };
                // runs when registerForm is submitted.
                CuisinesComponent.prototype.logRegisterValues = function () {
                    this.address = this.registerForm.value.address;
                    this.registerForm.reset();
                };
                CuisinesComponent.prototype.submitPreferences = function () {
                    alert("Preferences are: " + this.cuisineServiceService.likedCuisines);
                };
                return CuisinesComponent;
            }());
            CuisinesComponent.ctorParameters = function () { return [
                { type: _services_cuisine_service_service__WEBPACK_IMPORTED_MODULE_1__["CuisineServiceService"] }
            ]; };
            CuisinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-cuisines',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cuisines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cuisines/cuisines.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cuisines.component.css */ "./src/app/cuisines/cuisines.component.css")).default]
                })
            ], CuisinesComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var HomeComponent = /** @class */ (function () {
                // // tslint:disable-next-line: quotemark
                // {image: "https://images.vexels.com/media/users/3/157209/isolated/preview/725aa2473489db2e550656210c557f18-cheesy-pizza-icon-by-vexels.png",
                // name: "pizza",
                // price: "$$",
                // cuisine: "italian"},
                // {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF7nsd9nupjTuUrnBk6CkK9hGBocMe-BqWxyXKmNvhJbHiA42&s",
                // name: "pancakes",
                // price: "$$",
                // cuisine: "italian"},
                // {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKagzoYlQvr8D8nPzqzXaScOQh5BVMtL_5oHvcyjzZ-q4-ng8&s",
                // name: "macaroni",
                // price: "$$",
                // cuisine: "italian"},
                // {image: "https://cdn3.iconfinder.com/data/icons/food-1-11/128/food-24-512.png",
                // name: "noodles",
                // price: "$$",
                // cuisine: "chinese"},
                // {image: "https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg",
                // name: "pancakes",
                // price: "$$",
                // cuisine: "italian"},
                // {image: "https://annarborfamily.com/wp-content/uploads/2018/11/pot-stickers.jpg",
                // name: "dumplings",
                // price: "$$",
                // cuisine: "chinese"
                // }];
                function HomeComponent(authenticationService, userService) {
                    var _this = this;
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.winners = [];
                    this.users = [];
                    this.battle = [];
                    this.progress = 0;
                    this.foods = [];
                    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
                        _this.currentUser = user;
                    });
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loadAllUsers();
                    fetch(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'funs/one')
                        .then(function (response) { return response.json(); })
                        .then(function (doops) { return _this.battle = doops; });
                    console.log(this.battle);
                    this.battle.push(this.foods[0]);
                    this.battle.push(this.foods[1]);
                };
                HomeComponent.prototype.ngOnDestroy = function () {
                    // unsubscribe to ensure no memory leaks
                    this.currentUserSubscription.unsubscribe();
                };
                HomeComponent.prototype.deleteUser = function (id) {
                    var _this = this;
                    this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
                        _this.loadAllUsers();
                    });
                };
                HomeComponent.prototype.loadAllUsers = function () {
                    var _this = this;
                    this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
                        _this.users = users;
                    });
                };
                HomeComponent.prototype.addToWinners = function (food) {
                    console.log(food);
                    this.progress++;
                    if (this.progress === 4) {
                        //TODO navigate
                    }
                    else {
                        this.nextDoops();
                    }
                };
                HomeComponent.prototype.nextDoops = function () {
                    this.foods.splice(0, 2);
                    this.battle.splice(0, 2);
                    this.battle.push(this.foods[0]);
                    this.battle.push(this.foods[1]);
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/index.ts": 
        /*!*******************************!*\
          !*** ./src/app/home/index.ts ***!
          \*******************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/image-box/image-box.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/image-box/image-box.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content:center;\n     align-items: center; \n    min-height: 100vh;\n    background: #212121;\n    font-family: sans-serif;\n  }\n  .box{\n    /* width: 1200px; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    grid-gap: 15px;\n    margin: 0 auto;\n  }\n  .card{\n    position: relative;\n    width: 300px;\n    height: 350px;\n    background: #fff;\n    margin: 0 auto;\n    border-radius: 4px;\n    box-shadow:0 2px 10px rgba(0,0,0,.2);\n  }\n  .card:before,\n  .card:after\n  {\n    content:\"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 4px;\n    background: #fff;\n    transition: 0.5s;\n    z-index:-1;\n  }\n  .card:hover:before{\n  transform: rotate(20deg);\n  box-shadow: 0 2px 20px rgba(0,0,0,.2);\n  }\n  .card:hover:after{\n  transform: rotate(10deg);\n  box-shadow: 0 2px 20px rgba(0,0,0,.2);\n  }\n  .card .imgBx{\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  bottom: 10px;\n  right: 10px;\n  background: #222;\n  transition: 0.5s;\n  z-index: 1;\n  }\n  .card:hover .imgBx\n  {\n    bottom: 80px;\n  }\n  .card .imgBx img{\n      position: relative;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n  }\n  .card .details{\n      position: absolute;\n      left: 10px;\n      right: 10px;\n      bottom: 10px;\n      height: 60px;\n      text-align: center;\n  }\n  /*   .card .details h2{\n   margin: 0;\n   padding: 0;\n   font-weight: 600;\n   font-size: 20px;\n   color: #777;\n   text-transform: uppercase;\n  }  */\n  .card .details h2 span{\n  font-weight: 500;\n  font-size: 16px;\n  color: #f38695;\n  display: block;\n  margin-top: 5px;\n   } \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtYm94L2ltYWdlLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0tBQ3JCLG1CQUFtQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsY0FBYztJQUNkLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9DQUFvQztFQUN0QztFQUNBOzs7SUFHRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7RUFDQTtFQUNBLHdCQUF3QjtFQUN4QixxQ0FBcUM7RUFDckM7RUFDQTtFQUNBLHdCQUF3QjtFQUN4QixxQ0FBcUM7RUFDckM7RUFDQTtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Y7RUFFQTs7SUFFRSxZQUFZO0VBQ2Q7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQWlCO1NBQWpCLGlCQUFpQjtFQUNyQjtFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixXQUFXO01BQ1gsWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0I7RUFDdEI7RUFFRjs7Ozs7OztNQU9NO0VBRUo7RUFDQSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtHQUNkIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2UtYm94L2ltYWdlLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6ICMyMTIxMjE7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbiAgLmJveHtcbiAgICAvKiB3aWR0aDogMTIwMHB4OyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmNhcmR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6MCAycHggMTBweCByZ2JhKDAsMCwwLC4yKTtcbiAgfVxuICAuY2FyZDpiZWZvcmUsXG4gIC5jYXJkOmFmdGVyXG4gIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHotaW5kZXg6LTE7XG4gIH1cbiAgLmNhcmQ6aG92ZXI6YmVmb3Jle1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gIH1cbiAgLmNhcmQ6aG92ZXI6YWZ0ZXJ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsMCwwLC4yKTtcbiAgfVxuICAuY2FyZCAuaW1nQnh7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuY2FyZDpob3ZlciAuaW1nQnhcbiAge1xuICAgIGJvdHRvbTogODBweDtcbiAgfVxuXG4gIC5jYXJkIC5pbWdCeCBpbWd7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC5jYXJkIC5kZXRhaWxze1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi8qICAgLmNhcmQgLmRldGFpbHMgaDJ7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgIGZvbnQtc2l6ZTogMjBweDtcbiAgIGNvbG9yOiAjNzc3O1xuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfSAgKi9cblxuICAuY2FyZCAuZGV0YWlscyBoMiBzcGFue1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZjM4Njk1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICAgfSAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/image-box/image-box.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/image-box/image-box.component.ts ***!
          \**************************************************/
        /*! exports provided: ImageBoxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBoxComponent", function () { return ImageBoxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ImageBoxComponent = /** @class */ (function () {
                function ImageBoxComponent() {
                }
                ImageBoxComponent.prototype.ngOnInit = function () {
                    console.log(this.link);
                };
                return ImageBoxComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ImageBoxComponent.prototype, "link", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ImageBoxComponent.prototype, "name", void 0);
            ImageBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-image-box',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-box/image-box.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-box.component.css */ "./src/app/image-box/image-box.component.css")).default]
                })
            ], ImageBoxComponent);
            /***/ 
        }),
        /***/ "./src/app/login/index.ts": 
        /*!********************************!*\
          !*** ./src/app/login/index.ts ***!
          \********************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var LoginComponent = /** @class */ (function () {
                //dependencies that are required by component, automaticcaly injected when component is created
                function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
                    this.formBuilder = formBuilder;
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.alertService = alertService;
                    this.loading = false;
                    this.submitted = false;
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                //run once after componenet is created
                LoginComponent.prototype.ngOnInit = function () {
                    //creates new FormGroup and assign it to this.loginForm prop
                    this.loginForm = this.formBuilder.group({
                        //params passed into FormBuilder tell it to create 2 form controls: username & password
                        //initalized with "" and set to required
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    // get return url from route parameters or default to '/'
                    //lets you redirect user back to original page before logging in
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                Object.defineProperty(LoginComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.loginForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.loginForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    //authenticationService returns an Observable that we subscribe() for the results of authentication
                    this.authenticationService.login(this.f.username.value, this.f.password.value)
                        //after the first value is emitted, pipe(first()) unsubscribes from the observable immediately
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        //on success, user is redirected to returnUrl by:
                        _this.router.navigate([_this.returnUrl]);
                    }, 
                    //on fail, the error message is stored in this.error
                    function (error) {
                        _this.alertService.error(error);
                        //and loading prop is reset back to false
                        _this.loading = false;
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/register/index.ts": 
        /*!***********************************!*\
          !*** ./src/app/register/index.ts ***!
          \***********************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return _register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/register/register.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.alertService = alertService;
                    this.loading = false;
                    this.submitted = false;
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
                    });
                };
                Object.defineProperty(RegisterComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.registerForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                RegisterComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.registerForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.userService.register(this.registerForm.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.alertService.success('Registration successful', true);
                        _this.router.navigate(['/login']);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default })
            ], RegisterComponent);
            var cuisines = ['american', 'italian', 'chinese'];
            /***/ 
        }),
        /***/ "./src/app/services/cuisine-service.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/cuisine-service.service.ts ***!
          \*****************************************************/
        /*! exports provided: CuisineServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuisineServiceService", function () { return CuisineServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CuisineServiceService = /** @class */ (function () {
                function CuisineServiceService() {
                    this.cuisines = ['Chinese', 'American', 'Japanese'];
                    this.likedCuisines = new Array();
                }
                return CuisineServiceService;
            }());
            CuisineServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CuisineServiceService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                baseUrl: 'http://localhost:8080/api'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\dinhh\1908-aug09-java-aug\DinnerApp-NEO-MASTER\Fronty\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map