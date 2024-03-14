import axios from 'axios';
axios.defaults.withCredentials = true;
const request = axios.create({
    baseURL: '192.168.xxxxx', // 设置基础 URL
    timeout: 5000000,
    withCredentials: true, // 跨域请求时发送Cookie
    crossDomain: true,
});
export default request