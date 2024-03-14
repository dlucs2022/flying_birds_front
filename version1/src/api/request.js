import axios from 'axios';
axios.defaults.withCredentials = true;
const request = axios.create({
    baseURL: 'http://192.168.46.138:8000', // 设置基础 URL
    timeout: 500000000,
    withCredentials: true, // 跨域请求时发送Cookie
    crossDomain: true,
});
export default request