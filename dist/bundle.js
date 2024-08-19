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

/***/ "./node_modules/konas_carousel/lib/carousel.js":
/*!*****************************************************!*\
  !*** ./node_modules/konas_carousel/lib/carousel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Carousel {\n  /* конфигурация */\n  carouselId = null;\n  listClass = null;\n  listItemClass = null;\n  arrowPrevClass = null;\n  arrowNextClass = null;\n  indicatorClass = null;\n  indicatorItemClass = null;\n  width = null; // ширина картинки + gap\n  gap = null;\n  count = null; // видимое количество изображений\n  autoPlayInterval = null; // видимое количество изображений\n  infinityLoop = null; // бесконечная прокрутка слайдера\n  hide = null; // управление отображением слайдера\n\n  // задаем переменные для элементов карусели\n  carousel = null;\n  list = null;\n  listElems = null;\n  indicator = null;\n  arrowPrev = null;\n  arrowNext = null;\n  position = 0;\n  currentIndicator = 1;\n  slidesCount = 0;\n  constructor({\n    carouselId,\n    listClass,\n    listItemClass,\n    itemWidth,\n    itemGap,\n    visibleItemsCount,\n    arrowPrevClass,\n    arrowNextClass,\n    indicatorClass,\n    indicatorItemClass,\n    autoPlayInterval,\n    infinityLoop = true,\n    hide = false\n  }) {\n    this.carouselId = carouselId;\n    this.listClass = listClass;\n    this.listItemClass = listItemClass;\n    this.width = itemWidth + itemGap || 'auto';\n    this.gap = itemGap;\n    this.count = visibleItemsCount;\n    this.arrowNextClass = arrowNextClass;\n    this.arrowPrevClass = arrowPrevClass;\n    this.indicatorClass = indicatorClass;\n    this.indicatorItemClass = indicatorItemClass;\n    this.autoPlayInterval = autoPlayInterval;\n    this.infinityLoop = infinityLoop;\n    this.hide = hide;\n  }\n  init() {\n    this.carousel = document.getElementById(this.carouselId);\n    this.list = this.carousel.querySelector(this.listClass);\n    this.listElems = this.carousel.querySelectorAll(this.listItemClass);\n    this.slidesCount = this.listElems.length;\n    this.indicator = document.querySelector(this.indicatorClass);\n    this.arrowPrev = document.querySelector(this.arrowPrevClass);\n    this.arrowNext = document.querySelector(this.arrowNextClass);\n    this.arrowPrev.onclick = () => this.move('prev');\n    this.arrowNext.onclick = () => this.move();\n    if (this.indicatorItemClass) {\n      for (let i = 0; i < this.slidesCount; i++) {\n        const indicatorItem = document.createElement('button');\n        indicatorItem.classList.add(this.indicatorItemClass);\n        this.indicator.appendChild(indicatorItem);\n      }\n      this.updateIndicatorPosition();\n    } else {\n      this.indicator.innerHTML = `${this.currentIndicator}/${this.slidesCount}`;\n    }\n    this.carousel.style.overflow = 'hidden';\n    this.list.style.display = this.hide ? 'none' : 'flex';\n    if (this.width === 'auto') {\n      this.width = this.carousel.offsetWidth;\n    }\n    const listChildren = this.list.children;\n    for (let i = 0; i < listChildren.length; i++) {\n      listChildren[i].style.minWidth = this.width + 'px';\n      listChildren[i].style.display = 'flex';\n    }\n    if (this.autoPlayInterval) {\n      setInterval(() => this.move(), this.autoPlayInterval * 1000);\n    }\n  }\n  updateIndicatorPosition(direction = 'next') {\n    const prevActivePos = this.currentIndicator === 1 ? this.slidesCount : this.currentIndicator - 1;\n    const nextActivePos = this.currentIndicator === this.slidesCount ? 0 : this.currentIndicator;\n    const prevActiveItemPos = direction === 'next' ? prevActivePos - 1 : nextActivePos;\n    const prevActiveItem = this.indicator.children[prevActiveItemPos];\n    prevActiveItem?.classList.remove('active');\n    const currentIndicatorItem = this.indicator.children[this.currentIndicator - 1];\n    currentIndicatorItem.classList.add('active');\n    this.toggleDisable();\n  }\n  toggleDisable() {\n    if (!this.infinityLoop) {\n      if (this.currentIndicator === this.slidesCount) {\n        this.arrowNext.disabled = true;\n      } else if (this.currentIndicator === 1) {\n        this.arrowPrev.disabled = true;\n      } else {\n        this.arrowNext.disabled = false;\n        this.arrowPrev.disabled = false;\n      }\n    }\n  }\n  move(direction = 'next') {\n    if (direction === 'next') {\n      // сдвиг вправо\n      this.position -= this.width;\n      const removedItem = this.list.removeChild(this.listElems[this.currentIndicator - 1]);\n      this.list.appendChild(removedItem);\n      this.currentIndicator++;\n      if (this.currentIndicator === this.slidesCount + 1) {\n        this.currentIndicator = 1;\n      }\n    } else {\n      // сдвиг влево\n      const removedItem = this.list.removeChild(this.list.children[this.slidesCount - 1]);\n      this.list.insertBefore(removedItem, this.list.children[0]);\n      this.position += this.width;\n      this.currentIndicator--;\n      if (this.currentIndicator === 0) {\n        this.currentIndicator = this.slidesCount;\n      }\n    }\n    if (this.indicatorItemClass) {\n      this.updateIndicatorPosition(direction);\n    } else {\n      this.indicator.innerHTML = `${this.currentIndicator}/${this.slidesCount}`;\n    }\n  }\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\n\n//# sourceURL=webpack://polovynko_cv_portfolio/./node_modules/konas_carousel/lib/carousel.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var konas_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! konas_carousel */ \"./node_modules/konas_carousel/lib/carousel.js\");\n\n\nconst carouselConfig = {\n  carouselId: \"carousel\", // root elem of carousel\n  listClass: \".projectList\", // ul of carousel\n  listItemClass: \".projectCard\",\n  visibleItemsCount: 3,\n  arrowPrevClass: \".arrowPrev\",\n  arrowNextClass: \".arrowNext\",\n  indicatorClass: \".carouselIndicator\",\n  autoPlayInterval: 6,\n  itemWidth: 394,\n  itemGap: 20,\n};\nconst carousel = new konas_carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](carouselConfig);\n\ncarousel.init();\n\n\n//# sourceURL=webpack://polovynko_cv_portfolio/./script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;