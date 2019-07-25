//new 操作符干了哪些事？
/**
 *  创建一个新的对象
 *  将构造函数的作用域赋给新的对象（因此this就指向了这个新对象）
 *  执行构造函数中的代码 （为这个新对象添加属性）；
 *  返回新对象
 */
 function createNew(Con,...args) {
    let obj = {};
    Object.setPrototypeOf(obj,Con.prototype);
    console.log(...args)
    let result = Con.call(obj, ...args);
    return result instanceof Object ? result : obj
 }
