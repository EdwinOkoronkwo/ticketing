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

LandingPage.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, _yield$axios$get, data, _yield$axios$get2, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            console.log(req.headers);

            if (true) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser", {
              headers: {
                Host: "ticketing.dev"
              }
            });

          case 5:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);

          case 10:
            _context.next = 12;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users/currentuser");

          case 12:
            _yield$axios$get2 = _context.sent;
            _data = _yield$axios$get2.data;
            return _context.abrupt("return", _data);

          case 15:
            return _context.abrupt("return", {});

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJoZWFkZXJzIiwiYXhpb3MiLCJnZXQiLCJIb3N0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVosRUFEdUMsQ0FFdkM7O0FBRUEsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBTEQ7O0tBQU1ELFc7O0FBT05BLFdBQVcsQ0FBQ0ksZUFBWjtBQUFBLCtMQUE4QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVDtBQUM1QkgsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFHLENBQUNDLE9BQWhCOztBQUQ0QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdIQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ3JCLHVGQURxQixFQUVyQjtBQUNFRixxQkFBTyxFQUFFO0FBQ1BHLG9CQUFJLEVBQUU7QUFEQztBQURYLGFBRnFCLENBSEc7O0FBQUE7QUFBQTtBQUdsQkMsZ0JBSGtCLG9CQUdsQkEsSUFIa0I7QUFBQSw2Q0FZbkJBLElBWm1COztBQUFBO0FBQUE7QUFBQSxtQkFrQkhILDRDQUFLLENBQUNDLEdBQU4sQ0FDckIsd0JBRHFCLENBbEJHOztBQUFBO0FBQUE7QUFrQmxCRSxpQkFsQmtCLHFCQWtCbEJBLElBbEJrQjtBQUFBLDZDQXFCbkJBLEtBckJtQjs7QUFBQTtBQUFBLDZDQXVCckIsRUF2QnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTBCZVYsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWZhMGEyY2JjYzBjYWI2NGIyMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGNvbnN0IExhbmRpbmdQYWdlID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4vLyAgIC8vICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4vLyAgIC8vICAgYXhpb3MuZ2V0KFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiKTtcclxuLy8gICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcblxyXG4vLyAgIHJldHVybiA8aDE+TGFuZGluZyBQYWdlPC9oMT47XHJcbi8vIH07XHJcblxyXG4vLyBMYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXHJcbi8vICAgICAgIFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiXHJcbi8vICAgICApO1xyXG4vLyAgICAgcmV0dXJuIGRhdGE7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4ge307XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuICAvLyBheGlvcy5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcclxuXHJcbiAgcmV0dXJuIDxoMT5MYW5kaW5nIFBhZ2U8L2gxPjtcclxufTtcclxuXHJcbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMpO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgXCJodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBIb3N0OiBcInRpY2tldGluZy5kZXZcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgLy8gd2UgYXJlIG9uIHRoZSBzZXJ2ZXIhXHJcbiAgICAvLyByZXF1ZXN0cyBzaG91bGQgYmUgbWFkZSB0byBodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54Li4ubGFrc2RqZmtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gd2UgYXJlIG9uIHRoZSBicm93c2VyIVxyXG4gICAgLy8gcmVxdWVzdHMgY2FuIGJlIG1hZGUgd2l0aCBhIGJhc2UgdXJsIG9mICcnXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgXCIvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=