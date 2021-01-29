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
LandingPage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http:// ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJIb3N0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVosRUFEdUMsQ0FFdkM7O0FBRUEsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBTEQ7O0tBQU1ELFc7QUFPTkEsV0FBVyxDQUFDSSxlQUFaLGlNQUE4QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFFSEMsNENBQUssQ0FBQ0MsR0FBTixDQUNyQix3RkFEcUIsRUFFckI7QUFDRUMsbUJBQU8sRUFBRTtBQUNQQyxrQkFBSSxFQUFFO0FBREM7QUFEWCxXQUZxQixDQUZHOztBQUFBO0FBQUE7QUFFbEJDLGNBRmtCLG9CQUVsQkEsSUFGa0I7QUFBQSwyQ0FXbkJBLElBWG1COztBQUFBO0FBQUE7QUFBQSxpQkFpQkhKLDRDQUFLLENBQUNDLEdBQU4sQ0FDckIsd0JBRHFCLENBakJHOztBQUFBO0FBQUE7QUFpQmxCRyxlQWpCa0IscUJBaUJsQkEsSUFqQmtCO0FBQUEsMkNBb0JuQkEsS0FwQm1COztBQUFBO0FBQUEsMkNBc0JyQixFQXRCcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBOUI7QUF5QmVULDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdlMTgyNzhlYjc4YzZmMTYwMjRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBjb25zdCBMYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuLy8gICAvLyAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuLy8gICAvLyAgIGF4aW9zLmdldChcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIik7XHJcbi8vICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG5cclxuLy8gICByZXR1cm4gPGgxPkxhbmRpbmcgUGFnZTwvaDE+O1xyXG4vLyB9O1xyXG5cclxuLy8gTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4vLyAgICAgICBcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIlxyXG4vLyAgICAgKTtcclxuLy8gICAgIHJldHVybiBkYXRhO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHt9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgLy8gYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XHJcblxyXG4gIHJldHVybiA8aDE+TGFuZGluZyBQYWdlPC9oMT47XHJcbn07XHJcblxyXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBcImh0dHA6Ly8gaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBIb3N0OiBcInRpY2tldGluZy5kZXZcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgLy8gd2UgYXJlIG9uIHRoZSBzZXJ2ZXIhXHJcbiAgICAvLyByZXF1ZXN0cyBzaG91bGQgYmUgbWFkZSB0byBodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54Li4ubGFrc2RqZmtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gd2UgYXJlIG9uIHRoZSBicm93c2VyIVxyXG4gICAgLy8gcmVxdWVzdHMgY2FuIGJlIG1hZGUgd2l0aCBhIGJhc2UgdXJsIG9mICcnXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgXCIvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=