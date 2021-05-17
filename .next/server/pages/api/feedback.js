module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/feedback.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/feedback.js":
/*!*******************************!*\
  !*** ./pages/api/feedback.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    const name = req.body.name;\n    const email = req.body.email;\n    const feedBackText = req.body.feedback;\n    const newFeedback = {\n      id: new Date().toISOString(),\n      name: name,\n      email: email,\n      feedback: feedBackText\n    }; //数据存储在数据库或者文件当中\n\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'data', 'feedback.json');\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath);\n    const data = JSON.parse(fileData);\n    data.push(newFeedback);\n    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, JSON.stringify(data));\n    res.status(201).json({\n      message: '保存成功！',\n      feedback: newFeedback\n    });\n  } else {\n    res.status(200).json({\n      message: '响应成功！'\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmVlZGJhY2suanM/ZGZjNSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibmFtZSIsImJvZHkiLCJlbWFpbCIsImZlZWRCYWNrVGV4dCIsImZlZWRiYWNrIiwibmV3RmVlZGJhY2siLCJpZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImZpbGVQYXRoIiwicGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZURhdGEiLCJmcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDekIsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsSUFBdEI7QUFDQSxVQUFNRSxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQUF2QjtBQUNBLFVBQU1DLFlBQVksR0FBR04sR0FBRyxDQUFDSSxJQUFKLENBQVNHLFFBQTlCO0FBRUEsVUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxRQUFFLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBRGM7QUFFbEJSLFVBQUksRUFBRUEsSUFGWTtBQUdsQkUsV0FBSyxFQUFFQSxLQUhXO0FBSWxCRSxjQUFRLEVBQUVEO0FBSlEsS0FBcEIsQ0FMeUIsQ0FZekI7O0FBQ0EsVUFBTU0sUUFBUSxHQUFHQywyQ0FBSSxDQUFDQyxJQUFMLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE1BQXpCLEVBQWlDLGVBQWpDLENBQWpCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHQyx5Q0FBRSxDQUFDQyxZQUFILENBQWdCUCxRQUFoQixDQUFqQjtBQUNBLFVBQU1RLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFFBQVgsQ0FBYjtBQUNBRyxRQUFJLENBQUNHLElBQUwsQ0FBVWYsV0FBVjtBQUNBVSw2Q0FBRSxDQUFDTSxhQUFILENBQWlCWixRQUFqQixFQUEyQlMsSUFBSSxDQUFDSSxTQUFMLENBQWVMLElBQWYsQ0FBM0I7QUFDQW5CLE9BQUcsQ0FBQ3lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsT0FBWDtBQUFvQnJCLGNBQVEsRUFBRUM7QUFBOUIsS0FBckI7QUFDRCxHQW5CRCxNQW1CTztBQUNMUCxPQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDRDtBQUNGOztBQUVjN0Isc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZGJhY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBuYW1lID0gcmVxLmJvZHkubmFtZVxuICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHkuZW1haWxcbiAgICBjb25zdCBmZWVkQmFja1RleHQgPSByZXEuYm9keS5mZWVkYmFja1xuXG4gICAgY29uc3QgbmV3RmVlZGJhY2sgPSB7XG4gICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZlZWRiYWNrOiBmZWVkQmFja1RleHQsXG4gICAgfVxuXG4gICAgLy/mlbDmja7lrZjlgqjlnKjmlbDmja7lupPmiJbogIXmlofku7blvZPkuK1cbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdmZWVkYmFjay5qc29uJylcbiAgICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aClcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSlcbiAgICBkYXRhLnB1c2gobmV3RmVlZGJhY2spXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAn5L+d5a2Y5oiQ5Yqf77yBJywgZmVlZGJhY2s6IG5ld0ZlZWRiYWNrIH0pXG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAn5ZON5bqU5oiQ5Yqf77yBJyB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/feedback.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });