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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  background-color: #0d0d0d;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.page-container {\\r\\n  position: relative;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.content-wrap {\\r\\n  padding-bottom: 46px;\\r\\n}\\r\\n\\r\\n.loading {\\r\\n  height: 60vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.loading span {\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n  margin: 0 5px;\\r\\n  background-color: #2b2b2b;\\r\\n  display: inline-block;\\r\\n  border-radius: 50%;\\r\\n  animation-name: bounce;\\r\\n  animation-duration: 2s;\\r\\n  animation-iteration-count: infinite;\\r\\n  animation-timing-function: ease-in-out;\\r\\n}\\r\\n\\r\\n.loading span:nth-child(2) {\\r\\n  animation-delay: 0.1s;\\r\\n}\\r\\n\\r\\n.loading span:nth-child(3) {\\r\\n  animation-delay: 0.2s;\\r\\n}\\r\\n\\r\\n@keyframes bounce {\\r\\n  50% {\\r\\n    opacity: 0%;\\r\\n    transform: scale(0.7) translateY(10px);\\r\\n  }\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n  background-color: #2b2b2b;\\r\\n  width: 100%;\\r\\n  height: 90px;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nheader a h1 {\\r\\n  margin: 0;\\r\\n  font-size: 40px;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  color: #6AC045;\\r\\n  padding-left: 16px;\\r\\n}\\r\\n\\r\\nheader .search-bar-container {\\r\\n  padding-right: 64px;\\r\\n  padding-left: 16px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nheader .search-bar {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding-right: 32px;\\r\\n  width: 160px;\\r\\n  border: solid 2px #656565;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\nheader .search-bar img {\\r\\n  width: 16px;\\r\\n  padding-left: 6px;\\r\\n}\\r\\n\\r\\nheader .search-textbox {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  color: #707070;\\r\\n  background-color: #2b2b2b;\\r\\n  padding-left: 16px;\\r\\n  width: 150px;\\r\\n  height: 25px;\\r\\n}\\r\\n\\r\\nheader .search-bar button {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.arrow-container {\\r\\n  width: fit-content;\\r\\n  margin: 0;\\r\\n  padding: 16px 0 0 16px;\\r\\n}\\r\\n\\r\\n.arrow-container img {\\r\\n  width: 40px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.ul-container {\\r\\n  padding: 64px 32px 0 32px;\\r\\n}\\r\\n\\r\\n.ul-container .movies-container {\\r\\n  margin: 0;\\r\\n  display: grid;\\r\\n  list-style: none;\\r\\n  grid-template-columns: repeat(auto-fill, 250px);\\r\\n  padding: 0;\\r\\n  justify-content: center;\\r\\n  gap: 16px 64px;\\r\\n}\\r\\n\\r\\n.movies-container div {\\r\\n  text-align: start;\\r\\n  \\r\\n}\\r\\n\\r\\n.ul-container .movies-container .movie-home img{\\r\\n  width: 100%;\\r\\n  border: solid 4px #ebebeb;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.ul-container .movies-container .movie-home img:hover {\\r\\n  animation-name: blur;\\r\\n  animation-duration: 0.2s;\\r\\n  animation-fill-mode: forwards;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n@keyframes blur {\\r\\n  100% {\\r\\n    border-color: #6AC045;\\r\\n  }\\r\\n}\\r\\n\\r\\n.movie-home h4 {\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  color: #e3e3e3;\\r\\n  font-size: large;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.movie-home h6 {\\r\\n  margin-top: 0px;\\r\\n  margin-bottom: 0px;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  color: #c2c2c2;\\r\\n  font-size: medium;\\r\\n}\\r\\n\\r\\n.movie-detail-container {\\r\\n  margin-bottom: 74px;\\r\\n}\\r\\n\\r\\n.movie-detail{\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  gap: 32px 64px;\\r\\n  color: #e3e3e3;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n}\\r\\n\\r\\n.movie-detail img {\\r\\n  max-width: 250px;\\r\\n  padding: 0;\\r\\n  border: solid #ebebeb 4px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.movie-detail .info {\\r\\n  max-width: 900px;\\r\\n}\\r\\n\\r\\n.movie-detail .info h1 {\\r\\n  margin-top: 0;\\r\\n  font-size: 50px;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.movie-detail .info h3 {\\r\\n  margin-top: 0px;\\r\\n  margin-bottom: 12px;\\r\\n  padding-left: 5px;\\r\\n}\\r\\n\\r\\n.movie-detail .info h4 {\\r\\n  margin-top: 0px;\\r\\n  margin-bottom: 2px;\\r\\n  padding-left: 5px;\\r\\n}\\r\\n\\r\\n.movie-detail .info h5 {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  border-top: solid 1px #ebebeb;\\r\\n}\\r\\n\\r\\nh1 { \\r\\n  text-align: center;\\r\\n  color: #e3e3e3;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n}\\r\\n\\r\\n.suggestions {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  align-items: space-between;\\r\\n  justify-content: center;\\r\\n  color: #e3e3e3;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n}\\r\\n\\r\\n.suggestions .suggestion-items {\\r\\n  width: 300px;\\r\\n  align-content: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.suggestions img {\\r\\n  max-width: 250px;\\r\\n  padding: 0;\\r\\n  border: solid #ebebeb 4px;\\r\\n  border-radius: 4px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.suggestions img:hover {\\r\\n  animation-name: blur;\\r\\n  animation-duration: 0.2s;\\r\\n  animation-fill-mode: forwards;\\r\\n}\\r\\n\\r\\n.suggestions h1 {\\r\\n  font-size: 32px;\\r\\n}\\r\\n\\r\\n.load-button-container {\\r\\n  height: 35px;\\r\\n  width: 120px;\\r\\n  position: relative;\\r\\n  margin: 32px auto 32px auto;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border: solid 3px #949494;\\r\\n  border-radius: 8px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.load-button-container:hover {\\r\\n  border-color: #e3e3e3;\\r\\n  color: #ebebeb;\\r\\n}\\r\\n\\r\\n.load-button-container:hover .load-more-button {\\r\\n  color: #ebebeb;\\r\\n}\\r\\n\\r\\n.load-more-button\\r\\n{\\r\\n  padding: 0;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  color: #949494;\\r\\n  font-size: 18px;\\r\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n  font-weight: bold;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  height: 46px;  \\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  border-top: solid 1px #707070;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nfooter .footer-content {\\r\\n  background-color: #0d0d0d;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\nfooter img{\\r\\n  width: 30px;\\r\\n  margin-left: 10px;\\r\\n  margin-right: 6px;\\r\\n}\\r\\n\\r\\nfooter .instagram-logo{\\r\\n  filter: invert() saturate(0);\\r\\n}\\r\\n\\r\\nfooter .github-logo {\\r\\n  filter:  invert();\\r\\n}\\r\\n\\r\\n.error-404 {\\r\\n  height:60vh;\\r\\n  text-align: center;\\r\\n  font-family: Lato;\\r\\n  color: #e3e3e3;\\r\\n}\\r\\n\\r\\n@media (max-width: 612px) {\\r\\n  \\r\\n  .movie-detail-container {\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .movie-detail {\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  header {\\r\\n    height: 110px;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    position: relative;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://spa-movies-catalogue/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://spa-movies-catalogue/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./routes/routes-manager.js":
/*!**********************************!*\
  !*** ./routes/routes-manager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_templates_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/templates/footer */ \"./src/templates/footer.js\");\n/* harmony import */ var _utils_getPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getPath */ \"./utils/getPath.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./utils/resolveRoutes.js\");\n/* harmony import */ var _src_pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _src_pages_showSearchs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/pages/showSearchs */ \"./src/pages/showSearchs.js\");\n/* harmony import */ var _src_pages_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/pages/detail */ \"./src/pages/detail.js\");\n/* harmony import */ var _src_pages_404__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/pages/404 */ \"./src/pages/404.js\");\n/* harmony import */ var _src_templates_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/templates/loading */ \"./src/templates/loading.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst footer_section = document.getElementById('footer-section');\r\nconst main_section  = document.getElementById('ul-container');\r\n\r\nconst paths = {\r\n    '/' : _src_pages_home__WEBPACK_IMPORTED_MODULE_3__.default,\r\n    '/search' : _src_pages_showSearchs__WEBPACK_IMPORTED_MODULE_4__.default,\r\n    '/movie' : _src_pages_detail__WEBPACK_IMPORTED_MODULE_5__.default,\r\n}\r\n\r\nconst router = async () => {\r\n    footer_section.innerHTML =  false || await (0,_src_templates_footer__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n    let route = (0,_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_2__.default)((0,_utils_getPath__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n    let render = paths[route] ? paths[route] : _src_pages_404__WEBPACK_IMPORTED_MODULE_6__.default;\r\n    main_section.innerHTML = (0,_src_templates_loading__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n    main_section.innerHTML = await render();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://spa-movies-catalogue/./routes/routes-manager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _routes_routes_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/routes-manager */ \"./routes/routes-manager.js\");\n/* harmony import */ var _utils_makeSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/makeSearch */ \"./utils/makeSearch.js\");\n/* harmony import */ var _utils_loadMoreMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/loadMoreMovies */ \"./utils/loadMoreMovies.js\");\n\r\n\r\n\r\n\r\n\r\nsessionStorage.setItem('page', 1);\r\n\r\nwindow.addEventListener('load', _routes_routes_manager__WEBPACK_IMPORTED_MODULE_1__.default);\r\nwindow.addEventListener('hashchange', _routes_routes_manager__WEBPACK_IMPORTED_MODULE_1__.default);\r\nconst search_form = document.getElementById('search-form');\r\nsearch_form.addEventListener('submit', _utils_makeSearch__WEBPACK_IMPORTED_MODULE_2__.default);\r\nconst load_button = document.getElementById('load-button');\r\nload_button.addEventListener('click', _utils_loadMoreMovies__WEBPACK_IMPORTED_MODULE_3__.default);\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/index.js?");

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error404 = () => {\r\n    document.getElementById(\"back-arrow\").className = \"hide\";\r\n    document.getElementById('load-button-container').className = \"hide\";\r\n    let view = `\r\n         <div class=\"arrow-container\">\r\n            <img src=\"../img/arrow-back.svg\" alt=\"go back\" class=\"arrow-back\" onclick=\"history.go(-1)\">\r\n        </div>\r\n        <div class=\"error-404\">\r\n            <h1>Error 404</h1>\r\n            <h2>Page not found</h2>\r\n        </div>    \r\n    `;\r\n    return view;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/pages/404.js?");

/***/ }),

/***/ "./src/pages/detail.js":
/*!*****************************!*\
  !*** ./src/pages/detail.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getSuggestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getSuggestions */ \"./utils/getSuggestions.js\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/getData */ \"./utils/getData.js\");\n\r\n\r\n\r\n//Solciitar data y generar html\r\nconst Detail = async () => {\r\n    let URL = window.location.href;\r\n    let id = URL.slice(URL.lastIndexOf('/') + 1, URL.length);\r\n\r\n    const { data: { movies } } = await (0,_utils_getSuggestions__WEBPACK_IMPORTED_MODULE_0__.default)(id);                  \r\n    const { data: { movie } } =  await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_1__.default)(id, null);\r\n\r\n    document.getElementById(\"back-arrow\").className = \"arrow-container\";  \r\n    document.getElementById('load-button-container').className = \"hide\";\r\n\r\n    const view = `\r\n    <section class=\"movie-detail-container\">\r\n    <div class=\"movie-detail\">\r\n        <img src=\"${movie.large_cover_image}\" alt=\"\">\r\n        <div class=\"info\">\r\n            <h1>${movie.title}</h1>\r\n            <h3>${movie.year}</h3>\r\n            <h4>${movie.genres.join(\" / \")}</h4>\r\n            <h5>${movie.description_intro}</h5>\r\n        </div>\r\n    </div>\r\n    </section>\r\n    <hr class=\"line\"></hr>\r\n    <h1>Suggested movies</h1>\r\n    <div class=\"suggestions\">       \r\n        ${movies.map(movie => `\r\n            <div class=\"suggestion-items\">\r\n                <a href=\"#/movie/${movie.id}\">\r\n                    <img src=\"${movie.medium_cover_image}\" loading=\"lazy\"></img>\r\n                </a>\r\n                <h2>${movie.title}</h2>\r\n            </div>\r\n        `).join(' ')}\r\n    <div>\r\n  \r\n    `;\r\n    window.scrollTo(0,0);\r\n    return view;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/pages/detail.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getData */ \"./utils/getData.js\");\n\r\n\r\n//Generar el home a partir de los datos de la api\r\nconst Home = async (search = null) => {\r\n    document.getElementById(\"back-arrow\").className = \"hide\";\r\n    document.getElementById('load-button-container').className = \"load-button-container\";  \r\n    const { data: { movies } } = search ? await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(null, search) : await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n    let view = `\r\n        <ul class=\"movies-container\">\r\n            ${movies.map(movie => \r\n            `\r\n            <li class=\"movie-home\">\r\n                <a href=\"#/movie/${movie.id}\">\r\n                    <img src='${movie.medium_cover_image}' id=\"home-img\" loading=\"lazy\">\r\n                </a>\r\n                    <h4>${movie.title}</h4>\r\n                    <h6>${movie.year}</h6>\r\n            </>\r\n            `)}\r\n        </ul>\r\n    `;\r\n    return view;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/showSearchs.js":
/*!**********************************!*\
  !*** ./src/pages/showSearchs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getData */ \"./utils/getData.js\");\n\r\n \r\n const main_section  = document.getElementById('ul-container'); \r\n\r\n//Buscar peliculas usando la barra de busqueda\r\n const showSearchs = async () => {\r\n    let search_position = location.href.lastIndexOf('/');\r\n    let search = location.href.slice(search_position + 1);\r\n\r\n    document.getElementById(\"back-arrow\").className = \"arrow-container\"; \r\n    document.getElementById('load-button-container').className = \"hide\";\r\n\r\n    const { data } = search ? await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(null, search) : await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(null, search);\r\n\r\n    if (data.movie_count == 0)\r\n    {\r\n        return `<h1>Movie not found</h1>`\r\n    }\r\n\r\n    let view = `\r\n        <ul class=\"movies-container\">\r\n        ${data.movies.map(movie => `\r\n        <li class=\"movie-home\">\r\n            <a href=\"#/movie/${movie.id}\">\r\n                <img src='${movie.medium_cover_image}' id=\"home-img\" loading=\"lazy\">\r\n            </a>\r\n                <h4>${movie.title}</h4>\r\n                <h6>${movie.year}</h6>\r\n        </>\r\n        `)}\r\n        </ul>\r\n    `;\r\n    return view;\r\n }\r\n\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showSearchs);\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/pages/showSearchs.js?");

/***/ }),

/***/ "./src/templates/footer.js":
/*!*********************************!*\
  !*** ./src/templates/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Footer = () => {\r\n    const view = `\r\n    <div class=\"footer-content\">\r\n    <a href=\"https://github.com/juanmajurado04\">\r\n      <img src=\"https://image.flaticon.com/icons/png/512/25/25231.png\" alt=\"github\" class=\"github-logo\">\r\n    </a>\r\n    <a href=\"https://www.instagram.com/juanmajurado_/\">\r\n      <img src=\"https://image.flaticon.com/icons/png/512/87/87390.png\" alt=\"instagram\" class=\"instagram-logo\">\r\n    </a>\r\n  </div>\r\n    `;\r\n    return view;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/templates/footer.js?");

/***/ }),

/***/ "./src/templates/loading.js":
/*!**********************************!*\
  !*** ./src/templates/loading.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Loading = () => {\r\n    const view = `\r\n    <div class=\"loading\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n    </div>\r\n    `;\r\n    return view;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);\n\n//# sourceURL=webpack://spa-movies-catalogue/./src/templates/loading.js?");

/***/ }),

/***/ "./utils/getData.js":
/*!**************************!*\
  !*** ./utils/getData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = 'https://yts.mx/api/v2/';\r\n\r\n\r\n// Trayendo la info. de la api\r\nconst getData = async (id = null, search = null) => {                                                                 \r\n\r\n    let use_api;\r\n    let page = sessionStorage.getItem('page');\r\n\r\n    if (id === null && search === null)\r\n    {\r\n        use_api = `${API}list_movies.json?page=${page}`;\r\n    }\r\n    else\r\n    {\r\n        id ? use_api = `${API}movie_details.json?movie_id=${id}`: null;\r\n        search ? use_api = `${API}list_movies.json?query_term=${search}`: null;\r\n    }\r\n    \r\n    try\r\n    {\r\n        const response = await fetch(use_api);\r\n        \r\n        const data = await response.json();\r\n        console.log(data);\r\n        return data;\r\n    }\r\n    catch(error)\r\n    {\r\n        console.error(error);\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://spa-movies-catalogue/./utils/getData.js?");

/***/ }),

/***/ "./utils/getPath.js":
/*!**************************!*\
  !*** ./utils/getPath.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getPath = () => location.hash.trim().toLocaleLowerCase();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPath);\n\n//# sourceURL=webpack://spa-movies-catalogue/./utils/getPath.js?");

/***/ }),

/***/ "./utils/getSuggestions.js":
/*!*********************************!*\
  !*** ./utils/getSuggestions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = 'https://yts.mx/api/v2/';\r\n\r\nconst getSuggestions = async (id) => {\r\n\r\n    let suggestion = `${API}movie_suggestions.json?movie_id=${id}`;\r\n    try\r\n    {\r\n        let response = await fetch(suggestion);\r\n        let data = await response.json();\r\n        return data;\r\n    }\r\n    catch (error)\r\n    {\r\n        console.error(error);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSuggestions);\n\n//# sourceURL=webpack://spa-movies-catalogue/./utils/getSuggestions.js?");

/***/ }),

/***/ "./utils/loadMoreMovies.js":
/*!*********************************!*\
  !*** ./utils/loadMoreMovies.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/home */ \"./src/pages/home.js\");\n\r\n\r\nconst main_section  = document.getElementById('ul-container');\r\n\r\nconst loadMoreMovies = async () => {\r\n    let page = sessionStorage.getItem('page');\r\n    page += 1;\r\n    sessionStorage.setItem('page', page);\r\n    main_section.innerHTML += await (0,_src_pages_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}    \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMoreMovies);\n\n//# sourceURL=webpack://spa-movies-catalogue/./utils/loadMoreMovies.js?");

/***/ }),

/***/ "./utils/makeSearch.js":
/*!*****************************!*\
  !*** ./utils/makeSearch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_pages_showSearchs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/showSearchs */ \"./src/pages/showSearchs.js\");\n\r\n\r\nconst makeSearch = (event) => {\r\n    const form = document.getElementById(\"search-form\");\r\n    const text_box = document.getElementById(\"text-box\");\r\n    event.preventDefault();\r\n    let search = text_box.value.toLowerCase();\r\n    location.href = `index.html#/search/${search}`;\r\n    form.reset();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeSearch);\n\n//# sourceURL=webpack://spa-movies-catalogue/./utils/makeSearch.js?");

/***/ }),

/***/ "./utils/resolveRoutes.js":
/*!********************************!*\
  !*** ./utils/resolveRoutes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resolveRoutes = (path) => {\r\n\r\n    if (path == '#/' || path === '')\r\n    {\r\n        return '/';\r\n    }\r\n    \r\n    let extra = path.lastIndexOf('/');\r\n    let route = path.slice(0, extra + 1);\r\n\r\n    route = route == '#/movie/' ? '/movie' : route;\r\n    route = route == '#/search/' ? '/search' : route;\r\n    return route;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n//# sourceURL=webpack://spa-movies-catalogue/./utils/resolveRoutes.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;