import axios from 'axios';
import qs from 'qs';
import MintUI from 'mint-ui'

axios.defaults.baseURL = 'http://mchapi.globalinfluence.cn/index.php/mt_home/';
axios.defaults.timeout = 50000;
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"


// 添加请求拦截器
axios.interceptors.request.use(config =>{
    if(config.method == 'post'){
        if(!config.data){
            config.data = {};
        }
        config.data = qs.stringify(config.data);
    }else if (config.method == 'get'){

    }

    return config;
},error => {
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(res => {
    if(typeof res.data == 'string'){
        alert(res.data);
        return false;
    }

    switch (res.data.ret){
        case 200:
            return res.data.data;
        case 300:
            // 重定向
            break;
        default:
            alert(res.data.msg)
            // MessageBox.alert(res.data.msg);
            return false;
    }
},error => {
    return Promise.reject(error);
});

export default axios;