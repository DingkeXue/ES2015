/*
* 用迭代器和生成器获取下一个
* */

const data = [
    {
        name: '刘备备',
        age: 33,
        gender: '男',
        location: '北京',
        salary: '16k',
        img: './img/three-01.jpg'
    },
    {
        name: '张飞飞',
        age: 23,
        gender: '男',
        location: '北京',
        salary: '14k',
        img: './img/three-02.jpg'
    },
    {
        name: '韩梅梅',
        age: 25,
        gender: '女',
        location: '北京',
        salary: '15k',
        img: './img/three-03.jpg'
    }
];

// 迭代器
function Iterator(data) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < data.length ? {value: data[nextIndex++], done: false} :
                {value: undefined, done: true}
        }
    }
}

// let profile = Iterator(data);

// generator
function* Generator(data) {
    let nextIndex = 0;
    while (nextIndex < data.length) {
        yield data[nextIndex++];
    }
}
let profile = Generator(data);

function nextProfile() {
    const current = profile.next().value;
    if (current !== undefined) {
        document.querySelector('.content').innerHTML = `
        <div class="mb-5">
            <img class="img-circle" src="${current.img}" alt="pic">
        </div>
        <ul class="list-group">
            <li class="list-group-item mb-3">姓名： ${current.name}</li>
            <li class="list-group-item mb-3">性别： ${current.gender}</li>
            <li class="list-group-item mb-3">年龄： ${current.age}</li>
            <li class="list-group-item mb-3">地点： ${current.location}</li>
            <li class="list-group-item mb-3">薪资期望： ${current.salary}</li>
        </ul>
        `
    } else {
        window.location.reload();
    }
}
nextProfile();

document.querySelector('.btn').addEventListener('click', nextProfile);



