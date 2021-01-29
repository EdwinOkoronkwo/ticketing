webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");




var _jsxFileName = "C:\\microservicesUdemy\\ticketingApp\\client\\pages\\index.js",
    _this = undefined;



var LandingPage = function LandingPage(_ref) {
  var currentUser = _ref.currentUser;
  return currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
    children: "You are signed in"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
    children: "You are NOT signed in"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = LandingPage;

LandingPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var client, _yield$client$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("LANDING PAGE!");
            client = Object(_api_build_client__WEBPACK_IMPORTED_MODULE_3__["default"])(context);
            _context.next = 4;
            return client.get("/api/users/currentuser");

          case 4:
            _yield$client$get = _context.sent;
            data = _yield$client$get.data;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

var _c;

$RefreshReg$(_c, "LandingPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiYnVpbGRDbGllbnQiLCJnZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDdkMsU0FBT0EsV0FBVyxnQkFDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZ0IsZ0JBR2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFLRCxDQU5EOztLQUFNRCxXOztBQVFOQSxXQUFXLENBQUNFLGVBQVo7QUFBQSwrTEFBOEIsaUJBQU9DLE9BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1QkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDTUMsa0JBRnNCLEdBRWJDLGlFQUFXLENBQUNKLE9BQUQsQ0FGRTtBQUFBO0FBQUEsbUJBR0xHLE1BQU0sQ0FBQ0UsR0FBUCxDQUNyQix3QkFEcUIsQ0FISzs7QUFBQTtBQUFBO0FBR3BCQyxnQkFIb0IscUJBR3BCQSxJQUhvQjtBQUFBLDZDQU9yQkEsSUFQcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVULDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAzNjNmNzdiNzU3NjIyMWEzM2I3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcclxuXHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiBjdXJyZW50VXNlciA/IChcclxuICAgIDxoMT5Zb3UgYXJlIHNpZ25lZCBpbjwvaDE+XHJcbiAgKSA6IChcclxuICAgIDxoMT5Zb3UgYXJlIE5PVCBzaWduZWQgaW48L2gxPlxyXG4gICk7XHJcbn07XHJcblxyXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiTEFORElORyBQQUdFIVwiKTtcclxuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoXHJcbiAgICBcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIlxyXG4gICk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=