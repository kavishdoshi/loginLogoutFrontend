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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Form(param) {\n    let { labels , inputTypes , handleSubmit , submitText , labelClass =\"w-full flex justify-center dark:text-light\" , formClass =\"flex-col items-center justify-center w-full p-12\"  } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (event)=>{\n        setFormData({\n            ...formData,\n            [event.target.name]: event.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"\".concat(formClass),\n        children: [\n            labels.map((label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(labelClass),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: label\n                        }, void 0, false, {\n                            fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: label,\n                            name: label,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, label, true, {\n                    fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: submitText\n            }, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/Form.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Form, \"CgHqyReD6jKK1NawX+yWoebGi8o=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsU0FBU0UsS0FDTCxLQUdDLEVBQUU7UUFISCxFQUFFQyxPQUFNLEVBQUVDLFdBQVUsRUFBRUMsYUFBWSxFQUFFQyxXQUFVLEVBQzFDQyxZQUFXLDZDQUE0QyxFQUN2REMsV0FBVSxtREFBa0QsRUFDL0QsR0FIRDs7SUFJQSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsQ0FBQztJQUUxQyxNQUFNVSxlQUFlLENBQUNDLFFBQVU7UUFDNUJGLFlBQVk7WUFDUixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ0csTUFBTUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsTUFBTUMsTUFBTSxDQUFDRSxLQUFLO1FBQzNDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsVUFBVVo7UUFBY2EsV0FBVyxHQUFhLE9BQVZWOztZQUN2Q0wsT0FBT2dCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDVCw4REFBQ0M7b0JBQWdCSCxXQUFXLEdBQWMsT0FBWFg7O3NDQUMzQiw4REFBQ2E7c0NBQU9BOzs7Ozs7c0NBQ1IsOERBQUNFOzRCQUFNQyxNQUFLOzRCQUFPQyxJQUFJSjs0QkFBT04sTUFBTU07NEJBQU9LLFVBQVVkOzs7Ozs7O21CQUYvQ1M7Ozs7OzBCQUtkLDhEQUFDTTtnQkFBT0gsTUFBSzswQkFBVWpCOzs7Ozs7Ozs7Ozs7QUFHbkM7R0F6QlNKO0tBQUFBO0FBMkJULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm0uanM/ZDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEZvcm0oXG4gICAgeyBsYWJlbHMsIGlucHV0VHlwZXMsIGhhbmRsZVN1Ym1pdCwgc3VibWl0VGV4dCwgXG4gICAgICAgIGxhYmVsQ2xhc3M9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBkYXJrOnRleHQtbGlnaHRcIiwgXG4gICAgICAgIGZvcm1DbGFzcz1cImZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcC0xMlwiXG4gICAgfSkge1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtgJHtmb3JtQ2xhc3N9YH0+XG4gICAgICAgICAgICB7bGFiZWxzLm1hcCgobGFiZWwpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGFiZWx9IGNsYXNzTmFtZT17YCR7bGFiZWxDbGFzc31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD17bGFiZWx9IG5hbWU9e2xhYmVsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57c3VibWl0VGV4dH08L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJsYWJlbHMiLCJpbnB1dFR5cGVzIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0VGV4dCIsImxhYmVsQ2xhc3MiLCJmb3JtQ2xhc3MiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJtYXAiLCJsYWJlbCIsImRpdiIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Form.js\n"));

/***/ })

});