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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById(\"content\");\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add('restaurant-name');\r\n    title.textContent = \"Pizzeria\";\r\n\r\n    header.appendChild(title);\r\n    header.appendChild(createNavigation());\r\n\r\n    return header;\r\n}\r\n\r\nfunction createNavigation() {\r\n    const nav = document.createElement('nav');\r\n\r\n    const homeBtn = document.createElement('button');\r\n    homeBtn.textContent = \"Home\"\r\n\r\n    const menuBtn = document.createElement('button');\r\n    menuBtn.textContent = \"Menu\"\r\n\r\n    const contactBtn = document.createElement('button');\r\n    contactBtn.textContent = \"Contact\"\r\n\r\n    nav.appendChild(homeBtn);\r\n    nav.appendChild(menuBtn);\r\n    nav.appendChild(contactBtn);\r\n\r\n    return nav;\r\n}\r\n\r\ncontent.appendChild(createHeader());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;