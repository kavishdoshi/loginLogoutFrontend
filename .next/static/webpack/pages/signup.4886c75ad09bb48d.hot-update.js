"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./src/components/SignUpForm.js":
/*!**************************************!*\
  !*** ./src/components/SignUpForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ \"./src/components/Form.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SignUpForm() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n    // Connect to server to submit user sign up data\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                labels: [\n                    \"Username\",\n                    \"Email\",\n                    \"Password\"\n                ],\n                handleSubmit: handleSubmit,\n                submitText: \"SignUps\",\n                inputTypes: [\n                    \"text\",\n                    \"email\",\n                    \"password\"\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Username:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Email:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/SignUpForm.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SignUpForm, \"tRYla3vCO/TiaNXVkXSQty2VxO8=\");\n_c = SignUpForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpForm);\nvar _c;\n$RefreshReg$(_c, \"SignUpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduVXBGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFFMUIsU0FBU0csYUFBYTs7SUFDbEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekMsTUFBTVMsZUFBZSxDQUFDQyxRQUFVO1FBQzVCQSxNQUFNQyxjQUFjO0lBQ3BCLGdEQUFnRDtJQUNwRDtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ1YsNkNBQUlBO2dCQUNEVyxRQUFRO29CQUFDO29CQUFZO29CQUFTO2lCQUFXO2dCQUN6Q0gsY0FBY0E7Z0JBQ2RJLFlBQVc7Z0JBQ1hDLFlBQVk7b0JBQUM7b0JBQVE7b0JBQVM7aUJBQVc7Ozs7OzswQkFFakQsOERBQUNDO2dCQUFLQyxVQUFVUDs7a0NBQ1osOERBQUNROzs0QkFBTTswQ0FFSCw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLE9BQU9qQjtnQ0FBVWtCLFVBQVUsQ0FBQ0MsSUFBTWxCLFlBQVlrQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFbkYsOERBQUNIOzs0QkFBTTswQ0FFSCw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVFDLE9BQU9mO2dDQUFPZ0IsVUFBVSxDQUFDQyxJQUFNaEIsU0FBU2dCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUU5RSw4REFBQ0g7OzRCQUFNOzBDQUVILDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBV0MsT0FBT2I7Z0NBQVVjLFVBQVUsQ0FBQ0MsSUFBTWQsWUFBWWMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRXZGLDhEQUFDSTt3QkFBT0wsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7QUFJbEM7R0FuQ1NqQjtLQUFBQTtBQXFDVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWduVXBGb3JtLmpzP2UyYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcblxuZnVuY3Rpb24gU2lnblVwRm9ybSgpIHtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBDb25uZWN0IHRvIHNlcnZlciB0byBzdWJtaXQgdXNlciBzaWduIHVwIGRhdGFcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxGb3JtIFxuICAgICAgICAgICAgICAgIGxhYmVscz17WydVc2VybmFtZScsICdFbWFpbCcsICdQYXNzd29yZCddfSBcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gXG4gICAgICAgICAgICAgICAgc3VibWl0VGV4dD0nU2lnblVwcycgXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlcz17W1widGV4dFwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIl19IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIlNpZ25VcEZvcm0iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibGFiZWxzIiwic3VibWl0VGV4dCIsImlucHV0VHlwZXMiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SignUpForm.js\n"));

/***/ })

});