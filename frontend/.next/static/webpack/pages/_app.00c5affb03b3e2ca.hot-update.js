"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction NavBar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Function to determine if the link is active\n    const isActive = (pathname)=>router.pathname === pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand\",\n                    href: \"/\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/watermelon.ico\",\n                            alt: \"PalestineWatch Icon\",\n                            style: {\n                                width: \"20px\",\n                                height: \"20px\",\n                                marginRight: \"5px\",\n                                marginBottom: \"3px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        \"PalestineWatch\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarNavAltMarkup\",\n                    \"aria-controls\": \"navbarNavAltMarkup\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"navbar-toggler-icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse\",\n                    id: \"navbarNavAltMarkup\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-nav ms-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link me-4 \".concat(isActive(\"/about\") ? \"active font-weight-bold\" : \"\"),\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link me-4 \".concat(isActive(\"/news\") ? \"active font-weight-bold\" : \"\"),\n                                href: \"/news\",\n                                children: \"News\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link me-4 \".concat(isActive(\"/support-groups\") ? \"active font-weight-bold\" : \"\"),\n                                href: \"/support-groups\",\n                                children: \"Support Groups\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link me-4 \".concat(isActive(\"/countries\") ? \"active font-weight-bold\" : \"\"),\n                                href: \"/countries\",\n                                children: \"Countries\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUV6QixTQUFTRTs7SUFDdEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBRXhCLDhDQUE4QztJQUM5QyxNQUFNRyxXQUFXLENBQUNDLFdBQWFGLE9BQU9FLFFBQVEsS0FBS0E7SUFFbkQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUViLDhEQUFDRTtvQkFBRUYsV0FBVTtvQkFBZUcsTUFBSzs7c0NBQy9CLDhEQUFDQzs0QkFDQ0MsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkMsT0FBTztnQ0FBRUMsT0FBTztnQ0FBUUMsUUFBUTtnQ0FBUUMsYUFBYTtnQ0FBT0MsY0FBYzs0QkFBTTs7Ozs7O3dCQUNoRjs7Ozs7Ozs4QkFHSiw4REFBQ0M7b0JBQ0NaLFdBQVU7b0JBQ1ZhLE1BQUs7b0JBQ0xDLGtCQUFlO29CQUNmQyxrQkFBZTtvQkFDZkMsaUJBQWM7b0JBQ2RDLGlCQUFjO29CQUNkQyxjQUFXOzhCQUVYLDRFQUFDQzt3QkFBS25CLFdBQVU7Ozs7Ozs7Ozs7OzhCQUVsQiw4REFBQ0M7b0JBQUlELFdBQVU7b0JBQTJCb0IsSUFBRzs4QkFFM0MsNEVBQUNuQjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUNDRixXQUFXLGlCQUVWLE9BRENILFNBQVMsWUFBWSw0QkFBNEI7Z0NBRW5ETSxNQUFLOzBDQUNOOzs7Ozs7MENBR0QsOERBQUNEO2dDQUNDRixXQUFXLGlCQUVWLE9BRENILFNBQVMsV0FBVyw0QkFBNEI7Z0NBRWxETSxNQUFLOzBDQUNOOzs7Ozs7MENBR0QsOERBQUNEO2dDQUNDRixXQUFXLGlCQUVWLE9BRENILFNBQVMscUJBQXFCLDRCQUE0QjtnQ0FFNURNLE1BQUs7MENBQ047Ozs7OzswQ0FHRCw4REFBQ0Q7Z0NBQ0NGLFdBQVcsaUJBRVYsT0FEQ0gsU0FBUyxnQkFBZ0IsNEJBQTRCO2dDQUV2RE0sTUFBSzswQ0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBckV3QlI7O1FBQ1BELGtEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzP2ViOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoZSBsaW5rIGlzIGFjdGl2ZVxuICBjb25zdCBpc0FjdGl2ZSA9IChwYXRobmFtZSkgPT4gcm91dGVyLnBhdGhuYW1lID09PSBwYXRobmFtZTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHN0aWNreS10b3AgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICB7LyogS2VlcCBQYWxlc3RpbmVXYXRjaCBhbGlnbmVkIHRvIHRoZSBsZWZ0ICovfVxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi93YXRlcm1lbG9uLmljb1wiXG4gICAgICAgICAgICBhbHQ9XCJQYWxlc3RpbmVXYXRjaCBJY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsIG1hcmdpbkJvdHRvbTogXCIzcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgUGFsZXN0aW5lV2F0Y2hcbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdkFsdE1hcmt1cFwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkFsdE1hcmt1cFwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIj5cbiAgICAgICAgICB7LyogU2hpZnQgYWxsIGxpbmtzIHRvIHRoZSByaWdodCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXMtYXV0b1wiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgbWUtNCAke1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlKFwiL2Fib3V0XCIpID8gXCJhY3RpdmUgZm9udC13ZWlnaHQtYm9sZFwiIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayBtZS00ICR7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmUoXCIvbmV3c1wiKSA/IFwiYWN0aXZlIGZvbnQtd2VpZ2h0LWJvbGRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGhyZWY9XCIvbmV3c1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5ld3NcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rIG1lLTQgJHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZShcIi9zdXBwb3J0LWdyb3Vwc1wiKSA/IFwiYWN0aXZlIGZvbnQtd2VpZ2h0LWJvbGRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGhyZWY9XCIvc3VwcG9ydC1ncm91cHNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdXBwb3J0IEdyb3Vwc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgbWUtNCAke1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlKFwiL2NvdW50cmllc1wiKSA/IFwiYWN0aXZlIGZvbnQtd2VpZ2h0LWJvbGRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGhyZWY9XCIvY291bnRyaWVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ291bnRyaWVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJOYXZCYXIiLCJyb3V0ZXIiLCJpc0FjdGl2ZSIsInBhdGhuYW1lIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n"));

/***/ })

});