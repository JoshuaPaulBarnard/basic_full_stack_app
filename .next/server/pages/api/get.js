"use strict";
(() => {
var exports = {};
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

 //  Use path to build a filepath to our data subdirectory

const data_directory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data"); //  UnComment when you need to check the value that was sent to console.log
// console.log(data_directory);

function handler(req, res) {
  const file_path = path__WEBPACK_IMPORTED_MODULE_1___default().join(data_directory, "persons.json");
  const json_data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file_path, "utf8");
  const json_object = JSON.parse(json_data);
  json_object.sort(function (first_comparison, second_comparison) {
    return first_comparison.name.localeCompare(second_comparison.name);
  });
  res.status(200).json(json_object);
}

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 622:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(473));
module.exports = __webpack_exports__;

})();