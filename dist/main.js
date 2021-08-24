/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "navBtns": () => (/* binding */ navBtns)
/* harmony export */ });
const header = () => {
    const element = document.createElement('header');

    element.innerHTML = "BIG BILLY'S VEGAN BURGER BAR";
    return element;
};

const nav = () => {
    const element = document.createElement('nav');
    element.id = 'nav-bar';

    return element;
};

const navBtns = () => {
    const home = document.createElement('div');
    home.classList.add('nav-btn');
    home.id = 'home';
    home.innerHTML = 'HOME';

    const menu = document.createElement('div');
    menu.classList.add('nav-btn');
    menu.id = 'menu';
    menu.innerHTML = 'MENU';  
    
    const contact = document.createElement('div');
    contact.classList.add('nav-btn');
    contact.id = 'contact';
    contact.innerHTML = 'CONTACT';

    return [home, menu, contact];
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const aboutInfo = () => {
    const element = document.createElement('div');

    element.innerHTML = "Here at Big Billy's Vegan Burger Bar we strive to make plant-based burgers that are so delicous you will forget you are not eating meat. Carefully crafted, decadent, mouth-watering burgers that stimulate all the senses. No Meat? No Problem!"
    element.id = 'about';

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutInfo);

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_classic_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/classic.png */ "./src/images/classic.png");
/* harmony import */ var _images_jalapeno_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/jalapeno.png */ "./src/images/jalapeno.png");
/* harmony import */ var _images_guac_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/guac.png */ "./src/images/guac.png");
/* harmony import */ var _images_poboy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/poboy.png */ "./src/images/poboy.png");
/* harmony import */ var _images_super_shrimp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/super-shrimp.png */ "./src/images/super-shrimp.png");
/* harmony import */ var _images_buffalo_chikn_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/buffalo-chikn.png */ "./src/images/buffalo-chikn.png");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_images_classic_png__WEBPACK_IMPORTED_MODULE_0__, _images_jalapeno_png__WEBPACK_IMPORTED_MODULE_1__, _images_guac_png__WEBPACK_IMPORTED_MODULE_2__, _images_poboy_png__WEBPACK_IMPORTED_MODULE_3__, _images_super_shrimp_png__WEBPACK_IMPORTED_MODULE_4__, _images_buffalo_chikn_png__WEBPACK_IMPORTED_MODULE_5__]);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./src/images.js");


const menu = () => {
    const element = document.createElement('div');
    element.id = 'menu-container';

    const classicBurger = new Image();
    classicBurger.src = _images__WEBPACK_IMPORTED_MODULE_0__.default[0];
    classicBurger.classList.add('burger-img');
    classicBurger.id = 'classic-burger';
    element.appendChild(classicBurger);

    const classicDesc = document.createElement('div');
    classicDesc.classList.add('burger-desc');
    classicDesc.id = 'classic-desc';
    const classicTitle = document.createElement('h2');
    classicTitle.innerHTML = 'Classic Burger';
    const classicInfo = document.createElement('p');
    classicInfo.innerHTML = 'Plant-based patty loaded with vegan bacon, vegan cheese, caramelized onions, lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    classicDesc.appendChild(classicTitle);
    classicDesc.appendChild(classicInfo);
    element.appendChild(classicDesc);

    const jalapenoBurger = new Image();
    jalapenoBurger.src = _images__WEBPACK_IMPORTED_MODULE_0__.default[1];
    jalapenoBurger.classList.add('burger-img');
    jalapenoBurger.id = 'jalapeno-burger';
    element.appendChild(jalapenoBurger);

    const jalapenoDesc = document.createElement('div');
    jalapenoDesc.classList.add('burger-desc');
    jalapenoDesc.id = 'jalapeno-desc';
    const jalapenoTitle = document.createElement('h2');
    jalapenoTitle.innerHTML = 'Jalapeño Burger';
    const jalapenoInfo = document.createElement('p');
    jalapenoInfo.innerHTML = 'Plant-based patty loaded with jalapenos, vegan cheese, caramelized onions, lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    jalapenoDesc.appendChild(jalapenoTitle);
    jalapenoDesc.appendChild(jalapenoInfo);
    element.appendChild(jalapenoDesc);

    const guacBurger = new Image();
    guacBurger.src = _images__WEBPACK_IMPORTED_MODULE_0__.default[2];
    guacBurger.classList.add('burger-img');
    guacBurger.id = 'guac-burger';
    element.appendChild(guacBurger);

    const guacDesc = document.createElement('div');
    guacDesc.classList.add('burger-desc');
    guacDesc.id = 'guac-desc';
    const guacTitle = document.createElement('h2');
    guacTitle.innerHTML = 'Guacamole Burger';
    const guacInfo = document.createElement('p');
    guacInfo.innerHTML = 'Plant-based patty loaded with guacamole, vegan cheese, caramelized onions, lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    guacDesc.appendChild(guacTitle);
    guacDesc.appendChild(guacInfo);
    element.appendChild(guacDesc);

    const poboyBurger = new Image();
    poboyBurger.src = _images__WEBPACK_IMPORTED_MODULE_0__.default[3];
    poboyBurger.classList.add('burger-img');
    poboyBurger.id = 'poboy-burger';
    element.appendChild(poboyBurger);

    const poboyDesc = document.createElement('div');
    poboyDesc.classList.add('burger-desc');
    poboyDesc.id = 'poboy-desc';
    const poboyTitle = document.createElement('h2');
    poboyTitle.innerHTML = "Cajun Po' Boy";
    const poboyInfo = document.createElement('p');
    poboyInfo.innerHTML = 'Vegan shrimp tossed in a New Orleans style batter, loaded with lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    poboyDesc.appendChild(poboyTitle);
    poboyDesc.appendChild(poboyInfo);
    element.appendChild(poboyDesc);

    const superShrimpBurger = new Image();
    superShrimpBurger.src = _images__WEBPACK_IMPORTED_MODULE_0__.default[4];
    superShrimpBurger.classList.add('burger-img');
    superShrimpBurger.id = 'super-shrimp-burger';
    element.appendChild(superShrimpBurger);

    const superShrimpDesc = document.createElement('div');
    superShrimpDesc.classList.add('burger-desc');
    superShrimpDesc.id = 'super-shrimp-desc';
    const superShrimpTitle = document.createElement('h2');
    superShrimpTitle.innerHTML = 'Super Shrimp Burger';
    const superShrimpInfo = document.createElement('p');
    superShrimpInfo.innerHTML = 'Plant-based patty loaded with vegan bacon, vegan shrimp, vegan cheese, caramelized onions, lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    superShrimpDesc.appendChild(superShrimpTitle);
    superShrimpDesc.appendChild(superShrimpInfo);
    element.appendChild(superShrimpDesc);

    const buffaloChiknBurger = new Image();
    buffaloChiknBurger.src = _images__WEBPACK_IMPORTED_MODULE_0__.default[5];
    buffaloChiknBurger.classList.add('burger-img');
    buffaloChiknBurger.id = 'buffalo-chikn-burger';
    element.appendChild(buffaloChiknBurger);

    const buffaloChiknDesc = document.createElement('div');
    buffaloChiknDesc.classList.add('burger-desc');
    buffaloChiknDesc.id = 'buffalo-chikn-desc';
    const buffaloChiknTitle = document.createElement('h2');
    buffaloChiknTitle.innerHTML = "Buffalo Chik'n Sandwich";
    const buffaloChiknInfo = document.createElement('p');
    buffaloChiknInfo.innerHTML = 'Plant-based chicken tossed in buffalo sauce topped with pickles, vegan ranch, and coleslaw on a vegan Hawaiian bun.';
    buffaloChiknDesc.appendChild(buffaloChiknTitle);
    buffaloChiknDesc.appendChild(buffaloChiknInfo);
    element.appendChild(buffaloChiknDesc);

    return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/images/buffalo-chikn.png":
/*!**************************************!*\
  !*** ./src/images/buffalo-chikn.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3daa8a6b5f4d51ff8702.png";

/***/ }),

/***/ "./src/images/classic.png":
/*!********************************!*\
  !*** ./src/images/classic.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1b994402feba54d8dd6.png";

/***/ }),

/***/ "./src/images/guac.png":
/*!*****************************!*\
  !*** ./src/images/guac.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db43ffe0242c96f5a0bb.png";

/***/ }),

/***/ "./src/images/jalapeno.png":
/*!*********************************!*\
  !*** ./src/images/jalapeno.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a2ea0aa1fd1cc5e1819.png";

/***/ }),

/***/ "./src/images/poboy.png":
/*!******************************!*\
  !*** ./src/images/poboy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4f379511fd772b95f5f.png";

/***/ }),

/***/ "./src/images/super-shrimp.png":
/*!*************************************!*\
  !*** ./src/images/super-shrimp.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6e6d83a45db3c98d7f9.png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




const body = document.getElementById('content');
const navButtons = (0,_header__WEBPACK_IMPORTED_MODULE_0__.navBtns)();

body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.header)());
body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.nav)());
body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());

const navBar = document.getElementById('nav-bar');
navBar.appendChild(navButtons[0]);
navBar.appendChild(navButtons[1]);
navBar.appendChild(navButtons[2]); 

const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

(function render() {
    const home = document.getElementById('home');
    home.addEventListener('click', () => {
            body.removeChild(body.lastChild);
            body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());
    });

    const menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
            body.removeChild(body.lastChild);
            body.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)());
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnQjtBQUNDO0FBQ0o7QUFDQztBQUNPO0FBQ0M7O0FBRTlDLGlFQUFlLENBQUMsZ0RBQUksRUFBRSxpREFBSSxFQUFFLDZDQUFJLEVBQUUsOENBQUksRUFBRSxxREFBSSxFQUFFLHNEQUFJLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1B4Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLCtDQUFPO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwrQ0FBTztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsK0NBQU87QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLCtDQUFPO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QiwrQ0FBTztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsK0NBQU87QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0duQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmOEM7QUFDZjtBQUNDOztBQUVoQztBQUNBLG1CQUFtQixnREFBTzs7QUFFMUIsaUJBQWlCLCtDQUFNO0FBQ3ZCLGlCQUFpQiw0Q0FBRztBQUNwQixpQkFBaUIsOENBQVM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOENBQVM7QUFDdEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOENBQVU7QUFDdkMsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkJJRyBCSUxMWSdTIFZFR0FOIEJVUkdFUiBCQVJcIjtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IG5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgZWxlbWVudC5pZCA9ICduYXYtYmFyJztcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgbmF2QnRucyA9ICgpID0+IHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgaG9tZS5pZCA9ICdob21lJztcbiAgICBob21lLmlubmVySFRNTCA9ICdIT01FJztcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBtZW51LmlkID0gJ21lbnUnO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gJ01FTlUnOyAgXG4gICAgXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGNvbnRhY3QuaWQgPSAnY29udGFjdCc7XG4gICAgY29udGFjdC5pbm5lckhUTUwgPSAnQ09OVEFDVCc7XG5cbiAgICByZXR1cm4gW2hvbWUsIG1lbnUsIGNvbnRhY3RdO1xufTtcblxuZXhwb3J0IHtoZWFkZXIsIG5hdiwgbmF2QnRuc307IiwiY29uc3QgYWJvdXRJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJIZXJlIGF0IEJpZyBCaWxseSdzIFZlZ2FuIEJ1cmdlciBCYXIgd2Ugc3RyaXZlIHRvIG1ha2UgcGxhbnQtYmFzZWQgYnVyZ2VycyB0aGF0IGFyZSBzbyBkZWxpY291cyB5b3Ugd2lsbCBmb3JnZXQgeW91IGFyZSBub3QgZWF0aW5nIG1lYXQuIENhcmVmdWxseSBjcmFmdGVkLCBkZWNhZGVudCwgbW91dGgtd2F0ZXJpbmcgYnVyZ2VycyB0aGF0IHN0aW11bGF0ZSBhbGwgdGhlIHNlbnNlcy4gTm8gTWVhdD8gTm8gUHJvYmxlbSFcIlxuICAgIGVsZW1lbnQuaWQgPSAnYWJvdXQnO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0SW5mbzsiLCJpbXBvcnQgaW1nMSBmcm9tICcuL2ltYWdlcy9jbGFzc2ljLnBuZyc7XG5pbXBvcnQgaW1nMiBmcm9tICcuL2ltYWdlcy9qYWxhcGVuby5wbmcnO1xuaW1wb3J0IGltZzMgZnJvbSAnLi9pbWFnZXMvZ3VhYy5wbmcnO1xuaW1wb3J0IGltZzQgZnJvbSAnLi9pbWFnZXMvcG9ib3kucG5nJztcbmltcG9ydCBpbWc1IGZyb20gJy4vaW1hZ2VzL3N1cGVyLXNocmltcC5wbmcnO1xuaW1wb3J0IGltZzYgZnJvbSAnLi9pbWFnZXMvYnVmZmFsby1jaGlrbi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBbaW1nMSwgaW1nMiwgaW1nMywgaW1nNCwgaW1nNSwgaW1nNl07XG4iLCJpbXBvcnQgaW1ncyBmcm9tICcuL2ltYWdlcyc7XG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuaWQgPSAnbWVudS1jb250YWluZXInO1xuXG4gICAgY29uc3QgY2xhc3NpY0J1cmdlciA9IG5ldyBJbWFnZSgpO1xuICAgIGNsYXNzaWNCdXJnZXIuc3JjID0gaW1nc1swXTtcbiAgICBjbGFzc2ljQnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1pbWcnKTtcbiAgICBjbGFzc2ljQnVyZ2VyLmlkID0gJ2NsYXNzaWMtYnVyZ2VyJztcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNsYXNzaWNCdXJnZXIpO1xuXG4gICAgY29uc3QgY2xhc3NpY0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbGFzc2ljRGVzYy5jbGFzc0xpc3QuYWRkKCdidXJnZXItZGVzYycpO1xuICAgIGNsYXNzaWNEZXNjLmlkID0gJ2NsYXNzaWMtZGVzYyc7XG4gICAgY29uc3QgY2xhc3NpY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjbGFzc2ljVGl0bGUuaW5uZXJIVE1MID0gJ0NsYXNzaWMgQnVyZ2VyJztcbiAgICBjb25zdCBjbGFzc2ljSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjbGFzc2ljSW5mby5pbm5lckhUTUwgPSAnUGxhbnQtYmFzZWQgcGF0dHkgbG9hZGVkIHdpdGggdmVnYW4gYmFjb24sIHZlZ2FuIGNoZWVzZSwgY2FyYW1lbGl6ZWQgb25pb25zLCBsZXR0dWNlLCB0b21hdG8sIGFuZCBvdXIgaG9tZW1hZGUgYnVyZ2VyIHNhdWNlIG9uIGEgdmVnYW4gSGF3YWlpYW4gYnVuLic7XG4gICAgY2xhc3NpY0Rlc2MuYXBwZW5kQ2hpbGQoY2xhc3NpY1RpdGxlKTtcbiAgICBjbGFzc2ljRGVzYy5hcHBlbmRDaGlsZChjbGFzc2ljSW5mbyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjbGFzc2ljRGVzYyk7XG5cbiAgICBjb25zdCBqYWxhcGVub0J1cmdlciA9IG5ldyBJbWFnZSgpO1xuICAgIGphbGFwZW5vQnVyZ2VyLnNyYyA9IGltZ3NbMV07XG4gICAgamFsYXBlbm9CdXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWltZycpO1xuICAgIGphbGFwZW5vQnVyZ2VyLmlkID0gJ2phbGFwZW5vLWJ1cmdlcic7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChqYWxhcGVub0J1cmdlcik7XG5cbiAgICBjb25zdCBqYWxhcGVub0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBqYWxhcGVub0Rlc2MuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWRlc2MnKTtcbiAgICBqYWxhcGVub0Rlc2MuaWQgPSAnamFsYXBlbm8tZGVzYyc7XG4gICAgY29uc3QgamFsYXBlbm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgamFsYXBlbm9UaXRsZS5pbm5lckhUTUwgPSAnSmFsYXBlw7FvIEJ1cmdlcic7XG4gICAgY29uc3QgamFsYXBlbm9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGphbGFwZW5vSW5mby5pbm5lckhUTUwgPSAnUGxhbnQtYmFzZWQgcGF0dHkgbG9hZGVkIHdpdGggamFsYXBlbm9zLCB2ZWdhbiBjaGVlc2UsIGNhcmFtZWxpemVkIG9uaW9ucywgbGV0dHVjZSwgdG9tYXRvLCBhbmQgb3VyIGhvbWVtYWRlIGJ1cmdlciBzYXVjZSBvbiBhIHZlZ2FuIEhhd2FpaWFuIGJ1bi4nO1xuICAgIGphbGFwZW5vRGVzYy5hcHBlbmRDaGlsZChqYWxhcGVub1RpdGxlKTtcbiAgICBqYWxhcGVub0Rlc2MuYXBwZW5kQ2hpbGQoamFsYXBlbm9JbmZvKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGphbGFwZW5vRGVzYyk7XG5cbiAgICBjb25zdCBndWFjQnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgZ3VhY0J1cmdlci5zcmMgPSBpbWdzWzJdO1xuICAgIGd1YWNCdXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWltZycpO1xuICAgIGd1YWNCdXJnZXIuaWQgPSAnZ3VhYy1idXJnZXInO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ3VhY0J1cmdlcik7XG5cbiAgICBjb25zdCBndWFjRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGd1YWNEZXNjLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1kZXNjJyk7XG4gICAgZ3VhY0Rlc2MuaWQgPSAnZ3VhYy1kZXNjJztcbiAgICBjb25zdCBndWFjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGd1YWNUaXRsZS5pbm5lckhUTUwgPSAnR3VhY2Ftb2xlIEJ1cmdlcic7XG4gICAgY29uc3QgZ3VhY0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ3VhY0luZm8uaW5uZXJIVE1MID0gJ1BsYW50LWJhc2VkIHBhdHR5IGxvYWRlZCB3aXRoIGd1YWNhbW9sZSwgdmVnYW4gY2hlZXNlLCBjYXJhbWVsaXplZCBvbmlvbnMsIGxldHR1Y2UsIHRvbWF0bywgYW5kIG91ciBob21lbWFkZSBidXJnZXIgc2F1Y2Ugb24gYSB2ZWdhbiBIYXdhaWlhbiBidW4uJztcbiAgICBndWFjRGVzYy5hcHBlbmRDaGlsZChndWFjVGl0bGUpO1xuICAgIGd1YWNEZXNjLmFwcGVuZENoaWxkKGd1YWNJbmZvKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGd1YWNEZXNjKTtcblxuICAgIGNvbnN0IHBvYm95QnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgcG9ib3lCdXJnZXIuc3JjID0gaW1nc1szXTtcbiAgICBwb2JveUJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXItaW1nJyk7XG4gICAgcG9ib3lCdXJnZXIuaWQgPSAncG9ib3ktYnVyZ2VyJztcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBvYm95QnVyZ2VyKTtcblxuICAgIGNvbnN0IHBvYm95RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvYm95RGVzYy5jbGFzc0xpc3QuYWRkKCdidXJnZXItZGVzYycpO1xuICAgIHBvYm95RGVzYy5pZCA9ICdwb2JveS1kZXNjJztcbiAgICBjb25zdCBwb2JveVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwb2JveVRpdGxlLmlubmVySFRNTCA9IFwiQ2FqdW4gUG8nIEJveVwiO1xuICAgIGNvbnN0IHBvYm95SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwb2JveUluZm8uaW5uZXJIVE1MID0gJ1ZlZ2FuIHNocmltcCB0b3NzZWQgaW4gYSBOZXcgT3JsZWFucyBzdHlsZSBiYXR0ZXIsIGxvYWRlZCB3aXRoIGxldHR1Y2UsIHRvbWF0bywgYW5kIG91ciBob21lbWFkZSBidXJnZXIgc2F1Y2Ugb24gYSB2ZWdhbiBIYXdhaWlhbiBidW4uJztcbiAgICBwb2JveURlc2MuYXBwZW5kQ2hpbGQocG9ib3lUaXRsZSk7XG4gICAgcG9ib3lEZXNjLmFwcGVuZENoaWxkKHBvYm95SW5mbyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwb2JveURlc2MpO1xuXG4gICAgY29uc3Qgc3VwZXJTaHJpbXBCdXJnZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdXBlclNocmltcEJ1cmdlci5zcmMgPSBpbWdzWzRdO1xuICAgIHN1cGVyU2hyaW1wQnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1pbWcnKTtcbiAgICBzdXBlclNocmltcEJ1cmdlci5pZCA9ICdzdXBlci1zaHJpbXAtYnVyZ2VyJztcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN1cGVyU2hyaW1wQnVyZ2VyKTtcblxuICAgIGNvbnN0IHN1cGVyU2hyaW1wRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1cGVyU2hyaW1wRGVzYy5jbGFzc0xpc3QuYWRkKCdidXJnZXItZGVzYycpO1xuICAgIHN1cGVyU2hyaW1wRGVzYy5pZCA9ICdzdXBlci1zaHJpbXAtZGVzYyc7XG4gICAgY29uc3Qgc3VwZXJTaHJpbXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc3VwZXJTaHJpbXBUaXRsZS5pbm5lckhUTUwgPSAnU3VwZXIgU2hyaW1wIEJ1cmdlcic7XG4gICAgY29uc3Qgc3VwZXJTaHJpbXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN1cGVyU2hyaW1wSW5mby5pbm5lckhUTUwgPSAnUGxhbnQtYmFzZWQgcGF0dHkgbG9hZGVkIHdpdGggdmVnYW4gYmFjb24sIHZlZ2FuIHNocmltcCwgdmVnYW4gY2hlZXNlLCBjYXJhbWVsaXplZCBvbmlvbnMsIGxldHR1Y2UsIHRvbWF0bywgYW5kIG91ciBob21lbWFkZSBidXJnZXIgc2F1Y2Ugb24gYSB2ZWdhbiBIYXdhaWlhbiBidW4uJztcbiAgICBzdXBlclNocmltcERlc2MuYXBwZW5kQ2hpbGQoc3VwZXJTaHJpbXBUaXRsZSk7XG4gICAgc3VwZXJTaHJpbXBEZXNjLmFwcGVuZENoaWxkKHN1cGVyU2hyaW1wSW5mbyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdXBlclNocmltcERlc2MpO1xuXG4gICAgY29uc3QgYnVmZmFsb0NoaWtuQnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgYnVmZmFsb0NoaWtuQnVyZ2VyLnNyYyA9IGltZ3NbNV07XG4gICAgYnVmZmFsb0NoaWtuQnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1pbWcnKTtcbiAgICBidWZmYWxvQ2hpa25CdXJnZXIuaWQgPSAnYnVmZmFsby1jaGlrbi1idXJnZXInO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVmZmFsb0NoaWtuQnVyZ2VyKTtcblxuICAgIGNvbnN0IGJ1ZmZhbG9DaGlrbkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidWZmYWxvQ2hpa25EZXNjLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1kZXNjJyk7XG4gICAgYnVmZmFsb0NoaWtuRGVzYy5pZCA9ICdidWZmYWxvLWNoaWtuLWRlc2MnO1xuICAgIGNvbnN0IGJ1ZmZhbG9DaGlrblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBidWZmYWxvQ2hpa25UaXRsZS5pbm5lckhUTUwgPSBcIkJ1ZmZhbG8gQ2hpayduIFNhbmR3aWNoXCI7XG4gICAgY29uc3QgYnVmZmFsb0NoaWtuSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBidWZmYWxvQ2hpa25JbmZvLmlubmVySFRNTCA9ICdQbGFudC1iYXNlZCBjaGlja2VuIHRvc3NlZCBpbiBidWZmYWxvIHNhdWNlIHRvcHBlZCB3aXRoIHBpY2tsZXMsIHZlZ2FuIHJhbmNoLCBhbmQgY29sZXNsYXcgb24gYSB2ZWdhbiBIYXdhaWlhbiBidW4uJztcbiAgICBidWZmYWxvQ2hpa25EZXNjLmFwcGVuZENoaWxkKGJ1ZmZhbG9DaGlrblRpdGxlKTtcbiAgICBidWZmYWxvQ2hpa25EZXNjLmFwcGVuZENoaWxkKGJ1ZmZhbG9DaGlrbkluZm8pO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVmZmFsb0NoaWtuRGVzYyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtoZWFkZXIsIG5hdiwgbmF2QnRuc30gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IGFib3V0SW5mbyBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBuYXZCdXR0b25zID0gbmF2QnRucygpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmJvZHkuYXBwZW5kQ2hpbGQobmF2KCkpO1xuYm9keS5hcHBlbmRDaGlsZChhYm91dEluZm8oKSk7XG5cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtYmFyJyk7XG5uYXZCYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uc1swXSk7XG5uYXZCYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uc1sxXSk7XG5uYXZCYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uc1syXSk7IFxuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuXG4oZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRJbmZvKCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyZW5kZXJNZW51KCkpO1xuICAgIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==