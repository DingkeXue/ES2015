/*
* Promise 三种状态
* 1. pending
* 2. fulfilled
* 3. rejected
* 存在问题：回调地狱
* */

// 利用 XMLHttpRequest 发送请求
function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    })
}

getData('http://jsonplaceholder.typicode.com/posts').then(response => {
    //console.log(response)
}).catch(error => {
    console.log(error);
});

// 利用 fetch 发送请求
fetch('http://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});