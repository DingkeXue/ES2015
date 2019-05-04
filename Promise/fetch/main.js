document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getApi);
let output = document.querySelector('#output');

function getText() {
    fetch('test.txt').then((res) => res.text()).then(data => {
        output.innerHTML = `
        <p>${data}</p>
        `
    })
}

function getJson() {
    fetch('test.json').then(res => res.json())
        .then(data => {
            let out = '';
            data.forEach(item => {
                out += `
                    <li>${item.title}</li>
                `
        });
            output.innerHTML = out;
    })
}

function getApi() {
    fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
        let out = '';
        data.forEach(item => {
            out += `
                    <li>${item.name}</li>
                `
        });
        output.innerHTML = out;
    })
}