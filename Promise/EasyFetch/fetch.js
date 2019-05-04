/*
*封装 fetch
* get
* post
* put
* delete
* */

class FetchHttp {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
        .catch(error => reject(error));
        })
    }
    post(url, data) {
        return new Promise(((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => resolve(res))
                .catch(err => reject(err));
        }))
    }
    put(url, data) {
        return new Promise(((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => resolve(res))
                .catch(err => reject(err))
        }))
    }
    delete(url) {
        return new Promise(((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(res => resolve(res))
                .catch(err => reject(err))
        }))
    }
}