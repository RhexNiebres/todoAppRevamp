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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --main-clr: white;\r\n    --scnd-clr: #8bf67a;\r\n    --trd-clr: #a3ffa4;\r\n  }\r\n  body {\r\n    font-family: monospace, sans-serif;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: 70vh;\r\n    margin: 0;\r\n    background-color: #0a0a0a;\r\n    background-color: var(--main-clr);\r\n  }\r\n  body h1 {\r\n    background-color: var(--scnd-clr);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    width: 40%;\r\n  }\r\n  #viewAllTasksButton {\r\n    background-color: var(--scnd-clr);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    transition: all 0.3s ease;\r\n    &:hover {\r\n      background-color: var(--trd-clr);\r\n      box-shadow: 0 4px 8px rgba(124, 70, 70, 0.2);\r\n    }\r\n  }\r\n  \r\n  h2 {\r\n    background-color: var(--scnd-clr);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n  }\r\n  div.tab {\r\n    display: inline-block;\r\n    padding: 10px;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    &:hover {\r\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\r\n    }\r\n  }\r\n  .addTaskButton {\r\n    background-color: #9cd5ff;\r\n    border-radius: 10px;\r\n    padding: 3px;\r\n    border: none;\r\n    transition: all 0.3s ease;\r\n    &:hover {\r\n      background-color: #c1e5ff;\r\n      border: 1px solid black;\r\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    }\r\n  }\r\n  .deleteFolderButton {\r\n    background-color: #ff2020;\r\n    border-radius: 10px;\r\n    padding: 3px;\r\n    border: none;\r\n    transition: all 0.3s ease;\r\n    &:hover {\r\n      background-color: #ff5757;\r\n      border: 1px solid black;\r\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    }\r\n  }\r\n  .editButton {\r\n    background-color: #6ab0e3;\r\n    border: none;\r\n    border-radius: 10px;\r\n    &:hover {\r\n      background-color: #c1e5ff;\r\n    }\r\n  }\r\n  .deleteButton {\r\n    background-color: var(--scnd-clr);\r\n    border: none;\r\n    border-radius: 10px;\r\n    &:hover {\r\n      background-color: red;\r\n    }\r\n  }\r\n  \r\n  .tab:active {\r\n    background-color: var(--trd-clr);\r\n    border-bottom: 1px solid white;\r\n  }\r\n  \r\n  #addTaskButton {\r\n    background-color: var(--scnd-clr);\r\n    :hover {\r\n      background-color: var(--trd-clr);\r\n      border: 1px solid black;\r\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    }\r\n  }\r\n  input#folderName {\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    transition: all 0.3s ease;\r\n    border: 1px solid black;\r\n    &:hover {\r\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\r\n    }\r\n  }\r\n  button#addFolderButton {\r\n    background-color: var(--scnd-clr);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    transition: all 0.3s ease;\r\n    border: none;\r\n    &:hover {\r\n      background-color: var(--trd-clr);\r\n      border: 1px solid black;\r\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    }\r\n  }\r\n  .task-area {\r\n    display: none;\r\n    margin-top: 2em;\r\n    margin-bottom: 2em;\r\n    &div {\r\n      background-color: var(--scnd-clr);\r\n      border-radius: 10px;\r\n    }\r\n  }\r\n  .current-task-info {\r\n    margin-bottom: 15px;\r\n    &#taskTitle {\r\n      border-radius: 10px;\r\n    }\r\n  }\r\n  ul {\r\n    list-style-type: none;\r\n  }\r\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todoapprevamp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todoapprevamp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todoapprevamp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todoapprevamp/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todoapprevamp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todoapprevamp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todoapprevamp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todoapprevamp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todoapprevamp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todoapprevamp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Task = void 0;\nvar _addTask = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\nvar _editTask = __webpack_require__(/*! ./modules/editTask.js */ \"./src/modules/editTask.js\");\nvar _deleteTask = __webpack_require__(/*! ./modules/deleteTask.js */ \"./src/modules/deleteTask.js\");\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nvar Task = exports.Task = /*#__PURE__*/_createClass(function Task(title, description, dueDate, priority) {\n  _classCallCheck(this, Task);\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n});\nvar Folder = /*#__PURE__*/function () {\n  function Folder(name) {\n    _classCallCheck(this, Folder);\n    this.name = name;\n    this.tasks = [];\n  }\n  return _createClass(Folder, [{\n    key: \"addTask\",\n    value: function addTask(task) {\n      this.tasks.push(task);\n    }\n  }]);\n}(); // Load folders from localStorage and ensure they are instances of Folder\nvar storedFolders = JSON.parse(localStorage.getItem(\"folders\")) || [];\nvar folders = storedFolders.map(function (folderData) {\n  var folder = new Folder(folderData.name);\n  folder.tasks = folderData.tasks || []; // Ensure tasks are populated if they exist\n  return folder;\n});\nvar activeFolder = null;\nvar editingTask = null; // Track which task is being edited\n\n// Ensure the folders are displayed when the page loads\nfolders.forEach(function (folder) {\n  createTab(folder);\n});\n\n// Add Folder\ndocument.getElementById(\"addFolderButton\").addEventListener(\"click\", function () {\n  var folderName = document.getElementById(\"folderName\").value.trim(); // Trim whitespace\n\n  if (folderName) {\n    var newFolder = new Folder(folderName);\n    folders.push(newFolder);\n    createTab(newFolder);\n    saveFolders(); // Save to localStorage\n    document.getElementById(\"folderName\").value = \"\"; // Clear input\n  } else {\n    alert(\"Please enter a folder name.\");\n  }\n});\n\n// View all tasks\ndocument.getElementById(\"viewAllTasksButton\").addEventListener(\"click\", displayAllTasks);\nfunction displayAllTasks() {\n  document.getElementById(\"taskList\").innerHTML = \"\";\n  document.getElementById(\"taskArea\").style.display = \"none\"; // Hide task area\n  document.getElementById(\"currentFolderName\").textContent = \"All Tasks\";\n\n  // Gather all tasks in all folders\n  folders.forEach(function (folder) {\n    folder.tasks.forEach(function (task) {\n      displayTask(task);\n    });\n  });\n\n  // Remove active class from all tabs\n  var tabs = document.querySelectorAll(\".tab\");\n  tabs.forEach(function (tab) {\n    tab.classList.remove(\"active\");\n  });\n}\nfunction createTab(folder) {\n  var tab = document.createElement(\"div\");\n  tab.className = \"tab\";\n  tab.textContent = folder.name;\n  var addTaskButton = document.createElement(\"button\");\n  addTaskButton.textContent = \"Add Task\";\n  addTaskButton.style.marginLeft = \"10px\";\n  addTaskButton.classList.add(\"addTaskButton\");\n  addTaskButton.addEventListener(\"click\", function (event) {\n    event.stopPropagation();\n    activeFolder = folder; // Set active folder\n    showTaskInput();\n  });\n  var deleteFolderButton = document.createElement(\"button\");\n  deleteFolderButton.textContent = \"Delete Folder\";\n  deleteFolderButton.style.marginLeft = \"10px\";\n  deleteFolderButton.classList.add(\"deleteFolderButton\");\n  deleteFolderButton.addEventListener(\"click\", function (event) {\n    event.stopPropagation();\n    deleteFolder(folder);\n  });\n\n  // Set the click event for the tab\n  tab.addEventListener(\"click\", function (event) {\n    switchTab(folder);\n  });\n  tab.appendChild(addTaskButton);\n  tab.appendChild(deleteFolderButton);\n  document.getElementById(\"tabsContainer\").appendChild(tab);\n}\nfunction switchTab(folder) {\n  activeFolder = folder;\n  document.getElementById(\"currentFolderName\").textContent = folder.name;\n  document.getElementById(\"taskArea\").style.display = \"block\"; // Show task area\n  document.getElementById(\"taskList\").innerHTML = \"\"; // Clear task list\n\n  // Display tasks for the selected folder\n  folder.tasks.forEach(function (task) {\n    displayTask(task);\n  });\n\n  // Remove the active class from all tabs\n  var tabs = document.querySelectorAll(\".tab\");\n  tabs.forEach(function (tab) {\n    tab.classList.remove(\"active\");\n  });\n\n  // Activate the current tab\n  var activeTab = Array.from(tabs).find(function (t) {\n    return t.textContent === folder.name;\n  });\n  if (activeTab) {\n    activeTab.classList.add(\"active\"); // Add active class\n  }\n}\nfunction showTaskInput() {\n  if (!activeFolder) return;\n  var taskArea = document.getElementById(\"taskArea\");\n  taskArea.style.display = \"block\"; // Show task area\n\n  // Clear input fields\n  document.getElementById(\"taskTitle\").value = \"\";\n  document.getElementById(\"taskDescription\").value = \"\";\n  document.getElementById(\"taskDueDate\").value = \"\";\n  document.getElementById(\"taskPriority\").value = \"Low\";\n  document.getElementById(\"currentTaskInfo\").style.display = \"none\"; // Hide task info\n}\n\n// Add Task\ndocument.getElementById(\"addTaskButton\").addEventListener(\"click\", function () {\n  if (!activeFolder) {\n    alert(\"Please select a folder to add tasks to.\");\n    return; // Exit if there's no active folder\n  }\n  var title = document.getElementById(\"taskTitle\").value.trim();\n  var description = document.getElementById(\"taskDescription\").value.trim();\n  var dueDate = document.getElementById(\"taskDueDate\").value;\n  var priority = document.getElementById(\"taskPriority\").value;\n  var taskData = {\n    title: title,\n    description: description,\n    dueDate: dueDate,\n    priority: priority\n  };\n  if (editingTask) {\n    (0, _editTask.editTask)(editingTask, taskData, updateCurrentTaskInfo, saveFolders, refreshTaskList);\n    document.getElementById(\"addTaskButton\").textContent = \"Add Task\"; // Reset button text\n    editingTask = null;\n    document.getElementById(\"taskArea\").style.display = \"none\"; // Hide task input\n    document.getElementById(\"currentTaskInfo\").style.display = \"none\";\n  } else {\n    (0, _addTask.addTask)(activeFolder, taskData, saveFolders, refreshTaskList);\n    document.getElementById(\"taskArea\").style.display = \"none\"; // Hide task input\n  }\n});\nfunction displayTask(task) {\n  var taskList = document.getElementById(\"taskList\");\n  var listItem = document.createElement(\"li\");\n  listItem.textContent = \"\".concat(task.title, \" - \").concat(task.description, \" (Due: \").concat(task.dueDate, \", Priority: \").concat(task.priority, \")\");\n  var editButton = document.createElement(\"button\");\n  editButton.textContent = \"Edit\";\n  editButton.style.marginLeft = \"10px\";\n  editButton.classList.add(\"editButton\");\n  editButton.addEventListener(\"click\", function (event) {\n    event.stopPropagation();\n    (0, _editTask.editTask)(task);\n  });\n  var deleteButton = document.createElement(\"button\");\n  deleteButton.textContent = \"Delete\";\n  deleteButton.style.marginLeft = \"10px\";\n  deleteButton.classList.add(\"deleteButton\");\n  var deleteIcon = document.createElement(\"i\");\n  deleteIcon.classList.add(\"fas\", \"fa-trash-alt\"); // Use the trash icon class\n\n  // Append the icon to the delete button\n  deleteButton.appendChild(deleteIcon);\n  deleteButton.addEventListener(\"click\", function (event) {\n    event.stopPropagation();\n    (0, _deleteTask.deleteTask)(task, activeFolder, saveFolders);\n    listItem.remove(); // Remove from UI immediately\n  });\n  listItem.appendChild(editButton); // Add the edit button\n  listItem.appendChild(deleteButton); // Add the delete button\n\n  taskList.appendChild(listItem); // Append to task list\n}\nfunction updateCurrentTaskInfo(task) {\n  var currentTaskInfo = document.getElementById(\"currentTaskInfo\");\n  currentTaskInfo.style.display = \"block\";\n  currentTaskInfo.innerHTML = \"\\n      <h3>Current Task Details:</h3>\\n      <p><strong>Title:</strong> \".concat(task.title, \"</p>\\n      <p><strong>Description:</strong> \").concat(task.description, \"</p>\\n      <p><strong>Due Date:</strong> \").concat(task.dueDate, \"</p>\\n      <p><strong>Priority:</strong> \").concat(task.priority, \"</p>\\n  \");\n}\nfunction deleteFolder(folder) {\n  var index = folders.indexOf(folder);\n  if (index > -1) {\n    folders.splice(index, 1); // Remove folder from folders array\n    document.getElementById(\"tabsContainer\").innerHTML = \"\"; // Clear current tabs\n    folders.forEach(function (f) {\n      return createTab(f);\n    }); // Recreate tabs\n    activeFolder = null; // Clear active folder\n    document.getElementById(\"taskList\").innerHTML = \"\"; // Clear task list\n    document.getElementById(\"currentFolderName\").textContent = \"\"; // Clear current folder name\n    saveFolders(); // Save state\n  }\n}\nfunction refreshTaskList() {\n  document.getElementById(\"taskList\").innerHTML = \"\"; // Clear current task list\n  activeFolder.tasks.forEach(function (task) {\n    displayTask(task); // Display all tasks in the current folder\n  });\n}\nfunction saveFolders() {\n  var foldersToSave = folders.map(function (folder) {\n    return {\n      name: folder.name,\n      tasks: folder.tasks // You may want to save tasks more thoroughly depending on your task structure\n    };\n  });\n  localStorage.setItem(\"folders\", JSON.stringify(foldersToSave)); // Save to localStorage\n}\n\n//# sourceURL=webpack://todoapprevamp/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = addTask;\nvar _index = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\nfunction addTask(activeFolder, taskData, saveFolders, refreshTaskList) {\n  if (!activeFolder) {\n    alert(\"Please select a folder to add tasks to.\");\n    return; // Exit if there's no active folder\n  }\n  var title = taskData.title,\n    description = taskData.description,\n    dueDate = taskData.dueDate,\n    priority = taskData.priority;\n\n  // Validate inputs\n  if (!title || !description || !dueDate || !priority) {\n    alert(\"Please fill in all fields.\");\n    return;\n  }\n  var newTask = new _index.Task(title, description, dueDate, priority);\n  console.log(\"Adding Task to Folder:\", activeFolder.name); // Debugging line\n  activeFolder.addTask(newTask); // This should now work without error\n  refreshTaskList();\n  saveFolders();\n  return newTask;\n}\n\n//# sourceURL=webpack://todoapprevamp/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/deleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = deleteTask;\nfunction deleteTask(task, activeFolder, saveFolders) {\n  var index = activeFolder.tasks.indexOf(task);\n  if (index > -1) {\n    activeFolder.tasks.splice(index, 1); // Remove task from active folder's tasks\n    saveFolders(); // Save after deletion\n  }\n}\n\n//# sourceURL=webpack://todoapprevamp/./src/modules/deleteTask.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = editTask;\n// editTask.js\nfunction editTask(task) {\n  // Check if task is defined\n  if (!task) {\n    console.error(\"No task provided for editing.\");\n    return; // Exit the function if task is not defined\n  }\n\n  // Populate the form for editing\n  document.getElementById(\"taskTitle\").value = task.title;\n  document.getElementById(\"taskDescription\").value = task.description;\n  document.getElementById(\"taskDueDate\").value = task.dueDate;\n  document.getElementById(\"taskPriority\").value = task.priority;\n\n  // Show the task input area\n  document.getElementById(\"taskArea\").style.display = \"block\";\n\n  // Set the task being edited\n  editingTask = task;\n  updateCurrentTaskInfo(task);\n  document.getElementById(\"addTaskButton\").textContent = \"Update Task\"; // Change button text to \"Update Task\"\n}\n\n//# sourceURL=webpack://todoapprevamp/./src/modules/editTask.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;