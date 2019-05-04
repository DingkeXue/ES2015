const http = new FetchHttp;
http.delete('http://jsonplaceholder.typicode.com/users/1')
.then(data => {
    console.log(data)
});