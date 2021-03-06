/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function() {

eval("var __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nfunction StandardAccess(constructorFn) {\r\n    constructorFn.prototype.role = Role.Standard;\r\n}\r\nfunction ModeratorAccess(constructorFn) {\r\n    constructorFn.prototype.role = Role.Moderator;\r\n}\r\nfunction AdminAccess(constructorFn) {\r\n    constructorFn.prototype.role = Role.Admin;\r\n}\r\nfunction watch(target, propKey, descriptor) {\r\n    var originalFn = target[propKey];\r\n    descriptor.value = function (param) {\r\n        console.log(\"User: \" + param + \" wants \" + propKey);\r\n        return originalFn.call(this, param);\r\n    };\r\n}\r\nvar Role;\r\n(function (Role) {\r\n    Role[\"Standard\"] = \"Standard\";\r\n    Role[\"Moderator\"] = \"Moderator\";\r\n    Role[\"Admin\"] = \"Admin\";\r\n})(Role || (Role = {}));\r\nvar User = /** @class */ (function () {\r\n    function User() {\r\n    }\r\n    User.prototype.toString = function () {\r\n        return this.name + \" \" + this.surname + \" \" + this.role;\r\n    };\r\n    return User;\r\n}());\r\nvar StandardUser = /** @class */ (function (_super) {\r\n    __extends(StandardUser, _super);\r\n    function StandardUser(name, surname) {\r\n        var _this = _super.call(this) || this;\r\n        _this.name = name;\r\n        _this.surname = surname;\r\n        return _this;\r\n    }\r\n    StandardUser = __decorate([\r\n        StandardAccess\r\n    ], StandardUser);\r\n    return StandardUser;\r\n}(User));\r\nvar ModeratorUser = /** @class */ (function (_super) {\r\n    __extends(ModeratorUser, _super);\r\n    function ModeratorUser(name, surname) {\r\n        var _this = _super.call(this) || this;\r\n        _this.name = name;\r\n        _this.surname = surname;\r\n        return _this;\r\n    }\r\n    ModeratorUser = __decorate([\r\n        ModeratorAccess\r\n    ], ModeratorUser);\r\n    return ModeratorUser;\r\n}(User));\r\nvar AdminUser = /** @class */ (function (_super) {\r\n    __extends(AdminUser, _super);\r\n    function AdminUser(name, surname) {\r\n        var _this = _super.call(this) || this;\r\n        _this.name = name;\r\n        _this.surname = surname;\r\n        return _this;\r\n    }\r\n    AdminUser = __decorate([\r\n        AdminAccess\r\n    ], AdminUser);\r\n    return AdminUser;\r\n}(User));\r\nvar Resource = /** @class */ (function () {\r\n    function Resource() {\r\n        this.resourceValue = \"resource value\";\r\n    }\r\n    Resource.prototype.read = function (user) {\r\n        if (user.role === Role.Moderator || user.role === Role.Admin) {\r\n            console.log(this.resourceValue);\r\n        }\r\n    };\r\n    Resource.prototype.change = function (user) {\r\n        if (user.role === Role.Admin) {\r\n            this.resourceValue = \"changed resource value\";\r\n        }\r\n    };\r\n    __decorate([\r\n        watch\r\n    ], Resource.prototype, \"read\");\r\n    __decorate([\r\n        watch\r\n    ], Resource.prototype, \"change\");\r\n    return Resource;\r\n}());\r\nvar user1 = new StandardUser(\"Luke\", \"Skywalker\");\r\nvar user2 = new ModeratorUser(\"Han\", \"Solo\");\r\nvar user3 = new AdminUser(\"Obi-Wan\", \"Kenobi\");\r\nvar res = new Resource();\r\nconsole.log(user1.toString());\r\nconsole.log(user2.toString());\r\nconsole.log(user3.toString());\r\nconsole.log('User 1:');\r\nres.read(user1);\r\nres.change(user1);\r\nconsole.log('User 2:');\r\nres.read(user2);\r\nres.change(user2);\r\nres.read(user3);\r\nconsole.log('User 3:');\r\nres.change(user3);\r\nres.read(user3);\r\n\n\n//# sourceURL=webpack://programowaniewebowe/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;