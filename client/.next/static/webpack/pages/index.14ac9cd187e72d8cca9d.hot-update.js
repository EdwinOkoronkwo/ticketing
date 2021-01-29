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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\microservicesUdemy\\ticketingApp\\client\\pages\\index.js",
    _this = undefined;

// import axios from "axios";
// const LandingPage = ({ currentUser }) => {
//   //   console.log(currentUser);
//   //   axios.get("/api/users/currentuser");
//   console.log(currentUser);
//   return <h1>Landing Page</h1>;
// };
// LandingPage.getInitialProps = async () => {
//   if (typeof window === "undefined") {
//   } else {
//     const { data } = await axios.get(
//       "/api/users/currentuser"
//     );
//     return data;
//   }
//   return {};
// };
// export default LandingPage;


var LandingPage = function LandingPage(_ref) {
  var currentUser = _ref.currentUser;
  console.log(currentUser); // axios.get('/api/users/currentuser');

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
    children: "Landing Page"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, _this);
};

_c = LandingPage;
LandingPage.getServerSideProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var _yield$axios$get, data, _yield$axios$get2, _data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (true) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://ingress-nginx.ingress-nginx-controller.svc.cluster.local");

        case 3:
          _yield$axios$get = _context.sent;
          data = _yield$axios$get.data;
          _context.next = 12;
          break;

        case 7:
          _context.next = 9;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users/currentuser");

        case 9:
          _yield$axios$get2 = _context.sent;
          _data = _yield$axios$get2.data;
          return _context.abrupt("return", _data);

        case 12:
          return _context.abrupt("return", {});

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJheGlvcyIsImdldCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaLEVBRHVDLENBRXZDOztBQUVBLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUxEOztLQUFNRCxXO0FBT05BLFdBQVcsQ0FBQ0ksa0JBQVosaU1BQWlDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUVOQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ3JCLGlFQURxQixDQUZNOztBQUFBO0FBQUE7QUFFckJDLGNBRnFCLG9CQUVyQkEsSUFGcUI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxpQkFVTkYsNENBQUssQ0FBQ0MsR0FBTixDQUNyQix3QkFEcUIsQ0FWTTs7QUFBQTtBQUFBO0FBVXJCQyxlQVZxQixxQkFVckJBLElBVnFCO0FBQUEsMkNBYXRCQSxLQWJzQjs7QUFBQTtBQUFBLDJDQWV4QixFQWZ3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFqQztBQWtCZVAsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTRhYzljZDE4N2U3MmQ4Y2NhOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGNvbnN0IExhbmRpbmdQYWdlID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4vLyAgIC8vICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4vLyAgIC8vICAgYXhpb3MuZ2V0KFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiKTtcclxuLy8gICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcblxyXG4vLyAgIHJldHVybiA8aDE+TGFuZGluZyBQYWdlPC9oMT47XHJcbi8vIH07XHJcblxyXG4vLyBMYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXHJcbi8vICAgICAgIFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiXHJcbi8vICAgICApO1xyXG4vLyAgICAgcmV0dXJuIGRhdGE7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4ge307XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuICAvLyBheGlvcy5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcclxuXHJcbiAgcmV0dXJuIDxoMT5MYW5kaW5nIFBhZ2U8L2gxPjtcclxufTtcclxuXHJcbkxhbmRpbmdQYWdlLmdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgIFwiaHR0cDovL2luZ3Jlc3MtbmdpbnguaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLnN2Yy5jbHVzdGVyLmxvY2FsXCJcclxuICAgICk7XHJcbiAgICAvLyB3ZSBhcmUgb24gdGhlIHNlcnZlciFcclxuICAgIC8vIHJlcXVlc3RzIHNob3VsZCBiZSBtYWRlIHRvIGh0dHA6Ly9pbmdyZXNzLW5naW54LmluZ3Jlc3MtbmdpbnguLi5sYWtzZGpma1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyB3ZSBhcmUgb24gdGhlIGJyb3dzZXIhXHJcbiAgICAvLyByZXF1ZXN0cyBjYW4gYmUgbWFkZSB3aXRoIGEgYmFzZSB1cmwgb2YgJydcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIlxyXG4gICAgKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuICByZXR1cm4ge307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==