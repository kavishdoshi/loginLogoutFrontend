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

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Form(param) {\n    let { labels , handleSubmit , submitText , labelClass =\"w-full flex justify-center dark:text-light p-2\" , formClass =\"flex-col items-center justify-center w-full p-12\" , buttonClass =\"relative group text-dark w-full flex justify-center p-5\" , buttonSpanClass =\"inline-block bg-light border border-solid border-dark p-2 dark:bg-light\"  } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (event)=>{\n        setFormData({\n            ...formData,\n            [event.target.name]: event.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"\".concat(formClass),\n        children: [\n            labels.map((label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(labelClass),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: label.label\n                        }, void 0, false, {\n                            fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: label.inputType,\n                            id: label.label,\n                            name: label.label,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, label.label, true, {\n                    fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"\".concat(buttonClass),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat(buttonSpanClass),\n                    children: submitText\n                }, void 0, false, {\n                    fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                    lineNumber: 28,\n                    columnNumber: 64\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Form, \"CgHqyReD6jKK1NawX+yWoebGi8o=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsU0FBU0UsS0FDTCxLQUtDLEVBQUU7UUFMSCxFQUFFQyxPQUFNLEVBQUVDLGFBQVksRUFBRUMsV0FBVSxFQUM5QkMsWUFBVyxpREFBZ0QsRUFDM0RDLFdBQVUsbURBQWtELEVBQzVEQyxhQUFjLDBEQUF5RCxFQUN2RUMsaUJBQWtCLDBFQUF5RSxFQUM5RixHQUxEOztJQU1BLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxDQUFDO0lBRTFDLE1BQU1XLGVBQWUsQ0FBQ0MsUUFBVTtRQUM1QkYsWUFBWTtZQUNSLEdBQUdELFFBQVE7WUFDWCxDQUFDRyxNQUFNQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixNQUFNQyxNQUFNLENBQUNFLEtBQUs7UUFDM0M7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFLQyxVQUFVZDtRQUFjZSxXQUFXLEdBQWEsT0FBVlo7O1lBQ3ZDSixPQUFPaUIsR0FBRyxDQUFDLENBQUNDLHNCQUNULDhEQUFDQztvQkFBc0JILFdBQVcsR0FBYyxPQUFYYjs7c0NBQ2pDLDhEQUFDZTtzQ0FBUUEsTUFBTUEsS0FBSzs7Ozs7O3NDQUNwQiw4REFBQ0U7NEJBQU1DLE1BQU1ILE1BQU1JLFNBQVM7NEJBQUVDLElBQUlMLE1BQU1BLEtBQUs7NEJBQUVOLE1BQU1NLE1BQU1BLEtBQUs7NEJBQUVNLFVBQVVmOzs7Ozs7c0NBQzVFLDhEQUFDZ0I7Ozs7OzttQkFIS1AsTUFBTUEsS0FBSzs7Ozs7MEJBTXpCLDhEQUFDUTtnQkFBT0wsTUFBSztnQkFBU0wsV0FBVyxHQUFlLE9BQVpYOzBCQUFlLDRFQUFDc0I7b0JBQUtYLFdBQVcsR0FBbUIsT0FBaEJWOzhCQUFvQko7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3ZHO0dBNUJTSDtLQUFBQTtBQThCVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzP2QwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBGb3JtKFxuICAgIHsgbGFiZWxzLCBoYW5kbGVTdWJtaXQsIHN1Ym1pdFRleHQsIFxuICAgICAgICBsYWJlbENsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgZGFyazp0ZXh0LWxpZ2h0IHAtMlwiLCBcbiAgICAgICAgZm9ybUNsYXNzPVwiZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBwLTEyXCIsXG4gICAgICAgIGJ1dHRvbkNsYXNzID0gXCJyZWxhdGl2ZSBncm91cCB0ZXh0LWRhcmsgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcC01XCIsXG4gICAgICAgIGJ1dHRvblNwYW5DbGFzcyA9IFwiaW5saW5lLWJsb2NrIGJnLWxpZ2h0IGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgcC0yIGRhcms6YmctbGlnaHRcIlxuICAgIH0pIHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17YCR7Zm9ybUNsYXNzfWB9PlxuICAgICAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xhYmVsLmxhYmVsfSBjbGFzc05hbWU9e2Ake2xhYmVsQ2xhc3N9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+e2xhYmVsLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtsYWJlbC5pbnB1dFR5cGV9IGlkPXtsYWJlbC5sYWJlbH0gbmFtZT17bGFiZWwubGFiZWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2Ake2J1dHRvbkNsYXNzfWB9PjxzcGFuIGNsYXNzTmFtZT17YCR7YnV0dG9uU3BhbkNsYXNzfWB9PntzdWJtaXRUZXh0fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJsYWJlbHMiLCJoYW5kbGVTdWJtaXQiLCJzdWJtaXRUZXh0IiwibGFiZWxDbGFzcyIsImZvcm1DbGFzcyIsImJ1dHRvbkNsYXNzIiwiYnV0dG9uU3BhbkNsYXNzIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibWFwIiwibGFiZWwiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJpbnB1dFR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwiYnIiLCJidXR0b24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Form.js\n"));

/***/ })

});