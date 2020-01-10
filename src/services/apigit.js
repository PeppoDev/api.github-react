import axios from 'axios'

const apigit = axios.create({
    baseURL: 'https://api.github.com/users/',
});

export default apigit;

