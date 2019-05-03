let app = document.querySelector('.app');

let name = 'lbb';
function greeting(str) {
    return str.toUpperCase();
}

let template = `
    <h1>${name}, ${greeting('hello')}</h1>
`;

app.innerHTML = template;