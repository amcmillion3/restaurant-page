/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactInfo = () => {
    const element = document.createElement('div');

    element.innerHTML = "We are open 7 days a week 12pm - 12am. Come by and see us at 9876 Bangin' Plant Based Ave. Veganville, GA 83746"
    element.id = 'contact-info';

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactInfo);

/***/ }),

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const body = document.getElementById('content');
const navButtons = (0,_header__WEBPACK_IMPORTED_MODULE_0__.navBtns)();

body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.header)());
body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.nav)());
body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());

const navBar = document.getElementById('nav-bar');
navBar.appendChild(navButtons[0]);
navBar.appendChild(navButtons[1]);
navBar.appendChild(navButtons[2]); 

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

    const contact = document.getElementById('contact');
    contact.addEventListener('click', () => {
        body.removeChild(body.lastChild);
        body.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)());
});
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIldlIGFyZSBvcGVuIDcgZGF5cyBhIHdlZWsgMTJwbSAtIDEyYW0uIENvbWUgYnkgYW5kIHNlZSB1cyBhdCA5ODc2IEJhbmdpbicgUGxhbnQgQmFzZWQgQXZlLiBWZWdhbnZpbGxlLCBHQSA4Mzc0NlwiXG4gICAgZWxlbWVudC5pZCA9ICdjb250YWN0LWluZm8nO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RJbmZvOyIsImNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiQklHIEJJTExZJ1MgVkVHQU4gQlVSR0VSIEJBUlwiO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgbmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBlbGVtZW50LmlkID0gJ25hdi1iYXInO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBuYXZCdG5zID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBob21lLmlkID0gJ2hvbWUnO1xuICAgIGhvbWUuaW5uZXJIVE1MID0gJ0hPTUUnO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgbWVudS5pbm5lckhUTUwgPSAnTUVOVSc7ICBcbiAgICBcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdC5pZCA9ICdjb250YWN0JztcbiAgICBjb250YWN0LmlubmVySFRNTCA9ICdDT05UQUNUJztcblxuICAgIHJldHVybiBbaG9tZSwgbWVudSwgY29udGFjdF07XG59O1xuXG5leHBvcnQge2hlYWRlciwgbmF2LCBuYXZCdG5zfTsiLCJjb25zdCBhYm91dEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkhlcmUgYXQgQmlnIEJpbGx5J3MgVmVnYW4gQnVyZ2VyIEJhciB3ZSBzdHJpdmUgdG8gbWFrZSBwbGFudC1iYXNlZCBidXJnZXJzIHRoYXQgYXJlIHNvIGRlbGljb3VzIHlvdSB3aWxsIGZvcmdldCB5b3UgYXJlIG5vdCBlYXRpbmcgbWVhdC4gQ2FyZWZ1bGx5IGNyYWZ0ZWQsIGRlY2FkZW50LCBtb3V0aC13YXRlcmluZyBidXJnZXJzIHRoYXQgc3RpbXVsYXRlIGFsbCB0aGUgc2Vuc2VzLiBObyBNZWF0PyBObyBQcm9ibGVtIVwiXG4gICAgZWxlbWVudC5pZCA9ICdhYm91dCc7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRJbmZvOyIsImltcG9ydCBpbWcxIGZyb20gJy4vaW1hZ2VzL2NsYXNzaWMucG5nJztcbmltcG9ydCBpbWcyIGZyb20gJy4vaW1hZ2VzL2phbGFwZW5vLnBuZyc7XG5pbXBvcnQgaW1nMyBmcm9tICcuL2ltYWdlcy9ndWFjLnBuZyc7XG5pbXBvcnQgaW1nNCBmcm9tICcuL2ltYWdlcy9wb2JveS5wbmcnO1xuaW1wb3J0IGltZzUgZnJvbSAnLi9pbWFnZXMvc3VwZXItc2hyaW1wLnBuZyc7XG5pbXBvcnQgaW1nNiBmcm9tICcuL2ltYWdlcy9idWZmYWxvLWNoaWtuLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0LCBpbWc1LCBpbWc2XTtcbiIsImltcG9ydCBpbWdzIGZyb20gJy4vaW1hZ2VzJztcblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5pZCA9ICdtZW51LWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCBjbGFzc2ljQnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgY2xhc3NpY0J1cmdlci5zcmMgPSBpbWdzWzBdO1xuICAgIGNsYXNzaWNCdXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWltZycpO1xuICAgIGNsYXNzaWNCdXJnZXIuaWQgPSAnY2xhc3NpYy1idXJnZXInO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xhc3NpY0J1cmdlcik7XG5cbiAgICBjb25zdCBjbGFzc2ljRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsYXNzaWNEZXNjLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1kZXNjJyk7XG4gICAgY2xhc3NpY0Rlc2MuaWQgPSAnY2xhc3NpYy1kZXNjJztcbiAgICBjb25zdCBjbGFzc2ljVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNsYXNzaWNUaXRsZS5pbm5lckhUTUwgPSAnQ2xhc3NpYyBCdXJnZXInO1xuICAgIGNvbnN0IGNsYXNzaWNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNsYXNzaWNJbmZvLmlubmVySFRNTCA9ICdQbGFudC1iYXNlZCBwYXR0eSBsb2FkZWQgd2l0aCB2ZWdhbiBiYWNvbiwgdmVnYW4gY2hlZXNlLCBjYXJhbWVsaXplZCBvbmlvbnMsIGxldHR1Y2UsIHRvbWF0bywgYW5kIG91ciBob21lbWFkZSBidXJnZXIgc2F1Y2Ugb24gYSB2ZWdhbiBIYXdhaWlhbiBidW4uJztcbiAgICBjbGFzc2ljRGVzYy5hcHBlbmRDaGlsZChjbGFzc2ljVGl0bGUpO1xuICAgIGNsYXNzaWNEZXNjLmFwcGVuZENoaWxkKGNsYXNzaWNJbmZvKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNsYXNzaWNEZXNjKTtcblxuICAgIGNvbnN0IGphbGFwZW5vQnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgamFsYXBlbm9CdXJnZXIuc3JjID0gaW1nc1sxXTtcbiAgICBqYWxhcGVub0J1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXItaW1nJyk7XG4gICAgamFsYXBlbm9CdXJnZXIuaWQgPSAnamFsYXBlbm8tYnVyZ2VyJztcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGphbGFwZW5vQnVyZ2VyKTtcblxuICAgIGNvbnN0IGphbGFwZW5vRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGphbGFwZW5vRGVzYy5jbGFzc0xpc3QuYWRkKCdidXJnZXItZGVzYycpO1xuICAgIGphbGFwZW5vRGVzYy5pZCA9ICdqYWxhcGVuby1kZXNjJztcbiAgICBjb25zdCBqYWxhcGVub1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBqYWxhcGVub1RpdGxlLmlubmVySFRNTCA9ICdKYWxhcGXDsW8gQnVyZ2VyJztcbiAgICBjb25zdCBqYWxhcGVub0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgamFsYXBlbm9JbmZvLmlubmVySFRNTCA9ICdQbGFudC1iYXNlZCBwYXR0eSBsb2FkZWQgd2l0aCBqYWxhcGVub3MsIHZlZ2FuIGNoZWVzZSwgY2FyYW1lbGl6ZWQgb25pb25zLCBsZXR0dWNlLCB0b21hdG8sIGFuZCBvdXIgaG9tZW1hZGUgYnVyZ2VyIHNhdWNlIG9uIGEgdmVnYW4gSGF3YWlpYW4gYnVuLic7XG4gICAgamFsYXBlbm9EZXNjLmFwcGVuZENoaWxkKGphbGFwZW5vVGl0bGUpO1xuICAgIGphbGFwZW5vRGVzYy5hcHBlbmRDaGlsZChqYWxhcGVub0luZm8pO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoamFsYXBlbm9EZXNjKTtcblxuICAgIGNvbnN0IGd1YWNCdXJnZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBndWFjQnVyZ2VyLnNyYyA9IGltZ3NbMl07XG4gICAgZ3VhY0J1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXItaW1nJyk7XG4gICAgZ3VhY0J1cmdlci5pZCA9ICdndWFjLWJ1cmdlcic7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChndWFjQnVyZ2VyKTtcblxuICAgIGNvbnN0IGd1YWNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3VhY0Rlc2MuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWRlc2MnKTtcbiAgICBndWFjRGVzYy5pZCA9ICdndWFjLWRlc2MnO1xuICAgIGNvbnN0IGd1YWNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZ3VhY1RpdGxlLmlubmVySFRNTCA9ICdHdWFjYW1vbGUgQnVyZ2VyJztcbiAgICBjb25zdCBndWFjSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBndWFjSW5mby5pbm5lckhUTUwgPSAnUGxhbnQtYmFzZWQgcGF0dHkgbG9hZGVkIHdpdGggZ3VhY2Ftb2xlLCB2ZWdhbiBjaGVlc2UsIGNhcmFtZWxpemVkIG9uaW9ucywgbGV0dHVjZSwgdG9tYXRvLCBhbmQgb3VyIGhvbWVtYWRlIGJ1cmdlciBzYXVjZSBvbiBhIHZlZ2FuIEhhd2FpaWFuIGJ1bi4nO1xuICAgIGd1YWNEZXNjLmFwcGVuZENoaWxkKGd1YWNUaXRsZSk7XG4gICAgZ3VhY0Rlc2MuYXBwZW5kQ2hpbGQoZ3VhY0luZm8pO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ3VhY0Rlc2MpO1xuXG4gICAgY29uc3QgcG9ib3lCdXJnZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBwb2JveUJ1cmdlci5zcmMgPSBpbWdzWzNdO1xuICAgIHBvYm95QnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1pbWcnKTtcbiAgICBwb2JveUJ1cmdlci5pZCA9ICdwb2JveS1idXJnZXInO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocG9ib3lCdXJnZXIpO1xuXG4gICAgY29uc3QgcG9ib3lEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9ib3lEZXNjLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1kZXNjJyk7XG4gICAgcG9ib3lEZXNjLmlkID0gJ3BvYm95LWRlc2MnO1xuICAgIGNvbnN0IHBvYm95VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBvYm95VGl0bGUuaW5uZXJIVE1MID0gXCJDYWp1biBQbycgQm95XCI7XG4gICAgY29uc3QgcG9ib3lJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBvYm95SW5mby5pbm5lckhUTUwgPSAnVmVnYW4gc2hyaW1wIHRvc3NlZCBpbiBhIE5ldyBPcmxlYW5zIHN0eWxlIGJhdHRlciwgbG9hZGVkIHdpdGggbGV0dHVjZSwgdG9tYXRvLCBhbmQgb3VyIGhvbWVtYWRlIGJ1cmdlciBzYXVjZSBvbiBhIHZlZ2FuIEhhd2FpaWFuIGJ1bi4nO1xuICAgIHBvYm95RGVzYy5hcHBlbmRDaGlsZChwb2JveVRpdGxlKTtcbiAgICBwb2JveURlc2MuYXBwZW5kQ2hpbGQocG9ib3lJbmZvKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBvYm95RGVzYyk7XG5cbiAgICBjb25zdCBzdXBlclNocmltcEJ1cmdlciA9IG5ldyBJbWFnZSgpO1xuICAgIHN1cGVyU2hyaW1wQnVyZ2VyLnNyYyA9IGltZ3NbNF07XG4gICAgc3VwZXJTaHJpbXBCdXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWltZycpO1xuICAgIHN1cGVyU2hyaW1wQnVyZ2VyLmlkID0gJ3N1cGVyLXNocmltcC1idXJnZXInO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VwZXJTaHJpbXBCdXJnZXIpO1xuXG4gICAgY29uc3Qgc3VwZXJTaHJpbXBEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VwZXJTaHJpbXBEZXNjLmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1kZXNjJyk7XG4gICAgc3VwZXJTaHJpbXBEZXNjLmlkID0gJ3N1cGVyLXNocmltcC1kZXNjJztcbiAgICBjb25zdCBzdXBlclNocmltcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdXBlclNocmltcFRpdGxlLmlubmVySFRNTCA9ICdTdXBlciBTaHJpbXAgQnVyZ2VyJztcbiAgICBjb25zdCBzdXBlclNocmltcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VwZXJTaHJpbXBJbmZvLmlubmVySFRNTCA9ICdQbGFudC1iYXNlZCBwYXR0eSBsb2FkZWQgd2l0aCB2ZWdhbiBiYWNvbiwgdmVnYW4gc2hyaW1wLCB2ZWdhbiBjaGVlc2UsIGNhcmFtZWxpemVkIG9uaW9ucywgbGV0dHVjZSwgdG9tYXRvLCBhbmQgb3VyIGhvbWVtYWRlIGJ1cmdlciBzYXVjZSBvbiBhIHZlZ2FuIEhhd2FpaWFuIGJ1bi4nO1xuICAgIHN1cGVyU2hyaW1wRGVzYy5hcHBlbmRDaGlsZChzdXBlclNocmltcFRpdGxlKTtcbiAgICBzdXBlclNocmltcERlc2MuYXBwZW5kQ2hpbGQoc3VwZXJTaHJpbXBJbmZvKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN1cGVyU2hyaW1wRGVzYyk7XG5cbiAgICBjb25zdCBidWZmYWxvQ2hpa25CdXJnZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBidWZmYWxvQ2hpa25CdXJnZXIuc3JjID0gaW1nc1s1XTtcbiAgICBidWZmYWxvQ2hpa25CdXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWltZycpO1xuICAgIGJ1ZmZhbG9DaGlrbkJ1cmdlci5pZCA9ICdidWZmYWxvLWNoaWtuLWJ1cmdlcic7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidWZmYWxvQ2hpa25CdXJnZXIpO1xuXG4gICAgY29uc3QgYnVmZmFsb0NoaWtuRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1ZmZhbG9DaGlrbkRlc2MuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWRlc2MnKTtcbiAgICBidWZmYWxvQ2hpa25EZXNjLmlkID0gJ2J1ZmZhbG8tY2hpa24tZGVzYyc7XG4gICAgY29uc3QgYnVmZmFsb0NoaWtuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJ1ZmZhbG9DaGlrblRpdGxlLmlubmVySFRNTCA9IFwiQnVmZmFsbyBDaGlrJ24gU2FuZHdpY2hcIjtcbiAgICBjb25zdCBidWZmYWxvQ2hpa25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJ1ZmZhbG9DaGlrbkluZm8uaW5uZXJIVE1MID0gJ1BsYW50LWJhc2VkIGNoaWNrZW4gdG9zc2VkIGluIGJ1ZmZhbG8gc2F1Y2UgdG9wcGVkIHdpdGggcGlja2xlcywgdmVnYW4gcmFuY2gsIGFuZCBjb2xlc2xhdyBvbiBhIHZlZ2FuIEhhd2FpaWFuIGJ1bi4nO1xuICAgIGJ1ZmZhbG9DaGlrbkRlc2MuYXBwZW5kQ2hpbGQoYnVmZmFsb0NoaWtuVGl0bGUpO1xuICAgIGJ1ZmZhbG9DaGlrbkRlc2MuYXBwZW5kQ2hpbGQoYnVmZmFsb0NoaWtuSW5mbyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidWZmYWxvQ2hpa25EZXNjKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge2hlYWRlciwgbmF2LCBuYXZCdG5zfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgYWJvdXRJbmZvIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3RJbmZvIGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgbmF2QnV0dG9ucyA9IG5hdkJ0bnMoKTtcblxuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5ib2R5LmFwcGVuZENoaWxkKG5hdigpKTtcbmJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRJbmZvKCkpO1xuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWJhcicpO1xubmF2QmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnNbMF0pO1xubmF2QmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnNbMV0pO1xubmF2QmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnNbMl0pOyBcblxuKGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGFib3V0SW5mbygpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyTWVudSgpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKCkpO1xufSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9