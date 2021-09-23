exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Layout({
  children,
  home
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("title", {
        children: "Basic Full Stack App"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("header", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        children: "Student project by Joshua Paul Barnard for the Santa Rosa Junior College, Fall 2021."
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("main", {
      children: children
    }), !home && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "/",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        className: "btn btn-primary mt-3",
        children: "\u2190 Back to home "
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("footer", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
          href: "https://github.com/JoshuaPaulBarnard",
          children: "My Github"
        }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
          href: "https://www.JoshuaPaulBarnard.com",
          children: "My homepage (under construction)"
        })]
      })
    })]
  });
}

/***/ }),

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bk": () => (/* binding */ get_all_IDs),
/* harmony export */   "Ke": () => (/* binding */ get_sorted_list),
/* harmony export */   "AW": () => (/* binding */ get_data)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);

 //  Get the filepath to the data directory

const data_directory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data'); //  Function Name:   get_all_IDs
//  Inputs:   
//  Purpose:  Returns ids for all json objects in an array
//  Author:   Ethan Wilde, Santa Rosa Junior College.

function get_all_IDs() {
  // Get the filepath to json file
  const file_path = path__WEBPACK_IMPORTED_MODULE_1___default().join(data_directory, 'persons.json');
  const file_path_2 = path__WEBPACK_IMPORTED_MODULE_1___default().join(data_directory, 'people.json'); // Load the json file contents

  const json_string = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file_path, 'utf8');
  const json_string_2 = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file_path_2, 'utf8'); // Convert string from file into json array object

  const json_object = JSON.parse(json_string);
  const json_object_2 = JSON.parse(json_string_2); // Combine the two json objects

  const json_object_3 = json_object.concat(json_object_2); //  Use map() on array to extract just id properties into new array of object values

  return json_object_3.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    };
  });
} //  Function Name:  get_sorted_list
//  Inputs:  
//  Purpose:  Returns names and ids for all json objects in an array, sorted by the name property
//  Author:   Ethan Wilde, Santa Rosa Junior College.

function get_sorted_list() {
  // Get the filepath to json file
  const file_path = path__WEBPACK_IMPORTED_MODULE_1___default().join(data_directory, 'persons.json');
  const file_path_2 = path__WEBPACK_IMPORTED_MODULE_1___default().join(data_directory, 'people.json'); // Load the json file contents

  const json_string = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file_path, 'utf8');
  const json_string_2 = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file_path_2, 'utf8'); // Convert string from file into json array object

  const json_object = JSON.parse(json_string);
  const json_object_2 = JSON.parse(json_string_2); // Combine the two json objects

  const json_object_3 = json_object.concat(json_object_2); // Sort json array by name property

  json_object_3.sort(function (first_comparison, second_comparison) {
    return first_comparison.name.localeCompare(second_comparison.name);
  }); //  Use the map() on an array to extract just the id & name properties into a new array of object values.

  return json_object_3.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    };
  });
} //  Function Name:  get_Data
//  Inputs:  
//  Outputs:  
//  Purpose:  Receives the complete data for just one person.
//  Used by:  getStaticProps() in [id].js
//  Author:   Ethan Wilde, Santa Rosa Junior College.

async function get_data(ID_requested) {
  // Get the filepath to json file
  const file_path = path__WEBPACK_IMPORTED_MODULE_1___default().join(data_directory, 'persons.json');
  const file_path_2 = path__WEBPACK_IMPORTED_MODULE_1___default().join(data_directory, 'people.json'); // Load the json file contents

  const json_string = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file_path, 'utf8');
  const json_string_2 = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file_path_2, 'utf8'); // Convert string from file into json array object

  const json_object = JSON.parse(json_string);
  const json_object_2 = JSON.parse(json_string_2); // Combine the two json objects

  const json_object_3 = json_object.concat(json_object_2); //  Find the object value in an array that has the matching ID
  //  Returns an array with single element

  const object_match = json_object_3.filter(obj => {
    return obj.id.toString() === ID_requested;
  }); //  Extracts object value in a filtered array, if any

  let object_returned;

  if (object_match.length > 0) {
    object_returned = object_match[0];
  } else {
    object_returned = {};
  }

  return object_returned;
}

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;