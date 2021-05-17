webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/zion/Desktop/nextjs-course/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      feedbackItems = _useState[0],\n      setFeedbackItems = _useState[1];\n\n  var nameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var feedbackInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  function submitFormHandler(event) {\n    event.preventDefault();\n    var enteredName = nameInputRef.current.value;\n    var enteredEmail = emailInputRef.current.value;\n    var feedback = feedbackInputRef.current.value;\n    var reqBody = {\n      name: enteredName,\n      email: enteredEmail,\n      feedback: feedback\n    }; //发起POST请求\n\n    fetch('/api/feedback', {\n      method: 'POST',\n      body: JSON.stringify(reqBody),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return console.log(data);\n    });\n  } //get反馈信息\n\n\n  function loadFeedbackHandler() {\n    //发起GET请求\n    fetch('/api/feedback').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return console.log(data);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"\\u4E3B\\u9875\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitFormHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"name\",\n          children: \"\\u59D3\\u540D\\uFF1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          id: \"name\",\n          ref: nameInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: \"\\u90AE\\u7BB1\\uFF1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          ref: emailInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"feedback\",\n          children: \"\\u4F60\\u7684\\u53CD\\u9988\\uFF1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"feedback\",\n          rows: \"5\",\n          ref: feedbackInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        children: \"\\u63D0\\u4EA4\\u53CD\\u9988\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      children: \"\\u83B7\\u53D6\\u53CD\\u9988\\u4FE1\\u606F\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}\n\n_s(HomePage, \"xbP1iBaXfBOrRa93zVY60C6WoOQ=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwiZmVlZGJhY2tJdGVtcyIsInNldEZlZWRiYWNrSXRlbXMiLCJuYW1lSW5wdXRSZWYiLCJ1c2VSZWYiLCJlbWFpbElucHV0UmVmIiwiZmVlZGJhY2tJbnB1dFJlZiIsInN1Ym1pdEZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWROYW1lIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZEVtYWlsIiwiZmVlZGJhY2siLCJyZXFCb2R5IiwibmFtZSIsImVtYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsb2FkRmVlZGJhY2tIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUN3QkMsc0RBQVEsQ0FBQyxFQUFELENBRGhDO0FBQUEsTUFDWEMsYUFEVztBQUFBLE1BQ0lDLGdCQURKOztBQUVsQixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxFQUE1QjtBQUNBLE1BQU1FLGdCQUFnQixHQUFHRixvREFBTSxFQUEvQjs7QUFFQSxXQUFTRyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDaENBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLFdBQVcsR0FBR1AsWUFBWSxDQUFDUSxPQUFiLENBQXFCQyxLQUF6QztBQUNBLFFBQU1DLFlBQVksR0FBR1IsYUFBYSxDQUFDTSxPQUFkLENBQXNCQyxLQUEzQztBQUNBLFFBQU1FLFFBQVEsR0FBR1IsZ0JBQWdCLENBQUNLLE9BQWpCLENBQXlCQyxLQUExQztBQUNBLFFBQU1HLE9BQU8sR0FBRztBQUNkQyxVQUFJLEVBQUVOLFdBRFE7QUFFZE8sV0FBSyxFQUFFSixZQUZPO0FBR2RDLGNBQVEsRUFBRUE7QUFISSxLQUFoQixDQU5nQyxDQVdoQzs7QUFDQUksU0FBSyxDQUFDLGVBQUQsRUFBa0I7QUFDckJDLFlBQU0sRUFBRSxNQURhO0FBRXJCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxPQUFmLENBRmU7QUFHckJRLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSFksS0FBbEIsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FQUixFQVFHRixJQVJILENBUVEsVUFBQ0csSUFBRDtBQUFBLGFBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBQVY7QUFBQSxLQVJSO0FBU0QsR0EzQmlCLENBNkJsQjs7O0FBQ0EsV0FBU0csbUJBQVQsR0FBK0I7QUFDN0I7QUFDQVosU0FBSyxDQUFDLGVBQUQsQ0FBTCxDQUNHTSxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRDtBQUFBLGFBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBQVY7QUFBQSxLQUZSO0FBR0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxjQUFRLEVBQUVwQixpQkFBaEI7QUFBQSw4QkFDRTtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFFLEVBQUMsTUFBdEI7QUFBNkIsYUFBRyxFQUFFSjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsWUFBRSxFQUFDLE9BQXZCO0FBQStCLGFBQUcsRUFBRUU7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFVLFlBQUUsRUFBQyxVQUFiO0FBQXdCLGNBQUksRUFBQyxHQUE3QjtBQUFpQyxhQUFHLEVBQUVDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBM0RRUCxROztLQUFBQSxRO0FBNkRNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2ZlZWRiYWNrSXRlbXMsIHNldEZlZWRiYWNrSXRlbXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IG5hbWVJbnB1dFJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IGVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKVxuICBjb25zdCBmZWVkYmFja0lucHV0UmVmID0gdXNlUmVmKClcblxuICBmdW5jdGlvbiBzdWJtaXRGb3JtSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGVudGVyZWROYW1lID0gbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWVcbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWVcbiAgICBjb25zdCBmZWVkYmFjayA9IGZlZWRiYWNrSW5wdXRSZWYuY3VycmVudC52YWx1ZVxuICAgIGNvbnN0IHJlcUJvZHkgPSB7XG4gICAgICBuYW1lOiBlbnRlcmVkTmFtZSxcbiAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4gICAgICBmZWVkYmFjazogZmVlZGJhY2ssXG4gICAgfVxuICAgIC8v5Y+R6LW3UE9TVOivt+axglxuICAgIGZldGNoKCcvYXBpL2ZlZWRiYWNrJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICB9XG5cbiAgLy9nZXTlj43ppojkv6Hmga9cbiAgZnVuY3Rpb24gbG9hZEZlZWRiYWNrSGFuZGxlcigpIHtcbiAgICAvL+WPkei1t0dFVOivt+axglxuICAgIGZldGNoKCcvYXBpL2ZlZWRiYWNrJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPuS4u+mhtTwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybUhhbmRsZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz7lp5PlkI3vvJo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmFtZScgcmVmPXtuYW1lSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+6YKu566x77yaPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcmVmPXtlbWFpbElucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZmVlZGJhY2snPuS9oOeahOWPjemmiO+8mjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGlkPSdmZWVkYmFjaycgcm93cz0nNScgcmVmPXtmZWVkYmFja0lucHV0UmVmfT48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbj7mj5DkuqTlj43ppog8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxociAvPlxuICAgICAgPGJ1dHRvbj7ojrflj5blj43ppojkv6Hmga88L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})