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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDotsAnimation\", function() { return createDotsAnimation; });\n/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ \"./src/tween.ts\");\n/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dot */ \"./src/dot.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n/**\r\n * 动画控制器\r\n */\n\n\n\n\nvar createDotsAnimation = function createDotsAnimation(fromDots, toDots) {\n  var defaultTweenType = _constants__WEBPACK_IMPORTED_MODULE_2__[\"TweenType\"].Sine;\n  var tweenFn = _tween__WEBPACK_IMPORTED_MODULE_0__[\"default\"][defaultTweenType].easeOut;\n  var linearFn = _tween__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Linear;\n  var totalFrame = 100;\n  var panel = _global__WEBPACK_IMPORTED_MODULE_3__[\"default\"].panel; // 补充策略\n\n  var dotsCount = Math.max(fromDots.length, toDots.length);\n\n  if (!fromDots.length) {\n    fromDots = Object(_dot__WEBPACK_IMPORTED_MODULE_1__[\"createRandomDots\"])(dotsCount);\n  }\n\n  if (!toDots.length) {\n    toDots = Object(_dot__WEBPACK_IMPORTED_MODULE_1__[\"createRandomDots\"])(dotsCount);\n  }\n\n  if (fromDots.length && fromDots.length < dotsCount) {\n    fromDots = Object(_dot__WEBPACK_IMPORTED_MODULE_1__[\"supplementDots\"])(fromDots, dotsCount - fromDots.length);\n  }\n\n  if (toDots.length && toDots.length < dotsCount) {\n    toDots = Object(_dot__WEBPACK_IMPORTED_MODULE_1__[\"supplementDots\"])(toDots, dotsCount - toDots.length);\n  } // 动画策略\n\n\n  var currentFrame = 0;\n  var currentStatus = _constants__WEBPACK_IMPORTED_MODULE_2__[\"AnimationStatusEnum\"].STOP;\n  var timer = 0;\n\n  var animate = function animate() {\n    var loop = function loop() {\n      if (currentStatus === _constants__WEBPACK_IMPORTED_MODULE_2__[\"AnimationStatusEnum\"].STOP) {\n        cancelAnimationFrame(timer);\n        return;\n      }\n\n      var currentDots = [];\n\n      for (var i = 0; i < dotsCount; i++) {\n        var toDot = toDots[i];\n        var fromDot = fromDots[i];\n        var fromX = fromDot.x,\n            fromY = fromDot.y,\n            fromZ = fromDot.z,\n            fromColor = fromDot.color,\n            fromRadius = fromDot.radius;\n        var toX = toDot.x,\n            toY = toDot.y,\n            toZ = toDot.z,\n            toColor = toDot.color,\n            toRadius = toDot.radius;\n        var x = tweenFn(currentFrame, fromX, toX - fromX, totalFrame);\n        var y = tweenFn(currentFrame, fromY, toY - fromY, totalFrame);\n        var z = tweenFn(currentFrame, fromZ, toZ - fromZ, totalFrame);\n        var color = {\n          r: linearFn(currentFrame, fromColor.r, toColor.r - fromColor.r, totalFrame),\n          g: linearFn(currentFrame, fromColor.g, toColor.g - fromColor.g, totalFrame),\n          b: linearFn(currentFrame, fromColor.b, toColor.b - fromColor.b, totalFrame),\n          a: linearFn(currentFrame, fromColor.a, toColor.a - fromColor.a, totalFrame)\n        };\n        var radius = linearFn(currentFrame, fromRadius, toRadius - fromRadius, totalFrame);\n        currentDots.push(new _dot__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          x: x,\n          y: y,\n          z: z,\n          color: color,\n          radius: radius\n        }));\n      }\n\n      panel.clear();\n      panel.drawDots(currentDots);\n\n      if (currentFrame < totalFrame) {\n        currentFrame++;\n        timer = requestAnimationFrame(loop);\n      }\n    };\n\n    loop();\n  };\n\n  var startAnimation = function startAnimation() {\n    currentFrame = 0;\n    currentStatus = _constants__WEBPACK_IMPORTED_MODULE_2__[\"AnimationStatusEnum\"].RUN;\n    animate();\n  };\n\n  var stopAnimation = function stopAnimation() {\n    currentStatus = _constants__WEBPACK_IMPORTED_MODULE_2__[\"AnimationStatusEnum\"].STOP;\n  };\n\n  var continueAnimation = function continueAnimation() {\n    currentStatus = _constants__WEBPACK_IMPORTED_MODULE_2__[\"AnimationStatusEnum\"].RUN;\n    animate();\n  };\n\n  return {\n    start: startAnimation,\n    stop: stopAnimation,\n    \"continue\": continueAnimation\n  };\n};\n\n//# sourceURL=webpack:///./src/animation.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: AnimationStatusEnum, RenderType, TweenType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimationStatusEnum\", function() { return AnimationStatusEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderType\", function() { return RenderType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TweenType\", function() { return TweenType; });\n/**\r\n * 保存常量和枚举\r\n */\nvar AnimationStatusEnum;\n\n(function (AnimationStatusEnum) {\n  AnimationStatusEnum[\"RUN\"] = \"run\";\n  AnimationStatusEnum[\"STOP\"] = \"stop\";\n})(AnimationStatusEnum || (AnimationStatusEnum = {}));\n\nvar RenderType;\n\n(function (RenderType) {\n  RenderType[\"TEXT\"] = \"text\";\n  RenderType[\"IMAGE\"] = \"image\";\n})(RenderType || (RenderType = {}));\n\nvar TweenType;\n\n(function (TweenType) {\n  TweenType[\"Quad\"] = \"Quad\";\n  TweenType[\"Cubic\"] = \"Cubic\";\n  TweenType[\"Quart\"] = \"Quart\";\n  TweenType[\"Quint\"] = \"Quint\";\n  TweenType[\"Sine\"] = \"Sine\";\n  TweenType[\"Expo\"] = \"Expo\";\n  TweenType[\"Circ\"] = \"Circ\";\n  TweenType[\"Elastic\"] = \"Elastic\";\n  TweenType[\"Back\"] = \"Back\";\n  TweenType[\"Bounce\"] = \"Bounce\";\n})(TweenType || (TweenType = {}));\n\n//# sourceURL=webpack:///./src/constants.ts?");

/***/ }),

/***/ "./src/dot.ts":
/*!********************!*\
  !*** ./src/dot.ts ***!
  \********************/
/*! exports provided: default, createDot, createDots, createDotsFromText, createDotsFromImage, createRandomDot, createRandomDots, supplementDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDot\", function() { return createDot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDots\", function() { return createDots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDotsFromText\", function() { return createDotsFromText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDotsFromImage\", function() { return createDotsFromImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRandomDot\", function() { return createRandomDot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRandomDots\", function() { return createRandomDots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"supplementDots\", function() { return supplementDots; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * 粒子生成\r\n */\n\n\n\nvar transparentColor = {\n  r: 0,\n  g: 0,\n  b: 0,\n  a: 0\n};\n\nvar Dot = function Dot(dotInfo) {\n  var _this = this;\n\n  _classCallCheck(this, Dot);\n\n  this.x = void 0;\n  this.y = void 0;\n  this.z = void 0;\n  this.color = void 0;\n  this.radius = void 0;\n\n  this.paint = function () {\n    var perspective = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].perspective,\n        panel = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel;\n    if (!panel) return new Error('Please init panel before paint dot.');\n    var color = typeof _this.color === 'string' ? _this.color : Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"transformColorObjectToColor\"])(_this.color);\n    var scale = Number((perspective / (perspective + _this.z)).toFixed(2));\n    _this.x = parseInt(Math.abs(panel.width / 2 + (_this.x - panel.width / 2) * scale).toString(), 10);\n    _this.y = parseInt(Math.abs(panel.height / 2 + (_this.y - panel.height / 2) * scale).toString(), 10);\n    panel.drawBall(_this.x, _this.y, _this.radius * scale, color);\n  };\n\n  var x = dotInfo.x,\n      y = dotInfo.y,\n      z = dotInfo.z,\n      _color = dotInfo.color,\n      radius = dotInfo.radius;\n  this.x = x;\n  this.y = y;\n  this.z = z;\n  this.color = typeof _color === 'string' ? Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"transformColorToColorObject\"])(_color) : _color;\n  this.radius = radius;\n};\n\n\nvar createDot = function createDot(dotInfo) {\n  return new Dot(dotInfo);\n};\nvar createDots = function createDots(dataInfoArr) {\n  return dataInfoArr.map(function (dotInfo) {\n    return new Dot(dotInfo);\n  });\n};\n\nvar generateDots = function generateDots(options) {\n  var _options$dotRadius = options.dotRadius,\n      dotRadius = _options$dotRadius === void 0 ? 3 : _options$dotRadius,\n      imageData = options.data,\n      _options$dotMargin = options.dotMargin,\n      dotMargin = _options$dotMargin === void 0 ? 0 : _options$dotMargin;\n  var dots = [];\n  var interval = (dotRadius + dotMargin) * 2;\n\n  for (var x = 0; x < imageData.width; x += interval) {\n    for (var y = 0; y < imageData.height; y += interval) {\n      var i = (y * imageData.width + x) * 4 - 1;\n      var r = imageData.data[i - 3];\n      var g = imageData.data[i - 2];\n      var b = imageData.data[i - 1];\n      var a = imageData.data[i];\n      var dotInfo = {\n        x: x,\n        y: y,\n        z: 0,\n        color: {\n          r: r,\n          g: g,\n          b: b,\n          a: a\n        },\n        radius: dotRadius\n      };\n\n      if (imageData.data[i] >= 128) {\n        dots.push(new Dot(dotInfo));\n      }\n    }\n  }\n\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"shuffle\"])(dots);\n};\n\nvar getDataFromText = function getDataFromText(text, options) {\n  var panel = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel;\n  panel.clear();\n\n  var _ref = options || {},\n      _ref$fontSize = _ref.fontSize,\n      fontSize = _ref$fontSize === void 0 ? 150 : _ref$fontSize,\n      _ref$fontColor = _ref.fontColor,\n      fontColor = _ref$fontColor === void 0 ? '#666' : _ref$fontColor,\n      _ref$translateX = _ref.translateX,\n      translateX = _ref$translateX === void 0 ? 0 : _ref$translateX,\n      _ref$translateY = _ref.translateY,\n      translateY = _ref$translateY === void 0 ? 0 : _ref$translateY;\n\n  panel.drawText(text, panel.width / 2 + translateX, panel.height / 2 + translateY, fontColor, fontSize + 'px impact', 'center');\n  var imageData = panel.ctx.getImageData(0, 0, panel.width, panel.height);\n  panel.clear();\n  return imageData;\n};\n\nvar getDataFromImage = function getDataFromImage(image, options) {\n  var panel = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel;\n  panel.clear();\n\n  var _ref2 = options || {},\n      _ref2$imageWidth = _ref2.imageWidth,\n      imageWidth = _ref2$imageWidth === void 0 ? image.width : _ref2$imageWidth,\n      _ref2$imageHeight = _ref2.imageHeight,\n      imageHeight = _ref2$imageHeight === void 0 ? image.height : _ref2$imageHeight,\n      _ref2$translateX = _ref2.translateX,\n      translateX = _ref2$translateX === void 0 ? 0 : _ref2$translateX,\n      _ref2$translateY = _ref2.translateY,\n      translateY = _ref2$translateY === void 0 ? 0 : _ref2$translateY;\n\n  panel.drawImage(image, panel.width / 2 + translateX, panel.height / 2 + translateY, imageWidth, imageHeight);\n  var imageData = panel.ctx.getImageData(0, 0, panel.width, panel.height);\n  panel.clear();\n  return imageData;\n};\n\nvar createDotsFromText = function createDotsFromText(text, options) {\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"withStashPanelData\"])(function () {\n    var _ref3 = options || {},\n        dotRadius = _ref3.dotRadius,\n        dotMargin = _ref3.dotMargin;\n\n    var data = getDataFromText(text, options);\n    return generateDots({\n      dotRadius: dotRadius,\n      dotMargin: dotMargin,\n      data: data\n    });\n  });\n};\nvar createDotsFromImage = function createDotsFromImage(image, options) {\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"withStashPanelData\"])(function () {\n    var dotRadius = options.dotRadius,\n        dotMargin = options.dotMargin;\n    var imageData = getDataFromImage(image, options);\n    return generateDots({\n      dotRadius: dotRadius,\n      dotMargin: dotMargin,\n      data: imageData\n    });\n  });\n};\nvar createRandomDot = function createRandomDot(options) {\n  var panel = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel;\n\n  var _ref4 = options || {},\n      _ref4$color = _ref4.color,\n      initColor = _ref4$color === void 0 ? transparentColor : _ref4$color,\n      _ref4$radius = _ref4.radius,\n      initRadius = _ref4$radius === void 0 ? 4 : _ref4$radius,\n      _ref4$xRange = _ref4.xRange,\n      xRange = _ref4$xRange === void 0 ? {\n    min: -panel.width,\n    max: 2 * panel.width\n  } : _ref4$xRange,\n      _ref4$yRange = _ref4.yRange,\n      yRange = _ref4$yRange === void 0 ? {\n    min: -panel.height,\n    max: 2 * panel.height\n  } : _ref4$yRange,\n      _ref4$zRange = _ref4.zRange,\n      zRange = _ref4$zRange === void 0 ? {\n    min: -_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].perspective,\n    max: _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].perspective\n  } : _ref4$zRange;\n\n  var x = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"randomNumber\"])(xRange.min, xRange.max);\n  var y = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"randomNumber\"])(yRange.min, yRange.max);\n  var z = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"randomNumber\"])(zRange.min, zRange.max);\n  var color = initColor;\n  var radius = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"randomNumber\"])(initRadius / 2, initRadius * 2);\n  var dotInfo = {\n    x: x,\n    y: y,\n    z: z,\n    color: color,\n    radius: radius\n  };\n  return new Dot(dotInfo);\n};\nvar createRandomDots = function createRandomDots(dotNumber, options) {\n  return Array.from({\n    length: dotNumber\n  }).map(function () {\n    return createRandomDot(options);\n  });\n};\n\nfunction getLimitFromDots(dots) {\n  var maxX = Number.NEGATIVE_INFINITY;\n  var maxY = Number.NEGATIVE_INFINITY;\n  var minX = Number.POSITIVE_INFINITY;\n  var minY = Number.POSITIVE_INFINITY;\n  dots.forEach(function (dot) {\n    dot.x > maxX && (maxX = dot.x);\n    dot.y > maxY && (maxY = dot.y);\n    dot.x < minX && (minX = dot.x);\n    dot.y < minY && (minY = dot.y);\n  });\n  return {\n    maxX: maxX,\n    maxY: maxY,\n    minX: minX,\n    minY: minY\n  };\n}\n\nfunction supplementDots(dots, number) {\n  var _getLimitFromDots = getLimitFromDots(dots),\n      maxX = _getLimitFromDots.maxX,\n      maxY = _getLimitFromDots.maxY,\n      minX = _getLimitFromDots.minX,\n      minY = _getLimitFromDots.minY;\n\n  var newDots = createRandomDots(number, {\n    xRange: {\n      max: maxX,\n      min: minX\n    },\n    yRange: {\n      max: maxY,\n      min: minY\n    },\n    zRange: {\n      max: 0,\n      min: 0\n    }\n  });\n  return dots.concat(newDots);\n}\n\n//# sourceURL=webpack:///./src/dot.ts?");

/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 保存一些环境变量和全局公用数据\r\n */\nvar DEFAULT_PERSPECTIVE = 200;\nvar global = {\n  perspective: DEFAULT_PERSPECTIVE,\n  panel: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (global);\n\n//# sourceURL=webpack:///./src/global.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dot */ \"./src/dot.ts\");\n/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel */ \"./src/panel.ts\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ \"./src/animation.ts\");\n\n\n\nvar dodot = {\n  createPanel: _panel__WEBPACK_IMPORTED_MODULE_1__[\"createPanel\"],\n  createDot: _dot__WEBPACK_IMPORTED_MODULE_0__[\"createDot\"],\n  createDots: _dot__WEBPACK_IMPORTED_MODULE_0__[\"createDots\"],\n  createRandomDot: _dot__WEBPACK_IMPORTED_MODULE_0__[\"createRandomDot\"],\n  createRandomDots: _dot__WEBPACK_IMPORTED_MODULE_0__[\"createRandomDots\"],\n  createDotsFromText: _dot__WEBPACK_IMPORTED_MODULE_0__[\"createDotsFromText\"],\n  createDotsFromImage: _dot__WEBPACK_IMPORTED_MODULE_0__[\"createDotsFromImage\"],\n  createDotsAnimation: _animation__WEBPACK_IMPORTED_MODULE_2__[\"createDotsAnimation\"]\n}; // @ts-ignore\n\nwindow.dodot = dodot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (dodot);\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/panel.ts":
/*!**********************!*\
  !*** ./src/panel.ts ***!
  \**********************/
/*! exports provided: default, createPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Panel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPanel\", function() { return createPanel; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* 画板 */\n\n\n\nvar Panel = function Panel(element) {\n  var _this = this;\n\n  _classCallCheck(this, Panel);\n\n  this.canvas = void 0;\n  this.ctx = void 0;\n  this.width = void 0;\n  this.height = void 0;\n\n  this.drawBall = function (x, y, radius, color) {\n    _this.ctx.beginPath();\n\n    _this.ctx.arc(x, y, radius, 0, Math.PI * 2);\n\n    _this.ctx.fillStyle = color;\n\n    _this.ctx.fill();\n  };\n\n  this.drawText = function (text, x, y, color, font, align) {\n    _this.ctx.font = font ? font : '微软雅黑 16px';\n    _this.ctx.textAlign = align ? align : 'center';\n    _this.ctx.fillStyle = color;\n\n    _this.ctx.fillText(text, x, y);\n  };\n\n  this.drawImage = function (image, x, y, width, height) {\n    _this.ctx.drawImage(image, x, y, width, height);\n  };\n\n  this.clear = function (x, y) {\n    var cx = x ? x : _this.width;\n    var cy = y ? y : _this.height;\n\n    _this.ctx.clearRect(0, 0, cx, cy);\n  };\n\n  this.drawDot = function (dot) {\n    var perspective = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].perspective;\n    var x = dot.x,\n        y = dot.y,\n        z = dot.z,\n        color = dot.color,\n        radius = dot.radius;\n    var computedColor = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"transformColorObjectToColor\"])(color);\n    var scale = Number((perspective / (perspective + z)).toFixed(2));\n    var computedX = parseInt(Math.abs(_this.width / 2 + (x - _this.width / 2) * scale).toString(), 10);\n    var computedY = parseInt(Math.abs(_this.height / 2 + (y - _this.height / 2) * scale).toString(), 10);\n\n    _this.drawBall(computedX, computedY, radius * scale, computedColor);\n  };\n\n  this.drawDots = function (dots) {\n    dots.forEach(function (dot) {\n      return _this.drawDot(dot);\n    });\n  };\n\n  this.canvas = element;\n  this.ctx = this.canvas.getContext('2d');\n  this.width = element.width;\n  this.height = element.height;\n};\n\n\nvar createPanel = function createPanel(canvasElement) {\n  var panel = new Panel(canvasElement);\n  _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel = panel;\n  return panel;\n};\n\n//# sourceURL=webpack:///./src/panel.ts?");

/***/ }),

/***/ "./src/tween.ts":
/*!**********************!*\
  !*** ./src/tween.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* 运动曲线 */\nvar Tween = {\n  Linear: function Linear(t, b, c, d) {\n    return c * t / d + b;\n  },\n  Quad: {\n    easeIn: function easeIn(t, b, c, d) {\n      return c * (t /= d) * t + b;\n    },\n    easeOut: function easeOut(t, b, c, d) {\n      return -c * (t /= d) * (t - 2) + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d) {\n      if ((t /= d / 2) < 1) return c / 2 * t * t + b;\n      return -c / 2 * (--t * (t - 2) - 1) + b;\n    }\n  },\n  Cubic: {\n    easeIn: function easeIn(t, b, c, d) {\n      return c * (t /= d) * t * t + b;\n    },\n    easeOut: function easeOut(t, b, c, d) {\n      return c * ((t = t / d - 1) * t * t + 1) + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d) {\n      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;\n      return c / 2 * ((t -= 2) * t * t + 2) + b;\n    }\n  },\n  Quart: {\n    easeIn: function easeIn(t, b, c, d) {\n      return c * (t /= d) * t * t * t + b;\n    },\n    easeOut: function easeOut(t, b, c, d) {\n      return -c * ((t = t / d - 1) * t * t * t - 1) + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d) {\n      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;\n      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;\n    }\n  },\n  Quint: {\n    easeIn: function easeIn(t, b, c, d) {\n      return c * (t /= d) * t * t * t * t + b;\n    },\n    easeOut: function easeOut(t, b, c, d) {\n      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d) {\n      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;\n      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;\n    }\n  },\n  Sine: {\n    easeIn: function easeIn(t, b, c, d) {\n      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;\n    },\n    easeOut: function easeOut(t, b, c, d) {\n      return c * Math.sin(t / d * (Math.PI / 2)) + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d) {\n      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;\n    }\n  },\n  Expo: {\n    easeIn: function easeIn(t, b, c, d) {\n      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;\n    },\n    easeOut: function easeOut(t, b, c, d) {\n      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d) {\n      if (t == 0) return b;\n      if (t == d) return b + c;\n      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;\n      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;\n    }\n  },\n  Circ: {\n    easeIn: function easeIn(t, b, c, d) {\n      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;\n    },\n    easeOut: function easeOut(t, b, c, d) {\n      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d) {\n      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;\n      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;\n    }\n  },\n  Elastic: {\n    easeIn: function easeIn(t, b, c, d, a, p) {\n      var s;\n      if (t == 0) return b;\n      if ((t /= d) == 1) return b + c;\n      if (typeof p == 'undefined') p = d * 0.3;\n\n      if (!a || a < Math.abs(c)) {\n        s = p / 4;\n        a = c;\n      } else {\n        s = p / (2 * Math.PI) * Math.asin(c / a);\n      }\n\n      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;\n    },\n    easeOut: function easeOut(t, b, c, d, a, p) {\n      var s;\n      if (t == 0) return b;\n      if ((t /= d) == 1) return b + c;\n      if (typeof p == 'undefined') p = d * 0.3;\n\n      if (!a || a < Math.abs(c)) {\n        a = c;\n        s = p / 4;\n      } else {\n        s = p / (2 * Math.PI) * Math.asin(c / a);\n      }\n\n      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d, a, p) {\n      var s;\n      if (t == 0) return b;\n      if ((t /= d / 2) == 2) return b + c;\n      if (typeof p == 'undefined') p = d * (0.3 * 1.5);\n\n      if (!a || a < Math.abs(c)) {\n        a = c;\n        s = p / 4;\n      } else {\n        s = p / (2 * Math.PI) * Math.asin(c / a);\n      }\n\n      if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;\n      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;\n    }\n  },\n  Back: {\n    easeIn: function easeIn(t, b, c, d, s) {\n      if (typeof s == 'undefined') s = 1.70158;\n      return c * (t /= d) * t * ((s + 1) * t - s) + b;\n    },\n    easeOut: function easeOut(t, b, c, d, s) {\n      if (typeof s == 'undefined') s = 1.70158;\n      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;\n    },\n    easeInOut: function easeInOut(t, b, c, d, s) {\n      if (typeof s == 'undefined') s = 1.70158;\n      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;\n      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;\n    }\n  },\n  Bounce: {\n    easeIn: function easeIn(t, b, c, d) {\n      return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;\n    },\n    easeOut: function easeOut(t, b, c, d) {\n      if ((t /= d) < 1 / 2.75) {\n        return c * (7.5625 * t * t) + b;\n      } else if (t < 2 / 2.75) {\n        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;\n      } else if (t < 2.5 / 2.75) {\n        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;\n      } else {\n        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;\n      }\n    },\n    easeInOut: function easeInOut(t, b, c, d) {\n      if (t < d / 2) {\n        return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;\n      } else {\n        return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;\n      }\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tween);\n\n//# sourceURL=webpack:///./src/tween.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: randomNumber, showFps, shuffle, transformColorObjectToColor, transformColorToColorObject, withStashPanelData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomNumber\", function() { return randomNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFps\", function() { return showFps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformColorObjectToColor\", function() { return transformColorObjectToColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformColorToColorObject\", function() { return transformColorToColorObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withStashPanelData\", function() { return withStashPanelData; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n/**\r\n * 工具方法\r\n */\n\nfunction randomNumber(start, end) {\n  var i = end - start;\n  var number = parseInt((start + Math.random() * i).toString(), 10);\n  return number;\n}\nfunction showFps() {\n  var frameCount = 0;\n  var element = document.createElement('span');\n  element.style.cssText = \"\\n    position: fixed;\\n    bottom: 20px;\\n    right: 20px;\\n    color: rgba(0, 0, 0, 0.3);\\n    font-size: 12px;\\n  \";\n  document.body.appendChild(element);\n\n  var loop = function loop() {\n    frameCount++;\n    requestAnimationFrame(loop);\n  };\n\n  loop();\n  var calcInterval = 2000;\n  setInterval(function () {\n    var fpsValue = (1000 / (calcInterval / frameCount)).toFixed(1);\n    element.innerHTML = \"\".concat(fpsValue, \" fps\");\n    frameCount = 0;\n  }, calcInterval);\n}\nfunction shuffle(arr) {\n  var newArr = arr.map(function (item) {\n    return item;\n  });\n  var len = newArr.length;\n  newArr.forEach(function (item, index) {\n    var randomIndex = parseInt((Math.random() * len).toString(), 10);\n    newArr[index] = newArr[randomIndex];\n    newArr[randomIndex] = item;\n  });\n  return newArr;\n}\nfunction transformColorObjectToColor(colorObject) {\n  var r = colorObject.r,\n      g = colorObject.g,\n      b = colorObject.b,\n      a = colorObject.a;\n  var alpha = (a / 255).toFixed(2);\n  return \"rgba(\".concat(r, \", \").concat(g, \", \").concat(b, \", \").concat(alpha, \")\");\n}\nfunction transformColorToColorObject(color) {\n  var r = 0;\n  var g = 0;\n  var b = 0;\n  var a = 0;\n  return {\n    r: r,\n    g: g,\n    b: b,\n    a: a\n  };\n}\nvar withStashPanelData = function withStashPanelData(fn) {\n  var panel = _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].panel;\n  var offsetCanvas = document.createElement('canvas');\n  var offsetCtx = offsetCanvas.getContext('2d');\n  var sourceCanvas = panel.canvas;\n  offsetCanvas.width = sourceCanvas.width;\n  offsetCanvas.height = sourceCanvas.height;\n  offsetCtx.drawImage(panel.canvas, 0, 0);\n  var result = fn();\n  panel.ctx.drawImage(offsetCanvas, 0, 0);\n  return result;\n};\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ });