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
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://ingress-nginx.ingress-nginx-controller.svc.cluster.local/api/users/currentuser", {
            headers: {
              Host: "ticketing.dev"
            }
          });

        case 3:
          _yield$axios$get = _context.sent;
          data = _yield$axios$get.data;
          return _context.abrupt("return", data);

        case 8:
          _context.next = 10;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users/currentuser");

        case 10:
          _yield$axios$get2 = _context.sent;
          _data = _yield$axios$get2.data;
          return _context.abrupt("return", _data);

        case 13:
          return _context.abrupt("return", {});

        case 14:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJIb3N0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVosRUFEdUMsQ0FFdkM7O0FBRUEsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBTEQ7O0tBQU1ELFc7QUFPTkEsV0FBVyxDQUFDSSxrQkFBWixpTUFBaUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBRU5DLDRDQUFLLENBQUNDLEdBQU4sQ0FDckIsdUZBRHFCLEVBRXJCO0FBQ0VDLG1CQUFPLEVBQUU7QUFDUEMsa0JBQUksRUFBRTtBQURDO0FBRFgsV0FGcUIsQ0FGTTs7QUFBQTtBQUFBO0FBRXJCQyxjQUZxQixvQkFFckJBLElBRnFCO0FBQUEsMkNBV3RCQSxJQVhzQjs7QUFBQTtBQUFBO0FBQUEsaUJBaUJOSiw0Q0FBSyxDQUFDQyxHQUFOLENBQ3JCLHdCQURxQixDQWpCTTs7QUFBQTtBQUFBO0FBaUJyQkcsZUFqQnFCLHFCQWlCckJBLElBakJxQjtBQUFBLDJDQW9CdEJBLEtBcEJzQjs7QUFBQTtBQUFBLDJDQXNCeEIsRUF0QndCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWpDO0FBeUJlVCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYWM0ZGU1NWMyZmJlZGQxOWFmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbi8vICAgLy8gICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbi8vICAgLy8gICBheGlvcy5nZXQoXCIvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCIpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuXHJcbi8vICAgcmV0dXJuIDxoMT5MYW5kaW5nIFBhZ2U8L2gxPjtcclxuLy8gfTtcclxuXHJcbi8vIExhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuLy8gICAgICAgXCIvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCJcclxuLy8gICAgICk7XHJcbi8vICAgICByZXR1cm4gZGF0YTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiB7fTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gIC8vIGF4aW9zLmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xyXG5cclxuICByZXR1cm4gPGgxPkxhbmRpbmcgUGFnZTwvaDE+O1xyXG59O1xyXG5cclxuTGFuZGluZ1BhZ2UuZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgXCJodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuc3ZjLmNsdXN0ZXIubG9jYWwvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBIb3N0OiBcInRpY2tldGluZy5kZXZcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgLy8gd2UgYXJlIG9uIHRoZSBzZXJ2ZXIhXHJcbiAgICAvLyByZXF1ZXN0cyBzaG91bGQgYmUgbWFkZSB0byBodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54Li4ubGFrc2RqZmtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gd2UgYXJlIG9uIHRoZSBicm93c2VyIVxyXG4gICAgLy8gcmVxdWVzdHMgY2FuIGJlIG1hZGUgd2l0aCBhIGJhc2UgdXJsIG9mICcnXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgXCIvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=