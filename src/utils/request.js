import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9091',
    timeout: 10000
});

export const get = (url, param = {}) => {
    console.log(param);
    return new Promise((resolve, reject) => {
        instance.get(url, { params: param }, {
        }).then((response) => {
            resolve(response.data);
        }, err => {
            console.log('error in post', err);
            reject(err);
        })
    });
}

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response.data);
        }, err => {
            console.log('error in post', err);
            reject(err);
        })
    });
}

export const put = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.put(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response.data);
        }, err => {
            console.log('error in post', err);
            reject(err);
        })
    });
}

export const deleteAPI = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.delete(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response.data);
        }, err => {
            console.log('error in deleteAPI', err);
            reject(err);
        })
    });
}
