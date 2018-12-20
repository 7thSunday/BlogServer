import axios from 'axios';

const baseUrl = 'http://127.0.0.1:2333';

export default {
    dotest: data => axios.get(baseUrl+'/test', data),
}