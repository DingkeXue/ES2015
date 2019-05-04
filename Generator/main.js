/*
*
* */
// 用迭代器实现 generator 生成器
function Generator(numbers) {
    let index = 0;
    return {
        next: function () {
            return index < numbers.length ? {value: numbers[index++], done: false} : {value: undefined, done: true};
        }
    }
}
let arr = [11, 12, 13];
let num = Generator(arr);
for (let i = 0; i < 4; i ++ ) {
    console.log(num.next());
}


// 斐波那契数列
function fib(max) {
    let a = 0, b = 1, arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}
/*console.log(fib(10));*/

function* fib2(max) {
    let a = 0, b = 1, n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++;
    }
    return;
}
for (let x of fib2(10)) {
    console.log(x);
}

// id 自增
function* addID() {
    let id = 1;
    while (true) {
        yield id ++;
    }
}
let add = addID();
for (let i = 0; i < 10; i ++) {
    console.log(add.next().value);
}