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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n    const contact = document.createElement('div');\r\n    contact.classList.add('contact');\r\n\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.textContent = '📞 +0123 456 789';\r\n\r\n    const address = document.createElement('p');\r\n    address.textContent = '🏠 Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, United Kingdom'\r\n\r\n    const map = document.createElement('iframe');\r\n    map.setAttribute('id', 'map');\r\n    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1187.6492554059473!2d-2.2893642699140964!3d53.46312498941959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae0cd71ba635%3A0xb583729cbf08cf99!2sSir%20Matt%20Busby%20Way%2C%20Stretford%2C%20Manchester%20M16%200RA%2C%20Spojen%C3%A9%20kr%C3%A1%C4%BEovstvo!5e0!3m2!1ssk!2ssk!4v1677680074910!5m2!1ssk!2ssk')\r\n\r\n    contact.appendChild(phoneNumber);\r\n    contact.appendChild(address);\r\n    contact.appendChild(map);\r\n\r\n    return contact;\r\n};\r\n\r\nfunction drawContact() {\r\n    const main = document.getElementById('main');\r\n    main.textContent = \"\";\r\n    main.appendChild(createContact());\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add('title');\r\n    title.textContent = \"Warehouse Pizzeria\";\r\n\r\n    header.appendChild(title);\r\n    header.appendChild(createNavigation());\r\n\r\n    return header;\r\n}\r\n\r\nfunction createNavigation() {\r\n    const nav = document.createElement('nav');\r\n\r\n    const homeBtn = document.createElement('button');\r\n    homeBtn.textContent = \"Home\"\r\n    homeBtn.classList.add('navBtn');\r\n    homeBtn.addEventListener('click', (e) => {\r\n        setActiveButton(e.target);\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n\r\n    const menuBtn = document.createElement('button');\r\n    menuBtn.textContent = \"Menu\";\r\n    menuBtn.classList.add('navBtn');\r\n    menuBtn.addEventListener('click', (e) => {\r\n        setActiveButton(e.target);\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    })\r\n\r\n    const contactBtn = document.createElement('button');\r\n    contactBtn.textContent = \"Contact\";\r\n    contactBtn.classList.add('navBtn');\r\n    contactBtn.addEventListener('click', (e) => {\r\n        setActiveButton(e.target);\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    })\r\n\r\n    nav.appendChild(homeBtn);\r\n    nav.appendChild(menuBtn);\r\n    nav.appendChild(contactBtn); \r\n\r\n    return nav;\r\n}\r\n\r\nfunction createMain() {\r\n    const main = document.createElement('main');\r\n    main.classList.add('main');\r\n    main.setAttribute('id', 'main');\r\n\r\n    return main;\r\n}\r\n\r\nfunction createFooter() {\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n    \r\n    const p = document.createElement('p');\r\n    p.textContent = \"Copyright © 2023 Pouchlý Marek\";\r\n\r\n    footer.appendChild(p)\r\n\r\n    return footer;\r\n}\r\n\r\nfunction setActiveButton(target) {\r\n    const buttons = document.getElementsByClassName('navBtn');\r\n    Array.from(buttons).forEach( button => {\r\n        button.classList.remove('active');\r\n    });\r\n    target.classList.add('active');\r\n}\r\n\r\nfunction createWebsite() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n    content.appendChild(createFooter());\r\n\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n    const div = document.createElement('div');\r\n    div.classList.add('home');\r\n\r\n    const chefImage = document.createElement('img');\r\n    chefImage.classList.add('chef-image');\r\n    chefImage.src = \"./images/chef.jpg\";\r\n\r\n    div.appendChild(createParagraph(\"Real Italian Pizza\"));\r\n    div.appendChild(createParagraph(\"Come and enjoy the unique taste of dishes prepared by the hands of the chef and his team. Friendly service, genuine Italian atmosphere and delicious wines guarantee you a pleasant time spent in Sapori Italiani - with an Italian.\"))\r\n    div.appendChild(createParagraph(\"Since 2003\"));\r\n    div.appendChild(chefImage);\r\n\r\n    return div;\r\n};\r\n\r\nfunction createParagraph(textContent) {\r\n    const p = document.createElement('p');\r\n    p.textContent = textContent;\r\n    return p;\r\n}\r\n\r\nfunction drawHome() {\r\n    const main = document.getElementById('main');\r\n    main.textContent = \"\";\r\n    main.appendChild(createHome());\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\r\n\r\n(0,_content__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('menu');\r\n\r\n    menu.appendChild(\r\n        createCard(\"Corn\", \"Tomato sauce, Mozzarella, Ham, Corn\")\r\n    );\r\n\r\n    menu.appendChild(\r\n        createCard(\"Ham\", \"Tomato sauce, Mozzarella, Ham\")\r\n    );\r\n\r\n    menu.appendChild(\r\n        createCard(\"Hawai\", \"Tomato sauce, Mozzarella, Ham, Pineapple\")\r\n    );\r\n\r\n    menu.appendChild(\r\n        createCard(\"Mushroom\", \"Tomato sauce, Mozzarella, Ham, Mushroom\")\r\n    );\r\n\r\n    menu.appendChild(\r\n        createCard(\"Pepperoni\", \"Tomato sauce, Mozzarella, Salami, Pepper, Onion, Pepperoni\")\r\n    );\r\n\r\n    menu.appendChild(\r\n        createCard(\"Quattro-Formaggi\", \"Tomato sauce, Mozzarella, Salami, Pepper, Onion, Pepperoni\")\r\n    );\r\n\r\n    return menu;\r\n};\r\n\r\nfunction createCard(pizza, desc) {\r\n    const card = document.createElement('div');\r\n    card.classList.add('card');\r\n\r\n    const img = document.createElement('img');\r\n    img.classList.add('pizza-img');\r\n    img.src = `./images/pizzas/${pizza.toLowerCase()}.jpg`;\r\n\r\n    const title = document.createElement('h2');\r\n    title.classList.add('pizza-title');\r\n    title.textContent = createTitle(pizza);\r\n\r\n    const description = document.createElement('p');\r\n    description.classList.add('pizza-description');\r\n    description.textContent = desc;\r\n\r\n    card.appendChild(img);\r\n    card.appendChild(title);\r\n    card.appendChild(description);\r\n\r\n    return card;\r\n}\r\n\r\nfunction createTitle(title) {\r\n    if ( ! title.includes('-') ) {\r\n        return title;\r\n    } else {\r\n        return title.replace(/-/g, ' ');\r\n    }\r\n}\r\n\r\nfunction drawMenu() {\r\n    const main = document.getElementById('main');\r\n    main.textContent = \"\";\r\n    main.appendChild(createMenu());\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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