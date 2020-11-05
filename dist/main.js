/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! namespace exports */
/*! export createAnimation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hideAllDropdowns [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reset [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resizeDropdownList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styleDropdown [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styleDropdownBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styleDropdownItems [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styleDropdownList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleDropdownList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reset\": () => /* binding */ reset,\n/* harmony export */   \"createAnimation\": () => /* binding */ createAnimation,\n/* harmony export */   \"styleDropdown\": () => /* binding */ styleDropdown,\n/* harmony export */   \"styleDropdownList\": () => /* binding */ styleDropdownList,\n/* harmony export */   \"toggleDropdownList\": () => /* binding */ toggleDropdownList,\n/* harmony export */   \"hideAllDropdowns\": () => /* binding */ hideAllDropdowns,\n/* harmony export */   \"styleDropdownBtn\": () => /* binding */ styleDropdownBtn,\n/* harmony export */   \"styleDropdownItems\": () => /* binding */ styleDropdownItems,\n/* harmony export */   \"resizeDropdownList\": () => /* binding */ resizeDropdownList\n/* harmony export */ });\n\nvar LIGHT = 'rgb(255, 255, 255)';\nvar DARK_GREEN = 'rgb(5, 107, 104)';\nvar LIGHT_GREEN = '#e5f6f5';\nvar TXT_COLOR = 'rgb(103, 98, 98)';\nvar BOX_SHADOW = '3px 3px 5px 2px rgba(5,107,104,0.15)';\nvar ARROW_DOWN = 'rotate(45deg)';\nvar ARROW_UP = 'rotate(225deg)';\nvar SCALEDOWN_ANIM = 'scaleDown 500ms ease-in';\nvar ELEM_TRANSITION = '300ms ease-in-out';\nvar PADDING_LARGE = '.7rem 1.5rem';\nvar PADDING_SMALL = '.7rem';\n\nvar reset = function reset(elem) {\n  elem.style.boxSizing = 'border-box';\n  elem.style.margin = 0;\n  elem.style.padding = 0;\n};\n\nvar createAnimation = function createAnimation() {\n  var style = document.createElement('style');\n  var keyFrames = \"@keyframes rotateX {\\n    0% {\\n      opacity: 0;\\n      transform: rotateX(-90deg);\\n    }\\n    50% {\\n      transform: rotateX(-20deg);\\n    }\\n    100% {\\n      opacity: 1;\\n      transform: rotateX(0deg);\\n    }\\n  }\\n  @keyframes scaleDown {\\n    0% {\\n      transform: scale(1);\\n    }\\n    50% {\\n      transform: scale(0.5);\\n    }\\n    100% {\\n      transform: scale(1);\\n    }\\n  }\";\n  style.innerHTML = keyFrames;\n  document.head.appendChild(style);\n};\n\nvar styleDropdown = function styleDropdown(elem) {\n  reset(elem);\n  elem.style.fontFamily = 'Helvetica';\n  elem.style.width = '300px';\n  elem.style.minWidth = '150px';\n  elem.style.fontSize = '10px';\n  elem.style.display = 'inline-block';\n  elem.style.position = 'relative';\n};\n\nvar styleDropdownList = function styleDropdownList(elem) {\n  var btnWidth = document.querySelector('.dd-btn').offsetWidth;\n  elem.style.display = 'none';\n  elem.style.position = 'absolute';\n  elem.style.zIndex = '1';\n  elem.style.width = \"\".concat(btnWidth, \"px\");\n  elem.style.marginTop = '1rem';\n  elem.style.backgroundColor = '#fff';\n  elem.style.borderRadius = '.5rem';\n  elem.style.boxShadow = \"\".concat(BOX_SHADOW);\n};\n\nvar toggleDropdownList = function toggleDropdownList(btn, list) {\n  btn.style.borderColor = btn.style.borderColor === LIGHT ? \"\".concat(DARK_GREEN) : LIGHT;\n  btn.style.color = btn.style.color === \"\".concat(TXT_COLOR) ? \"\".concat(DARK_GREEN) : \"\".concat(TXT_COLOR);\n\n  if (list) {\n    if (list.style.display === 'none') {\n      list.style.animation = '';\n      list.style.display = 'block';\n    } else {\n      list.style.animation = SCALEDOWN_ANIM;\n    }\n\n    var items = list.querySelectorAll('.dd-item');\n\n    if (items) {\n      items.forEach(function (item, i) {\n        item.style.animation = \"rotateX 300ms \".concat(i * 60, \"ms ease-in-out forwards\");\n      });\n    }\n  }\n\n  var arrow = btn.querySelector('.arrow');\n  arrow.style.transform = arrow.style.transform === ARROW_DOWN ? ARROW_UP : ARROW_DOWN;\n};\n\nvar styleDropdownBtn = function styleDropdownBtn(elem) {\n  elem.style.fontSize = '1.3rem';\n  elem.style.backgroundColor = '#fff';\n  elem.style.color = \"\".concat(TXT_COLOR);\n  elem.style.border = '.1rem solid #fff';\n  elem.style.borderRadius = '.5rem';\n  elem.style.cursor = 'pointer';\n  elem.style.boxShadow = \"\".concat(BOX_SHADOW);\n  elem.style.display = 'flex';\n  elem.style.justifyContent = 'space-between';\n  elem.style.alignItems = 'center';\n  elem.style.transition = \"\".concat(ELEM_TRANSITION);\n  setDynamicPadding(elem);\n  elem.appendChild(createArrow());\n};\n\nvar styleDropdownItems = function styleDropdownItems(items) {\n  // Fix border when first item in list is active\n  items[0].style.borderTopLeftRadius = 'inherit';\n  items[0].style.borderTopRightRadius = 'inherit';\n  items.forEach(function (item) {\n    reset(item);\n    setDynamicPadding(item);\n\n    if (item.classList.contains('dd-active')) {\n      item.style.backgroundColor = \"\".concat(LIGHT_GREEN);\n    }\n\n    item.style.display = 'block';\n    item.style.opacity = '0';\n    item.style.textDecoration = 'none';\n    item.style.fontSize = '1.3rem';\n    item.style.color = \"\".concat(TXT_COLOR);\n    item.style.transition = \"\".concat(ELEM_TRANSITION);\n    item.addEventListener('mouseover', function () {\n      item.style.color = \"\".concat(DARK_GREEN);\n    });\n    item.addEventListener('mouseout', function () {\n      item.style.color = \"\".concat(TXT_COLOR);\n    });\n  });\n};\n\nvar createArrow = function createArrow() {\n  var arrowDiv = document.createElement('div');\n  var arrow = document.createElement('i');\n  arrow.classList.add('arrow');\n  arrowDiv.classList.add('arrow-container');\n  arrowDiv.style.width = '1.6rem';\n  arrowDiv.style.height = '1.6rem';\n  arrowDiv.style.display = 'flex';\n  arrowDiv.style.justifyContent = 'center';\n  arrowDiv.style.alignItems = 'center';\n  arrowDiv.style.backgroundColor = \"\".concat(LIGHT_GREEN);\n  arrowDiv.style.borderRadius = '50%';\n  arrow.style.display = 'inline-block';\n  arrow.style.border = \"solid \".concat(DARK_GREEN);\n  arrow.style.borderWidth = '0 .1rem .1rem 0';\n  arrow.style.padding = '.2rem';\n  arrow.style.transform = ARROW_DOWN;\n  arrowDiv.appendChild(arrow);\n  return arrowDiv;\n};\n\nvar hideAllDropdowns = function hideAllDropdowns(e, btnArr, listArr) {\n  if (btnArr && !e.target.classList.contains('dd-btn') && !e.target.classList.contains('arrow') && !e.target.classList.contains('arrow-container')) {\n    btnArr.forEach(function (btn, i) {\n      var arrows = document.querySelectorAll('.arrow');\n\n      if (btn.style.borderColor === \"\".concat(DARK_GREEN)) {\n        btn.style.borderColor = LIGHT;\n        btn.style.color = \"\".concat(TXT_COLOR);\n        arrows[i].style.transform = ARROW_DOWN;\n      }\n\n      if (listArr[i]) {\n        if (listArr[i].style.display === 'block') listArr[i].style.animation = SCALEDOWN_ANIM;\n      }\n    });\n  }\n};\n\nvar resizeDropdownList = function resizeDropdownList(btnArr, listArr) {\n  if (btnArr && listArr) {\n    btnArr.forEach(function (btn, i) {\n      setDynamicPadding(btn);\n\n      if (listArr[i]) {\n        var items = listArr[i].querySelectorAll('.dd-item');\n        listArr[i].style.width = \"\".concat(btn.offsetWidth, \"px\");\n        items.forEach(function (item) {\n          return setDynamicPadding(item);\n        });\n      }\n    });\n  }\n};\n\nvar setDynamicPadding = function setDynamicPadding(item) {\n  item.style.padding = item.offsetWidth > 200 ? PADDING_LARGE : PADDING_SMALL;\n};\n\n//# sourceURL=webpack://dropdown-menu-top/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\nvar dropdown = document.querySelectorAll('.dropdown');\n\n(function styleElements() {\n  if (!dropdown) return;\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.reset)(document.querySelector('body'));\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createAnimation)();\n  var dropdownBtn = [];\n  var dropdownList = [];\n  dropdown.forEach(function (elem) {\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.styleDropdown)(elem);\n    var btn = elem.querySelector('.dd-btn');\n    var list = elem.querySelector('.dd-list');\n    if (btn) dropdownBtn.push(btn);\n    if (list) dropdownList.push(list);\n  });\n\n  if (dropdownBtn.length) {\n    dropdownBtn.forEach(function (btn, i) {\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.styleDropdownBtn)(btn);\n      btn.addEventListener('click', function () {\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleDropdownList)(btn, dropdownList[i]);\n      });\n    });\n\n    if (dropdownList.length) {\n      dropdownList.forEach(function (list) {\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.styleDropdownList)(list);\n        list.addEventListener('animationend', function (e) {\n          if (e.animationName === 'scaleDown') list.style.display = 'none';\n        }); // style each item\n\n        var items = list.querySelectorAll('.dd-item');\n\n        if (items) {\n          items = Array.from(items);\n          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.styleDropdownItems)(items);\n        }\n      });\n    }\n\n    document.addEventListener('click', function (e) {\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.hideAllDropdowns)(e, dropdownBtn, dropdownList);\n    });\n    window.addEventListener('resize', function () {\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.resizeDropdownList)(dropdownBtn, dropdownList);\n    });\n  }\n})();\n\n//# sourceURL=webpack://dropdown-menu-top/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;