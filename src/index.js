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
const utilsObj = require("./utils");
console.log(utilsObj);