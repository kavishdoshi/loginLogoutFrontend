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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction LoginForm() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"Username: \".concat(username, \", Password: \").concat(password));\n    // Add logic to submit form data to backend here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex-col items-center justify-center w-full p-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"w-full flex justify-center\",\n                children: [\n                    \"Username:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"w-full flex justify-center\",\n                children: [\n                    \"Password:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"relative group text-dark mx-1/2 flex justify-center border border-solid border-dark bg-light shadow-2xl\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kavishdoshi/Desktop/loginLogoutFrontend/src/components/LoginForm.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"wuQOK7xaXdVz4RMrZQhWbI751Oc=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxZQUFZOztJQUNqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1NLGVBQWUsQ0FBQ0MsUUFBVTtRQUM1QkEsTUFBTUMsY0FBYztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDLGFBQW9DTixPQUF2QkYsVUFBUyxnQkFBdUIsT0FBVEU7SUFDaEQsZ0RBQWdEO0lBQ3BEO0lBRUEscUJBQ0ksOERBQUNPO1FBQUtDLFVBQVVOO1FBQWNPLFdBQVU7OzBCQUNwQyw4REFBQ0M7Z0JBQU1ELFdBQVU7O29CQUE2QjtrQ0FFMUMsOERBQUNFO3dCQUFNQyxNQUFLO3dCQUFPQyxPQUFPZjt3QkFBVWdCLFVBQVUsQ0FBQ0MsSUFBTWhCLFlBQVlnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQkFFbkYsOERBQUNJOzs7OzswQkFDRCw4REFBQ1A7Z0JBQU1ELFdBQVU7O29CQUE2QjtrQ0FFMUMsOERBQUNFO3dCQUFNQyxNQUFLO3dCQUFXQyxPQUFPYjt3QkFBVWMsVUFBVSxDQUFDQyxJQUFNZCxZQUFZYyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQkFFdkYsOERBQUNJOzs7OzswQkFDRCw4REFBQ0M7Z0JBQU9OLE1BQUs7Z0JBQVNILFdBQVU7MEJBQTBHOzs7Ozs7Ozs7Ozs7QUFHdEo7R0F6QlNaO0tBQUFBO0FBMkJULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz80NzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBVc2VybmFtZTogJHt1c2VybmFtZX0sIFBhc3N3b3JkOiAke3Bhc3N3b3JkfWApO1xuICAgICAgICAvLyBBZGQgbG9naWMgdG8gc3VibWl0IGZvcm0gZGF0YSB0byBiYWNrZW5kIGhlcmVcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHAtMTInPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J3JlbGF0aXZlIGdyb3VwIHRleHQtZGFyayBteC0xLzIgZmxleCBqdXN0aWZ5LWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIGJnLWxpZ2h0IHNoYWRvdy0yeGwnPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dpbkZvcm0iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LoginForm.js\n"));

/***/ })

});