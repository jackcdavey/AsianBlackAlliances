"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/crossCulturalInfluences",{

/***/ "./public/components/foodCard.tsx":
/*!****************************************!*\
  !*** ./public/components/foodCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FoodCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar styles = {\n    card: {\n        width: \"70%\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        // backgroundColor: \"white\",\n        borderRadius: \"10px\",\n        boxShadow: \"0px 0px 10px 0px rgba(0,0,0,0.75)\",\n        padding: \"10px\",\n        border: \"1px solid black\"\n    }\n};\nfunction FoodCard(param) {\n    var chefName = param.chefName, chefDesc = param.chefDesc, dishName = param.dishName, dishDesc = param.dishDesc;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: chefName\n            }, void 0, false, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/foodCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: chefDesc\n            }, void 0, false, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/foodCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: dishName\n            }, void 0, false, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/foodCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: dishDesc\n            }, void 0, false, {\n                fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/foodCard.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jackdavey/GitProjects/BAR/AsianBlackAlliances/public/components/foodCard.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n};\n_c = FoodCard;\nvar _c;\n$RefreshReg$(_c, \"FoodCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9mb29kQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQjtBQVMxQixJQUFNQyxNQUFNLEdBQUc7SUFDWEMsSUFBSSxFQUFFO1FBQ0ZDLEtBQUssRUFBRSxLQUFLO1FBQ1pDLE9BQU8sRUFBRSxNQUFNO1FBQ2ZDLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCQyxVQUFVLEVBQUUsUUFBUTtRQUNwQiw0QkFBNEI7UUFDNUJDLFlBQVksRUFBRSxNQUFNO1FBQ3BCQyxTQUFTLEVBQUUsbUNBQW1DO1FBQzlDQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxNQUFNLEVBQUUsaUJBQWlCO0tBQzVCO0NBQ0o7QUFHYyxTQUFTQyxRQUFRLENBQUMsS0FBeUQsRUFBRTtRQUF6REMsUUFBUSxHQUFWLEtBQXlELENBQXZEQSxRQUFRLEVBQUVDLFFBQVEsR0FBcEIsS0FBeUQsQ0FBN0NBLFFBQVEsRUFBRUMsUUFBUSxHQUE5QixLQUF5RCxDQUFuQ0EsUUFBUSxFQUFFQyxRQUFRLEdBQXhDLEtBQXlELENBQXpCQSxRQUFRO0lBQ3JFLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRWhCLE1BQU0sQ0FBQ0MsSUFBSTs7MEJBQ25CLDhEQUFDZ0IsSUFBRTswQkFBRU4sUUFBUTs7Ozs7b0JBQU07MEJBQ25CLDhEQUFDTyxJQUFFOzBCQUFFTixRQUFROzs7OztvQkFBTTswQkFDbkIsOERBQUNPLElBQUU7MEJBQUVOLFFBQVE7Ozs7O29CQUFNOzBCQUNuQiw4REFBQ08sSUFBRTswQkFBRU4sUUFBUTs7Ozs7b0JBQU07Ozs7OztZQUNqQixDQUNSO0FBQ04sQ0FBQztBQVR1QkosS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvY29tcG9uZW50cy9mb29kQ2FyZC50c3g/NjI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBGb29kQ2FyZFByb3BzIHtcbiAgICBjaGVmTmFtZTogc3RyaW5nO1xuICAgIGNoZWZEZXNjOiBzdHJpbmc7XG4gICAgZGlzaE5hbWU6IHN0cmluZztcbiAgICBkaXNoRGVzYzogc3RyaW5nO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY2FyZDoge1xuICAgICAgICB3aWR0aDogXCI3MCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgfSxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vZENhcmQoeyBjaGVmTmFtZSwgY2hlZkRlc2MsIGRpc2hOYW1lLCBkaXNoRGVzYyB9OiBGb29kQ2FyZFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgxPntjaGVmTmFtZX08L2gxPlxuICAgICAgICAgICAgPGgyPntjaGVmRGVzY308L2gyPlxuICAgICAgICAgICAgPGgzPntkaXNoTmFtZX08L2gzPlxuICAgICAgICAgICAgPGg0PntkaXNoRGVzY308L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY2FyZCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwicGFkZGluZyIsImJvcmRlciIsIkZvb2RDYXJkIiwiY2hlZk5hbWUiLCJjaGVmRGVzYyIsImRpc2hOYW1lIiwiZGlzaERlc2MiLCJkaXYiLCJzdHlsZSIsImgxIiwiaDIiLCJoMyIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/components/foodCard.tsx\n"));

/***/ })

});