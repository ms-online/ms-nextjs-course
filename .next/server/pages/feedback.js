module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/feedback/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/feedback.js":
/*!*******************************!*\
  !*** ./pages/api/feedback.js ***!
  \*******************************/
/*! exports provided: buildFeedbackPath, extractFeedback, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildFeedbackPath\", function() { return buildFeedbackPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractFeedback\", function() { return extractFeedback; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildFeedbackPath() {\n  return path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'data', 'feedback.json');\n}\nfunction extractFeedback(filePath) {\n  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath);\n  const data = JSON.parse(fileData);\n  return data;\n}\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    const name = req.body.name;\n    const email = req.body.email;\n    const feedBackText = req.body.feedback;\n    const newFeedback = {\n      id: new Date().toISOString(),\n      name: name,\n      email: email,\n      feedback: feedBackText\n    }; //数据存储在数据库或者文件当中\n\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    data.push(newFeedback);\n    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, JSON.stringify(data));\n    res.status(201).json({\n      message: '保存成功！',\n      feedback: newFeedback\n    });\n  } else {\n    //get请求\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    res.status(200).json({\n      feedback: data\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmVlZGJhY2suanM/ZGZjNSJdLCJuYW1lcyI6WyJidWlsZEZlZWRiYWNrUGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3RGZWVkYmFjayIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJmcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibmFtZSIsImJvZHkiLCJlbWFpbCIsImZlZWRCYWNrVGV4dCIsImZlZWRiYWNrIiwibmV3RmVlZGJhY2siLCJpZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInB1c2giLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLFNBQVNBLGlCQUFULEdBQTZCO0FBQ2xDLFNBQU9DLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsZUFBakMsQ0FBUDtBQUNEO0FBRU0sU0FBU0MsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDeEMsUUFBTUMsUUFBUSxHQUFHQyx5Q0FBRSxDQUFDQyxZQUFILENBQWdCSCxRQUFoQixDQUFqQjtBQUNBLFFBQU1JLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFFBQVgsQ0FBYjtBQUVBLFNBQU9HLElBQVA7QUFDRDs7QUFFRCxTQUFTRyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDekIsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsSUFBdEI7QUFDQSxVQUFNRSxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQUF2QjtBQUNBLFVBQU1DLFlBQVksR0FBR04sR0FBRyxDQUFDSSxJQUFKLENBQVNHLFFBQTlCO0FBRUEsVUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxRQUFFLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBRGM7QUFFbEJSLFVBQUksRUFBRUEsSUFGWTtBQUdsQkUsV0FBSyxFQUFFQSxLQUhXO0FBSWxCRSxjQUFRLEVBQUVEO0FBSlEsS0FBcEIsQ0FMeUIsQ0FZekI7O0FBQ0EsVUFBTWQsUUFBUSxHQUFHTixpQkFBaUIsRUFBbEM7QUFDQSxVQUFNVSxJQUFJLEdBQUdMLGVBQWUsQ0FBQ0MsUUFBRCxDQUE1QjtBQUNBSSxRQUFJLENBQUNnQixJQUFMLENBQVVKLFdBQVY7QUFDQWQsNkNBQUUsQ0FBQ21CLGFBQUgsQ0FBaUJyQixRQUFqQixFQUEyQkssSUFBSSxDQUFDaUIsU0FBTCxDQUFlbEIsSUFBZixDQUEzQjtBQUNBSyxPQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsT0FBWDtBQUFvQlYsY0FBUSxFQUFFQztBQUE5QixLQUFyQjtBQUNELEdBbEJELE1Ba0JPO0FBQ0w7QUFDQSxVQUFNaEIsUUFBUSxHQUFHTixpQkFBaUIsRUFBbEM7QUFDQSxVQUFNVSxJQUFJLEdBQUdMLGVBQWUsQ0FBQ0MsUUFBRCxDQUE1QjtBQUNBUyxPQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFVCxjQUFRLEVBQUVYO0FBQVosS0FBckI7QUFDRDtBQUNGOztBQUVjRyxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9mZWVkYmFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEZlZWRiYWNrUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdmZWVkYmFjay5qc29uJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCkge1xuICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aClcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZmlsZURhdGEpXG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgbmFtZSA9IHJlcS5ib2R5Lm5hbWVcbiAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsXG4gICAgY29uc3QgZmVlZEJhY2tUZXh0ID0gcmVxLmJvZHkuZmVlZGJhY2tcblxuICAgIGNvbnN0IG5ld0ZlZWRiYWNrID0ge1xuICAgICAgaWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBmZWVkYmFjazogZmVlZEJhY2tUZXh0LFxuICAgIH1cblxuICAgIC8v5pWw5o2u5a2Y5YKo5Zyo5pWw5o2u5bqT5oiW6ICF5paH5Lu25b2T5LitXG4gICAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpXG4gICAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aClcbiAgICBkYXRhLnB1c2gobmV3RmVlZGJhY2spXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAn5L+d5a2Y5oiQ5Yqf77yBJywgZmVlZGJhY2s6IG5ld0ZlZWRiYWNrIH0pXG4gIH0gZWxzZSB7XG4gICAgLy9nZXTor7fmsYJcbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKClcbiAgICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmVlZGJhY2s6IGRhdGEgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/feedback.js\n");

/***/ }),

/***/ "./pages/feedback/index.js":
/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/feedback */ \"./pages/api/feedback.js\");\n\nvar _jsxFileName = \"/Users/zion/Desktop/nextjs-course/pages/feedback/index.js\";\n\n\n\nfunction FeedbackPage(props) {\n  const {\n    0: feedbackData,\n    1: setfeedbackData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n\n  function loadFeedbackHandler(id) {\n    fetch(`/api/${id}`).then(response => response.json()).then(data => setfeedbackData(data.feedback));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [feedbackData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: feedbackData.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 24\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: props.feedbackItems.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [item.feedback, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: loadFeedbackHandler.bind(null, item.id),\n          children: \"\\u663E\\u793A\\u53CD\\u9988\\u8BE6\\u60C5\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, this)]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\nasync function getStaticProps() {\n  const filePath = Object(_api_feedback__WEBPACK_IMPORTED_MODULE_2__[\"buildFeedbackPath\"])();\n  const data = Object(_api_feedback__WEBPACK_IMPORTED_MODULE_2__[\"extractFeedback\"])(filePath);\n  return {\n    props: {\n      feedbackItems: data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcz9iOWNkIl0sIm5hbWVzIjpbIkZlZWRiYWNrUGFnZSIsInByb3BzIiwiZmVlZGJhY2tEYXRhIiwic2V0ZmVlZGJhY2tEYXRhIiwidXNlU3RhdGUiLCJsb2FkRmVlZGJhY2tIYW5kbGVyIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmVlZGJhY2siLCJlbWFpbCIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwiYmluZCIsImdldFN0YXRpY1Byb3BzIiwiZmlsZVBhdGgiLCJidWlsZEZlZWRiYWNrUGF0aCIsImV4dHJhY3RGZWVkYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLEVBQWhEOztBQUNBLFdBQVNDLG1CQUFULENBQTZCQyxFQUE3QixFQUFpQztBQUMvQkMsU0FBSyxDQUFFLFFBQU9ELEVBQUcsRUFBWixDQUFMLENBQ0dFLElBREgsQ0FDU0MsUUFBRCxJQUFjQSxRQUFRLENBQUNDLElBQVQsRUFEdEIsRUFFR0YsSUFGSCxDQUVTRyxJQUFELElBQVVSLGVBQWUsQ0FBQ1EsSUFBSSxDQUFDQyxRQUFOLENBRmpDO0FBR0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSxlQUNHVixZQUFZLGlCQUFJO0FBQUEsZ0JBQUlBLFlBQVksQ0FBQ1c7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURuQixlQUVFO0FBQUEsZ0JBQ0daLEtBQUssQ0FBQ2EsYUFBTixDQUFvQkMsR0FBcEIsQ0FBeUJDLElBQUQsaUJBQ3ZCO0FBQUEsbUJBQ0dBLElBQUksQ0FBQ0osUUFEUixlQUVFO0FBQVEsaUJBQU8sRUFBRVAsbUJBQW1CLENBQUNZLElBQXBCLENBQXlCLElBQXpCLEVBQStCRCxJQUFJLENBQUNWLEVBQXBDLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUEsU0FBU1UsSUFBSSxDQUFDVixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztBQUVNLGVBQWVZLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsUUFBUSxHQUFHQyx1RUFBaUIsRUFBbEM7QUFDQSxRQUFNVCxJQUFJLEdBQUdVLHFFQUFlLENBQUNGLFFBQUQsQ0FBNUI7QUFDQSxTQUFPO0FBQ0xsQixTQUFLLEVBQUU7QUFDTGEsbUJBQWEsRUFBRUg7QUFEVjtBQURGLEdBQVA7QUFLRDtBQUVjWCwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBidWlsZEZlZWRiYWNrUGF0aCwgZXh0cmFjdEZlZWRiYWNrIH0gZnJvbSAnLi4vYXBpL2ZlZWRiYWNrJ1xuXG5mdW5jdGlvbiBGZWVkYmFja1BhZ2UocHJvcHMpIHtcbiAgY29uc3QgW2ZlZWRiYWNrRGF0YSwgc2V0ZmVlZGJhY2tEYXRhXSA9IHVzZVN0YXRlKClcbiAgZnVuY3Rpb24gbG9hZEZlZWRiYWNrSGFuZGxlcihpZCkge1xuICAgIGZldGNoKGAvYXBpLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldGZlZWRiYWNrRGF0YShkYXRhLmZlZWRiYWNrKSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtmZWVkYmFja0RhdGEgJiYgPHA+e2ZlZWRiYWNrRGF0YS5lbWFpbH08L3A+fVxuICAgICAgPHVsPlxuICAgICAgICB7cHJvcHMuZmVlZGJhY2tJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIHtpdGVtLmZlZWRiYWNrfVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2FkRmVlZGJhY2tIYW5kbGVyLmJpbmQobnVsbCwgaXRlbS5pZCl9PlxuICAgICAgICAgICAgICDmmL7npLrlj43ppojor6bmg4VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpXG4gIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGZlZWRiYWNrSXRlbXM6IGRhdGEsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja1BhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n");

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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });