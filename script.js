/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(1);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(2);

	var el = document.getElementById('isolated-scroll');
	(0, _src2.default)(el);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var calculateHeight = function calculateHeight(el) {
	  // Source adapted from: http://youmightnotneedjquery.com/#outer_height_with_margin
	  var height = el.offsetHeight;

	  var _getComputedStyle = getComputedStyle(el);

	  var marginTop = _getComputedStyle.marginTop;
	  var marginBottom = _getComputedStyle.marginBottom;


	  height += parseInt(marginTop, 10) + parseInt(marginBottom, 10);
	  return height;
	};

	// Source adapted from: http://stackoverflow.com/a/16324762
	var makeHandler = function makeHandler(el) {
	  return function (event) {
	    var scrollTop = el.scrollTop;
	    var scrollHeight = el.scrollHeight;
	    var type = event.type;
	    var detail = event.detail;
	    var wheelDelta = event.wheelDelta;

	    var height = calculateHeight(el);
	    var delta = type === 'DOMMouseScroll' ? detail * -40 : wheelDelta;
	    var up = delta > 0;

	    var prevent = function prevent() {
	      event.stopPropagation();
	      event.preventDefault();
	      event.returnValue = false;

	      return false;
	    };

	    if (!up && -delta > scrollHeight - height - scrollTop) {
	      el.scrollTop = scrollHeight;
	      return prevent();
	    } else if (up && delta > scrollTop) {
	      el.scrollTop = 0;
	      return prevent();
	    }
	  };
	};

	exports.default = function (el) {
	  var handler = makeHandler(el);

	  var addEvent = (el.addEventListener || el.attachEvent).bind(el);
	  var removeEvent = (el.removeEventListener || el.detachEvent).bind(el);

	  addEvent('mousewheel', handler);
	  addEvent('DOMMouseScroll', handler);

	  return function () {
	    removeEvent('mousewheel', handler);
	    removeEvent('DOMMouseScroll', handler);
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ }
/******/ ]);