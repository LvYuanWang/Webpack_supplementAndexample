/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/a.js":
/*!************************!*\
  !*** ./src/utils/a.js ***!
  \************************/
/***/ ((module) => {

const add = (a, b) => a + b;

module.exports = add;

/***/ }),

/***/ "./src/utils/b.js":
/*!************************!*\
  !*** ./src/utils/b.js ***!
  \************************/
/***/ ((module) => {

module.exports = "b";

/***/ }),

/***/ "./src/utils/c.js":
/*!************************!*\
  !*** ./src/utils/c.js ***!
  \************************/
/***/ ((module) => {

module.exports = "c";

/***/ }),

/***/ "./src/utils/d.js":
/*!************************!*\
  !*** ./src/utils/d.js ***!
  \************************/
/***/ ((module) => {

module.exports = "d";

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 导出当前目录中的所有模块

const context = __webpack_require__("./src/utils sync recursive \\.js$");
const modulesObj = {};
context.keys().map(item => {
  if (item !== "./index.js") {
    const fileName = item.substring(2, item.length - 3);
    modulesObj[fileName] = context(item);
  }
});
module.exports = modulesObj;

/***/ }),

/***/ "./src/utils sync recursive \\.js$":
/*!*******************************!*\
  !*** ./src/utils/ sync \.js$ ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.js": "./src/utils/a.js",
	"./b.js": "./src/utils/b.js",
	"./c.js": "./src/utils/c.js",
	"./d.js": "./src/utils/d.js",
	"./index.js": "./src/utils/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/utils sync recursive \\.js$";

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// const modulesArr = ["/a", "/b", "/c", "/d", "/index"];

// const index = Math.floor(Math.random() * modulesArr.length);

// if (Math.random() > 0.5) {
//   const result = require("./utils" + modulesArr[index]);
//   console.log(result);
// }

// require.context()方法接收三个参数(函数仅在webpack运行过程中有效)：
// 参数1: 目录，哪个目录中的模块需要添加到打包结果
// 参数2: 是否递归寻找子目录，如果为true，表示需要寻找子目录
// 参数3：正则表达式，凡是匹配的才会加入到打包结果
// const context = require.context("./utils", true, /\.js$/);

// console.log(context.keys());


// 获取utils目录下的所有模块
const utilsObj = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
console.log(utilsObj);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map