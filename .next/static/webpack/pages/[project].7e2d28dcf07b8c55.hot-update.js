"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[project]",{

/***/ "./pages/[project].tsx":
/*!*****************************!*\
  !*** ./pages/[project].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Project_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Project.styled */ \"./styles/Project.styled.tsx\");\n\n\n\nconst ProjectDetails = (param)=>{\n    let { projectDetails  } = param;\n    const projectFeeds = projectDetails.feeds;\n    if (!projectFeeds) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Sorry, no feeds for this project yet...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n    const mostRecentEntries = projectFeeds.slice(0, 10);\n    const feed = mostRecentEntries.map((entry)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_2__.Entry, {\n            \"data-testid\": \"feed-entry\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_2__.EntryTitle, {\n                    children: [\n                        \"Entry details for \",\n                        entry.app,\n                        \" submitted at \",\n                        entry.time\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    id: entry.device_id,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.app\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Device ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.device_id\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time of entry:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.time\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Latitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lat\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Longitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lon\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, entry.device_id, true, {\n            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Sylvera Challenge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Tech challenge - Sarah Muirhead\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_2__.Main, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        children: \"Project Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                        children: feed\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcHJvamVjdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBU0s7QUF5Q2xDLE1BQU1PLGlCQUFpQixTQUF3QjtRQUF2QixFQUFFQyxlQUFjLEVBQUU7SUFFeEMsTUFBTUMsZUFBZUQsZUFBZUUsS0FBSztJQUN6QyxJQUFJLENBQUNELGNBQWMscUJBQ2pCLDhEQUFDRTtrQkFBRTs7Ozs7O0lBRUwsTUFBTUMsb0JBQW9CSCxhQUFhSSxLQUFLLENBQUMsR0FBRztJQUVoRCxNQUFNQyxPQUFPRixrQkFBa0JHLEdBQUcsQ0FBQyxDQUFDQyxRQUEwQjtRQUM1RCxxQkFDRSw4REFBQ1gseURBQUtBO1lBQXVCWSxlQUFZOzs4QkFDdkMsOERBQUNYLDhEQUFVQTs7d0JBQUM7d0JBQ1NVLE1BQU1FLEdBQUc7d0JBQUM7d0JBQWVGLE1BQU1HLElBQUk7Ozs7Ozs7OEJBRXhELDhEQUFDQztvQkFBTUMsSUFBSUwsTUFBTU0sU0FBUzs7c0NBQ3hCLDhEQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFJVCxNQUFNRSxHQUFHOzs7Ozs7Ozs7Ozs7c0NBRWhCLDhEQUFDSzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFJVCxNQUFNTSxTQUFTOzs7Ozs7Ozs7Ozs7c0NBRXRCLDhEQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFJVCxNQUFNRyxJQUFJOzs7Ozs7Ozs7Ozs7c0NBRWpCLDhEQUFDSTs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFJVCxNQUFNVSxPQUFPOzs7Ozs7Ozs7Ozs7c0NBRXBCLDhEQUFDSDs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFJVCxNQUFNVyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBdkJaWCxNQUFNTSxTQUFTOzs7OztJQTRCL0I7SUFFQSxxQkFDRSw4REFBQ3JCLGlFQUFhQTs7MEJBQ1osOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUM0QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQzdCLHdEQUFJQTs7a0NBQ0gsOERBQUNDLDJEQUFPQTtrQ0FBQzs7Ozs7O2tDQUNULDhEQUFDQywwREFBTUE7a0NBQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakI7S0FwRE1QOztBQXNETiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bcHJvamVjdF0udHN4P2Y3MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQge1xuICBQYWdlQ29udGFpbmVyLFxuICBNYWluLFxuICBIZWFkaW5nLFxuICBMYXlvdXQsXG4gIEVudHJ5LFxuICBFbnRyeVRpdGxlLFxufSBmcm9tIFwiLi4vc3R5bGVzL1Byb2plY3Quc3R5bGVkXCI7XG5cbnR5cGUgUHJvamVjdERldGFpbHMgPSB7XG4gIGFwcDogc3RyaW5nO1xuICBkZXZpY2VfaWQ6IHN0cmluZztcbiAgZ3BzX2xhdDogbnVtYmVyO1xuICBncHNfbG9uOiBudW1iZXI7XG4gIHRpbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3BtMjUubGFzcy1uZXQub3JnL0FQSS0xLjAuMC9wcm9qZWN0L2FsbC9cIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TGlzdC5zcGxpdCgvXFxzKy8pO1xuXG4gIGNvbnN0IHBhdGhzID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczogeyBwcm9qZWN0OiBwcm9qZWN0LnRvU3RyaW5nKCkgfSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBjb250ZXh0LnBhcmFtcy5wcm9qZWN0O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9wbTI1Lmxhc3MtbmV0Lm9yZy9BUEktMS4wLjAvcHJvamVjdC8ke3Byb2plY3R9L2xhdGVzdC9gXG4gICk7XG4gIGNvbnN0IHByb2plY3REZXRhaWxzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9qZWN0RGV0YWlscyxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgUHJvamVjdERldGFpbHMgPSAoeyBwcm9qZWN0RGV0YWlscyB9KSA9PiB7XG5cbiAgY29uc3QgcHJvamVjdEZlZWRzID0gcHJvamVjdERldGFpbHMuZmVlZHM7XG4gIGlmICghcHJvamVjdEZlZWRzKSByZXR1cm4gKFxuICAgIDxwPlNvcnJ5LCBubyBmZWVkcyBmb3IgdGhpcyBwcm9qZWN0IHlldC4uLjwvcD4gIFxuICApO1xuICBjb25zdCBtb3N0UmVjZW50RW50cmllcyA9IHByb2plY3RGZWVkcy5zbGljZSgwLCAxMCk7XG5cbiAgY29uc3QgZmVlZCA9IG1vc3RSZWNlbnRFbnRyaWVzLm1hcCgoZW50cnk6IFByb2plY3REZXRhaWxzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFbnRyeSBrZXk9e2VudHJ5LmRldmljZV9pZH0gZGF0YS10ZXN0aWQ9XCJmZWVkLWVudHJ5XCI+XG4gICAgICAgIDxFbnRyeVRpdGxlPlxuICAgICAgICAgIEVudHJ5IGRldGFpbHMgZm9yIHtlbnRyeS5hcHB9IHN1Ym1pdHRlZCBhdCB7ZW50cnkudGltZX1cbiAgICAgICAgPC9FbnRyeVRpdGxlPlxuICAgICAgICA8dGFibGUgaWQ9e2VudHJ5LmRldmljZV9pZH0+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlByb2plY3Q6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkuYXBwfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGV2aWNlIElEOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2VudHJ5LmRldmljZV9pZH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlRpbWUgb2YgZW50cnk6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkudGltZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkxhdGl0dWRlOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2VudHJ5Lmdwc19sYXR9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Mb25naXR1ZGU6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkuZ3BzX2xvbn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L0VudHJ5PlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlN5bHZlcmEgQ2hhbGxlbmdlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRlY2ggY2hhbGxlbmdlIC0gU2FyYWggTXVpcmhlYWRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1haW4+XG4gICAgICAgIDxIZWFkaW5nPlByb2plY3QgTmFtZTwvSGVhZGluZz5cbiAgICAgICAgPExheW91dD57ZmVlZH08L0xheW91dD5cbiAgICAgIDwvTWFpbj5cbiAgICA8L1BhZ2VDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3REZXRhaWxzOyJdLCJuYW1lcyI6WyJIZWFkIiwiUGFnZUNvbnRhaW5lciIsIk1haW4iLCJIZWFkaW5nIiwiTGF5b3V0IiwiRW50cnkiLCJFbnRyeVRpdGxlIiwiUHJvamVjdERldGFpbHMiLCJwcm9qZWN0RGV0YWlscyIsInByb2plY3RGZWVkcyIsImZlZWRzIiwicCIsIm1vc3RSZWNlbnRFbnRyaWVzIiwic2xpY2UiLCJmZWVkIiwibWFwIiwiZW50cnkiLCJkYXRhLXRlc3RpZCIsImFwcCIsInRpbWUiLCJ0YWJsZSIsImlkIiwiZGV2aWNlX2lkIiwidHIiLCJ0aCIsInRkIiwiZ3BzX2xhdCIsImdwc19sb24iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[project].tsx\n"));

/***/ })

});