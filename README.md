# webpack不确定的动态依赖

当我们的webpack导入`不确定`时
```js
const modulesArr = ["/a", "/b", "/c", "/d", "/index"];

const index = Math.floor(Math.random() * modulesArr.length);

if (Math.random() > 0.5) {
  const result = require("./utils" + modulesArr[index]);
  console.log(result);
}
```

webpack时如何编译的

```js
(() => { // webpackBootstrap
  var __webpack_modules__ = ({
    "./src/utils/a.js": ((module) => { module.exports = "a"; }),
    "./src/utils/b.js": ((module) => { module.exports = "b"; }),
    "./src/utils/c.js": ((module) => { module.exports = "c"; }),
    "./src/utils/d.js": ((module) => { module.exports = "d"; }),
    "./src/utils/index.js": ((module) => { module.exports = "index"; }),
    "./src/utils/other.css": (() => { }),
    "./src sync recursive ^\\.\\/utils.*$": (
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./utils": "./src/utils/index.js",
          "./utils/": "./src/utils/index.js",
          "./utils/a": "./src/utils/a.js",
          "./utils/a.js": "./src/utils/a.js",
          "./utils/b": "./src/utils/b.js",
          "./utils/b.js": "./src/utils/b.js",
          "./utils/c": "./src/utils/c.js",
          "./utils/c.js": "./src/utils/c.js",
          "./utils/d": "./src/utils/d.js",
          "./utils/d.js": "./src/utils/d.js",
          "./utils/index": "./src/utils/index.js",
          "./utils/index.js": "./src/utils/index.js",
          "./utils/other.css": "./src/utils/other.css"
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
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
        webpackContext.id = "./src sync recursive ^\\.\\/utils.*$";
      }
    )
  })
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  (() => { __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop)) })();
  (() => {
    /*./src/index.js */
    const modulesArr = ["/a", "/b", "/c", "/d", "/index"];

    const index = Math.floor(Math.random() * modulesArr.length);

    if (Math.random() > 0.5) {
      const result = __webpack_require__("./src sync recursive ^\\.\\/utils.*$")("./utils" + modulesArr[index]);
      console.log(result);
    }
  })();
})();
```

> 细品