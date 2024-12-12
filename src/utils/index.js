// 导出当前目录中的所有模块

const context = require.context("./", true, /\.js$/);
const modulesObj = {};
context.keys().map(item => {
  if (item !== "./index.js") {
    const fileName = item.substring(2, item.length - 3);
    modulesObj[fileName] = context(item);
  }
});
module.exports = modulesObj;