/*
* Set 类似数组，但是存储的值是唯一的
* typeof new Set()  是 object
* */

// 用来 查重排序
let arr = [1, 2, 3, 1, 5];
let set = new Set(arr);
console.log(typeof new Set());
let arr2 = [...set]; // 将 set 转换成数组
console.log(arr2.sort((a, b) => {return a - b}));

// set 方法
let set1 = new Set();
set1.add(1).add(2);
console.log(set1.has(1)); // true
set1.add({name: 'lbb'});
console.log(set1.has({name: 'lbb'})); // false 是因为对象的地址不一样，必须要引用同一个对象才行
let obj = {name:'zff'};
set1.add(obj);
console.log(set1.has(obj));  // true

console.log(set1.delete(1)); // true 表示删除成功
set1.clear(); // 清除所有成员，没有返回值

