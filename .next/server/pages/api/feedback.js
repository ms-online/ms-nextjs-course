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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction buildFeedbackPath() {\n  return path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'data', 'feedback.json');\n}\n\nfunction extractFeedback(filePath) {\n  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath);\n  const data = JSON.parse(fileData);\n  return data;\n}\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    const name = req.body.name;\n    const email = req.body.email;\n    const feedBackText = req.body.feedback;\n    const newFeedback = {\n      id: new Date().toISOString(),\n      name: name,\n      email: email,\n      feedback: feedBackText\n    }; //数据存储在数据库或者文件当中\n\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    data.push(newFeedback);\n    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, JSON.stringify(data));\n    res.status(201).json({\n      message: '保存成功！',\n      feedback: newFeedback\n    });\n  } else {\n    //get请求\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    res.status(200).json({\n      feedback: data\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmVlZGJhY2suanM/ZGZjNSJdLCJuYW1lcyI6WyJidWlsZEZlZWRiYWNrUGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3RGZWVkYmFjayIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJmcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibmFtZSIsImJvZHkiLCJlbWFpbCIsImZlZWRCYWNrVGV4dCIsImZlZWRiYWNrIiwibmV3RmVlZGJhY2siLCJpZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInB1c2giLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULEdBQTZCO0FBQzNCLFNBQU9DLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsZUFBakMsQ0FBUDtBQUNEOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ2pDLFFBQU1DLFFBQVEsR0FBR0MseUNBQUUsQ0FBQ0MsWUFBSCxDQUFnQkgsUUFBaEIsQ0FBakI7QUFDQSxRQUFNSSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFYLENBQWI7QUFFQSxTQUFPRyxJQUFQO0FBQ0Q7O0FBRUQsU0FBU0csT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3pCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNELElBQXRCO0FBQ0EsVUFBTUUsS0FBSyxHQUFHTCxHQUFHLENBQUNJLElBQUosQ0FBU0MsS0FBdkI7QUFDQSxVQUFNQyxZQUFZLEdBQUdOLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRyxRQUE5QjtBQUVBLFVBQU1DLFdBQVcsR0FBRztBQUNsQkMsUUFBRSxFQUFFLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQURjO0FBRWxCUixVQUFJLEVBQUVBLElBRlk7QUFHbEJFLFdBQUssRUFBRUEsS0FIVztBQUlsQkUsY0FBUSxFQUFFRDtBQUpRLEtBQXBCLENBTHlCLENBWXpCOztBQUNBLFVBQU1kLFFBQVEsR0FBR04saUJBQWlCLEVBQWxDO0FBQ0EsVUFBTVUsSUFBSSxHQUFHTCxlQUFlLENBQUNDLFFBQUQsQ0FBNUI7QUFDQUksUUFBSSxDQUFDZ0IsSUFBTCxDQUFVSixXQUFWO0FBQ0FkLDZDQUFFLENBQUNtQixhQUFILENBQWlCckIsUUFBakIsRUFBMkJLLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZWxCLElBQWYsQ0FBM0I7QUFDQUssT0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFLE9BQVg7QUFBb0JWLGNBQVEsRUFBRUM7QUFBOUIsS0FBckI7QUFDRCxHQWxCRCxNQWtCTztBQUNMO0FBQ0EsVUFBTWhCLFFBQVEsR0FBR04saUJBQWlCLEVBQWxDO0FBQ0EsVUFBTVUsSUFBSSxHQUFHTCxlQUFlLENBQUNDLFFBQUQsQ0FBNUI7QUFDQVMsT0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVQsY0FBUSxFQUFFWDtBQUFaLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFY0csc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZGJhY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5mdW5jdGlvbiBidWlsZEZlZWRiYWNrUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdmZWVkYmFjay5qc29uJylcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKSB7XG4gIGNvbnN0IGZpbGVEYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKVxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSlcblxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBuYW1lID0gcmVxLmJvZHkubmFtZVxuICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHkuZW1haWxcbiAgICBjb25zdCBmZWVkQmFja1RleHQgPSByZXEuYm9keS5mZWVkYmFja1xuXG4gICAgY29uc3QgbmV3RmVlZGJhY2sgPSB7XG4gICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZlZWRiYWNrOiBmZWVkQmFja1RleHQsXG4gICAgfVxuXG4gICAgLy/mlbDmja7lrZjlgqjlnKjmlbDmja7lupPmiJbogIXmlofku7blvZPkuK1cbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKClcbiAgICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKVxuICAgIGRhdGEucHVzaChuZXdGZWVkYmFjaylcbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICfkv53lrZjmiJDlip/vvIEnLCBmZWVkYmFjazogbmV3RmVlZGJhY2sgfSlcbiAgfSBlbHNlIHtcbiAgICAvL2dldOivt+axglxuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKVxuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBmZWVkYmFjazogZGF0YSB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/feedback.js\n");

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