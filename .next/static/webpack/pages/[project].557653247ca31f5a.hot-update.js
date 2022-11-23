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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hero.png */ \"./assets/hero.png\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Common.styled */ \"./styles/Common.styled.tsx\");\n/* harmony import */ var _styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Project.styled */ \"./styles/Project.styled.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProjectDetails = (param)=>{\n    let { projectDetails  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const projectTitle = router.asPath.replace(/\\//g, \"\");\n    const projectFeeds = projectDetails.feeds;\n    if (!projectFeeds) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n        children: \"Sorry, no feeds for this project yet...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 62,\n        columnNumber: 12\n    }, undefined);\n    const mostRecentEntries = projectFeeds.slice(0, 10);\n    const timestamps = projectFeeds.map((entry)=>{\n        const timeString = entry.time;\n        const timestamp = new Date(timeString);\n        return entry.time;\n    });\n    console.log(\"timestamps\", timestamps);\n    const bob = timestamps.sort(function(a, b) {\n        return new Date(b.timestamp) - new Date(a.timestamp);\n    });\n    console.log(\"bob\", bob);\n    // const latestToOldestTimestamps = timestamps.sort(function (a, b) {\n    //   // Turn your strings into dates, and then subtract them\n    //   // to get a value that is either negative, positive, or zero.\n    //   return a.getTime() - b.getTime();\n    // });\n    // console.log('latestToOldestTimestamps', latestToOldestTimestamps);\n    const feed = mostRecentEntries.map((entry)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Entry, {\n            \"data-testid\": \"feed-entry\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.EntryTitle, {\n                    children: [\n                        \"Entry details for \",\n                        entry.app,\n                        \" submitted at \",\n                        entry.time\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    id: entry.device_id,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.app || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Device ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.device_id || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Latitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lat || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Longitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lon || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time of entry:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.time || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, entry.device_id, true, {\n            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.PageContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Sylvera Challenge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Tech challenge - Sarah Muirhead\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Main, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        role: \"presentation\",\n                        alt: \"Hero banner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        children: [\n                            \"Project: \",\n                            projectTitle\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    feed.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Total number of feed entries: \",\n                                    projectFeeds.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n                                children: feed\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Description, {\n                        children: \"Sorry, no feeds for this project yet...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ProjectDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7cURBR1gsOERBQUN4QiwrREFBV0E7a0NBQUM7Ozs7O2lDQUNkOzs7Ozs7Ozs7Ozs7O0FBSVQ7R0FwRk1DOztRQUNXUixrREFBU0E7OztLQURwQlE7O0FBc0ZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1twcm9qZWN0XS50c3g/ZjczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IGhlcm8gZnJvbSBcIi4uL2Fzc2V0cy9oZXJvLnBuZ1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IFBhZ2VDb250YWluZXIsIE1haW4sIEhlYWRpbmcgfSBmcm9tIFwiLi4vc3R5bGVzL0NvbW1vbi5zdHlsZWRcIjtcblxuaW1wb3J0IHtcbiAgTGF5b3V0LFxuICBFbnRyeSxcbiAgRW50cnlUaXRsZSxcbiAgRGVzY3JpcHRpb24sXG59IGZyb20gXCIuLi9zdHlsZXMvUHJvamVjdC5zdHlsZWRcIjtcblxudHlwZSBQcm9qZWN0RGV0YWlscyA9IHtcbiAgYXBwOiBzdHJpbmc7XG4gIGRldmljZV9pZDogc3RyaW5nO1xuICBncHNfbGF0OiBudW1iZXI7XG4gIGdwc19sb246IG51bWJlcjtcbiAgdGltZTogc3RyaW5nO1xufTtcblxuLy8gRnJvbSB0aGUgYnJpZWYsIHRoZSBkYXRhIGlzIHVwZGF0ZWQgaW5mcmVxdWVudGx5XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wbTI1Lmxhc3MtbmV0Lm9yZy9BUEktMS4wLjAvcHJvamVjdC9hbGwvXCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdExpc3Quc3BsaXQoL1xccysvKTtcblxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHsgcHJvamVjdDogcHJvamVjdC50b1N0cmluZygpIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gY29udGV4dC5wYXJhbXMucHJvamVjdDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcG0yNS5sYXNzLW5ldC5vcmcvQVBJLTEuMC4wL3Byb2plY3QvJHtwcm9qZWN0fS9sYXRlc3QvYFxuICApO1xuICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvamVjdERldGFpbHMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IFByb2plY3REZXRhaWxzID0gKHsgcHJvamVjdERldGFpbHMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcm91dGVyLmFzUGF0aC5yZXBsYWNlKC9cXC8vZywgXCJcIik7XG5cbiAgY29uc3QgcHJvamVjdEZlZWRzID0gcHJvamVjdERldGFpbHMuZmVlZHM7XG4gIGlmICghcHJvamVjdEZlZWRzKVxuICAgIHJldHVybiA8SGVhZGluZz5Tb3JyeSwgbm8gZmVlZHMgZm9yIHRoaXMgcHJvamVjdCB5ZXQuLi48L0hlYWRpbmc+O1xuXG4gIGNvbnN0IG1vc3RSZWNlbnRFbnRyaWVzID0gcHJvamVjdEZlZWRzLnNsaWNlKDAsIDEwKTtcblxuICBjb25zdCB0aW1lc3RhbXBzID0gcHJvamVjdEZlZWRzLm1hcCgoZW50cnkpID0+IHtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gZW50cnkudGltZTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSh0aW1lU3RyaW5nKTtcbiAgICByZXR1cm4gZW50cnkudGltZTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJ0aW1lc3RhbXBzXCIsIHRpbWVzdGFtcHMpO1xuXG4gIGNvbnN0IGJvYiA9IHRpbWVzdGFtcHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGIudGltZXN0YW1wKSAtIG5ldyBEYXRlKGEudGltZXN0YW1wKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdib2InLCBib2IpO1xuXG4gIC8vIGNvbnN0IGxhdGVzdFRvT2xkZXN0VGltZXN0YW1wcyA9IHRpbWVzdGFtcHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAvLyAgIC8vIFR1cm4geW91ciBzdHJpbmdzIGludG8gZGF0ZXMsIGFuZCB0aGVuIHN1YnRyYWN0IHRoZW1cbiAgLy8gICAvLyB0byBnZXQgYSB2YWx1ZSB0aGF0IGlzIGVpdGhlciBuZWdhdGl2ZSwgcG9zaXRpdmUsIG9yIHplcm8uXG4gIC8vICAgcmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7XG4gIC8vIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKCdsYXRlc3RUb09sZGVzdFRpbWVzdGFtcHMnLCBsYXRlc3RUb09sZGVzdFRpbWVzdGFtcHMpO1xuXG4gIGNvbnN0IGZlZWQgPSBtb3N0UmVjZW50RW50cmllcy5tYXAoKGVudHJ5OiBQcm9qZWN0RGV0YWlscykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RW50cnkga2V5PXtlbnRyeS5kZXZpY2VfaWR9IGRhdGEtdGVzdGlkPVwiZmVlZC1lbnRyeVwiPlxuICAgICAgICA8RW50cnlUaXRsZT5cbiAgICAgICAgICBFbnRyeSBkZXRhaWxzIGZvciB7ZW50cnkuYXBwfSBzdWJtaXR0ZWQgYXQge2VudHJ5LnRpbWV9XG4gICAgICAgIDwvRW50cnlUaXRsZT5cbiAgICAgICAgPHRhYmxlIGlkPXtlbnRyeS5kZXZpY2VfaWR9PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9qZWN0OjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2VudHJ5LmFwcCB8fCBcIlVua25vd25cIn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRldmljZSBJRDo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5kZXZpY2VfaWQgfHwgXCJVbmtub3duXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5MYXRpdHVkZTo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5ncHNfbGF0IHx8IFwiVW5rbm93blwifTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TG9uZ2l0dWRlOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2VudHJ5Lmdwc19sb24gfHwgXCJVbmtub3duXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5UaW1lIG9mIGVudHJ5OjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2VudHJ5LnRpbWUgfHwgXCJVbmtub3duXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9FbnRyeT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlQ29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TeWx2ZXJhIENoYWxsZW5nZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUZWNoIGNoYWxsZW5nZSAtIFNhcmFoIE11aXJoZWFkXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNYWluPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtoZXJvfSByb2xlPVwicHJlc2VudGF0aW9uXCIgYWx0PVwiSGVybyBiYW5uZXJcIiAvPlxuICAgICAgICA8SGVhZGluZz5Qcm9qZWN0OiB7cHJvamVjdFRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAge2ZlZWQubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHA+VG90YWwgbnVtYmVyIG9mIGZlZWQgZW50cmllczoge3Byb2plY3RGZWVkcy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPExheW91dD57ZmVlZH08L0xheW91dD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RGVzY3JpcHRpb24+U29ycnksIG5vIGZlZWRzIGZvciB0aGlzIHByb2plY3QgeWV0Li4uPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvTWFpbj5cbiAgICA8L1BhZ2VDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlscztcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJoZXJvIiwidXNlUm91dGVyIiwiUGFnZUNvbnRhaW5lciIsIk1haW4iLCJIZWFkaW5nIiwiTGF5b3V0IiwiRW50cnkiLCJFbnRyeVRpdGxlIiwiRGVzY3JpcHRpb24iLCJQcm9qZWN0RGV0YWlscyIsInByb2plY3REZXRhaWxzIiwicm91dGVyIiwicHJvamVjdFRpdGxlIiwiYXNQYXRoIiwicmVwbGFjZSIsInByb2plY3RGZWVkcyIsImZlZWRzIiwibW9zdFJlY2VudEVudHJpZXMiLCJzbGljZSIsInRpbWVzdGFtcHMiLCJtYXAiLCJlbnRyeSIsInRpbWVTdHJpbmciLCJ0aW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJib2IiLCJzb3J0IiwiYSIsImIiLCJmZWVkIiwiZGF0YS10ZXN0aWQiLCJhcHAiLCJ0YWJsZSIsImlkIiwiZGV2aWNlX2lkIiwidHIiLCJ0aCIsInRkIiwiZ3BzX2xhdCIsImdwc19sb24iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInNyYyIsInJvbGUiLCJhbHQiLCJsZW5ndGgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[project].tsx\n"));

/***/ })

});