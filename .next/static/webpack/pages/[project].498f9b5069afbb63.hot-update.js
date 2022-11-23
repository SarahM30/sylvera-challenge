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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hero.png */ \"./assets/hero.png\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Common.styled */ \"./styles/Common.styled.tsx\");\n/* harmony import */ var _styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Project.styled */ \"./styles/Project.styled.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProjectDetails = (param)=>{\n    let { projectDetails  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const projectTitle = router.asPath.replace(/\\//g, \"\");\n    const projectFeeds = projectDetails.feeds;\n    if (!projectFeeds) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n        children: \"Sorry, no feeds for this project yet...\"\n    }, void 0, false, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 62,\n        columnNumber: 12\n    }, undefined);\n    const orderedFeeds = projectFeeds.sort(function(a, b) {\n        console.log(\"a\", typeof a);\n        return Date.parse(\"1970/01/01 \" + a.time.slice(0, -2) + \" \" + a.time.slice(-2)) - Date.parse(\"1970/01/01 \" + b.time.slice(0, -2) + \" \" + b.time.slice(-2));\n    });\n    const mostRecentEntries = orderedFeeds.slice(0, 10);\n    const feed = mostRecentEntries.map((entry)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Entry, {\n            \"data-testid\": \"feed-entry\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.EntryTitle, {\n                    children: [\n                        \"Entry details for \",\n                        entry.app,\n                        \" submitted at \",\n                        entry.time\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    id: entry.device_id,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Project:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.app || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Device ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.device_id || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Latitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lat || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Longitude:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.gps_lon || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time of entry:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: entry.time || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, entry.device_id, true, {\n            fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.PageContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Sylvera Challenge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Tech challenge - Sarah Muirhead\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Main, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_hero_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        role: \"presentation\",\n                        alt: \"Hero banner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Common_styled__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        children: [\n                            \"Project: \",\n                            projectTitle\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    feed.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Total number of feed entries: \",\n                                    projectFeeds.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n                                children: feed\n                            }, void 0, false, {\n                                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Project_styled__WEBPACK_IMPORTED_MODULE_6__.Description, {\n                        children: \"Sorry, no feeds for this project yet...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sarahmuirhead/Documents/challenges/sylvera-challenge/pages/[project].tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ProjectDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtEQUFTQTs7O0tBRHBCUTs7QUF3RU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Byb2plY3RdLnRzeD9mNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgaGVybyBmcm9tIFwiLi4vYXNzZXRzL2hlcm8ucG5nXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUGFnZUNvbnRhaW5lciwgTWFpbiwgSGVhZGluZyB9IGZyb20gXCIuLi9zdHlsZXMvQ29tbW9uLnN0eWxlZFwiO1xuXG5pbXBvcnQge1xuICBMYXlvdXQsXG4gIEVudHJ5LFxuICBFbnRyeVRpdGxlLFxuICBEZXNjcmlwdGlvbixcbn0gZnJvbSBcIi4uL3N0eWxlcy9Qcm9qZWN0LnN0eWxlZFwiO1xuXG50eXBlIFByb2plY3REZXRhaWxzID0ge1xuICBhcHA6IHN0cmluZztcbiAgZGV2aWNlX2lkOiBzdHJpbmc7XG4gIGdwc19sYXQ6IG51bWJlcjtcbiAgZ3BzX2xvbjogbnVtYmVyO1xuICB0aW1lOiBzdHJpbmc7XG59O1xuXG4vLyBGcm9tIHRoZSBicmllZiwgdGhlIGRhdGEgaXMgdXBkYXRlZCBpbmZyZXF1ZW50bHlcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3BtMjUubGFzcy1uZXQub3JnL0FQSS0xLjAuMC9wcm9qZWN0L2FsbC9cIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TGlzdC5zcGxpdCgvXFxzKy8pO1xuXG4gIGNvbnN0IHBhdGhzID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczogeyBwcm9qZWN0OiBwcm9qZWN0LnRvU3RyaW5nKCkgfSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBjb250ZXh0LnBhcmFtcy5wcm9qZWN0O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9wbTI1Lmxhc3MtbmV0Lm9yZy9BUEktMS4wLjAvcHJvamVjdC8ke3Byb2plY3R9L2xhdGVzdC9gXG4gICk7XG4gIGNvbnN0IHByb2plY3REZXRhaWxzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9qZWN0RGV0YWlscyxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgUHJvamVjdERldGFpbHMgPSAoeyBwcm9qZWN0RGV0YWlscyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSByb3V0ZXIuYXNQYXRoLnJlcGxhY2UoL1xcLy9nLCBcIlwiKTtcblxuICBjb25zdCBwcm9qZWN0RmVlZHMgPSBwcm9qZWN0RGV0YWlscy5mZWVkcztcbiAgaWYgKCFwcm9qZWN0RmVlZHMpXG4gICAgcmV0dXJuIDxIZWFkaW5nPlNvcnJ5LCBubyBmZWVkcyBmb3IgdGhpcyBwcm9qZWN0IHlldC4uLjwvSGVhZGluZz47XG5cbiAgY29uc3Qgb3JkZXJlZEZlZWRzID0gcHJvamVjdEZlZWRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBjb25zb2xlLmxvZygnYScsIHR5cGVvZiBhICk7XG4gICAgcmV0dXJuIChcbiAgICAgIERhdGUucGFyc2UoXCIxOTcwLzAxLzAxIFwiICsgYS50aW1lLnNsaWNlKDAsIC0yKSArIFwiIFwiICsgYS50aW1lLnNsaWNlKC0yKSkgLVxuICAgICAgRGF0ZS5wYXJzZShcIjE5NzAvMDEvMDEgXCIgKyBiLnRpbWUuc2xpY2UoMCwgLTIpICsgXCIgXCIgKyBiLnRpbWUuc2xpY2UoLTIpKVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IG1vc3RSZWNlbnRFbnRyaWVzID0gb3JkZXJlZEZlZWRzLnNsaWNlKDAsIDEwKTtcblxuICBjb25zdCBmZWVkID0gbW9zdFJlY2VudEVudHJpZXMubWFwKChlbnRyeTogUHJvamVjdERldGFpbHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVudHJ5IGtleT17ZW50cnkuZGV2aWNlX2lkfSBkYXRhLXRlc3RpZD1cImZlZWQtZW50cnlcIj5cbiAgICAgICAgPEVudHJ5VGl0bGU+XG4gICAgICAgICAgRW50cnkgZGV0YWlscyBmb3Ige2VudHJ5LmFwcH0gc3VibWl0dGVkIGF0IHtlbnRyeS50aW1lfVxuICAgICAgICA8L0VudHJ5VGl0bGU+XG4gICAgICAgIDx0YWJsZSBpZD17ZW50cnkuZGV2aWNlX2lkfT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvamVjdDo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5hcHAgfHwgXCJVbmtub3duXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EZXZpY2UgSUQ6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkuZGV2aWNlX2lkIHx8IFwiVW5rbm93blwifTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TGF0aXR1ZGU6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZW50cnkuZ3BzX2xhdCB8fCBcIlVua25vd25cIn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkxvbmdpdHVkZTo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS5ncHNfbG9uIHx8IFwiVW5rbm93blwifTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGltZSBvZiBlbnRyeTo8L3RoPlxuICAgICAgICAgICAgPHRkPntlbnRyeS50aW1lIHx8IFwiVW5rbm93blwifTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvRW50cnk+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3lsdmVyYSBDaGFsbGVuZ2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGVjaCBjaGFsbGVuZ2UgLSBTYXJhaCBNdWlyaGVhZFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWFpbj5cbiAgICAgICAgPEltYWdlIHNyYz17aGVyb30gcm9sZT1cInByZXNlbnRhdGlvblwiIGFsdD1cIkhlcm8gYmFubmVyXCIgLz5cbiAgICAgICAgPEhlYWRpbmc+UHJvamVjdDoge3Byb2plY3RUaXRsZX08L0hlYWRpbmc+XG4gICAgICAgIHtmZWVkLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlRvdGFsIG51bWJlciBvZiBmZWVkIGVudHJpZXM6IHtwcm9qZWN0RmVlZHMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgIDxMYXlvdXQ+e2ZlZWR9PC9MYXlvdXQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPERlc2NyaXB0aW9uPlNvcnJ5LCBubyBmZWVkcyBmb3IgdGhpcyBwcm9qZWN0IHlldC4uLjwvRGVzY3JpcHRpb24+XG4gICAgICAgICl9XG4gICAgICA8L01haW4+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERldGFpbHM7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiaGVybyIsInVzZVJvdXRlciIsIlBhZ2VDb250YWluZXIiLCJNYWluIiwiSGVhZGluZyIsIkxheW91dCIsIkVudHJ5IiwiRW50cnlUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUHJvamVjdERldGFpbHMiLCJwcm9qZWN0RGV0YWlscyIsInJvdXRlciIsInByb2plY3RUaXRsZSIsImFzUGF0aCIsInJlcGxhY2UiLCJwcm9qZWN0RmVlZHMiLCJmZWVkcyIsIm9yZGVyZWRGZWVkcyIsInNvcnQiLCJhIiwiYiIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwicGFyc2UiLCJ0aW1lIiwic2xpY2UiLCJtb3N0UmVjZW50RW50cmllcyIsImZlZWQiLCJtYXAiLCJlbnRyeSIsImRhdGEtdGVzdGlkIiwiYXBwIiwidGFibGUiLCJpZCIsImRldmljZV9pZCIsInRyIiwidGgiLCJ0ZCIsImdwc19sYXQiLCJncHNfbG9uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJzcmMiLCJyb2xlIiwiYWx0IiwibGVuZ3RoIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[project].tsx\n"));

/***/ })

});