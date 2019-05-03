/*
*可以从数组和对象中进行解构
* 但是不能混合解构
* */

let person = {
    name: '刘备备',
    age: 32
};

let {name, age=3, gender='male'} = person;  // 可以添加默认值， 但是需要注意的是：key 一定要和 对象中一样
console.log(name, age, gender);

let [a, ,b] = [1, 2, 3];  // 部分解构
console.log(a, b);  // [1, 3]

let [c, ...items] = [1, 2, 3, 4];
console.log(items);  // [2, 3, 4]

// 练习
let file = {
    name: 'pic',
    extension: 'jpg'
};
function fileDetail({name, extension}) {
    return `${name}.${extension}`;
}
console.log(fileDetail(file));

// 数组转为对象
let points = [
    [1, 3],
    [2, 4]
];

let newPoints = points.map(([x, y]) => {
    return {x, y};
});
console.log(newPoints);
