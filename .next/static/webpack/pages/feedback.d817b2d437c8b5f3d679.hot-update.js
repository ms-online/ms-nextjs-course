webpackHotUpdate_N_E("pages/feedback",{

/***/ "./pages/feedback/index.js":
/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/zion/Desktop/nextjs-course/pages/feedback/index.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction FeedbackPage(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      feedbackData = _useState[0],\n      setfeedbackData = _useState[1];\n\n  function loadFeedbackHandler(id) {\n    fetch(\"/api/feedback/\".concat(id)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return setfeedbackData(data.feedback);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [feedbackData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: feedbackData.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 24\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: props.feedbackItems.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [item.feedback, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: loadFeedbackHandler.bind(null, item.id),\n            children: \"\\u663E\\u793A\\u53CD\\u9988\\u8BE6\\u60C5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, _this)]\n        }, item.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FeedbackPage, \"396n86BKhFqcTEEKC7txA9vtRMQ=\");\n\n_c = FeedbackPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FeedbackPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZGJhY2svaW5kZXguanM/YjljZCJdLCJuYW1lcyI6WyJGZWVkYmFja1BhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiZmVlZGJhY2tEYXRhIiwic2V0ZmVlZGJhY2tEYXRhIiwibG9hZEZlZWRiYWNrSGFuZGxlciIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImZlZWRiYWNrIiwiZW1haWwiLCJmZWVkYmFja0l0ZW1zIiwibWFwIiwiaXRlbSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsRUFEckI7QUFBQSxNQUNwQkMsWUFEb0I7QUFBQSxNQUNOQyxlQURNOztBQUUzQixXQUFTQyxtQkFBVCxDQUE2QkMsRUFBN0IsRUFBaUM7QUFDL0JDLFNBQUsseUJBQWtCRCxFQUFsQixFQUFMLENBQ0dFLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFEO0FBQUEsYUFBVVAsZUFBZSxDQUFDTyxJQUFJLENBQUNDLFFBQU4sQ0FBekI7QUFBQSxLQUZSO0FBR0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSxlQUNHVCxZQUFZLGlCQUFJO0FBQUEsZ0JBQUlBLFlBQVksQ0FBQ1U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURuQixlQUVFO0FBQUEsZ0JBQ0daLEtBQUssQ0FBQ2EsYUFBTixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRDtBQUFBLDRCQUN2QjtBQUFBLHFCQUNHQSxJQUFJLENBQUNKLFFBRFIsZUFFRTtBQUFRLG1CQUFPLEVBQUVQLG1CQUFtQixDQUFDWSxJQUFwQixDQUF5QixJQUF6QixFQUErQkQsSUFBSSxDQUFDVixFQUFwQyxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVNVLElBQUksQ0FBQ1YsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR1QjtBQUFBLE9BQXhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBdEJRTixZOztLQUFBQSxZOztBQWtDTUEsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYnVpbGRGZWVkYmFja1BhdGgsIGV4dHJhY3RGZWVkYmFjayB9IGZyb20gJy4uL2FwaS9mZWVkYmFjaydcblxuZnVuY3Rpb24gRmVlZGJhY2tQYWdlKHByb3BzKSB7XG4gIGNvbnN0IFtmZWVkYmFja0RhdGEsIHNldGZlZWRiYWNrRGF0YV0gPSB1c2VTdGF0ZSgpXG4gIGZ1bmN0aW9uIGxvYWRGZWVkYmFja0hhbmRsZXIoaWQpIHtcbiAgICBmZXRjaChgL2FwaS9mZWVkYmFjay8ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRmZWVkYmFja0RhdGEoZGF0YS5mZWVkYmFjaykpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7ZmVlZGJhY2tEYXRhICYmIDxwPntmZWVkYmFja0RhdGEuZW1haWx9PC9wPn1cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb3BzLmZlZWRiYWNrSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICB7aXRlbS5mZWVkYmFja31cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9hZEZlZWRiYWNrSGFuZGxlci5iaW5kKG51bGwsIGl0ZW0uaWQpfT5cbiAgICAgICAgICAgICAg5pi+56S65Y+N6aaI6K+m5oOFXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKVxuICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmZWVkYmFja0l0ZW1zOiBkYXRhLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2tQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n");

/***/ })

})