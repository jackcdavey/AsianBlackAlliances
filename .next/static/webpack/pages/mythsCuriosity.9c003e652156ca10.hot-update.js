"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mythsCuriosity",{

/***/ "./public/components/mythCard.tsx":
/*!****************************************!*\
  !*** ./public/components/mythCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MythCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _richLinkCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./richLinkCard */ \"./public/components/richLinkCard.tsx\");\n\n\n\nvar styles = {\n    card: {\n        width: \"80%\",\n        display: \"grid\",\n        gridTemplateColumns: \"1fr 1fr\",\n        gap: \"0px 10%\",\n        gridTemplateAreas: \". .\",\n        borderRadius: \"25px\",\n        boxShadow: \"0px 0px 10px 0px rgba(0,0,0,0.75)\",\n        border: \"1px solid black\",\n        margin: \"1%\",\n        padding: \"1%\"\n    },\n    cardContent: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    linkTxt: {\n        maxWidth: \"100%\",\n        textDecoration: \"none\",\n        color: \"black\",\n        fontSize: \"0.7rem\"\n    }\n};\nfunction MythCard(param) {\n    var mythTitle = param.mythTitle, mythDesc = param.mythDesc, mythLink = param.mythLink, mythLinkTitle = param.mythLinkTitle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.cardContent,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: mythTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/mythCard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: mythDesc\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/mythCard.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/mythCard.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.cardContent,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_richLinkCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/mythCard.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        style: styles.linkTxt,\n                        href: mythLink,\n                        children: mythLinkTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/mythCard.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/mythCard.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/mythCard.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n};\n_c = MythCard;\nvar _c;\n$RefreshReg$(_c, \"MythCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9teXRoQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDdUI7QUFVakQsSUFBTUUsTUFBTSxHQUFHO0lBQ1hDLElBQUksRUFBRTtRQUNGQyxLQUFLLEVBQUUsS0FBSztRQUNaQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCQyxHQUFHLEVBQUUsU0FBUztRQUNkQyxpQkFBaUIsRUFBRSxLQUFLO1FBQ3hCQyxZQUFZLEVBQUUsTUFBTTtRQUNwQkMsU0FBUyxFQUFFLG1DQUFtQztRQUM5Q0MsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QkMsTUFBTSxFQUFFLElBQUk7UUFDWkMsT0FBTyxFQUFFLElBQUk7S0FFaEI7SUFDREMsV0FBVyxFQUFFO1FBQ1RULE9BQU8sRUFBRSxNQUFNO1FBQ2ZVLFFBQVEsRUFBRSxNQUFNO1FBQ2hCQyxhQUFhLEVBQUUsUUFBUTtRQUN2QkMsVUFBVSxFQUFFLFFBQVE7UUFDcEJDLGNBQWMsRUFBRSxRQUFRO0tBRTNCO0lBQUVDLE9BQU8sRUFBRTtRQUNSQyxRQUFRLEVBQUUsTUFBTTtRQUNoQkMsY0FBYyxFQUFFLE1BQU07UUFDdEJDLEtBQUssRUFBRSxPQUFPO1FBQ2RDLFFBQVEsRUFBRSxRQUFRO0tBQ3JCO0NBQ0o7QUFHYyxTQUFTQyxRQUFRLENBQUMsS0FBK0QsRUFBRTtRQUEvREMsU0FBUyxHQUFYLEtBQStELENBQTdEQSxTQUFTLEVBQUVDLFFBQVEsR0FBckIsS0FBK0QsQ0FBbERBLFFBQVEsRUFBRUMsUUFBUSxHQUEvQixLQUErRCxDQUF4Q0EsUUFBUSxFQUFFQyxhQUFhLEdBQTlDLEtBQStELENBQTlCQSxhQUFhO0lBQzNFLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRTVCLE1BQU0sQ0FBQ0MsSUFBSTs7MEJBQ25CLDhEQUFDMEIsS0FBRztnQkFBQ0MsS0FBSyxFQUFFNUIsTUFBTSxDQUFDWSxXQUFXOztrQ0FDMUIsOERBQUNpQixJQUFFO2tDQUFFTixTQUFTOzs7Ozs0QkFBTTtrQ0FDcEIsOERBQUNPLElBQUU7a0NBQUVOLFFBQVE7Ozs7OzRCQUFNOzs7Ozs7b0JBQ2pCOzBCQUNOLDhEQUFDRyxLQUFHO2dCQUFDQyxLQUFLLEVBQUU1QixNQUFNLENBQUNZLFdBQVc7O2tDQUUxQiw4REFBQ2IscURBQW1COzs7OzRCQUFHO2tDQUN2Qiw4REFBQ2dDLEdBQUM7d0JBQUNILEtBQUssRUFBRTVCLE1BQU0sQ0FBQ2lCLE9BQU87d0JBQUVlLElBQUksRUFBRVAsUUFBUTtrQ0FBR0MsYUFBYTs7Ozs7NEJBQUs7Ozs7OztvQkFDM0Q7Ozs7OztZQUNKLENBQ1I7QUFDTixDQUFDO0FBZHVCSixLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jb21wb25lbnRzL215dGhDYXJkLnRzeD82ODAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNdWx0aUFjdGlvbkFyZWFDYXJkIGZyb20gXCIuL3JpY2hMaW5rQ2FyZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5cbmludGVyZmFjZSBNeXRoQ2FyZFByb3BzIHtcbiAgICBteXRoVGl0bGU6IHN0cmluZztcbiAgICBteXRoRGVzYzogc3RyaW5nO1xuICAgIG15dGhMaW5rOiBzdHJpbmc7XG4gICAgbXl0aExpbmtUaXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY2FyZDoge1xuICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxuICAgICAgICBnYXA6IFwiMHB4IDEwJVwiLFxuICAgICAgICBncmlkVGVtcGxhdGVBcmVhczogXCIuIC5cIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIixcbiAgICAgICAgYm94U2hhZG93OiBcIjBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjc1KVwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgIG1hcmdpbjogXCIxJVwiLFxuICAgICAgICBwYWRkaW5nOiBcIjElXCIsXG5cbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXG4gICAgfSwgbGlua1R4dDoge1xuICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgZm9udFNpemU6IFwiMC43cmVtXCIsXG4gICAgfSxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXl0aENhcmQoeyBteXRoVGl0bGUsIG15dGhEZXNjLCBteXRoTGluaywgbXl0aExpbmtUaXRsZSB9OiBNeXRoQ2FyZFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRDb250ZW50fT5cbiAgICAgICAgICAgICAgICA8aDI+e215dGhUaXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoND57bXl0aERlc2N9PC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRDb250ZW50fT5cbiAgICAgICAgICAgICAgICB7LyogUGFzcyB0byBjYXJkIGluIGZ1dHVyZSAqL31cbiAgICAgICAgICAgICAgICA8TXVsdGlBY3Rpb25BcmVhQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtzdHlsZXMubGlua1R4dH0gaHJlZj17bXl0aExpbmt9PntteXRoTGlua1RpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTXVsdGlBY3Rpb25BcmVhQ2FyZCIsInN0eWxlcyIsImNhcmQiLCJ3aWR0aCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwiZ3JpZFRlbXBsYXRlQXJlYXMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY2FyZENvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5rVHh0IiwibWF4V2lkdGgiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJNeXRoQ2FyZCIsIm15dGhUaXRsZSIsIm15dGhEZXNjIiwibXl0aExpbmsiLCJteXRoTGlua1RpdGxlIiwiZGl2Iiwic3R5bGUiLCJoMiIsImg0IiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/components/mythCard.tsx\n"));

/***/ })

});