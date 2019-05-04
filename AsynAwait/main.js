const http = new FetchHttp;
http.post('http://jsonplaceholder.typicode.com/users', {name: 'lbb'}).then(data => console.log(data));