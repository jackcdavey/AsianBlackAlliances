"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/historyOfCollaboration",{

/***/ "./pages/historyOfCollaboration.tsx":
/*!******************************************!*\
  !*** ./pages/historyOfCollaboration.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/components/header */ \"./public/components/header.tsx\");\n/* harmony import */ var _public_components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/components/footer */ \"./public/components/footer.tsx\");\n/* harmony import */ var _public_components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/components/layout */ \"./public/components/layout.tsx\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/lab */ \"./node_modules/@mui/lab/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar geoUrl = \"/features.json\";\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ABA: History of Collaboration\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                title: \"History of Collaboration\",\n                description: \" \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__.ComposableMap, {\n                                projection: \"geoMercator\",\n                                width: 800,\n                                height: 400,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__.ZoomableGroup, {\n                                    center: [\n                                        0,\n                                        0\n                                    ],\n                                    zoom: 1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__.Geographies, {\n                                            geography: geoUrl,\n                                            children: function(param) {\n                                                var geographies = param.geographies;\n                                                return geographies.map(function(geo) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__.Geography, {\n                                                        geography: geo\n                                                    }, geo.rsmKey, false, {\n                                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 21\n                                                    }, _this);\n                                                });\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n                                            coordinates: [\n                                                0,\n                                                0\n                                            ],\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                r: 3,\n                                                fill: \"#FF5533\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"History of Collaboration\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.Timeline, {\n                                position: \"alternate\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineItem, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineSeparator, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineDot, {\n                                                        color: \"secondary\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineConnector, {}, void 0, false, {\n                                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineContent, {\n                                                children: \"One\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineItem, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineSeparator, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineDot, {\n                                                        color: \"success\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineConnector, {}, void 0, false, {\n                                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineContent, {\n                                                children: \"Two\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineItem, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineSeparator, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineDot, {\n                                                        color: \"primary\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineConnector, {}, void 0, false, {\n                                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.TimelineContent, {\n                                                children: \"Three\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/pages/historyOfCollaboration.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q047Ozs7Ozs2QkFDUDs7Ozs7O3FCQUVDOzBCQUVULDhEQUFDWixpRUFBTTs7OztxQkFBRzs7b0JBQ1QsQ0FDSjtBQUNILENBQUM7QUF6REtjLEtBQUFBLElBQUk7QUEyRFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGlzdG9yeU9mQ29sbGFib3JhdGlvbi50c3g/ZWRjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuXG5pbXBvcnQge1xuICBDb21wb3NhYmxlTWFwLFxuICBHZW9ncmFwaGllcyxcbiAgR2VvZ3JhcGh5LFxuICBab29tYWJsZUdyb3VwLFxuICBNYXJrZXJcbn0gZnJvbSAncmVhY3Qtc2ltcGxlLW1hcHMnO1xuXG5pbXBvcnQge1xuICBUaW1lbGluZSxcbiAgVGltZWxpbmVJdGVtLFxuICBUaW1lbGluZURvdCxcbiAgVGltZWxpbmVTZXBhcmF0b3IsXG4gIFRpbWVsaW5lQ29ubmVjdG9yLFxuICBUaW1lbGluZUNvbnRlbnRcbn0gZnJvbSAnQG11aS9sYWInO1xuXG5cbmNvbnN0IGdlb1VybCA9ICcvZmVhdHVyZXMuanNvbic7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFCQTogSGlzdG9yeSBvZiBDb2xsYWJvcmF0aW9uPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxMYXlvdXQgdGl0bGU9eydIaXN0b3J5IG9mIENvbGxhYm9yYXRpb24nfSBkZXNjcmlwdGlvbj17JyAnfT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGlkPSdib2R5Jz5cbiAgICAgICAgICA8Q29tcG9zYWJsZU1hcCBwcm9qZWN0aW9uPVwiZ2VvTWVyY2F0b3JcIiB3aWR0aD17ODAwfSBoZWlnaHQ9ezQwMH0+XG4gICAgICAgICAgICA8Wm9vbWFibGVHcm91cCBjZW50ZXI9e1swLCAwXX0gem9vbT17MX0+XG4gICAgICAgICAgICAgIDxHZW9ncmFwaGllcyBnZW9ncmFwaHk9e2dlb1VybH0+XG4gICAgICAgICAgICAgICAgeyh7IGdlb2dyYXBoaWVzIH0pID0+XG4gICAgICAgICAgICAgICAgICBnZW9ncmFwaGllcy5tYXAoKGdlbykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8R2VvZ3JhcGh5IGtleT17Z2VvLnJzbUtleX0gZ2VvZ3JhcGh5PXtnZW99IC8+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9HZW9ncmFwaGllcz5cbiAgICAgICAgICAgICAgPE1hcmtlciBjb29yZGluYXRlcz17WzAsIDBdfT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIHI9ezN9IGZpbGw9XCIjRkY1NTMzXCIgLz5cbiAgICAgICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICAgICA8L1pvb21hYmxlR3JvdXA+XG4gICAgICAgICAgPC9Db21wb3NhYmxlTWFwPlxuICAgICAgICAgIDxoMT5IaXN0b3J5IG9mIENvbGxhYm9yYXRpb248L2gxPlxuICAgICAgICAgIDxUaW1lbGluZSBwb3NpdGlvbj1cImFsdGVybmF0ZVwiPlxuICAgICAgICAgICAgPFRpbWVsaW5lSXRlbT5cbiAgICAgICAgICAgICAgPFRpbWVsaW5lU2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxUaW1lbGluZURvdCBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgICAgICAgPFRpbWVsaW5lQ29ubmVjdG9yIC8+XG4gICAgICAgICAgICAgIDwvVGltZWxpbmVTZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxUaW1lbGluZUNvbnRlbnQ+T25lPC9UaW1lbGluZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L1RpbWVsaW5lSXRlbT5cbiAgICAgICAgICAgIDxUaW1lbGluZUl0ZW0+XG4gICAgICAgICAgICAgIDxUaW1lbGluZVNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8VGltZWxpbmVEb3QgY29sb3I9XCJzdWNjZXNzXCIgLz5cbiAgICAgICAgICAgICAgICA8VGltZWxpbmVDb25uZWN0b3IgLz5cbiAgICAgICAgICAgICAgPC9UaW1lbGluZVNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPFRpbWVsaW5lQ29udGVudD5Ud288L1RpbWVsaW5lQ29udGVudD5cbiAgICAgICAgICAgIDwvVGltZWxpbmVJdGVtPlxuICAgICAgICAgICAgPFRpbWVsaW5lSXRlbT5cbiAgICAgICAgICAgICAgPFRpbWVsaW5lU2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxUaW1lbGluZURvdCBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIDxUaW1lbGluZUNvbm5lY3RvciAvPlxuICAgICAgICAgICAgICA8L1RpbWVsaW5lU2VwYXJhdG9yPlxuICAgICAgICAgICAgICA8VGltZWxpbmVDb250ZW50PlRocmVlPC9UaW1lbGluZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L1RpbWVsaW5lSXRlbT5cbiAgICAgICAgICA8L1RpbWVsaW5lPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiSGVhZGVyIiwiRm9vdGVyIiwiTGF5b3V0IiwiQ29tcG9zYWJsZU1hcCIsIkdlb2dyYXBoaWVzIiwiR2VvZ3JhcGh5IiwiWm9vbWFibGVHcm91cCIsIk1hcmtlciIsIlRpbWVsaW5lIiwiVGltZWxpbmVJdGVtIiwiVGltZWxpbmVEb3QiLCJUaW1lbGluZVNlcGFyYXRvciIsIlRpbWVsaW5lQ29ubmVjdG9yIiwiVGltZWxpbmVDb250ZW50IiwiZ2VvVXJsIiwiSG9tZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJkZXNjcmlwdGlvbiIsImRpdiIsImlkIiwicHJvamVjdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY2VudGVyIiwiem9vbSIsImdlb2dyYXBoeSIsImdlb2dyYXBoaWVzIiwibWFwIiwiZ2VvIiwicnNtS2V5IiwiY29vcmRpbmF0ZXMiLCJjaXJjbGUiLCJyIiwiZmlsbCIsImgxIiwicG9zaXRpb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/historyOfCollaboration.tsx\n"));

/***/ })

});