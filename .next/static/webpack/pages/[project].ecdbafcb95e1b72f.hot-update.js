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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hero.png */ \"./assets/hero.png\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Common.styled */ \"./styles/Common.styled.tsx\");\n/* harmony import */ var _styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Project.styled */ \"./styles/Project.styled.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProjectDetails = (param)=>{\n    let { projectDetails  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const projectTitle = router.asPath.replace(/\\//g, \"\");\n    const projectFeeds = projectDetails.feeds;\n    if (!projectFeeds) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n        children: \"Sorry, no feeds for this project yet...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 62,\n        columnNumber: 12\n    }, undefined);\n    const mostRecentEntries = projectFeeds.slice(0, 10);\n    const timestamps = projectFeeds.map((entry)=>{\n        const timeString = entry.time;\n        const timestamp = new Date(timeString);\n        return timestamp;\n    });\n    console.log(\"timestamps\", timestamps);\n    const bob = timestamps.sort((dateA, dateB)=>dateA - dateB);\n    console.log(\"bob\", bob);\n    // const latestToOldestTimestamps = timestamps.sort(function (a, b) {\n    //   // Turn your strings into dates, and then subtract them\n    //   // to get a value that is either negative, positive, or zero.\n    //   return a.getTime() - b.getTime();\n    // });\n    // console.log('latestToOldestTimestamps', latestToOldestTimestamps);\n    const feed = mostRecentEntries.map((entry)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Entry, {\n            \"data-testid\": \"feed-entry\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.EntryTitle, {\n                    children: [\n                        \"Entry details for \",\n                        entry.app,\n                        \" submitted at \",\n                        entry.time\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    id: entry.device_id,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.app || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Device ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.device_id || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Latitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lat || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Longitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lon || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time of entry:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.time || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, entry.device_id, true, {\n            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.PageContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Sylvera Challenge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Tech challenge - Sarah Muirhead\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Main, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        role: \"presentation\",\n                        alt: \"Hero banner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        children: [\n                            \"Project: \",\n                            projectTitle\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, undefined),\n                    feed.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Total number of feed entries: \",\n                                    projectFeeds.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n                                children: feed\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Description, {\n                        children: \"Sorry, no feeds for this project yet...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ProjectDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0tBRHBCUTs7QUFvRk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Byb2plY3RdLnRzeD9mNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgaGVybyBmcm9tIFwiLi4vYXNzZXRzL2hlcm8ucG5nXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUGFnZUNvbnRhaW5lciwgTWFpbiwgSGVhZGluZyB9IGZyb20gXCIuLi9zdHlsZXMvQ29tbW9uLnN0eWxlZFwiO1xuXG5pbXBvcnQge1xuICBMYXlvdXQsXG4gIEVudHJ5LFxuICBFbnRyeVRpdGxlLFxuICBEZXNjcmlwdGlvbixcbn0gZnJvbSBcIi4uL3N0eWxlcy9Qcm9qZWN0LnN0eWxlZFwiO1xuXG50eXBlIFByb2plY3REZXRhaWxzID0ge1xuICBhcHA6IHN0cmluZztcbiAgZGV2aWNlX2lkOiBzdHJpbmc7XG4gIGdwc19sYXQ6IG51bWJlcjtcbiAgZ3BzX2xvbjogbnVtYmVyO1xuICB0aW1lOiBzdHJpbmc7XG59O1xuXG4vLyBGcm9tIHRoZSBicmllZiwgdGhlIGRhdGEgaXMgdXBkYXRlZCBpbmZyZXF1ZW50bHlcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3BtMjUubGFzcy1uZXQub3JnL0FQSS0xLjAuMC9wcm9qZWN0L2FsbC9cIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TGlzdC5zcGxpdCgvXFxzKy8pO1xuXG4gIGNvbnN0IHBhdGhzID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczogeyBwcm9qZWN0OiBwcm9qZWN0LnRvU3RyaW5nKCkgfSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBjb250ZXh0LnBhcmFtcy5wcm9qZWN0O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9wbTI1Lmxhc3MtbmV0Lm9yZy9BUEktMS4wLjAvcHJvamVjdC8ke3Byb2plY3R9L2xhdGVzdC9gXG4gICk7XG4gIGNvbnN0IHByb2plY3REZXRhaWxzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9qZWN0RGV0YWlscyxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgUHJvamVjdERldGFpbHMgPSAoeyBwcm9qZWN0RGV0YWlscyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSByb3V0ZXIuYXNQYXRoLnJlcGxhY2UoL1xcLy9nLCBcIlwiKTtcblxuICBjb25zdCBwcm9qZWN0RmVlZHMgPSBwcm9qZWN0RGV0YWlscy5mZWVkcztcbiAgaWYgKCFwcm9qZWN0RmVlZHMpXG4gICAgcmV0dXJuIDxIZWFkaW5nPlNvcnJ5LCBubyBmZWVkcyBmb3IgdGhpcyBwcm9qZWN0IHlldC4uLjwvSGVhZGluZz47XG5cbiAgY29uc3QgbW9zdFJlY2VudEVudHJpZXMgPSBwcm9qZWN0RmVlZHMuc2xpY2UoMCwgMTApO1xuXG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBwcm9qZWN0RmVlZHMubWFwKChlbnRyeSkgPT4ge1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBlbnRyeS50aW1lO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKHRpbWVTdHJpbmcpO1xuICAgIHJldHVybiB0aW1lc3RhbXA7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwidGltZXN0YW1wc1wiLCB0aW1lc3RhbXBzKTtcblxuICBjb25zdCBib2IgPSB0aW1lc3RhbXBzLnNvcnQoKGRhdGVBLCBkYXRlQikgPT4gZGF0ZUEgLSBkYXRlQilcblxuICAgIGNvbnNvbGUubG9nKCdib2InLCBib2IpO1xuXG4gIC8vIGNvbnN0IGxhdGVzdFRvT2xkZXN0VGltZXN0YW1wcyA9IHRpbWVzdGFtcHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAvLyAgIC8vIFR1cm4geW91ciBzdHJpbmdzIGludG8gZGF0ZXMsIGFuZCB0aGVuIHN1YnRyYWN0IHRoZW1cbiAgLy8gICAvLyB0byBnZXQgYSB2YWx1ZSB0aGF0IGlzIGVpdGhlciBuZWdhdGl2ZSwgcG9zaXRpdmUsIG9yIHplcm8uXG4gIC8vICAgcmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7XG4gIC8vIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKCdsYXRlc3RUb09sZGVzdFRpbWVzdGFtcHMnLCBsYXRlc3RUb09sZGVzdFRpbWVzdGFtcHMpO1xuXG4gIGNvbnN0IGZlZWQgPSBtb3N0UmVjZW50RW50cmllcy5tYXAoKGVudHJ5OiBQcm9qZWN0RGV0YWlscykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RW50cnkga2V5PXtlbnRyeS5kZXZpY2VfaWR9IGRhdGEtdGVzdGlkPVwiZmVlZC1lbnRyeVwiPlxuICAgICAgICA8RW50cnlUaXRsZT5cbiAgICAgICAgICBFbnRyeSBkZXRhaWxzIGZvciB7ZW50cnkuYXBwfSBzdWJtaXR0ZWQgYXQge2VudHJ5LnRpbWV9XG4gICAgICAgIDwvRW50cnlUaXRsZT5cbiAgICAgICAgPHRhYmxlIGlkPXtlbnRyeS5kZXZpY2VfaWR9PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9qZWN0OjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2VudHJ5LmFwcCB8fCBcIlVua25vd25cIn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRldmljZSBJRDo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5kZXZpY2VfaWQgfHwgXCJVbmtub3duXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5MYXRpdHVkZTo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5ncHNfbGF0IHx8IFwiVW5rbm93blwifTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TG9uZ2l0dWRlOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2VudHJ5Lmdwc19sb24gfHwgXCJVbmtub3duXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5UaW1lIG9mIGVudHJ5OjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2VudHJ5LnRpbWUgfHwgXCJVbmtub3duXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9FbnRyeT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlQ29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TeWx2ZXJhIENoYWxsZW5nZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUZWNoIGNoYWxsZW5nZSAtIFNhcmFoIE11aXJoZWFkXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNYWluPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtoZXJvfSByb2xlPVwicHJlc2VudGF0aW9uXCIgYWx0PVwiSGVybyBiYW5uZXJcIiAvPlxuICAgICAgICA8SGVhZGluZz5Qcm9qZWN0OiB7cHJvamVjdFRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAge2ZlZWQubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHA+VG90YWwgbnVtYmVyIG9mIGZlZWQgZW50cmllczoge3Byb2plY3RGZWVkcy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPExheW91dD57ZmVlZH08L0xheW91dD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RGVzY3JpcHRpb24+U29ycnksIG5vIGZlZWRzIGZvciB0aGlzIHByb2plY3QgeWV0Li4uPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvTWFpbj5cbiAgICA8L1BhZ2VDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlscztcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJoZXJvIiwidXNlUm91dGVyIiwiUGFnZUNvbnRhaW5lciIsIk1haW4iLCJIZWFkaW5nIiwiTGF5b3V0IiwiRW50cnkiLCJFbnRyeVRpdGxlIiwiRGVzY3JpcHRpb24iLCJQcm9qZWN0RGV0YWlscyIsInByb2plY3REZXRhaWxzIiwicm91dGVyIiwicHJvamVjdFRpdGxlIiwiYXNQYXRoIiwicmVwbGFjZSIsInByb2plY3RGZWVkcyIsImZlZWRzIiwibW9zdFJlY2VudEVudHJpZXMiLCJzbGljZSIsInRpbWVzdGFtcHMiLCJtYXAiLCJlbnRyeSIsInRpbWVTdHJpbmciLCJ0aW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJib2IiLCJzb3J0IiwiZGF0ZUEiLCJkYXRlQiIsImZlZWQiLCJkYXRhLXRlc3RpZCIsImFwcCIsInRhYmxlIiwiaWQiLCJkZXZpY2VfaWQiLCJ0ciIsInRoIiwidGQiLCJncHNfbGF0IiwiZ3BzX2xvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Iiwic3JjIiwicm9sZSIsImFsdCIsImxlbmd0aCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[project].tsx\n"));

/***/ })

});