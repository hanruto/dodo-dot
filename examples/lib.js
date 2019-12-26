/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation.ts":
/*!**************************!*\
  !*** ./src/animation.ts ***!
  \**************************/
/*! exports provided: createDotsAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDotsAnimation\", function() { return createDotsAnimation; });\nvar createDotsAnimation = function createDotsAnimation() {\n  var startAnimation = function startAnimation() {};\n\n  var stopAnimation = function stopAnimation() {};\n\n  var continueAnimation = function continueAnimation() {};\n\n  return {\n    start: startAnimation,\n    stop: stopAnimation,\n    \"continue\": continueAnimation\n  };\n};\n\n//# sourceURL=webpack:///./src/animation.ts?");

/***/ }),

/***/ "./src/dot.ts":
/*!********************!*\
  !*** ./src/dot.ts ***!
  \********************/
/*! exports provided: default, createDot, createDots, generateDots, getTextData, createDotsFromText, createDotsFromImage, createRandomDot, createRandomDots, paintDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDot\", function() { return createDot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDots\", function() { return createDots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateDots\", function() { return generateDots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTextData\", function() { return getTextData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDotsFromText\", function() { return createDotsFromText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDotsFromImage\", function() { return createDotsFromImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRandomDot\", function() { return createRandomDot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRandomDots\", function() { return createRandomDots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintDots\", function() { return paintDots; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar Dot = function Dot(dotInfo) {\n  var _this = this;\n\n  _classCallCheck(this, Dot);\n\n  this.x = void 0;\n  this.y = void 0;\n  this.z = void 0;\n  this.color = void 0;\n  this.radius = void 0;\n\n  this.paint = function () {\n    var perspective = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].perspective,\n        panel = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel;\n    if (!panel) return new Error('Please init panel before paint dot.');\n    var color = typeof _this.color === 'string' ? _this.color : Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"transformColorObjectToColor\"])(_this.color);\n    var scale = Number((perspective / (perspective + _this.z)).toFixed(2));\n    _this.x = parseInt(Math.abs(panel.width / 2 + (_this.x - panel.width / 2) * scale).toString(), 10);\n    _this.y = parseInt(Math.abs(panel.height / 2 + (_this.y - panel.height / 2) * scale).toString(), 10);\n    panel.drawBall(_this.x, _this.y, _this.radius * scale, color);\n  };\n\n  var x = dotInfo.x,\n      y = dotInfo.y,\n      z = dotInfo.z,\n      _color = dotInfo.color,\n      radius = dotInfo.radius;\n  this.x = x;\n  this.y = y;\n  this.z = z;\n  this.color = _color;\n  this.radius = radius;\n};\n\n\nvar createDot = function createDot(dotInfo) {\n  return new Dot(dotInfo);\n};\nvar createDots = function createDots(dataInfoArr) {\n  return dataInfoArr.map(function (dotInfo) {\n    return new Dot(dotInfo);\n  });\n};\nvar generateDots = function generateDots(options) {\n  var _options$dotRadius = options.dotRadius,\n      dotRadius = _options$dotRadius === void 0 ? 3 : _options$dotRadius,\n      imageData = options.imageData,\n      _options$dotMargin = options.dotMargin,\n      dotMargin = _options$dotMargin === void 0 ? 0 : _options$dotMargin;\n  var dots = [];\n  var interval = (dotRadius + dotMargin) * 2;\n\n  for (var x = 0; x < imageData.width; x += interval) {\n    for (var y = 0; y < imageData.height; y += interval) {\n      var i = (y * imageData.width + x) * 4 - 1;\n      var r = imageData.data[i - 3];\n      var g = imageData.data[i - 2];\n      var b = imageData.data[i - 1];\n      var a = imageData.data[i];\n      var dotInfo = {\n        x: x,\n        y: y,\n        z: 0,\n        color: {\n          r: r,\n          g: g,\n          b: b,\n          a: a\n        },\n        radius: dotRadius\n      };\n\n      if (imageData.data[i] >= 128) {\n        dots.push(new Dot(dotInfo));\n      }\n    }\n  }\n\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"shuffle\"])(dots);\n};\nvar getTextData = function getTextData(text, options) {\n  var panel = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel;\n  panel.clear();\n\n  var _ref = options || {},\n      _ref$fontSize = _ref.fontSize,\n      fontSize = _ref$fontSize === void 0 ? 150 : _ref$fontSize,\n      _ref$fontColor = _ref.fontColor,\n      fontColor = _ref$fontColor === void 0 ? '#666' : _ref$fontColor,\n      _ref$translateX = _ref.translateX,\n      translateX = _ref$translateX === void 0 ? 0 : _ref$translateX,\n      _ref$translateY = _ref.translateY,\n      translateY = _ref$translateY === void 0 ? 0 : _ref$translateY;\n\n  panel.drawText(text, panel.width / 2 + translateX, panel.height / 2 + translateY, fontColor, fontSize + 'px impact', 'center');\n  var imageData = panel.ctx.getImageData(0, 0, panel.width, panel.height);\n  panel.clear();\n  return imageData;\n};\nvar createDotsFromText = function createDotsFromText(text, options) {\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"withStashPanelData\"])(function () {\n    var _ref2 = options || {},\n        dotRadius = _ref2.dotRadius,\n        dotMargin = _ref2.dotMargin;\n\n    var imageData = getTextData(text, options);\n    return generateDots({\n      dotRadius: dotRadius,\n      dotMargin: dotMargin,\n      imageData: imageData\n    });\n  });\n};\nvar createDotsFromImage = function createDotsFromImage() {};\nvar createRandomDot = function createRandomDot() {};\nvar createRandomDots = function createRandomDots() {};\nvar paintDots = function paintDots(dots) {\n  dots.forEach(function (dot) {\n    return dot.paint();\n  });\n};\n\n//# sourceURL=webpack:///./src/dot.ts?");

/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * 保存一些环境变量和全局公用数据\n */\nvar DEFAULT_PERSPECTIVE = 200;\nvar global = {\n  perspective: DEFAULT_PERSPECTIVE,\n  panel: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (global);\n\n//# sourceURL=webpack:///./src/global.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel */ \"./src/panel.ts\");\n/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dot */ \"./src/dot.ts\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ \"./src/animation.ts\");\n\n\n\nvar dodot = {\n  createPanel: _panel__WEBPACK_IMPORTED_MODULE_0__[\"createPanel\"],\n  createDot: _dot__WEBPACK_IMPORTED_MODULE_1__[\"createDot\"],\n  createDots: _dot__WEBPACK_IMPORTED_MODULE_1__[\"createDots\"],\n  createRandomDot: _dot__WEBPACK_IMPORTED_MODULE_1__[\"createRandomDot\"],\n  createRandomDots: _dot__WEBPACK_IMPORTED_MODULE_1__[\"createRandomDots\"],\n  createDotsFromText: _dot__WEBPACK_IMPORTED_MODULE_1__[\"createDotsFromText\"],\n  createDotsFromImage: _dot__WEBPACK_IMPORTED_MODULE_1__[\"createDotsFromImage\"],\n  createDotsAnimation: _animation__WEBPACK_IMPORTED_MODULE_2__[\"createDotsAnimation\"],\n  paintDots: _dot__WEBPACK_IMPORTED_MODULE_1__[\"paintDots\"]\n}; // @ts-ignore\n\nwindow.dodot = dodot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (dodot);\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/panel.ts":
/*!**********************!*\
  !*** ./src/panel.ts ***!
  \**********************/
/*! exports provided: default, createPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Panel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPanel\", function() { return createPanel; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Panel = function Panel(element) {\n  var _this = this;\n\n  _classCallCheck(this, Panel);\n\n  this.canvas = void 0;\n  this.ctx = void 0;\n  this.width = void 0;\n  this.height = void 0;\n\n  this.drawBall = function (x, y, radius, color) {\n    _this.ctx.beginPath();\n\n    _this.ctx.arc(x, y, radius, 0, Math.PI * 2);\n\n    _this.ctx.fillStyle = color;\n\n    _this.ctx.fill();\n  };\n\n  this.drawText = function (text, x, y, color, font, align) {\n    _this.ctx.font = font ? font : '微软雅黑 16px';\n    _this.ctx.textAlign = align ? align : 'center';\n    _this.ctx.fillStyle = color;\n\n    _this.ctx.fillText(text, x, y);\n  };\n\n  this.drawImage = function (image, x, y, width, height) {\n    _this.ctx.drawImage(image, x, y, width, height);\n  };\n\n  this.clear = function (x, y) {\n    var cx = x ? x : _this.width;\n    var cy = y ? y : _this.height;\n\n    _this.ctx.clearRect(0, 0, cx, cy);\n  };\n\n  this.canvas = element;\n  this.ctx = this.canvas.getContext('2d');\n  this.width = element.width;\n  this.height = element.height;\n};\n\n\nvar createPanel = function createPanel(canvasElement) {\n  var panel = new Panel(canvasElement);\n  _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel = panel;\n  return panel;\n};\n\n//# sourceURL=webpack:///./src/panel.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: randomNumber, showFps, shuffle, transformColorObjectToColor, withStashPanelData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomNumber\", function() { return randomNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFps\", function() { return showFps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformColorObjectToColor\", function() { return transformColorObjectToColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withStashPanelData\", function() { return withStashPanelData; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n\nfunction randomNumber(start, end) {\n  var i = end - start;\n  var number = parseInt((start + Math.random() * i).toString(), 10);\n  return number;\n}\nfunction showFps() {\n  var frameCount = 0;\n  var element = document.createElement('span');\n  element.style.cssText = \"\\n    position: fixed;\\n    bottom: 20px;\\n    right: 20px;\\n    color: rgba(0, 0, 0, 0.3);\\n    font-size: 12px;\\n  \";\n  document.body.appendChild(element);\n\n  var loop = function loop() {\n    frameCount++;\n    requestAnimationFrame(loop);\n  };\n\n  loop();\n  var calcInterval = 2000;\n  setInterval(function () {\n    var fpsValue = (1000 / (calcInterval / frameCount)).toFixed(1);\n    element.innerHTML = \"\".concat(fpsValue, \" fps\");\n    frameCount = 0;\n  }, calcInterval);\n}\nfunction shuffle(arr) {\n  var newArr = arr.map(function (item) {\n    return item;\n  });\n  var len = newArr.length;\n  newArr.forEach(function (item, index) {\n    var randomIndex = parseInt((Math.random() * len).toString(), 10);\n    newArr[index] = newArr[randomIndex];\n    newArr[randomIndex] = item;\n  });\n  return newArr;\n}\nfunction transformColorObjectToColor(colorObject) {\n  var r = colorObject.r,\n      g = colorObject.g,\n      b = colorObject.b,\n      a = colorObject.a;\n  var alpha = (a / 255).toFixed(2);\n  return \"rgba(\".concat(r, \", \").concat(g, \", \").concat(b, \", \").concat(alpha, \")\");\n}\nvar withStashPanelData = function withStashPanelData(fn) {\n  var panel = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel;\n  var offsetCanvas = document.createElement('canvas');\n  var offsetCtx = offsetCanvas.getContext('2d');\n  var sourceCanvas = panel.canvas;\n  offsetCanvas.width = sourceCanvas.width;\n  offsetCanvas.height = sourceCanvas.height;\n  offsetCtx.drawImage(panel.canvas, 0, 0);\n  var result = fn();\n  panel.ctx.drawImage(offsetCanvas, 0, 0);\n  return result;\n};\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ });