/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_css/index.css":
/*!************************!*\
  !*** ./_css/index.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/src/index.js):\\nSyntaxError\\n\\n(119:8) Missed semicolon\\n\\n \\u001b[90m 117 | \\u001b[39m  left\\u001b[33m:\\u001b[39m 50px\\u001b[33m;\\u001b[39m\\n \\u001b[90m 118 | \\u001b[39m  z-index\\u001b[33m:\\u001b[39m 99\\u001b[33m;\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 119 | \\u001b[39mcolor\\u001b[33m:\\u001b[39m white\\n \\u001b[90m     | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 120 | \\u001b[39m  mix-blend-mode\\u001b[33m:\\u001b[39m difference\\u001b[33m;\\u001b[39m\\n \\u001b[90m 121 | \\u001b[39m\\u001b[33m}\\u001b[39m\\n\\n    at /Users/shivamsinha/Documents/Design Work/Client Work/Slow Factory/slowfactory.foundation/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /Users/shivamsinha/Documents/Design Work/Client Work/Slow Factory/slowfactory.foundation/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/shivamsinha/Documents/Design Work/Client Work/Slow Factory/slowfactory.foundation/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/shivamsinha/Documents/Design Work/Client Work/Slow Factory/slowfactory.foundation/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at /Users/shivamsinha/Documents/Design Work/Client Work/Slow Factory/slowfactory.foundation/node_modules/postcss-loader/src/index.js:207:9\");\n\n//# sourceURL=webpack:///./_css/index.css?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./_css/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/shivamsinha/Documents/Design Work/Client Work/Slow Factory/slowfactory.foundation/_css/index.css */\"./_css/index.css\");\n\n\n//# sourceURL=webpack:///multi_./_css/index.css?");

/***/ })

/******/ });