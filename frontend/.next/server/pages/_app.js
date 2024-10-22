"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction NavBar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Function to determine if the link is active\n    const isActive = (pathname)=>router.pathname === pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand\",\n                    href: \"/\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/watermelon.ico\",\n                            alt: \"PalestineWatch Icon\",\n                            style: {\n                                width: \"20px\",\n                                height: \"20px\",\n                                marginRight: \"5px\",\n                                marginBottom: \"3px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        \"PalestineWatch\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarNavAltMarkup\",\n                    \"aria-controls\": \"navbarNavAltMarkup\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"navbar-toggler-icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse\",\n                    id: \"navbarNavAltMarkup\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-nav ms-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: `nav-link me-4 ${isActive(\"/about\") ? \"active font-weight-bold\" : \"\"}`,\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: `nav-link me-4 ${isActive(\"/news\") ? \"active font-weight-bold\" : \"\"}`,\n                                href: \"/news\",\n                                children: \"News\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: `nav-link me-4 ${isActive(\"/support-groups\") ? \"active font-weight-bold\" : \"\"}`,\n                                href: \"/support-groups\",\n                                children: \"Support Groups\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: `nav-link me-4 ${isActive(\"/countries\") ? \"active font-weight-bold\" : \"\"}`,\n                                href: \"/countries\",\n                                children: \"Countries\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/NavBar.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBRXpCLFNBQVNFO0lBQ3RCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4Qiw4Q0FBOEM7SUFDOUMsTUFBTUcsV0FBVyxDQUFDQyxXQUFhRixPQUFPRSxRQUFRLEtBQUtBO0lBRW5ELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFFYiw4REFBQ0U7b0JBQUVGLFdBQVU7b0JBQWVHLE1BQUs7O3NDQUMvQiw4REFBQ0M7NEJBQ0NDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87Z0NBQUVDLE9BQU87Z0NBQVFDLFFBQVE7Z0NBQVFDLGFBQWE7Z0NBQU9DLGNBQWM7NEJBQU07Ozs7Ozt3QkFDaEY7Ozs7Ozs7OEJBR0osOERBQUNDO29CQUNDWixXQUFVO29CQUNWYSxNQUFLO29CQUNMQyxrQkFBZTtvQkFDZkMsa0JBQWU7b0JBQ2ZDLGlCQUFjO29CQUNkQyxpQkFBYztvQkFDZEMsY0FBVzs4QkFFWCw0RUFBQ0M7d0JBQUtuQixXQUFVOzs7Ozs7Ozs7Ozs4QkFFbEIsOERBQUNDO29CQUFJRCxXQUFVO29CQUEyQm9CLElBQUc7OEJBRTNDLDRFQUFDbkI7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FDQ0YsV0FBVyxDQUFDLGNBQWMsRUFDeEJILFNBQVMsWUFBWSw0QkFBNEIsR0FDbEQsQ0FBQztnQ0FDRk0sTUFBSzswQ0FDTjs7Ozs7OzBDQUdELDhEQUFDRDtnQ0FDQ0YsV0FBVyxDQUFDLGNBQWMsRUFDeEJILFNBQVMsV0FBVyw0QkFBNEIsR0FDakQsQ0FBQztnQ0FDRk0sTUFBSzswQ0FDTjs7Ozs7OzBDQUdELDhEQUFDRDtnQ0FDQ0YsV0FBVyxDQUFDLGNBQWMsRUFDeEJILFNBQVMscUJBQXFCLDRCQUE0QixHQUMzRCxDQUFDO2dDQUNGTSxNQUFLOzBDQUNOOzs7Ozs7MENBR0QsOERBQUNEO2dDQUNDRixXQUFXLENBQUMsY0FBYyxFQUN4QkgsU0FBUyxnQkFBZ0IsNEJBQTRCLEdBQ3RELENBQUM7Z0NBQ0ZNLE1BQUs7MENBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2QmFyLmpzP2ViOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoZSBsaW5rIGlzIGFjdGl2ZVxuICBjb25zdCBpc0FjdGl2ZSA9IChwYXRobmFtZSkgPT4gcm91dGVyLnBhdGhuYW1lID09PSBwYXRobmFtZTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHN0aWNreS10b3AgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICB7LyogS2VlcCBQYWxlc3RpbmVXYXRjaCBhbGlnbmVkIHRvIHRoZSBsZWZ0ICovfVxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi93YXRlcm1lbG9uLmljb1wiXG4gICAgICAgICAgICBhbHQ9XCJQYWxlc3RpbmVXYXRjaCBJY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsIG1hcmdpbkJvdHRvbTogXCIzcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgUGFsZXN0aW5lV2F0Y2hcbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdkFsdE1hcmt1cFwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkFsdE1hcmt1cFwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIj5cbiAgICAgICAgICB7LyogU2hpZnQgYWxsIGxpbmtzIHRvIHRoZSByaWdodCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXMtYXV0b1wiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgbWUtNCAke1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlKFwiL2Fib3V0XCIpID8gXCJhY3RpdmUgZm9udC13ZWlnaHQtYm9sZFwiIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayBtZS00ICR7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmUoXCIvbmV3c1wiKSA/IFwiYWN0aXZlIGZvbnQtd2VpZ2h0LWJvbGRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGhyZWY9XCIvbmV3c1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5ld3NcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rIG1lLTQgJHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZShcIi9zdXBwb3J0LWdyb3Vwc1wiKSA/IFwiYWN0aXZlIGZvbnQtd2VpZ2h0LWJvbGRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGhyZWY9XCIvc3VwcG9ydC1ncm91cHNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdXBwb3J0IEdyb3Vwc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgbWUtNCAke1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlKFwiL2NvdW50cmllc1wiKSA/IFwiYWN0aXZlIGZvbnQtd2VpZ2h0LWJvbGRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGhyZWY9XCIvY291bnRyaWVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ291bnRyaWVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJOYXZCYXIiLCJyb3V0ZXIiLCJpc0FjdGl2ZSIsInBhdGhuYW1lIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"bg-body-tertiary text-center text-lg-start\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center p-3 bg-dark\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"text-body\",\n                href: \"/\",\n                style: {\n                    textDecoration: \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-light\",\n                    children: \"PalestineWatch\"\n                }, void 0, false, {\n                    fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/footer.js\",\n                    lineNumber: 6,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/footer.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/footer.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/components/footer.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0E7SUFDdEIscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDRTtnQkFBRUYsV0FBVTtnQkFBWUcsTUFBSztnQkFBSUMsT0FBTztvQkFBRUMsZ0JBQWdCO2dCQUFPOzBCQUNoRSw0RUFBQ0M7b0JBQUtOLFdBQVU7OEJBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzP2IxNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctYm9keS10ZXJ0aWFyeSB0ZXh0LWNlbnRlciB0ZXh0LWxnLXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMyBiZy1kYXJrXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYm9keVwiIGhyZWY9XCIvXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5QYWxlc3RpbmVXYXRjaDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Dynamically load Bootstrap JS on client-side only\n        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! bootstrap/dist/js/bootstrap.bundle.min.js */ \"bootstrap/dist/js/bootstrap.bundle.min.js\", 23));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex flex-column min-vh-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/pages/_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cheese/Desktop/cs373-fall-2024-group-06/frontend/pages/_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDSTtBQUNaO0FBQ1E7QUFFMUMsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQ0osZ0RBQVNBLENBQUM7UUFDUixvREFBb0Q7UUFDcEQsd0xBQW1EO0lBQ3JELEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1AsMERBQU1BOzs7OzswQkFDUCw4REFBQ1E7Z0JBQUtELFdBQVU7MEJBQ2QsNEVBQUNIO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ0gsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0FBRUEsaUVBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBEeW5hbWljYWxseSBsb2FkIEJvb3RzdHJhcCBKUyBvbiBjbGllbnQtc2lkZSBvbmx5XG4gICAgaW1wb3J0KFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiTmF2QmFyIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "bootstrap/dist/js/bootstrap.bundle.min.js":
/*!************************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.bundle.min.js" ***!
  \************************************************************/
/***/ ((module) => {

module.exports = require("bootstrap/dist/js/bootstrap.bundle.min.js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();