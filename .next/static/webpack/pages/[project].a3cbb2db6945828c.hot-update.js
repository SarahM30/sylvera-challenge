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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hero.png */ \"./assets/hero.png\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Common.styled */ \"./styles/Common.styled.tsx\");\n/* harmony import */ var _styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Project.styled */ \"./styles/Project.styled.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProjectDetails = (param)=>{\n    let { projectDetails  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const projectTitle = router.asPath.replace(/\\//g, \"\");\n    const projectFeeds = projectDetails.feeds;\n    if (!projectFeeds) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n        children: \"Sorry, no feeds for this project yet...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 62,\n        columnNumber: 12\n    }, undefined);\n    // const mostRecentEntries = projectFeeds.slice(0, 10);\n    const timestamps = projectFeeds.map((entry)=>{\n        const timeString = entry.time;\n        const timestamp = new Date(timeString);\n        console.log(\"timestamp\", timestamp);\n        return entry.time;\n    });\n    console.log(\"timestamps\", timestamps);\n    const latestToOldestTimestamps = timestamps.sort(function(a, b) {\n        // Turn your strings into dates, and then subtract them\n        // to get a value that is either negative, positive, or zero.\n        return a.getTime() - b.getTime();\n    });\n    console.log(\"latestToOldestTimestamps\", latestToOldestTimestamps);\n    const feed = projectFeeds.slice(0, 10).map((entry)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Entry, {\n            \"data-testid\": \"feed-entry\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.EntryTitle, {\n                    children: [\n                        \"Entry details for \",\n                        entry.app,\n                        \" submitted at \",\n                        entry.time\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    id: entry.device_id,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.app || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Device ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.device_id || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Latitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lat || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Longitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lon || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time of entry:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.time || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, entry.device_id, true, {\n            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.PageContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Sylvera Challenge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Tech challenge - Sarah Muirhead\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Main, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        role: \"presentation\",\n                        alt: \"Hero banner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        children: [\n                            \"Project: \",\n                            projectTitle\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    feed.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Total number of feed entries: \",\n                                    projectFeeds.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n                                children: feed\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Description, {\n                        children: \"Sorry, no feeds for this project yet...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ProjectDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQUlUO0dBaEZNQzs7UUFDV1Isa0RBQVNBOzs7S0FEcEJROztBQWtGTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bcHJvamVjdF0udHN4P2Y3MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBoZXJvIGZyb20gXCIuLi9hc3NldHMvaGVyby5wbmdcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQYWdlQ29udGFpbmVyLCBNYWluLCBIZWFkaW5nIH0gZnJvbSBcIi4uL3N0eWxlcy9Db21tb24uc3R5bGVkXCI7XG5cbmltcG9ydCB7XG4gIExheW91dCxcbiAgRW50cnksXG4gIEVudHJ5VGl0bGUsXG4gIERlc2NyaXB0aW9uLFxufSBmcm9tIFwiLi4vc3R5bGVzL1Byb2plY3Quc3R5bGVkXCI7XG5cbnR5cGUgUHJvamVjdERldGFpbHMgPSB7XG4gIGFwcDogc3RyaW5nO1xuICBkZXZpY2VfaWQ6IHN0cmluZztcbiAgZ3BzX2xhdDogbnVtYmVyO1xuICBncHNfbG9uOiBudW1iZXI7XG4gIHRpbWU6IHN0cmluZztcbn07XG5cbi8vIEZyb20gdGhlIGJyaWVmLCB0aGUgZGF0YSBpcyB1cGRhdGVkIGluZnJlcXVlbnRseVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcG0yNS5sYXNzLW5ldC5vcmcvQVBJLTEuMC4wL3Byb2plY3QvYWxsL1wiKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBhd2FpdCByZXMudGV4dCgpO1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RMaXN0LnNwbGl0KC9cXHMrLyk7XG5cbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7IHByb2plY3Q6IHByb2plY3QudG9TdHJpbmcoKSB9LFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGNvbnRleHQucGFyYW1zLnByb2plY3Q7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3BtMjUubGFzcy1uZXQub3JnL0FQSS0xLjAuMC9wcm9qZWN0LyR7cHJvamVjdH0vbGF0ZXN0L2BcbiAgKTtcbiAgY29uc3QgcHJvamVjdERldGFpbHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2plY3REZXRhaWxzLFxuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBQcm9qZWN0RGV0YWlscyA9ICh7IHByb2plY3REZXRhaWxzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHJvdXRlci5hc1BhdGgucmVwbGFjZSgvXFwvL2csIFwiXCIpO1xuXG4gIGNvbnN0IHByb2plY3RGZWVkcyA9IHByb2plY3REZXRhaWxzLmZlZWRzO1xuICBpZiAoIXByb2plY3RGZWVkcylcbiAgICByZXR1cm4gPEhlYWRpbmc+U29ycnksIG5vIGZlZWRzIGZvciB0aGlzIHByb2plY3QgeWV0Li4uPC9IZWFkaW5nPjtcblxuICAvLyBjb25zdCBtb3N0UmVjZW50RW50cmllcyA9IHByb2plY3RGZWVkcy5zbGljZSgwLCAxMCk7XG5cbiAgY29uc3QgdGltZXN0YW1wcyA9IHByb2plY3RGZWVkcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IGVudHJ5LnRpbWU7XG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUodGltZVN0cmluZyk7XG5cbiAgICBjb25zb2xlLmxvZyhcInRpbWVzdGFtcFwiLCB0aW1lc3RhbXApO1xuICAgIHJldHVybiBlbnRyeS50aW1lO1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhcInRpbWVzdGFtcHNcIiwgdGltZXN0YW1wcyk7XG5cbiAgY29uc3QgbGF0ZXN0VG9PbGRlc3RUaW1lc3RhbXBzID0gdGltZXN0YW1wcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgLy8gVHVybiB5b3VyIHN0cmluZ3MgaW50byBkYXRlcywgYW5kIHRoZW4gc3VidHJhY3QgdGhlbVxuICAgIC8vIHRvIGdldCBhIHZhbHVlIHRoYXQgaXMgZWl0aGVyIG5lZ2F0aXZlLCBwb3NpdGl2ZSwgb3IgemVyby5cbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ2xhdGVzdFRvT2xkZXN0VGltZXN0YW1wcycsIGxhdGVzdFRvT2xkZXN0VGltZXN0YW1wcyk7XG5cbiAgY29uc3QgZmVlZCA9IHByb2plY3RGZWVkcy5zbGljZSgwLCAxMCkubWFwKChlbnRyeTogUHJvamVjdERldGFpbHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVudHJ5IGtleT17ZW50cnkuZGV2aWNlX2lkfSBkYXRhLXRlc3RpZD1cImZlZWQtZW50cnlcIj5cbiAgICAgICAgPEVudHJ5VGl0bGU+XG4gICAgICAgICAgRW50cnkgZGV0YWlscyBmb3Ige2VudHJ5LmFwcH0gc3VibWl0dGVkIGF0IHtlbnRyeS50aW1lfVxuICAgICAgICA8L0VudHJ5VGl0bGU+XG4gICAgICAgIDx0YWJsZSBpZD17ZW50cnkuZGV2aWNlX2lkfT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvamVjdDo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5hcHAgfHwgXCJVbmtub3duXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EZXZpY2UgSUQ6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkuZGV2aWNlX2lkIHx8IFwiVW5rbm93blwifTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TGF0aXR1ZGU6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkuZ3BzX2xhdCB8fCBcIlVua25vd25cIn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkxvbmdpdHVkZTo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5ncHNfbG9uIHx8IFwiVW5rbm93blwifTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGltZSBvZiBlbnRyeTo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS50aW1lIHx8IFwiVW5rbm93blwifTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvRW50cnk+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3lsdmVyYSBDaGFsbGVuZ2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGVjaCBjaGFsbGVuZ2UgLSBTYXJhaCBNdWlyaGVhZFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWFpbj5cbiAgICAgICAgPEltYWdlIHNyYz17aGVyb30gcm9sZT1cInByZXNlbnRhdGlvblwiIGFsdD1cIkhlcm8gYmFubmVyXCIgLz5cbiAgICAgICAgPEhlYWRpbmc+UHJvamVjdDoge3Byb2plY3RUaXRsZX08L0hlYWRpbmc+XG4gICAgICAgIHtmZWVkLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlRvdGFsIG51bWJlciBvZiBmZWVkIGVudHJpZXM6IHtwcm9qZWN0RmVlZHMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgIDxMYXlvdXQ+e2ZlZWR9PC9MYXlvdXQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPERlc2NyaXB0aW9uPlNvcnJ5LCBubyBmZWVkcyBmb3IgdGhpcyBwcm9qZWN0IHlldC4uLjwvRGVzY3JpcHRpb24+XG4gICAgICAgICl9XG4gICAgICA8L01haW4+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERldGFpbHM7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiaGVybyIsInVzZVJvdXRlciIsIlBhZ2VDb250YWluZXIiLCJNYWluIiwiSGVhZGluZyIsIkxheW91dCIsIkVudHJ5IiwiRW50cnlUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUHJvamVjdERldGFpbHMiLCJwcm9qZWN0RGV0YWlscyIsInJvdXRlciIsInByb2plY3RUaXRsZSIsImFzUGF0aCIsInJlcGxhY2UiLCJwcm9qZWN0RmVlZHMiLCJmZWVkcyIsInRpbWVzdGFtcHMiLCJtYXAiLCJlbnRyeSIsInRpbWVTdHJpbmciLCJ0aW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsYXRlc3RUb09sZGVzdFRpbWVzdGFtcHMiLCJzb3J0IiwiYSIsImIiLCJnZXRUaW1lIiwiZmVlZCIsInNsaWNlIiwiZGF0YS10ZXN0aWQiLCJhcHAiLCJ0YWJsZSIsImlkIiwiZGV2aWNlX2lkIiwidHIiLCJ0aCIsInRkIiwiZ3BzX2xhdCIsImdwc19sb24iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInNyYyIsInJvbGUiLCJhbHQiLCJsZW5ndGgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[project].tsx\n"));

/***/ })

});