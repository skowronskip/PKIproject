import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
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
