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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Project_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Project.styled */ \"./styles/Project.styled.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectDetails = (param)=>{\n    let { projectDetails  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const projectTitle = router.asPath.replace(/\\//g, \"\");\n    const projectFeeds = projectDetails.feeds;\n    if (!projectFeeds) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Sorry, no feeds for this project yet...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n    const mostRecentEntries = projectFeeds.slice(0, 10);\n    const feed = mostRecentEntries.map((entry)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_3__.Entry, {\n            \"data-testid\": \"feed-entry\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_3__.EntryTitle, {\n                    children: [\n                        \"Entry details for \",\n                        entry.app,\n                        \" submitted at \",\n                        entry.time\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    id: entry.device_id,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.app\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Device ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.device_id\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time of entry:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.time\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Latitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lat\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Longitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lon\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, entry.device_id, true, {\n            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_3__.PageContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Sylvera Challenge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Tech challenge - Sarah Muirhead\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_3__.Main, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        children: [\n                            \"Project: \",\n                            projectTitle\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    feed.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n                        children: feed\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Sorry, no feeds for this project yet...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProjectDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcHJvamVjdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ1c7QUFTTjtBQXlDbEMsTUFBTVEsaUJBQWlCLFNBQXdCO1FBQXZCLEVBQUVDLGVBQWMsRUFBRTs7SUFDeEMsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU1VLGVBQWVELE9BQU9FLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLE9BQU87SUFFbEQsTUFBTUMsZUFBZUwsZUFBZU0sS0FBSztJQUN6QyxJQUFJLENBQUNELGNBQWMscUJBQ2pCLDhEQUFDRTtrQkFBRTs7Ozs7O0lBRUwsTUFBTUMsb0JBQW9CSCxhQUFhSSxLQUFLLENBQUMsR0FBRztJQUVoRCxNQUFNQyxPQUFPRixrQkFBa0JHLEdBQUcsQ0FBQyxDQUFDQyxRQUEwQjtRQUM1RCxxQkFDRSw4REFBQ2YseURBQUtBO1lBQXVCZ0IsZUFBWTs7OEJBQ3ZDLDhEQUFDZiw4REFBVUE7O3dCQUFDO3dCQUNTYyxNQUFNRSxHQUFHO3dCQUFDO3dCQUFlRixNQUFNRyxJQUFJOzs7Ozs7OzhCQUV4RCw4REFBQ0M7b0JBQU1DLElBQUlMLE1BQU1NLFNBQVM7O3NDQUN4Qiw4REFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs4Q0FBSVQsTUFBTUUsR0FBRzs7Ozs7Ozs7Ozs7O3NDQUVoQiw4REFBQ0s7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs4Q0FBSVQsTUFBTU0sU0FBUzs7Ozs7Ozs7Ozs7O3NDQUV0Qiw4REFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs4Q0FBSVQsTUFBTUcsSUFBSTs7Ozs7Ozs7Ozs7O3NDQUVqQiw4REFBQ0k7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs4Q0FBSVQsTUFBTVUsT0FBTzs7Ozs7Ozs7Ozs7O3NDQUVwQiw4REFBQ0g7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs4Q0FBSVQsTUFBTVcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXZCWlgsTUFBTU0sU0FBUzs7Ozs7SUE0Qi9CO0lBRUEscUJBQ0UsOERBQUN6QixpRUFBYUE7OzBCQUNaLDhEQUFDRixrREFBSUE7O2tDQUNILDhEQUFDaUM7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNqQyx3REFBSUE7O2tDQUNILDhEQUFDQywyREFBT0E7OzRCQUFDOzRCQUFVTzs7Ozs7OztvQkFDbEJRLEtBQUtrQixNQUFNLEdBQUcsa0JBQ2IsOERBQUNoQywwREFBTUE7a0NBQUVjOzs7OztrREFFVCw4REFBQ0g7a0NBQUU7Ozs7O2lDQUNKOzs7Ozs7Ozs7Ozs7O0FBSVQ7R0ExRE1SOztRQUNXUCxrREFBU0E7OztLQURwQk87O0FBNEROLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1twcm9qZWN0XS50c3g/ZjczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHtcbiAgUGFnZUNvbnRhaW5lcixcbiAgTWFpbixcbiAgSGVhZGluZyxcbiAgTGF5b3V0LFxuICBFbnRyeSxcbiAgRW50cnlUaXRsZSxcbn0gZnJvbSBcIi4uL3N0eWxlcy9Qcm9qZWN0LnN0eWxlZFwiO1xuXG50eXBlIFByb2plY3REZXRhaWxzID0ge1xuICBhcHA6IHN0cmluZztcbiAgZGV2aWNlX2lkOiBzdHJpbmc7XG4gIGdwc19sYXQ6IG51bWJlcjtcbiAgZ3BzX2xvbjogbnVtYmVyO1xuICB0aW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wbTI1Lmxhc3MtbmV0Lm9yZy9BUEktMS4wLjAvcHJvamVjdC9hbGwvXCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdExpc3Quc3BsaXQoL1xccysvKTtcblxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHsgcHJvamVjdDogcHJvamVjdC50b1N0cmluZygpIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gY29udGV4dC5wYXJhbXMucHJvamVjdDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcG0yNS5sYXNzLW5ldC5vcmcvQVBJLTEuMC4wL3Byb2plY3QvJHtwcm9qZWN0fS9sYXRlc3QvYFxuICApO1xuICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvamVjdERldGFpbHMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IFByb2plY3REZXRhaWxzID0gKHsgcHJvamVjdERldGFpbHMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcm91dGVyLmFzUGF0aC5yZXBsYWNlKC9cXC8vZywgJycpOztcblxuICBjb25zdCBwcm9qZWN0RmVlZHMgPSBwcm9qZWN0RGV0YWlscy5mZWVkcztcbiAgaWYgKCFwcm9qZWN0RmVlZHMpIHJldHVybiAoXG4gICAgPHA+U29ycnksIG5vIGZlZWRzIGZvciB0aGlzIHByb2plY3QgeWV0Li4uPC9wPiAgXG4gICk7XG4gIGNvbnN0IG1vc3RSZWNlbnRFbnRyaWVzID0gcHJvamVjdEZlZWRzLnNsaWNlKDAsIDEwKTtcblxuICBjb25zdCBmZWVkID0gbW9zdFJlY2VudEVudHJpZXMubWFwKChlbnRyeTogUHJvamVjdERldGFpbHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVudHJ5IGtleT17ZW50cnkuZGV2aWNlX2lkfSBkYXRhLXRlc3RpZD1cImZlZWQtZW50cnlcIj5cbiAgICAgICAgPEVudHJ5VGl0bGU+XG4gICAgICAgICAgRW50cnkgZGV0YWlscyBmb3Ige2VudHJ5LmFwcH0gc3VibWl0dGVkIGF0IHtlbnRyeS50aW1lfVxuICAgICAgICA8L0VudHJ5VGl0bGU+XG4gICAgICAgIDx0YWJsZSBpZD17ZW50cnkuZGV2aWNlX2lkfT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvamVjdDo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5hcHB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EZXZpY2UgSUQ6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkuZGV2aWNlX2lkfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGltZSBvZiBlbnRyeTo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS50aW1lfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TGF0aXR1ZGU6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkuZ3BzX2xhdH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkxvbmdpdHVkZTo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5ncHNfbG9ufTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvRW50cnk+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3lsdmVyYSBDaGFsbGVuZ2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGVjaCBjaGFsbGVuZ2UgLSBTYXJhaCBNdWlyaGVhZFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWFpbj5cbiAgICAgICAgPEhlYWRpbmc+UHJvamVjdDoge3Byb2plY3RUaXRsZX08L0hlYWRpbmc+XG4gICAgICAgIHtmZWVkLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPExheW91dD57ZmVlZH08L0xheW91dD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5Tb3JyeSwgbm8gZmVlZHMgZm9yIHRoaXMgcHJvamVjdCB5ZXQuLi48L3A+XG4gICAgICAgICl9XG4gICAgICA8L01haW4+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsczsiXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsIlBhZ2VDb250YWluZXIiLCJNYWluIiwiSGVhZGluZyIsIkxheW91dCIsIkVudHJ5IiwiRW50cnlUaXRsZSIsIlByb2plY3REZXRhaWxzIiwicHJvamVjdERldGFpbHMiLCJyb3V0ZXIiLCJwcm9qZWN0VGl0bGUiLCJhc1BhdGgiLCJyZXBsYWNlIiwicHJvamVjdEZlZWRzIiwiZmVlZHMiLCJwIiwibW9zdFJlY2VudEVudHJpZXMiLCJzbGljZSIsImZlZWQiLCJtYXAiLCJlbnRyeSIsImRhdGEtdGVzdGlkIiwiYXBwIiwidGltZSIsInRhYmxlIiwiaWQiLCJkZXZpY2VfaWQiLCJ0ciIsInRoIiwidGQiLCJncHNfbGF0IiwiZ3BzX2xvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[project].tsx\n"));

/***/ })

});