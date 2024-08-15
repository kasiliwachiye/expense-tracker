/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n/* harmony import */ var _user_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n/* harmony import */ var _auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* harmony import */ var _expense_NewExpense__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expense/NewExpense */ \"./client/expense/NewExpense.js\");\n/* harmony import */ var _expense_Expenses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./expense/Expenses */ \"./client/expense/Expenses.js\");\n/* harmony import */ var _report_Reports__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report/Reports */ \"./client/report/Reports.js\");\n// In MainRouter.js\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log(_core_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _user_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _user_Signup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _auth_Signin__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _user_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _core_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _expense_NewExpense__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _expense_Expenses__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _report_Reports__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\nconst MainRouter = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  exact: true,\n  path: \"/\",\n  component: _core_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/users\",\n  component: _user_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/signup\",\n  component: _user_Signup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/signin\",\n  component: _auth_Signin__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n  path: \"/user/edit/:userId\",\n  component: _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/user/:userId\",\n  component: _user_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n  path: \"/expenses/all\",\n  component: _expense_Expenses__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n  path: \"/expenses/new\",\n  component: _expense_NewExpense__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n  path: \"/expenses/reports\",\n  component: _report_Reports__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n})));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainRouter);\n\n//# sourceURL=webpack://expense-tracker/./client/MainRouter.js?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\n\n\n\nconst PrivateRoute = ({\n  component: Component,\n  ...rest\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, rest, {\n  render: props => _auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n    to: {\n      pathname: \"/signin\",\n      state: {\n        from: props.location\n      }\n    }\n  })\n}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);\n\n//# sourceURL=webpack://expense-tracker/./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Icon */ \"@mui/material/Icon\");\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst CardStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_8___default()((_mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default()))(({\n  theme\n}) => ({\n  maxWidth: 600,\n  margin: \"auto\",\n  textAlign: \"center\",\n  marginTop: theme.spacing(5),\n  paddingBottom: theme.spacing(2)\n}));\nconst ErrorIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_8___default()((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_7___default()))({\n  verticalAlign: \"middle\"\n});\nconst Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_8___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()))(({\n  theme\n}) => ({\n  marginTop: theme.spacing(2),\n  color: theme.palette.openTitle\n}));\nconst TextFieldStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_8___default()((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()))(({\n  theme\n}) => ({\n  marginLeft: theme.spacing(1),\n  marginRight: theme.spacing(1),\n  width: 300\n}));\nconst SubmitButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_8___default()((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()))(({\n  theme\n}) => ({\n  margin: \"auto\",\n  marginBottom: theme.spacing(2)\n}));\nfunction Signin(props) {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: \"\",\n    password: \"\",\n    error: \"\",\n    redirectToReferrer: false\n  });\n  const clickSubmit = () => {\n    const user = {\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_api_auth_js__WEBPACK_IMPORTED_MODULE_11__.signin)(user).then(data => {\n      if (data.error) {\n        setValues({\n          ...values,\n          error: data.error\n        });\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].authenticate(data, () => {\n          setValues({\n            ...values,\n            error: \"\",\n            redirectToReferrer: true\n          });\n        });\n      }\n    });\n  };\n  const handleChange = name => event => {\n    setValues({\n      ...values,\n      [name]: event.target.value\n    });\n  };\n  const {\n    from\n  } = props.location.state || {\n    from: {\n      pathname: \"/\"\n    }\n  };\n  const {\n    redirectToReferrer\n  } = values;\n  if (redirectToReferrer) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Redirect, {\n      to: from\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {\n    variant: \"h6\"\n  }, \"Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextFieldStyled, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    value: values.email,\n    onChange: handleChange(\"email\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextFieldStyled, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    value: values.password,\n    onChange: handleChange(\"password\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorIcon, {\n    color: \"error\"\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubmitButton, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit\n  }, \"Submit\")));\n}\n\n//# sourceURL=webpack://expense-tracker/./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signin: () => (/* binding */ signin),\n/* harmony export */   signout: () => (/* binding */ signout)\n/* harmony export */ });\nconst signin = async user => {\n  try {\n    let response = await fetch('/auth/signin/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      credentials: 'include',\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst signout = async () => {\n  try {\n    let response = await fetch('/auth/signout/', {\n      method: 'GET'\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n//# sourceURL=webpack://expense-tracker/./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\nconst auth = {\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n  clearJWT(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb();\n    //optional\n    (0,_api_auth_js__WEBPACK_IMPORTED_MODULE_0__.signout)().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n\n//# sourceURL=webpack://expense-tracker/./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardMedia */ \"@mui/material/CardMedia\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_money_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../assets/images/money.jpg */ \"./client/assets/images/money.jpg\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _expense_ExpenseOverview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../expense/ExpenseOverview */ \"./client/expense/ExpenseOverview.js\");\n\n\n\n\n\n\n\n\n\n\nconst CardStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()))(({\n  theme\n}) => ({\n  maxWidth: 800,\n  margin: \"auto\",\n  marginTop: theme.spacing(5),\n  marginBottom: theme.spacing(5)\n}));\nconst Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()))(({\n  theme\n}) => ({\n  padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n  color: theme.palette.openTitle\n}));\nconst Media = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default()))({\n  minHeight: 440\n});\nconst Credit = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(\"div\")({\n  padding: 10,\n  textAlign: \"right\",\n  backgroundColor: \"#ededed\",\n  borderBottom: \"1px solid #d0d0d0\",\n  \"& a\": {\n    color: \"#4f83cc\"\n  }\n});\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_expense_ExpenseOverview__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && typeof window !== \"undefined\" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {\n    variant: \"h6\",\n    style: {\n      fontSize: \"1em\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"em\", null, \"Never spend your money before you have it.\"), \" -Thomas Jefferson\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Media, {\n    image: _assets_images_money_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: \"Money\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: \"body1\",\n    component: \"p\"\n  }, \"Welcome to the Pochi, your reliable expense tracker.\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n    to: \"/signup\"\n  }, \"Sign up\"), \" or\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n    to: \"/signin\"\n  }, \"sign in\"), \" to get started.\"))));\n}\n\n//# sourceURL=webpack://expense-tracker/./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material//Home */ \"@mui/icons-material//Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_AddBoxRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material//AddBoxRounded */ \"@mui/icons-material//AddBoxRounded\");\n/* harmony import */ var _mui_icons_material_AddBoxRounded__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddBoxRounded__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst isActive = (location, path) => {\n  if (location.pathname === path) return {\n    color: \"#69f0ae\"\n  };else return {\n    color: \"#ffffff\"\n  };\n};\nconst isButtonActive = (location, path) => {\n  if (location.pathname.includes(path)) return {\n    color: \"#fffde7\",\n    backgroundColor: \"#2bbd7e\",\n    marginRight: 10\n  };else return {\n    color: \"#2bbd7e\",\n    backgroundColor: \"#ffffff\",\n    border: \"1px solid #2bbd7e\",\n    marginRight: 10\n  };\n};\nfunction Menu() {\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {\n    position: \"static\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n    variant: \"h6\",\n    color: \"inherit\"\n  }, \"Pochi\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    \"aria-label\": \"Home\",\n    style: isActive(location, \"/\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default()), null))), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: \"/expenses/all\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n    style: isActive(location, \"/expenses/all\")\n  }, \"Expenses\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: \"/expenses/reports\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n    style: isActive(location, \"/expenses/reports\")\n  }, \"Reports\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: \"absolute\",\n      right: \"10px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      float: \"right\"\n    }\n  }, !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: \"/signup\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n    style: isActive(location, \"/signup\")\n  }, \"Sign up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n    style: isActive(location, \"/signin\")\n  }, \"Sign In\"))), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: \"/expenses/new\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n    style: isButtonActive(location, \"/expenses/new\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_AddBoxRounded__WEBPACK_IMPORTED_MODULE_6___default()), {\n    style: {\n      marginRight: 4\n    }\n  }), \" Add Expense\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated().user._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n    style: isActive(location, \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isAuthenticated().user._id)\n  }, \"My Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {\n    color: \"inherit\",\n    onClick: () => {\n      _auth_auth_helper__WEBPACK_IMPORTED_MODULE_8__[\"default\"].clearJWT(() => navigate(\"/\"));\n    }\n  }, \"Sign out\"))))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://expense-tracker/./client/core/Menu.js?");

/***/ }),

/***/ "./client/expense/DeleteExpense.js":
/*!*****************************************!*\
  !*** ./client/expense/DeleteExpense.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material//Delete */ \"@mui/icons-material//Delete\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Dialog */ \"@mui/material/Dialog\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogActions */ \"@mui/material/DialogActions\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogContent */ \"@mui/material/DialogContent\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogContentText */ \"@mui/material/DialogContentText\");\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"@mui/material/DialogTitle\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_expense_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-expense.js */ \"./client/expense/api-expense.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction DeleteExpense({\n  expense,\n  onRemove\n}) {\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__[\"default\"].isAuthenticated();\n  const clickButton = () => {\n    setOpen(true);\n  };\n  const deleteExpense = () => {\n    (0,_api_expense_js__WEBPACK_IMPORTED_MODULE_11__.remove)({\n      expenseId: expense._id\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data.error) {\n        console.log(data.error);\n      } else {\n        setOpen(false);\n        onRemove(expense);\n      }\n    });\n  };\n  const handleRequestClose = () => {\n    setOpen(false);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default()), {\n    \"aria-label\": \"Delete\",\n    onClick: clickButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5___default()), {\n    open: open,\n    onClose: handleRequestClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default()), null, \"Delete \" + expense.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default()), null, \"Confirm to delete your expense record \", expense.title, \".\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_6___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n    onClick: handleRequestClose,\n    color: \"primary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n    onClick: deleteExpense,\n    color: \"secondary\",\n    autoFocus: \"autoFocus\"\n  }, \"Confirm\"))));\n}\nDeleteExpense.propTypes = {\n  expense: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,\n  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteExpense);\n\n//# sourceURL=webpack://expense-tracker/./client/expense/DeleteExpense.js?");

/***/ }),

/***/ "./client/expense/ExpenseOverview.js":
/*!*******************************************!*\
  !*** ./client/expense/ExpenseOverview.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ExpenseOverview)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Divider */ \"@mui/material/Divider\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _expense_api_expense_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../expense/api-expense.js */ \"./client/expense/api-expense.js\");\n\n\n\n\n\n\n\n\nconst StyledCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()))(({\n  theme\n}) => ({\n  maxWidth: 800,\n  margin: \"auto\",\n  marginTop: theme.spacing(5),\n  marginBottom: theme.spacing(5)\n}));\nconst Title2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({\n  padding: `32px ${theme.spacing(2.5)}px 2px`,\n  color: \"#2bbd7e\",\n  textAlign: \"center\"\n}));\nconst TotalSpent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({\n  padding: \"50px 40px\",\n  fontSize: \"4em\",\n  margin: 20,\n  marginBottom: 30,\n  backgroundColor: \"#769FCD\",\n  color: \"#F7FBFC\",\n  textAlign: \"center\",\n  borderRadius: \"50%\",\n  border: \"10px double #F7FBFC\",\n  fontWeight: 300\n}));\nconst CategorySection = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(\"div\")(({\n  theme\n}) => ({\n  padding: 25,\n  paddingTop: 16,\n  margin: \"auto\"\n}));\nconst CatDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default()))(({\n  theme\n}) => ({\n  height: \"4px\",\n  margin: \"0\",\n  marginBottom: 8\n}));\nconst Val = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({\n  width: 200,\n  display: \"inline-table\",\n  textAlign: \"center\",\n  margin: 2\n}));\nconst CatTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({\n  display: \"inline-block\",\n  padding: 10,\n  backgroundColor: \"#f4f6f9\"\n}));\nconst CatHeading = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({\n  color: \"#6b6b6b\",\n  fontSize: \"1.15em\",\n  backgroundColor: \"#f7f7f7\",\n  padding: \"4px 0\"\n}));\nconst Spent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({\n  margin: \"16px 10px 10px 0\",\n  padding: \"10px 30px\",\n  border: \"4px solid #58bd7f38\",\n  borderRadius: \"0.5em\"\n}));\nconst Day = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()))(({\n  theme\n}) => ({\n  fontSize: \"0.9em\",\n  fontStyle: \"italic\",\n  color: \"#696969\"\n}));\nfunction ExpenseOverview() {\n  const [expensePreview, setExpensePreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    month: 0,\n    today: 0,\n    yesterday: 0\n  });\n  const [expenseCategories, setExpenseCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].isAuthenticated();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_expense_api_expense_js__WEBPACK_IMPORTED_MODULE_7__.currentMonthPreview)({\n      t: jwt.token\n    }, signal).then(data => {\n      if (data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setExpensePreview(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_expense_api_expense_js__WEBPACK_IMPORTED_MODULE_7__.expenseByCategory)({\n      t: jwt.token\n    }, signal).then(data => {\n      if (data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setExpenseCategories(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  const indicateExpense = values => {\n    let color = \"#4f83cc\";\n    if (values.total) {\n      const diff = values.total - values.average;\n      if (diff > 0) {\n        color = \"#e9858b\";\n      }\n      if (diff < 0) {\n        color = \"#2bbd7e\";\n      }\n    }\n    return color;\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title2, {\n    variant: \"h4\",\n    color: \"textPrimary\"\n  }, \"You've spent\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TotalSpent, {\n    component: \"span\"\n  }, \"$\", expensePreview.month ? expensePreview.month.totalSpent : \"0\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      display: \"block\",\n      fontSize: \"0.3em\"\n    }\n  }, \"so far this month\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      margin: \"20px 20px 20px 30px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Spent, {\n    variant: \"h5\",\n    color: \"primary\"\n  }, \"$\", expensePreview.today ? expensePreview.today.totalSpent : \"0\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Day, {\n    component: \"span\"\n  }, \"today\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Spent, {\n    variant: \"h5\",\n    color: \"primary\"\n  }, \"$\", expensePreview.yesterday ? expensePreview.yesterday.totalSpent : \"0\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Day, {\n    component: \"span\"\n  }, \"yesterday \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n    to: \"/expenses/all\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n    variant: \"h6\"\n  }, \"See more\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CategorySection, null, expenseCategories.map((expense, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      style: {\n        display: \"grid\",\n        justifyContent: \"center\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CatTitle, {\n      variant: \"h5\"\n    }, expense._id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CatDiv, {\n      style: {\n        backgroundColor: indicateExpense(expense.mergedValues)\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CatHeading, {\n      component: \"span\",\n      className: Val\n    }, \"past average\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CatHeading, {\n      component: \"span\",\n      className: Val\n    }, \"this month\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CatHeading, {\n      component: \"span\",\n      className: Val\n    }, expense.mergedValues.total && expense.mergedValues.total - expense.mergedValues.average > 0 ? \"spent extra\" : \"saved\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        marginBottom: 3\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Val, {\n      component: \"span\",\n      style: {\n        color: \"#595555\",\n        fontSize: \"1.15em\"\n      }\n    }, \"$\", expense.mergedValues.average), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Val, {\n      component: \"span\",\n      style: {\n        color: \"#002f6c\",\n        fontSize: \"1.6em\",\n        backgroundColor: \"#eafff5\",\n        padding: \"8px 0\"\n      }\n    }, \"$\", expense.mergedValues.total ? expense.mergedValues.total : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Val, {\n      component: \"span\",\n      style: {\n        color: \"#484646\",\n        fontSize: \"1.25em\"\n      }\n    }, \"$\", expense.mergedValues.total ? Math.abs(expense.mergedValues.total - expense.mergedValues.average) : expense.mergedValues.average)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default()), {\n      style: {\n        marginBottom: 10\n      }\n    }));\n  })));\n}\n\n//# sourceURL=webpack://expense-tracker/./client/expense/ExpenseOverview.js?");

/***/ }),

/***/ "./client/expense/Expenses.js":
/*!************************************!*\
  !*** ./client/expense/Expenses.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Accordion */ \"@mui/material/Accordion\");\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AccordionSummary */ \"@mui/material/AccordionSummary\");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AccordionDetails */ \"@mui/material/AccordionDetails\");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Divider */ \"@mui/material/Divider\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"@mui/icons-material/Edit\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Icon */ \"@mui/material/Icon\");\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_expense_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api-expense.js */ \"./client/expense/api-expense.js\");\n/* harmony import */ var _DeleteExpense__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DeleteExpense */ \"./client/expense/DeleteExpense.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @date-io/date-fns */ \"@date-io/date-fns\");\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/lab */ \"@mui/lab\");\n/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst RootContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(\"div\")({\n  width: \"90%\",\n  maxWidth: \"800px\",\n  margin: \"auto\",\n  marginTop: 40,\n  marginBottom: 40\n});\nconst Heading = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()))({\n  fontSize: \"1.5em\",\n  fontWeight: 400,\n  marginTop: 12,\n  marginBottom: 4\n});\nconst ErrorIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_10___default()))({\n  verticalAlign: \"middle\"\n});\nconst NotesText = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()))({\n  color: \"grey\"\n});\nconst StyledAccordion = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2___default()))({\n  border: \"1px solid #58bd7f\",\n  margin: 6\n});\nconst InfoContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(\"div\")({\n  marginRight: 32,\n  width: 90\n});\nconst AmountText = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()))({\n  fontSize: \"2em\",\n  color: \"#2bbd7e\"\n});\nconst SearchContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(\"div\")({\n  display: \"flex\",\n  justifyContent: \"flex-end\",\n  alignItems: \"center\"\n});\nconst StyledTextField = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()))({\n  margin: \"8px 16px\",\n  width: 240\n});\nconst ButtonsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(\"div\")({\n  textAlign: \"right\"\n});\nconst DateText = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()))({\n  fontSize: \"1.1em\",\n  color: \"#8b8b8b\",\n  marginTop: 4\n});\nfunction Expenses() {\n  const [redirectToSignin, setRedirectToSignin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [expenses, setExpenses] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_11__[\"default\"].isAuthenticated();\n  const date = new Date(),\n    y = date.getFullYear(),\n    m = date.getMonth();\n  const [firstDay, setFirstDay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(y, m, 1));\n  const [lastDay, setLastDay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(y, m + 1, 0));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_api_expense_js__WEBPACK_IMPORTED_MODULE_12__.listByUser)({\n      firstDay: firstDay,\n      lastDay: lastDay\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setExpenses(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  const handleSearchFieldChange = name => date => {\n    if (name === \"firstDay\") {\n      setFirstDay(date);\n    } else {\n      setLastDay(date);\n    }\n  };\n  const searchClicked = () => {\n    (0,_api_expense_js__WEBPACK_IMPORTED_MODULE_12__.listByUser)({\n      firstDay: firstDay,\n      lastDay: lastDay\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setExpenses(data);\n      }\n    });\n  };\n  const handleChange = (name, index) => event => {\n    const updatedExpenses = [...expenses];\n    updatedExpenses[index][name] = event.target.value;\n    setExpenses(updatedExpenses);\n  };\n  const handleDateChange = index => date => {\n    const updatedExpenses = [...expenses];\n    updatedExpenses[index].incurred_on = date;\n    setExpenses(updatedExpenses);\n  };\n  const clickUpdate = index => {\n    let expense = expenses[index];\n    (0,_api_expense_js__WEBPACK_IMPORTED_MODULE_12__.update)({\n      expenseId: expense._id\n    }, {\n      t: jwt.token\n    }, expense).then(data => {\n      if (data.error) {\n        setError(data.error);\n      } else {\n        setSaved(true);\n        setTimeout(() => {\n          setSaved(false);\n        }, 3000);\n      }\n    });\n  };\n  const removeExpense = expense => {\n    const updatedExpenses = [...expenses];\n    const index = updatedExpenses.indexOf(expense);\n    updatedExpenses.splice(index, 1);\n    setExpenses(updatedExpenses);\n  };\n  if (redirectToSignin) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Redirect, {\n      to: \"/signin\"\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RootContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_16__.MuiPickersUtilsProvider, {\n    utils: (_date_io_date_fns__WEBPACK_IMPORTED_MODULE_15___default())\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_16__.DatePicker, {\n    disableFuture: true,\n    format: \"dd/MM/yyyy\",\n    label: \"SHOWING RECORDS FROM\",\n    views: [\"year\", \"month\", \"date\"],\n    value: firstDay,\n    onChange: handleSearchFieldChange(\"firstDay\"),\n    className: StyledTextField\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_16__.DatePicker, {\n    format: \"dd/MM/yyyy\",\n    label: \"TO\",\n    views: [\"year\", \"month\", \"date\"],\n    value: lastDay,\n    onChange: handleSearchFieldChange(\"lastDay\"),\n    className: StyledTextField\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {\n    variant: \"contained\",\n    color: \"secondary\",\n    onClick: searchClicked\n  }, \"GO\")), expenses.map((expense, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    key: index\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledAccordion, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3___default()), {\n    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9___default()), null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AmountText, null, \"$ \", expense.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default()), {\n    style: {\n      marginTop: 4,\n      marginBottom: 4\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), null, expense.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DateText, null, new Date(expense.incurred_on).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading, null, expense.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NotesText, null, expense.notes))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_4___default()), {\n    style: {\n      display: \"block\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    label: \"Title\",\n    value: expense.title,\n    onChange: handleChange(\"title\", index),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    label: \"Amount ($)\",\n    value: expense.amount,\n    onChange: handleChange(\"amount\", index),\n    margin: \"normal\",\n    type: \"number\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_16__.MuiPickersUtilsProvider, {\n    utils: (_date_io_date_fns__WEBPACK_IMPORTED_MODULE_15___default())\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_16__.DateTimePicker, {\n    label: \"Incurred on\",\n    views: [\"year\", \"month\", \"date\"],\n    value: expense.incurred_on,\n    onChange: handleDateChange(index),\n    showTodayButton: true,\n    className: StyledTextField\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    label: \"Category\",\n    value: expense.category,\n    onChange: handleChange(\"category\", index),\n    margin: \"normal\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    label: \"Notes\",\n    multiline: true,\n    rows: \"2\",\n    value: expense.notes,\n    onChange: handleChange(\"notes\", index),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ButtonsContainer, null, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorIcon, {\n    color: \"error\"\n  }, \"error\"), error), saved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    component: \"span\",\n    color: \"secondary\",\n    className: classes.status\n  }, \"Saved\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: () => clickUpdate(index)\n  }, \"Update\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DeleteExpense__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    expense: expense,\n    onRemove: removeExpense\n  })))))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Expenses);\n\n//# sourceURL=webpack://expense-tracker/./client/expense/Expenses.js?");

/***/ }),

/***/ "./client/expense/NewExpense.js":
/*!**************************************!*\
  !*** ./client/expense/NewExpense.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Icon */ \"@mui/material/Icon\");\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _api_expense_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-expense.js */ \"./client/expense/api-expense.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @date-io/date-fns */ \"@date-io/date-fns\");\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/lab */ \"@mui/lab\");\n/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst StyledCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()))({\n  maxWidth: 600,\n  margin: \"auto\",\n  textAlign: \"center\",\n  marginTop: 32,\n  paddingBottom: 16\n});\nconst StyledTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()))({\n  marginTop: 16,\n  color: \"#3f51b5\",\n  // Replaces theme.palette.openTitle\n  fontSize: \"1em\"\n});\nconst StyledTextField = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()))({\n  marginLeft: 8,\n  marginRight: 8,\n  width: 300\n});\nconst SubmitButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()))({\n  margin: \"auto\",\n  marginBottom: 16\n});\nconst ErrorIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_9___default()))({\n  verticalAlign: \"middle\"\n});\nfunction NewExpense() {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    title: \"\",\n    category: \"\",\n    amount: \"\",\n    incurred_on: new Date(),\n    notes: \"\",\n    error: \"\"\n  });\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].isAuthenticated();\n  const handleChange = name => event => {\n    setValues({\n      ...values,\n      [name]: event.target.value\n    });\n  };\n  const handleDateChange = date => {\n    setValues({\n      ...values,\n      incurred_on: date\n    });\n  };\n  const clickSubmit = () => {\n    const expense = {\n      title: values.title || undefined,\n      category: values.category || undefined,\n      amount: values.amount || undefined,\n      incurred_on: values.incurred_on || undefined,\n      notes: values.notes || undefined\n    };\n    (0,_api_expense_js__WEBPACK_IMPORTED_MODULE_10__.create)({\n      t: jwt.token\n    }, expense).then(data => {\n      if (data.error) {\n        setValues({\n          ...values,\n          error: data.error\n        });\n      } else {\n        setValues({\n          ...values,\n          error: \"\",\n          redirect: true\n        });\n      }\n    });\n  };\n  if (values.redirect) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Redirect, {\n      to: \"/\"\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTitle, {\n    variant: \"h6\",\n    component: \"h2\"\n  }, \"Expense Record\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"title\",\n    label: \"Title\",\n    value: values.title,\n    onChange: handleChange(\"title\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"amount\",\n    label: \"Amount ($)\",\n    value: values.amount,\n    onChange: handleChange(\"amount\"),\n    margin: \"normal\",\n    type: \"number\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"category\",\n    label: \"Category\",\n    value: values.category,\n    onChange: handleChange(\"category\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_13__.MuiPickersUtilsProvider, {\n    utils: (_date_io_date_fns__WEBPACK_IMPORTED_MODULE_12___default())\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_13__.DateTimePicker, {\n    label: \"Incurred on\",\n    views: [\"year\", \"month\", \"date\"],\n    value: values.incurred_on,\n    onChange: handleDateChange,\n    showTodayButton: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"multiline-flexible\",\n    label: \"Notes\",\n    multiline: true,\n    rows: \"2\",\n    value: values.notes,\n    onChange: handleChange(\"notes\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorIcon, {\n    color: \"error\"\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubmitButton, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit\n  }, \"Submit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {\n    to: \"/myauctions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: \"contained\"\n  }, \"Cancel\")))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewExpense);\n\n//# sourceURL=webpack://expense-tracker/./client/expense/NewExpense.js?");

/***/ }),

/***/ "./client/expense/api-expense.js":
/*!***************************************!*\
  !*** ./client/expense/api-expense.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   averageCategories: () => (/* binding */ averageCategories),\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   currentMonthPreview: () => (/* binding */ currentMonthPreview),\n/* harmony export */   expenseByCategory: () => (/* binding */ expenseByCategory),\n/* harmony export */   listByUser: () => (/* binding */ listByUser),\n/* harmony export */   plotExpenses: () => (/* binding */ plotExpenses),\n/* harmony export */   read: () => (/* binding */ read),\n/* harmony export */   remove: () => (/* binding */ remove),\n/* harmony export */   update: () => (/* binding */ update),\n/* harmony export */   yearlyExpenses: () => (/* binding */ yearlyExpenses)\n/* harmony export */ });\nconst create = async (credentials, expense) => {\n  try {\n    let response = await fetch(\"/api/expenses/\", {\n      method: \"POST\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      },\n      body: JSON.stringify(expense)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst listByUser = async (params, credentials, signal) => {\n  const queryString = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! query-string */ \"query-string\", 23));\n  const query = queryString.default.stringify(params);\n  try {\n    let response = await fetch(\"/api/expenses?\" + query, {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst currentMonthPreview = async (credentials, signal) => {\n  try {\n    let response = await fetch(\"/api/expenses/current/preview\", {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst expenseByCategory = async (credentials, signal) => {\n  try {\n    let response = await fetch(\"/api/expenses/by/category\", {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst averageCategories = async (params, credentials, signal) => {\n  const queryString = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! query-string */ \"query-string\", 23));\n  const query = queryString.default.stringify(params);\n  try {\n    let response = await fetch(\"/api/expenses/category/averages?\" + query, {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst yearlyExpenses = async (params, credentials, signal) => {\n  const queryString = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! query-string */ \"query-string\", 23));\n  const query = queryString.default.stringify(params);\n  try {\n    let response = await fetch(\"/api/expenses/yearly?\" + query, {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst plotExpenses = async (params, credentials, signal) => {\n  const queryString = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! query-string */ \"query-string\", 23));\n  const query = queryString.default.stringify(params);\n  try {\n    let response = await fetch(\"/api/expenses/plot?\" + query, {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst read = async (params, signal) => {\n  try {\n    let response = await fetch(\"/api/auction/\" + params.auctionId, {\n      method: \"GET\",\n      signal: signal\n    });\n    return response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst update = async (params, credentials, expense) => {\n  try {\n    let response = await fetch(\"/api/expenses/\" + params.expenseId, {\n      method: \"PUT\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      },\n      body: JSON.stringify(expense)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst remove = async (params, credentials) => {\n  try {\n    let response = await fetch(\"/api/expenses/\" + params.expenseId, {\n      method: \"DELETE\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n//# sourceURL=webpack://expense-tracker/./client/expense/api-expense.js?");

/***/ }),

/***/ "./client/report/Reports.js":
/*!**********************************!*\
  !*** ./client/report/Reports.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @date-io/date-fns */ \"@date-io/date-fns\");\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/lab */ \"@mui/lab\");\n/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _expense_api_expense_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../expense/api-expense.js */ \"./client/expense/api-expense.js\");\n/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! victory */ \"victory\");\n/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst TitleTypography = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()))(({\n  theme\n}) => ({\n  padding: `16px ${theme.spacing(2.5)}px 2px`,\n  color: \"#2bbd7e\",\n  display: \"inline\"\n}));\nconst SearchContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(\"div\")({\n  display: \"flex\",\n  alignItems: \"center\"\n});\nconst StyledTextField = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_mui_lab__WEBPACK_IMPORTED_MODULE_6__.DatePicker)(({\n  theme\n}) => ({\n  margin: \"8px 16px\",\n  width: 240\n}));\nfunction Reports() {\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [expenses, setExpenses] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated();\n  const date = new Date(),\n    y = date.getFullYear(),\n    m = date.getMonth();\n  const [firstDay, setFirstDay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(y, m, 1));\n  const [lastDay, setLastDay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(y, m + 1, 0));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_expense_api_expense_js__WEBPACK_IMPORTED_MODULE_7__.averageCategories)({\n      firstDay: firstDay,\n      lastDay: lastDay\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data.error) {\n        setError(data.error);\n      } else {\n        setExpenses(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  const handleDateChange = name => date => {\n    if (name === \"firstDay\") {\n      setFirstDay(date);\n    } else {\n      setLastDay(date);\n    }\n  };\n  const searchClicked = () => {\n    (0,_expense_api_expense_js__WEBPACK_IMPORTED_MODULE_7__.averageCategories)({\n      firstDay: firstDay,\n      lastDay: lastDay\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data.error) {\n        setError(data.error);\n      } else {\n        setExpenses(data);\n      }\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TitleTypography, {\n    variant: \"h6\"\n  }, \"Expenditures per category\", \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_6__.MuiPickersUtilsProvider, {\n    utils: (_date_io_date_fns__WEBPACK_IMPORTED_MODULE_5___default())\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    disableFuture: true,\n    format: \"dd/MM/yyyy\",\n    label: \"FROM\",\n    views: [\"year\", \"month\", \"date\"],\n    value: firstDay,\n    onChange: handleDateChange(\"firstDay\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    format: \"dd/MM/yyyy\",\n    label: \"TO\",\n    views: [\"year\", \"month\", \"date\"],\n    value: lastDay,\n    onChange: handleDateChange(\"lastDay\")\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n    variant: \"contained\",\n    color: \"secondary\",\n    onClick: searchClicked\n  }, \"GO\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: 550,\n      margin: \"auto\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    viewBox: \"0 0 320 320\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(victory__WEBPACK_IMPORTED_MODULE_8__.VictoryPie, {\n    standalone: false,\n    data: expenses.monthAVG,\n    innerRadius: 50,\n    theme: victory__WEBPACK_IMPORTED_MODULE_8__.VictoryTheme.material,\n    labelRadius: ({\n      innerRadius\n    }) => innerRadius + 14,\n    labelComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(victory__WEBPACK_IMPORTED_MODULE_8__.VictoryLabel, {\n      angle: 0,\n      style: [{\n        fontSize: \"11px\",\n        fill: \"#0f0f0f\"\n      }, {\n        fontSize: \"10px\",\n        fill: \"#013157\"\n      }],\n      text: ({\n        datum\n      }) => `${datum.x}\\n $${datum.y}`\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(victory__WEBPACK_IMPORTED_MODULE_8__.VictoryLabel, {\n    textAnchor: \"middle\",\n    style: {\n      fontSize: 14,\n      fill: \"#8b8b8b\"\n    },\n    x: 175,\n    y: 170,\n    text: `Spent \\nper category`\n  }))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reports);\n\n//# sourceURL=webpack://expense-tracker/./client/report/Reports.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  palette: {\n    primary: {\n      light: \"#DBE2EF\",\n      main: \"#3F72AF\",\n      dark: \"#364F6B\",\n      contrastText: \"#fff\"\n    },\n    secondary: {\n      light: \"#EFBBCF\",\n      main: \"#C3AED6\",\n      dark: \"#8675A9\",\n      contrastText: \"#000\"\n    },\n    openTitle: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.blue[\"700\"],\n    protectedTitle: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.cyan[\"700\"],\n    type: \"light\"\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n//# sourceURL=webpack://expense-tracker/./client/theme.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material//Delete */ \"@mui/icons-material//Delete\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Dialog */ \"@mui/material/Dialog\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogActions */ \"@mui/material/DialogActions\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogContent */ \"@mui/material/DialogContent\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogContentText */ \"@mui/material/DialogContentText\");\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"@mui/material/DialogTitle\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction DeleteUser({\n  userId\n}) {\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__[\"default\"].isAuthenticated();\n  const clickButton = () => {\n    setOpen(true);\n  };\n  const deleteAccount = () => {\n    (0,_api_user_js__WEBPACK_IMPORTED_MODULE_11__.remove)({\n      userId: userId\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__[\"default\"].clearJWT(() => console.log(\"deleted\"));\n        setRedirect(true);\n      }\n    });\n  };\n  const handleRequestClose = () => {\n    setOpen(false);\n  };\n  if (redirect) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Redirect, {\n      to: \"/\"\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default()), {\n    \"aria-label\": \"Delete\",\n    onClick: clickButton,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5___default()), {\n    open: open,\n    onClose: handleRequestClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default()), null, \"Delete Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default()), null, \"Confirm to delete your account.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_6___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n    onClick: handleRequestClose,\n    color: \"primary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n    onClick: deleteAccount,\n    color: \"secondary\",\n    autoFocus: \"autoFocus\"\n  }, \"Confirm\"))));\n}\nDeleteUser.propTypes = {\n  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteUser);\n\n//# sourceURL=webpack://expense-tracker/./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Icon */ \"@mui/material/Icon\");\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst StyledCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()))({\n  maxWidth: 600,\n  margin: \"auto\",\n  textAlign: \"center\",\n  marginTop: 32,\n  paddingBottom: 16\n});\nconst StyledTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()))({\n  margin: 16,\n  color: \"#3f51b5\" // Replaces theme.palette.protectedTitle\n});\nconst StyledTextField = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()))({\n  marginLeft: 8,\n  marginRight: 8,\n  width: 300\n});\nconst SubmitButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()))({\n  margin: \"auto\",\n  marginBottom: 16\n});\nfunction EditProfile({\n  match\n}) {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: \"\",\n    password: \"\",\n    email: \"\",\n    open: false,\n    error: \"\",\n    redirectToProfile: false\n  });\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isAuthenticated();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_api_user_js__WEBPACK_IMPORTED_MODULE_10__.read)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setValues({\n          ...values,\n          error: data.error\n        });\n      } else {\n        setValues({\n          ...values,\n          name: data.name,\n          email: data.email\n        });\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [match.params.userId]);\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_api_user_js__WEBPACK_IMPORTED_MODULE_10__.update)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, user).then(data => {\n      if (data && data.error) {\n        setValues({\n          ...values,\n          error: data.error\n        });\n      } else {\n        setValues({\n          ...values,\n          userId: data._id,\n          redirectToProfile: true\n        });\n      }\n    });\n  };\n  const handleChange = name => event => {\n    setValues({\n      ...values,\n      [name]: event.target.value\n    });\n  };\n  if (values.redirectToProfile) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Redirect, {\n      to: \"/user/\" + values.userId\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTitle, {\n    variant: \"h6\"\n  }, \"Edit Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"name\",\n    label: \"Name\",\n    value: values.name,\n    onChange: handleChange(\"name\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    value: values.email,\n    onChange: handleChange(\"email\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    value: values.password,\n    onChange: handleChange(\"password\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_8___default()), {\n    color: \"error\",\n    style: {\n      verticalAlign: \"middle\"\n    }\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubmitButton, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit\n  }, \"Submit\")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfile);\n\n//# sourceURL=webpack://expense-tracker/./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"@mui/material/List\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"@mui/material/ListItem\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"@mui/material/ListItemAvatar\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemSecondaryAction */ \"@mui/material/ListItemSecondaryAction\");\n/* harmony import */ var _mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemText */ \"@mui/material/ListItemText\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"@mui/icons-material/Edit\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Person */ \"@mui/icons-material/Person\");\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Divider */ \"@mui/material/Divider\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst StyledPaper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()))(({\n  theme\n}) => ({\n  maxWidth: 600,\n  margin: \"auto\",\n  padding: theme.spacing(3),\n  marginTop: theme.spacing(5)\n}));\nconst TitleTypography = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()))(({\n  theme\n}) => ({\n  marginTop: theme.spacing(3),\n  color: theme.palette.protectedTitle\n}));\nfunction Profile({\n  match\n}) {\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [redirectToSignin, setRedirectToSignin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_api_user_js__WEBPACK_IMPORTED_MODULE_16__.read)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setUser(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [match.params.userId]);\n  if (redirectToSignin) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Redirect, {\n      to: \"/signin\"\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledPaper, {\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TitleTypography, {\n    variant: \"h6\"\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_List__WEBPACK_IMPORTED_MODULE_3___default()), {\n    dense: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default()), {\n    primary: user.name,\n    secondary: user.email\n  }), \" \", _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated().user._id === user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {\n    to: `/user/edit/${user._id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {\n    \"aria-label\": \"Edit\",\n    color: \"primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_11___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DeleteUser__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    userId: user._id\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_13___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default()), {\n    primary: \"Joined: \" + new Date(user.created).toDateString()\n  }))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n//# sourceURL=webpack://expense-tracker/./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Icon */ \"@mui/material/Icon\");\n/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Dialog */ \"@mui/material/Dialog\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/DialogActions */ \"@mui/material/DialogActions\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/DialogContent */ \"@mui/material/DialogContent\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/DialogContentText */ \"@mui/material/DialogContentText\");\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"@mui/material/DialogTitle\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst StyledCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()))(({\n  theme\n}) => ({\n  maxWidth: 600,\n  margin: \"auto\",\n  textAlign: \"center\",\n  marginTop: theme.spacing(5),\n  paddingBottom: theme.spacing(2)\n}));\nconst ErrorIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_8___default()))(({\n  theme\n}) => ({\n  verticalAlign: \"middle\"\n}));\nconst TitleTypography = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()))(({\n  theme\n}) => ({\n  marginTop: theme.spacing(2),\n  color: theme.palette.openTitle\n}));\nconst StyledTextField = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()))(({\n  theme\n}) => ({\n  marginLeft: theme.spacing(1),\n  marginRight: theme.spacing(1),\n  width: 300\n}));\nconst SubmitButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()))(({\n  theme\n}) => ({\n  margin: \"auto\",\n  marginBottom: theme.spacing(2)\n}));\nfunction Signup() {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: \"\",\n    password: \"\",\n    email: \"\",\n    open: false,\n    error: \"\"\n  });\n  const handleChange = name => event => {\n    setValues({\n      ...values,\n      [name]: event.target.value\n    });\n  };\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_api_user_js__WEBPACK_IMPORTED_MODULE_15__.create)(user).then(data => {\n      if (data.error) {\n        setValues({\n          ...values,\n          error: data.error\n        });\n      } else {\n        setValues({\n          ...values,\n          error: \"\",\n          open: true\n        });\n      }\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TitleTypography, {\n    variant: \"h6\"\n  }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"name\",\n    label: \"Name\",\n    value: values.name,\n    onChange: handleChange(\"name\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    value: values.email,\n    onChange: handleChange(\"email\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTextField, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    value: values.password,\n    onChange: handleChange(\"password\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorIcon, {\n    color: \"error\"\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubmitButton, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit\n  }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_9___default()), {\n    open: values.open,\n    disableBackdropClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_13___default()), null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_11___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_12___default()), null, \"New account successfully created.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_10___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"contained\"\n  }, \"Sign In\")))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n\n//# sourceURL=webpack://expense-tracker/./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"@mui/material/List\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"@mui/material/ListItem\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"@mui/material/ListItemAvatar\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemSecondaryAction */ \"@mui/material/ListItemSecondaryAction\");\n/* harmony import */ var _mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemText */ \"@mui/material/ListItemText\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ \"@mui/icons-material/ArrowForward\");\n/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Person */ \"@mui/icons-material/Person\");\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst RootPaper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()))(({\n  theme\n}) => ({\n  padding: theme.spacing(1),\n  margin: theme.spacing(5)\n}));\nconst TitleTypography = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()))(({\n  theme\n}) => ({\n  margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,\n  color: theme.palette.openTitle\n}));\nfunction Users() {\n  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_api_user_js__WEBPACK_IMPORTED_MODULE_14__.list)(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        setUsers(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RootPaper, {\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TitleTypography, {\n    variant: \"h6\"\n  }, \"All Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_List__WEBPACK_IMPORTED_MODULE_3___default()), {\n    dense: true\n  }, users.map((item, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {\n      to: `/user/${item._id}`,\n      key: i\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n      button: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_12___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default()), {\n      primary: item.name\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_11___default()), null)))));\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n\n//# sourceURL=webpack://expense-tracker/./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   list: () => (/* binding */ list),\n/* harmony export */   read: () => (/* binding */ read),\n/* harmony export */   remove: () => (/* binding */ remove),\n/* harmony export */   update: () => (/* binding */ update)\n/* harmony export */ });\nconst create = async user => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst list = async signal => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'GET',\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'GET',\n      signal: signal,\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst update = async (params, credentials, user) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'PUT',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + credentials.t\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst remove = async (params, credentials) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'DELETE',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n//# sourceURL=webpack://expense-tracker/./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"pochi\",\n  mongoUri: process.env.MONGO_URI || \"mongodb://localhost:27017/expense-tracker\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://expense-tracker/./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      email: req.body.email\n    });\n    if (!user) return res.status(\"401\").json({\n      error: \"User not found\"\n    });\n    if (!user.authenticate(req.body.password)) {\n      return res.status(\"401\").send({\n        error: \"Email and password don't match.\"\n      });\n    }\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status(\"401\").json({\n      error: \"Could not sign in\"\n    });\n  }\n};\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status(\"200\").json({\n    message: \"signed out\"\n  });\n};\nconst requireSignin = (0,express_jwt__WEBPACK_IMPORTED_MODULE_2__.expressjwt)({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  algorithms: [\"HS256\"],\n  userProperty: \"auth\"\n});\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n});\n\n//# sourceURL=webpack://expense-tracker/./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/expense.controller.js":
/*!**************************************************!*\
  !*** ./server/controllers/expense.controller.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_expense_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/expense.model */ \"./server/models/expense.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst create = async (req, res) => {\n  try {\n    req.body.recorded_by = req.auth._id;\n    const expense = new _models_expense_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n    await expense.save();\n    return res.status(200).json({\n      message: \"Expense recorded!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst expenseByID = async (req, res, next, id) => {\n  try {\n    let expense = await _models_expense_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('recorded_by', '_id name').exec();\n    if (!expense) return res.status('400').json({\n      error: \"Expense record not found\"\n    });\n    req.expense = expense;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst read = (req, res) => {\n  return res.json(req.expense);\n};\nconst listByUser = async (req, res) => {\n  let firstDay = req.query.firstDay;\n  let lastDay = req.query.lastDay;\n  try {\n    let expenses = await _models_expense_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      '$and': [{\n        'incurred_on': {\n          '$gte': firstDay,\n          '$lte': lastDay\n        }\n      }, {\n        'recorded_by': req.auth._id\n      }]\n    }).sort('incurred_on').populate('recorded_by', '_id name');\n    res.json(expenses);\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst currentMonthPreview = async (req, res) => {\n  const date = new Date(),\n    y = date.getFullYear(),\n    m = date.getMonth();\n  const firstDay = new Date(y, m, 1);\n  const lastDay = new Date(y, m + 1, 0);\n  const today = new Date();\n  today.setUTCHours(0, 0, 0, 0);\n  const tomorrow = new Date();\n  tomorrow.setUTCHours(0, 0, 0, 0);\n  tomorrow.setDate(tomorrow.getDate() + 1);\n  const yesterday = new Date();\n  yesterday.setUTCHours(0, 0, 0, 0);\n  yesterday.setDate(yesterday.getDate() - 1);\n  try {\n    let currentPreview = await _models_expense_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([{\n      $facet: {\n        month: [{\n          $match: {\n            incurred_on: {\n              $gte: firstDay,\n              $lt: lastDay\n            },\n            recorded_by: mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId(req.auth._id)\n          }\n        }, {\n          $group: {\n            _id: \"currentMonth\",\n            totalSpent: {\n              $sum: \"$amount\"\n            }\n          }\n        }],\n        today: [{\n          $match: {\n            incurred_on: {\n              $gte: today,\n              $lt: tomorrow\n            },\n            recorded_by: mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId(req.auth._id)\n          }\n        }, {\n          $group: {\n            _id: \"today\",\n            totalSpent: {\n              $sum: \"$amount\"\n            }\n          }\n        }],\n        yesterday: [{\n          $match: {\n            incurred_on: {\n              $gte: yesterday,\n              $lt: today\n            },\n            recorded_by: mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId(req.auth._id)\n          }\n        }, {\n          $group: {\n            _id: \"yesterday\",\n            totalSpent: {\n              $sum: \"$amount\"\n            }\n          }\n        }]\n      }\n    }]);\n    let expensePreview = {\n      month: currentPreview[0].month[0],\n      today: currentPreview[0].today[0],\n      yesterday: currentPreview[0].yesterday[0]\n    };\n    res.json(expensePreview);\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst expenseByCategory = async (req, res) => {\n  const date = new Date(),\n    y = date.getFullYear(),\n    m = date.getMonth();\n  const firstDay = new Date(y, m, 1);\n  const lastDay = new Date(y, m + 1, 0);\n  try {\n    let categoryMonthlyAvg = await _models_expense_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([{\n      $facet: {\n        average: [{\n          $match: {\n            recorded_by: mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId(req.auth._id)\n          }\n        }, {\n          $group: {\n            _id: {\n              category: \"$category\",\n              month: {\n                $month: \"$incurred_on\"\n              }\n            },\n            totalSpent: {\n              $sum: \"$amount\"\n            }\n          }\n        }, {\n          $group: {\n            _id: \"$_id.category\",\n            avgSpent: {\n              $avg: \"$totalSpent\"\n            }\n          }\n        }, {\n          $project: {\n            _id: \"$_id\",\n            value: {\n              average: \"$avgSpent\"\n            }\n          }\n        }],\n        total: [{\n          $match: {\n            incurred_on: {\n              $gte: firstDay,\n              $lte: lastDay\n            },\n            recorded_by: mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId(req.auth._id)\n          }\n        }, {\n          $group: {\n            _id: \"$category\",\n            totalSpent: {\n              $sum: \"$amount\"\n            }\n          }\n        }, {\n          $project: {\n            _id: \"$_id\",\n            value: {\n              total: \"$totalSpent\"\n            }\n          }\n        }]\n      }\n    }, {\n      $project: {\n        overview: {\n          $setUnion: ['$average', '$total']\n        }\n      }\n    }, {\n      $unwind: '$overview'\n    }, {\n      $replaceRoot: {\n        newRoot: \"$overview\"\n      }\n    }, {\n      $group: {\n        _id: \"$_id\",\n        mergedValues: {\n          $mergeObjects: \"$value\"\n        }\n      }\n    }]).exec();\n    res.json(categoryMonthlyAvg);\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst averageCategories = async (req, res) => {\n  const firstDay = new Date(req.query.firstDay);\n  const lastDay = new Date(req.query.lastDay);\n  try {\n    let categoryMonthlyAvg = await _models_expense_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([{\n      $match: {\n        incurred_on: {\n          $gte: firstDay,\n          $lte: lastDay\n        },\n        recorded_by: mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId(req.auth._id)\n      }\n    }, {\n      $group: {\n        _id: {\n          category: \"$category\"\n        },\n        totalSpent: {\n          $sum: \"$amount\"\n        }\n      }\n    }, {\n      $group: {\n        _id: \"$_id.category\",\n        avgSpent: {\n          $avg: \"$totalSpent\"\n        }\n      }\n    }, {\n      $project: {\n        x: '$_id',\n        y: '$avgSpent'\n      }\n    }]).exec();\n    res.json({\n      monthAVG: categoryMonthlyAvg\n    });\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst yearlyExpenses = async (req, res) => {\n  const y = req.query.year;\n  const firstDay = new Date(y, 0, 1);\n  const lastDay = new Date(y, 12, 0);\n  try {\n    let totalMonthly = await _models_expense_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([{\n      $match: {\n        incurred_on: {\n          $gte: firstDay,\n          $lt: lastDay\n        },\n        recorded_by: mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId(req.auth._id)\n      }\n    }, {\n      $group: {\n        _id: {\n          $month: \"$incurred_on\"\n        },\n        totalSpent: {\n          $sum: \"$amount\"\n        }\n      }\n    }, {\n      $project: {\n        x: '$_id',\n        y: '$totalSpent'\n      }\n    }]).exec();\n    res.json({\n      monthTot: totalMonthly\n    });\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst plotExpenses = async (req, res) => {\n  const date = new Date(req.query.month),\n    y = date.getFullYear(),\n    m = date.getMonth();\n  const firstDay = new Date(y, m, 1);\n  const lastDay = new Date(y, m + 1, 0);\n  try {\n    let totalMonthly = await _models_expense_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([{\n      $match: {\n        incurred_on: {\n          $gte: firstDay,\n          $lt: lastDay\n        },\n        recorded_by: mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId(req.auth._id)\n      }\n    }, {\n      $project: {\n        x: {\n          $dayOfMonth: '$incurred_on'\n        },\n        y: '$amount'\n      }\n    }]).exec();\n    res.json(totalMonthly);\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst update = async (req, res) => {\n  try {\n    let expense = req.expense;\n    expense = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(expense, req.body);\n    expense.updated = Date.now();\n    await expense.save();\n    res.json(expense);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst remove = async (req, res) => {\n  try {\n    let expense = req.expense;\n    let deletedExpense = await expense.remove();\n    res.json(deletedExpense);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.expense && req.auth && req.expense.recorded_by._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create,\n  expenseByID,\n  read,\n  currentMonthPreview,\n  expenseByCategory,\n  averageCategories,\n  yearlyExpenses,\n  plotExpenses,\n  listByUser,\n  remove,\n  update,\n  hasAuthorization\n});\n\n//# sourceURL=webpack://expense-tracker/./server/controllers/expense.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\n\n\nconst create = async (req, res) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\n// Load user and append to req.\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\nconst list = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select('name email updated created');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst update = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, req.body);\n    user.updated = Date.now();\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n});\n\n//# sourceURL=webpack://expense-tracker/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_expense_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/expense.routes */ \"./server/routes/expense.routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_19__);\n\n\n\n\n\n\n\n\n\n\n\n\n// modules for server side rendering\n\n\n\n\n\n\n\n\n\n\n//comment out before building for production\n// import devBundle from './devBundle'\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n//comment out before building for production\n// devBundle.compile(app)\n\n// parse body params and attache them to req.body\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\n// secure apps by setting various HTTP headers\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\n// enable CORS - Cross Origin Resource Sharing\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(\"/dist\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, \"dist\")));\n\n// mount routes\napp.use(\"/\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use(\"/\", _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use(\"/\", _routes_expense_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.get(\"*\", (req, res) => {\n  const cache = _emotion_cache__WEBPACK_IMPORTED_MODULE_16___default()({\n    key: \"css\",\n    prepend: true\n  });\n  const {\n    extractCriticalToChunks,\n    constructStyleTagsFromChunks\n  } = _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_14___default()(cache);\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_12___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.CacheProvider, {\n    value: cache\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_19__.ThemeProvider, {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_17__[\"default\"], null)))));\n  const emotionChunks = extractCriticalToChunks(markup);\n  const css = constructStyleTagsFromChunks(emotionChunks);\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    markup: markup,\n    css: css\n  }));\n});\n\n// Catch unauthorised errors\napp.use((err, req, res, next) => {\n  if (err.name === \"UnauthorizedError\") {\n    res.status(401).json({\n      error: err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      error: err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://expense-tracker/./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getUniqueErrorMessage = err => {\n  let output;\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n  return output;\n};\n\n// Get the error message from error object\n\nconst getErrorMessage = err => {\n  let message = '';\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n  return message;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getErrorMessage\n});\n\n//# sourceURL=webpack://expense-tracker/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/expense.model.js":
/*!****************************************!*\
  !*** ./server/models/expense.model.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ExpenseSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: {\n    type: String,\n    trim: true,\n    required: 'Title is required'\n  },\n  category: {\n    type: String,\n    trim: true,\n    required: 'Category is required'\n  },\n  amount: {\n    type: Number,\n    min: 0,\n    required: 'Amount is required'\n  },\n  incurred_on: {\n    type: Date,\n    default: Date.now\n  },\n  notes: {\n    type: String,\n    trim: true\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  recorded_by: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).ObjectId,\n    ref: 'User'\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Expense', ExpenseSchema));\n\n//# sourceURL=webpack://expense-tracker/./server/models/expense.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', UserSchema));\n\n//# sourceURL=webpack://expense-tracker/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://expense-tracker/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/expense.routes.js":
/*!*****************************************!*\
  !*** ./server/routes/expense.routes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/expense.controller */ \"./server/controllers/expense.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/expenses/current/preview').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentMonthPreview);\nrouter.route('/api/expenses/by/category').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].expenseByCategory);\nrouter.route('/api/expenses/plot').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].plotExpenses);\nrouter.route('/api/expenses/category/averages').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].averageCategories);\nrouter.route('/api/expenses/yearly').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yearlyExpenses);\nrouter.route('/api/expenses').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create).get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listByUser);\nrouter.route('/api/expenses/:expenseId')\n// .get(authCtrl.requireSignin, expenseCtrl.read)\n.put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hasAuthorization, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hasAuthorization, _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param('expenseId', _controllers_expense_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].expenseByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://expense-tracker/./server/routes/expense.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://expense-tracker/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// Connection URL\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nconst connectToDatabase = async () => {\n  try {\n    await mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    });\n    console.info(\"Successfully connected to the database\");\n  } catch (error) {\n    console.error(\"Error connecting to the database:\", error);\n    throw new Error(`Unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n  }\n};\nconnectToDatabase();\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.error(err);\n  } else {\n    console.info(\"Server started on port %s.\", _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n  }\n});\n\n//# sourceURL=webpack://expense-tracker/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({\n  markup,\n  css\n}) => {\n  return `<!doctype html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n        <style id=\"jss-server-side\">${css}</style>\n        <title>Expense Tracker</title>\n      </head>\n      <body>\n        <div id=\"root\">${markup}</div>\n        <script src=\"/dist/bundle.js\"></script>\n      </body>\n    </html>`;\n});\n\n//# sourceURL=webpack://expense-tracker/./template.js?");

/***/ }),

/***/ "./client/assets/images/money.jpg":
/*!****************************************!*\
  !*** ./client/assets/images/money.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9301e32ecd32ef19b5ca361c1b183f02.jpg\");\n\n//# sourceURL=webpack://expense-tracker/./client/assets/images/money.jpg?");

/***/ }),

/***/ "@date-io/date-fns":
/*!************************************!*\
  !*** external "@date-io/date-fns" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@date-io/date-fns");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@emotion/server/create-instance");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "@mui/icons-material//AddBoxRounded":
/*!*****************************************************!*\
  !*** external "@mui/icons-material//AddBoxRounded" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material//AddBoxRounded");

/***/ }),

/***/ "@mui/icons-material//Delete":
/*!**********************************************!*\
  !*** external "@mui/icons-material//Delete" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material//Delete");

/***/ }),

/***/ "@mui/icons-material//Home":
/*!********************************************!*\
  !*** external "@mui/icons-material//Home" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material//Home");

/***/ }),

/***/ "@mui/icons-material/ArrowForward":
/*!***************************************************!*\
  !*** external "@mui/icons-material/ArrowForward" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForward");

/***/ }),

/***/ "@mui/icons-material/Edit":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Edit" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ "@mui/icons-material/Person":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Person" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ "@mui/lab":
/*!***************************!*\
  !*** external "@mui/lab" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("@mui/lab");

/***/ }),

/***/ "@mui/material/Accordion":
/*!******************************************!*\
  !*** external "@mui/material/Accordion" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ "@mui/material/AccordionDetails":
/*!*************************************************!*\
  !*** external "@mui/material/AccordionDetails" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ "@mui/material/AccordionSummary":
/*!*************************************************!*\
  !*** external "@mui/material/AccordionSummary" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Avatar":
/*!***************************************!*\
  !*** external "@mui/material/Avatar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ "@mui/material/CardContent":
/*!********************************************!*\
  !*** external "@mui/material/CardContent" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ "@mui/material/CardMedia":
/*!******************************************!*\
  !*** external "@mui/material/CardMedia" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ "@mui/material/Dialog":
/*!***************************************!*\
  !*** external "@mui/material/Dialog" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ "@mui/material/DialogActions":
/*!**********************************************!*\
  !*** external "@mui/material/DialogActions" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ "@mui/material/DialogContent":
/*!**********************************************!*\
  !*** external "@mui/material/DialogContent" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ "@mui/material/DialogContentText":
/*!**************************************************!*\
  !*** external "@mui/material/DialogContentText" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ "@mui/material/DialogTitle":
/*!********************************************!*\
  !*** external "@mui/material/DialogTitle" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ "@mui/material/Divider":
/*!****************************************!*\
  !*** external "@mui/material/Divider" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ "@mui/material/Icon":
/*!*************************************!*\
  !*** external "@mui/material/Icon" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Icon");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/List":
/*!*************************************!*\
  !*** external "@mui/material/List" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ "@mui/material/ListItem":
/*!*****************************************!*\
  !*** external "@mui/material/ListItem" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ "@mui/material/ListItemAvatar":
/*!***********************************************!*\
  !*** external "@mui/material/ListItemAvatar" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItemAvatar");

/***/ }),

/***/ "@mui/material/ListItemSecondaryAction":
/*!********************************************************!*\
  !*** external "@mui/material/ListItemSecondaryAction" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ "@mui/material/ListItemText":
/*!*********************************************!*\
  !*** external "@mui/material/ListItemText" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "victory":
/*!**************************!*\
  !*** external "victory" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("victory");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;