/*
* class 类
* 面向对象：继承，封装，多态
* */

// 封装
class Car {
    constructor(options) {
        this.title = options.title;
    }
    drive() {
        return this.title + '滴滴';
    }
    static greeting() {
    // 这属于私有方法，只有该类或子类能调用静态方法，实例出来的对象不能调用
        return "欢迎乘车";
    }
}

let byd = new Car({title: 'BYD'});
console.log(byd.drive());


// 继承 通过 extends 关键字实现
class BYD extends Car{
    constructor(options) {
        super(options);
        this.price = options.price;
    }
    static greeting() {
        return super.greeting() + '!';
    }
}
let byd2 = new BYD({price: 10, title: 'BYD'});
console.log(byd2);
console.log(BYD.greeting());

class Foo {
    static classMethod() {
        return 'hello';
    }
}

class Bar extends Foo{
    static classMethod() {
        return super.classMethod() + '!';
    }
}

console.log(Bar.classMethod());