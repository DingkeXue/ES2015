/*
* spread 是 三个 ...，将一个数组转为用逗号分隔的参数序列
* */

console.log(1, ...[2, 3], 4);

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(...arr2, ...arr1); // 类似 concat

// 练习
function checkShop(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

console.log(checkShop('apple', 'cucumber'));

function sum(...numbers) {
    return numbers.reduce((sum, num) => {
        return sum + num;
    }, 0);
}

console.log(sum(1, 2, 3, 4));