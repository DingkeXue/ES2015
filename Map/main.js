/*
* map 新的数据结构
* 和正常的对象比起来，它的 key 不单单是字符串
* */

let map = new Map();
let key1 = {};
let key2 = function() {};
let key3 = 'string';
map.set(key1, '对象');
map.set(key2, "函数");
map.set(key3, "字符串");

console.log(map.keys(), map.values());

// map 转换成 数组
console.log([...map.keys()]);
console.log([...map.values()]);

// 历遍方法
map.forEach((key, value) => {
    console.log(key, value);
});

for (let item of map.entries()) {
    console.log(item);
}