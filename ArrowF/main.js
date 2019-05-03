/*
* ES6作用
* 1. 缩短代码
* 2. 改变this指向
*
* 注意：
* 1. 不能在方法中使用
* 2. 不能在构造函数中使用
* 3. 不能在原型链方法上使用
* */

// ES5 中改变 this 的常用方法
const team1 = {
    members: ['刘备备', '张飞飞'],
    age: 34,
    greeting: function () {
        let _this = this;
        return this.members.map(function (member) {
            return `${member} 今年 ${_this.age}`
        })
    }
};

const team2 = {
    members: ['刘备备', '张飞飞'],
    age: 34,
    greeting: function () {
        return this.members.map(function (member) {
            return `${member} 今年 ${this.age}`
        }.bind(this))
    }
};

// ES6
const team = {
    members: ['刘备备', '张飞飞'],
    age: 34,
    greeting: function () {
        return this.members.map( (member) => {
            return `${member} 今年 ${this.age}`
        })
    }
};
alert(team.greeting());