/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n    const div = document.createElement('div');\r\n    div.classList.add('contact');\r\n\r\n    return div;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n    const div = document.createElement('div');\r\n    div.classList.add('home');\r\n\r\n    div.appendChild(createParagraph(\"Real Italian Pizza\"));\r\n    div.appendChild(createParagraph(\"Come and enjoy the unique taste of dishes prepared by the hands of the chef and his team. Friendly service, genuine Italian atmosphere and delicious wines guarantee you a pleasant time spent in Sapori Italiani - with an Italian.\"))\r\n    div.appendChild(createParagraph(\"Since 2003\"));\r\n\r\n    return div;\r\n};\r\n\r\nfunction createParagraph(textContent) {\r\n    const p = document.createElement('p');\r\n    p.textContent = textContent;\r\n    return p;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add('title');\r\n    title.textContent = \"Warehouse Pizzeria\";\r\n\r\n    header.appendChild(title);\r\n    header.appendChild(createNavigation());\r\n\r\n    return header;\r\n}\r\n\r\nfunction createNavigation() {\r\n    const nav = document.createElement('nav');\r\n\r\n    const homeBtn = document.createElement('button');\r\n    homeBtn.textContent = \"Home\"\r\n    homeBtn.classList.add('navBtn');\r\n    homeBtn.addEventListener('click', () => {\r\n        const main = document.getElementById('main');\r\n        main.textContent = \"\";\r\n        main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    })\r\n\r\n    const menuBtn = document.createElement('button');\r\n    menuBtn.textContent = \"Menu\";\r\n    menuBtn.classList.add('navBtn');\r\n    menuBtn.addEventListener('click', (e) => {\r\n        console.log(e.target.textContent);\r\n        const main = document.getElementById('main');\r\n        main.textContent = \"\";\r\n        main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    })\r\n\r\n    const contactBtn = document.createElement('button');\r\n    contactBtn.textContent = \"Contact\";\r\n    contactBtn.classList.add('navBtn');\r\n    contactBtn.addEventListener('click', (e) => {\r\n        console.log(e.target.textContent);\r\n        const main = document.getElementById('main');\r\n        main.textContent = \"\";\r\n        main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n    })\r\n\r\n    nav.appendChild(homeBtn);\r\n    nav.appendChild(menuBtn);\r\n    nav.appendChild(contactBtn); \r\n\r\n    return nav;\r\n}\r\n\r\nfunction createMain() {\r\n    const main = document.createElement('main');\r\n    main.classList.add('main');\r\n    main.setAttribute('id', 'main');\r\n\r\n\r\n    return main;\r\n}\r\n\r\nfunction createFooter() {\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n    \r\n    const p = document.createElement('p');\r\n    p.textContent = \"Copyright © 2023 Pouchlý Marek\";\r\n\r\n    footer.appendChild(p)\r\n\r\n    return footer;\r\n}\r\n\r\ncontent.appendChild(createHeader());\r\ncontent.appendChild(createMain());\r\ncontent.appendChild(createFooter());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n    const div = document.createElement('div');\r\n    div.classList.add('menu');\r\n    div.textContent = \"Hello\"\r\n\r\n    return div;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;