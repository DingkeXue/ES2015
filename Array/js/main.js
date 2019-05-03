// ES 5
var colors = ['red', 'yellow', 'blue'];
let arr = [1, 2, 3, 4];

for (var i = 0; i < colors.length; i ++) {
    console.log(colors[i]);  // red yellow blue
}

// ES6 forEach 对数组的每一项执行函数，没有返回值
colors.forEach(color => {
    console.log(color);  // red yellow blue
});

var sum = 0;
arr.forEach(num => {
    sum += num;
});
console.log(sum);  // 10

// ES6 map 返回一个处理后的数组
let doubleArr = arr.map(num => {
    return num * 2;
});
console.log(doubleArr);  // [2, 4, 6, 8]

let phone = [
    {company: 'huawei', price: 4399},
    {company: 'apple', price:5433}
];
let price = phone.map((item) => {
    return item.price;
});
console.log(price);  // [4399, 5433]

// ES6 some 对数组历遍，只要一个满足条件就返回true, 否足返回false
let arr2 = [1, 2, 3, 4];
let reslut = arr2.some((num) => {
    return num > 3;
});
console.log(reslut);  // true

// ES6 every 对数组历遍，全部满足条件返回 true, 否则返回 false
let reslut2 = arr2.every(num => {
    return num > 3;
});
console.log(reslut2);  // false

// ES6 filter 过滤器，选出满足条件的值并组成一个新数组
let result3 = arr2.filter(num =>{
    return num > 2;
});
console.log(result3);  // [3, 4]

// ES6 find 查找， 在数组中找到第一个满足条件的值并返回
let result4 = arr2.find(num => {
    return num > 2;
});
console.log(result4);  // 3

// ES6 findIndex 在数组中找到第一个满足条件的值返回索引，从 0 开始算
let result5 = arr2.findIndex(num => {
    return num > 2;
});
console.log(result5);

/*
* filter
* 将指定的类型放到新的数组中
* */
let products = [
    {name: 'huawei', type: 'phone', price: 4500},
    {name: 'apple', type: 'phone', price: 4300},
    {name: 'lenvo', type: 'computer', price: 3400}
];

let phones = products.filter(item => {
    return item.type === 'phone';
});
let price2 = products.filter(item => {
    return item.price > 4400 && item.type === 'phone';
});
console.log(phones, price2);

/*
* filter
* 根据 A 中的 id，过滤掉 B 中不符合的数
* */
let A = {id: 3, name: 'herry'};
let B = [
    {id: 2, name: 'huawei'},
    {id: 3, name: 'apple'},
    {id: 4, name: 'oppo'}
];

function Filter(a, b) {
    return b.filter(item => {
        return item.id === a.id;
    })
}

console.log(Filter(A, B));


/*
* every, some
* 检查表单
* */
class Inputs {
    constructor(value) {
        this.value = value;
    }
    validate() {
        return this.value.length > 0;
    }
}

let username = new Inputs('');
let password = new Inputs('12334');

let fields = [username, password];
let validated = fields.every(input => {
    return input.validate();
});
console.log(validated);  // false

/*
* reduce
* 判断字符串中的括号是否对称
* */
function balance(string) {
    return !string.split('').reduce((previous, item) => {
        if (previous < 0) {return previous}
        if (item == '(') {return ++previous}
        if (item == ')') {return --previous}
        return previous;
    }, 0);
}
console.log(balance(')((())'));