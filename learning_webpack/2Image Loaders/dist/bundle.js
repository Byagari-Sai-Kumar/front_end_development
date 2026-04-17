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

/***/ "./script.js"
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const subscribeImage = __webpack_require__(/*! ./assets/subscribe_image.jpg */ \"./assets/subscribe_image.jpg\");\r\nconst subscribeImageTwo = __webpack_require__(/*! ./assets/new-image.webp */ \"./assets/new-image.webp\");\r\n\r\nvar imageElement = document.getElementById('image-container');\r\nvar imageElementTwo = document.getElementById('image-container-two');\r\nconst buttonElement = document.getElementById('subscribe-button');\r\nvar paraElement = document.getElementById('subscribe-para');\r\n\r\nbuttonElement.addEventListener('click', () => {\r\n    imageElement.src = subscribeImage;\r\n    imageElementTwo.src = subscribeImageTwo;\r\n    paraElement.textContent = 'Thank you for subscribing!!'\r\n})\n\n//# sourceURL=webpack://webpack-image-loader/./script.js?\n}");

/***/ },

/***/ "./assets/new-image.webp"
/*!*******************************!*\
  !*** ./assets/new-image.webp ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"asset/resources/images/bb50b7acdebbe6edf8b2.webp\";\n\n//# sourceURL=webpack://webpack-image-loader/./assets/new-image.webp?\n}");

/***/ },

/***/ "./assets/subscribe_image.jpg"
/*!************************************!*\
  !*** ./assets/subscribe_image.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"asset/resources/images/718b7015412123d41ac3.jpg\";\n\n//# sourceURL=webpack://webpack-image-loader/./assets/subscribe_image.jpg?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;