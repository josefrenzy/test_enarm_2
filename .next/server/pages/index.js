module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/colors.js":
/*!*****************************!*\
  !*** ./constants/colors.js ***!
  \*****************************/
/*! exports provided: COLOR_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR_CONSTANTS\", function() { return COLOR_CONSTANTS; });\nconst COLOR_CONSTANTS = {\n  primaryRoundedButton: \"bg-[#383B7A] rounded-full\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvY29sb3JzLmpzP2FlYTYiXSwibmFtZXMiOlsiQ09MT1JfQ09OU1RBTlRTIiwicHJpbWFyeVJvdW5kZWRCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxlQUFlLEdBQUc7QUFDM0JDLHNCQUFvQixFQUFFO0FBREssQ0FBeEIiLCJmaWxlIjoiLi9jb25zdGFudHMvY29sb3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENPTE9SX0NPTlNUQU5UUyA9IHtcbiAgICBwcmltYXJ5Um91bmRlZEJ1dHRvbjogXCJiZy1bIzM4M0I3QV0gcm91bmRlZC1mdWxsXCJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/colors.js\n");

/***/ }),

/***/ "./lib/dbConnect.js":
/*!**************************!*\
  !*** ./lib/dbConnect.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst URI_MONGO = process.env.URI_MONGO;\n\nif (!URI_MONGO) {\n  throw new Error(\"Please define the URI_MONGO environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */\n\n\nlet cached = global.mongoose;\n\nif (!cached) {\n  cached = global.mongoose = {\n    conn: null,\n    promise: null\n  };\n}\n\nasync function dbConnect() {\n  if (cached.conn) {\n    return cached.conn;\n  }\n\n  if (!cached.promise) {\n    const opts = {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    };\n    cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(URI_MONGO, opts).then(mongoose => {\n      return mongoose;\n    }).catch(err => console.log(err));\n  }\n\n  cached.conn = await cached.promise;\n  return cached.conn;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGJDb25uZWN0LmpzPzk1YjQiXSwibmFtZXMiOlsiVVJJX01PTkdPIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwibW9uZ29vc2UiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUE5Qjs7QUFFQSxJQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZCxRQUFNLElBQUlHLEtBQUosQ0FDSixvRUFESSxDQUFOO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBcEI7O0FBRUEsSUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWEEsUUFBTSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsR0FBa0I7QUFBRUMsUUFBSSxFQUFFLElBQVI7QUFBY0MsV0FBTyxFQUFFO0FBQXZCLEdBQTNCO0FBQ0Q7O0FBRUQsZUFBZUMsU0FBZixHQUEyQjtBQUN6QixNQUFJTCxNQUFNLENBQUNHLElBQVgsRUFBaUI7QUFDZixXQUFPSCxNQUFNLENBQUNHLElBQWQ7QUFDRDs7QUFFRCxNQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBWixFQUFxQjtBQUNuQixVQUFNRSxJQUFJLEdBQUc7QUFDWEMscUJBQWUsRUFBRSxJQUROO0FBRVhDLHdCQUFrQixFQUFFO0FBRlQsS0FBYjtBQUtBUixVQUFNLENBQUNJLE9BQVAsR0FBaUJGLCtDQUFRLENBQUNPLE9BQVQsQ0FBaUJiLFNBQWpCLEVBQTRCVSxJQUE1QixFQUFrQ0ksSUFBbEMsQ0FBd0NSLFFBQUQsSUFBYztBQUNwRSxhQUFPQSxRQUFQO0FBQ0QsS0FGZ0IsRUFFZFMsS0FGYyxDQUVSQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBRkMsQ0FBakI7QUFHRDs7QUFDRFosUUFBTSxDQUFDRyxJQUFQLEdBQWMsTUFBTUgsTUFBTSxDQUFDSSxPQUEzQjtBQUNBLFNBQU9KLE1BQU0sQ0FBQ0csSUFBZDtBQUNEOztBQUVjRSx3RUFBZiIsImZpbGUiOiIuL2xpYi9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgbW9uZ28gfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgVVJJX01PTkdPID0gcHJvY2Vzcy5lbnYuVVJJX01PTkdPO1xuXG5pZiAoIVVSSV9NT05HTykge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBVUklfTU9OR08gZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChVUklfTU9OR08sIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH1cbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/dbConnect.js\n");

/***/ }),

/***/ "./models/usuario.js":
/*!***************************!*\
  !*** ./models/usuario.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UsuarioSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  nombre: {\n    type: String,\n    required: [true, \"Usuario no encontrado\"]\n  },\n  correo: {\n    type: String,\n    required: [true, \"correo no encontrado\"]\n  },\n  contrasena: {\n    type: String,\n    required: [true, \"contrasena no encontrada\"]\n  },\n  rol: {\n    type: String,\n    required: [true, \"rol no encontrado\"]\n  },\n  foto: {\n    type: String,\n    required: [true, \"foto no encontrado\"]\n  },\n  especialidad: {\n    type: String,\n    required: [true, \"especialidad no encontrada\"]\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Usuario || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Usuario', UsuarioSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXN1YXJpby5qcz80NTRhIl0sIm5hbWVzIjpbIlVzdWFyaW9TY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5vbWJyZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvcnJlbyIsImNvbnRyYXNlbmEiLCJyb2wiLCJmb3RvIiwiZXNwZWNpYWxpZGFkIiwibW9kZWxzIiwiVXN1YXJpbyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLGFBQWEsR0FBRyxJQUFJQywrQ0FBUSxDQUFDQyxNQUFiLENBQW9CO0FBQ3RDQyxRQUFNLEVBQUM7QUFDSEMsUUFBSSxFQUFFQyxNQURIO0FBRUhDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyx1QkFBUDtBQUZQLEdBRCtCO0FBS3RDQyxRQUFNLEVBQUM7QUFDSEgsUUFBSSxFQUFFQyxNQURIO0FBRUhDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxzQkFBUDtBQUZQLEdBTCtCO0FBU3RDRSxZQUFVLEVBQUM7QUFDUEosUUFBSSxFQUFFQyxNQURDO0FBRVBDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTywwQkFBUDtBQUZILEdBVDJCO0FBYXRDRyxLQUFHLEVBQUM7QUFDQUwsUUFBSSxFQUFFQyxNQUROO0FBRUFDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxtQkFBUDtBQUZWLEdBYmtDO0FBaUJ0Q0ksTUFBSSxFQUFDO0FBQ0ROLFFBQUksRUFBRUMsTUFETDtBQUVEQyxZQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sb0JBQVA7QUFGVCxHQWpCaUM7QUFxQnRDSyxjQUFZLEVBQUM7QUFDVFAsUUFBSSxFQUFFQyxNQURHO0FBRVRDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyw0QkFBUDtBQUZEO0FBckJ5QixDQUFwQixDQUF0QjtBQTRCZUwsOEdBQVEsQ0FBQ1csTUFBVCxDQUFnQkMsT0FBaEIsSUFBMkJaLCtDQUFRLENBQUNhLEtBQVQsQ0FBZSxTQUFmLEVBQTBCZCxhQUExQixDQUExQyIsImZpbGUiOiIuL21vZGVscy91c3VhcmlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBtb25nb29zZSwgeyBtb25nbywgU2NoZW1hIH0gIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc3VhcmlvU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbm9tYnJlOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiVXN1YXJpbyBubyBlbmNvbnRyYWRvXCJdLFxuICAgIH0sXG4gICAgY29ycmVvOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiY29ycmVvIG5vIGVuY29udHJhZG9cIl0sXG4gICAgfSxcbiAgICBjb250cmFzZW5hOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiY29udHJhc2VuYSBubyBlbmNvbnRyYWRhXCJdLFxuICAgIH0sXG4gICAgcm9sOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwicm9sIG5vIGVuY29udHJhZG9cIl0sXG4gICAgfSxcbiAgICBmb3RvOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiZm90byBubyBlbmNvbnRyYWRvXCJdLFxuICAgIH0sXG4gICAgZXNwZWNpYWxpZGFkOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiZXNwZWNpYWxpZGFkIG5vIGVuY29udHJhZGFcIl0sXG4gICAgfSxcblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc3VhcmlvIHx8IG1vbmdvb3NlLm1vZGVsKCdVc3VhcmlvJywgVXN1YXJpb1NjaGVtYSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/usuario.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/dbConnect */ \"./lib/dbConnect.js\");\n/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/usuario */ \"./models/usuario.js\");\n/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/colors */ \"./constants/colors.js\");\n\nvar _jsxFileName = \"/Users/joseguzmangordillo/Documents/PreciososDevelopments/enarm_web_amplify/pages/index.js\";\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-col justify-center items-center  min-h-screen py-2\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"flex flex-col justify-center items-center w-full flex-1 px-  \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"font-poppins text-2xl mb-3 text-gray-700\",\n        children: \" REALIZA\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"font-poppins font-extrabold text-black  text-6xl\",\n        children: \"TU ENARM A LA PRIMERA\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n        className: \"font-poppins text-xl mt-2 text-gray-600\",\n        children: \"Cerca de 18 especialistas brindandote su conocimiento\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: `w-[300px] h-[60px] mt-7 bg-[#383B7A] rounded-full  text-white drop-shadow-3xl`,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"font-poppins text-xl\",\n          children: \"Quiero conocerlos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\nasync function getServerSideProps() {\n  try {\n    const conn = await Object(_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    conn ? console.log(\"database connected 🌽\") : console.log(\"database not connected 🌽\");\n    const res = await _models_usuario__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({});\n    const users = res.map(doc => {\n      const user = doc.toObject();\n      user._id = `${user._id}`;\n      return user;\n    }); //console.log(res);\n\n    return {\n      props: {\n        users\n      }\n    };\n  } catch (error) {\n    console.log(error);\n    process.exit(1);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb25uIiwiZGJDb25uZWN0IiwiY29uc29sZSIsImxvZyIsInJlcyIsIlVzdWFyaW8iLCJmaW5kIiwidXNlcnMiLCJtYXAiLCJkb2MiLCJ1c2VyIiwidG9PYmplY3QiLCJfaWQiLCJwcm9wcyIsImVycm9yIiwicHJvY2VzcyIsImV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBLDJCQUNFO0FBQU0sZUFBUyxFQUFDLCtEQUFoQjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQywwQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSSxpQkFBUyxFQUFDLGtEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRTtBQUFPLGlCQUFTLEVBQUMseUNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFTRTtBQUFRLGlCQUFTLEVBQUcsK0VBQXBCO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDtBQUVNLGVBQWVDLGtCQUFmLEdBQW9DO0FBQ3pDLE1BQUk7QUFDRixVQUFNQyxJQUFJLEdBQUcsTUFBTUMsOERBQVMsRUFBNUI7QUFDQUQsUUFBSSxHQUNBRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixDQURBLEdBRUFELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLENBRko7QUFHQSxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsdURBQU8sQ0FBQ0MsSUFBUixDQUFhLEVBQWIsQ0FBbEI7QUFFQSxVQUFNQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksR0FBSixDQUFTQyxHQUFELElBQVM7QUFDN0IsWUFBTUMsSUFBSSxHQUFHRCxHQUFHLENBQUNFLFFBQUosRUFBYjtBQUNBRCxVQUFJLENBQUNFLEdBQUwsR0FBWSxHQUFFRixJQUFJLENBQUNFLEdBQUksRUFBdkI7QUFDQSxhQUFPRixJQUFQO0FBQ0QsS0FKYSxDQUFkLENBUEUsQ0FZRjs7QUFDQSxXQUFPO0FBQUVHLFdBQUssRUFBRTtBQUFFTjtBQUFGO0FBQVQsS0FBUDtBQUNELEdBZEQsQ0FjRSxPQUFPTyxLQUFQLEVBQWM7QUFDZFosV0FBTyxDQUFDQyxHQUFSLENBQVlXLEtBQVo7QUFDQUMsV0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBYjtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uL2xpYi9kYkNvbm5lY3RcIjtcbmltcG9ydCBVc3VhcmlvIGZyb20gXCIuLi9tb2RlbHMvdXN1YXJpb1wiO1xuaW1wb3J0IHsgQ09MT1JfQ09OU1RBTlRTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb2xvcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBtaW4taC1zY3JlZW4gcHktMlwiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGZsZXgtMSBweC0gIFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgdGV4dC0yeGwgbWItMyB0ZXh0LWdyYXktNzAwXCI+IFJFQUxJWkE8L3A+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1leHRyYWJvbGQgdGV4dC1ibGFjayAgdGV4dC02eGxcIj5cbiAgICAgICAgICBUVSBFTkFSTSBBIExBIFBSSU1FUkFcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyB0ZXh0LXhsIG10LTIgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIENlcmNhIGRlIDE4IGVzcGVjaWFsaXN0YXMgYnJpbmRhbmRvdGUgc3UgY29ub2NpbWllbnRvXG4gICAgICAgIDwvc21hbGw+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2B3LVszMDBweF0gaC1bNjBweF0gbXQtNyBiZy1bIzM4M0I3QV0gcm91bmRlZC1mdWxsICB0ZXh0LXdoaXRlIGRyb3Atc2hhZG93LTN4bGB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyB0ZXh0LXhsXCI+UXVpZXJvIGNvbm9jZXJsb3M8L3A+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC0yNCBib3JkZXItdFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9XCJoLTQgbWwtMlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25uID0gYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgY29ublxuICAgICAgPyBjb25zb2xlLmxvZyhcImRhdGFiYXNlIGNvbm5lY3RlZCDwn4y9XCIpXG4gICAgICA6IGNvbnNvbGUubG9nKFwiZGF0YWJhc2Ugbm90IGNvbm5lY3RlZCDwn4y9XCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFVzdWFyaW8uZmluZCh7fSk7XG5cbiAgICBjb25zdCB1c2VycyA9IHJlcy5tYXAoKGRvYykgPT4ge1xuICAgICAgY29uc3QgdXNlciA9IGRvYy50b09iamVjdCgpO1xuICAgICAgdXNlci5faWQgPSBgJHt1c2VyLl9pZH1gO1xuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfSk7XG4gICAgLy9jb25zb2xlLmxvZyhyZXMpO1xuICAgIHJldHVybiB7IHByb3BzOiB7IHVzZXJzIH0gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });