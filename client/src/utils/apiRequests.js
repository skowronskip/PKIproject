import axios from 'axios';

axios.defaults.baseURL = 'http://apipki.pskowron.ski';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const getConfig = config => {
    return {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
        },
        ...config
    }
};

export async function loginUser(login, password) {
    return axios.post('/api/login', {login, password}, getConfig());
}

export async function signupUser(login, password, email) {
    return axios.post('/api/users', {login, password, email}, getConfig());
}
