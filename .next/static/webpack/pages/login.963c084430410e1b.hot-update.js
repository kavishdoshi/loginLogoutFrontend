"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/components/LoginForm.js":
/*!*************************************!*\
  !*** ./src/components/LoginForm.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction LoginForm() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"Username: \".concat(username, \", Password: \").concat(password));\n        // Add logic to submit form data to backend here\n        const response = true;\n        if (response) {\n            // Add logic to redirect to dashboard here\n            console.log(\"Login successful\");\n            window.location.href = \"https://kavishdoshi.com\";\n        } else {\n            // Add logic to display error message here\n            console.log(\"Login failed\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex-col items-center justify-center w-full p-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"w-full flex justify-center dark:text-light\",\n                children: [\n                    \"Username:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"w-full flex justify-center dark:text-light\",\n                children: [\n                    \"Password:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"relative group text-dark w-full flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"inline-block bg-light dark:bg-dark border border-solid border-dark p-2 dark:bg-light \",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"wuQOK7xaXdVz4RMrZQhWbI751Oc=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxZQUFZOztJQUNqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1NLGVBQWUsQ0FBQ0MsUUFBVTtRQUM1QkEsTUFBTUMsY0FBYztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDLGFBQW9DTixPQUF2QkYsVUFBUyxnQkFBdUIsT0FBVEU7UUFDaEQsZ0RBQWdEO1FBR2hELE1BQU1PLFdBQVcsSUFBSTtRQUNyQixJQUFJQSxVQUFVO1lBQ1YsMENBQTBDO1lBQzFDRixRQUFRQyxHQUFHLENBQUM7WUFDWkUsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7UUFDM0IsT0FBTztZQUNILDBDQUEwQztZQUMxQ0wsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCLENBQUM7SUFDTDtJQUVBLHFCQUNJLDhEQUFDSztRQUFLQyxVQUFVVjtRQUFjVyxXQUFVOzswQkFDcEMsOERBQUNDO2dCQUFNRCxXQUFVOztvQkFBNkM7a0NBRTFELDhEQUFDRTt3QkFBTUMsTUFBSzt3QkFBT0MsT0FBT25CO3dCQUFVb0IsVUFBVSxDQUFDQyxJQUFNcEIsWUFBWW9CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUVuRiw4REFBQ0k7Ozs7OzBCQUNELDhEQUFDUDtnQkFBTUQsV0FBVTs7b0JBQTZDO2tDQUUxRCw4REFBQ0U7d0JBQU1DLE1BQUs7d0JBQVdDLE9BQU9qQjt3QkFBVWtCLFVBQVUsQ0FBQ0MsSUFBTWxCLFlBQVlrQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQkFFdkYsOERBQUNJOzs7OzswQkFDRCw4REFBQ0M7Z0JBQU9OLE1BQUs7Z0JBQVNILFdBQVU7MEJBQ2hDLDRFQUFDVTtvQkFBS1YsV0FBWTs4QkFBd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRIO0dBeENTaEI7S0FBQUE7QUEwQ1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzPzQ3NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coYFVzZXJuYW1lOiAke3VzZXJuYW1lfSwgUGFzc3dvcmQ6ICR7cGFzc3dvcmR9YCk7XG4gICAgICAgIC8vIEFkZCBsb2dpYyB0byBzdWJtaXQgZm9ybSBkYXRhIHRvIGJhY2tlbmQgaGVyZVxuICAgICAgICBcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRydWU7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gQWRkIGxvZ2ljIHRvIHJlZGlyZWN0IHRvIGRhc2hib2FyZCBoZXJlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bCcpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly9rYXZpc2hkb3NoaS5jb20nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkIGxvZ2ljIHRvIGRpc3BsYXkgZXJyb3IgbWVzc2FnZSBoZXJlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gZmFpbGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHAtMTInPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgZGFyazp0ZXh0LWxpZ2h0Jz5cbiAgICAgICAgICAgICAgICBVc2VybmFtZTpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgZGFyazp0ZXh0LWxpZ2h0Jz5cbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0ncmVsYXRpdmUgZ3JvdXAgdGV4dC1kYXJrIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayBiZy1saWdodCBkYXJrOmJnLWRhcmsgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBwLTIgZGFyazpiZy1saWdodCBgfT5cbiAgICAgICAgICAgICAgICBTdWJtaXQgXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW5Gb3JtIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJyIiwiYnV0dG9uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LoginForm.js\n"));

/***/ })

});