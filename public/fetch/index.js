// import axios
let axiosModule = document.createElement('script');
axiosModule.src = "https://unpkg.com/axios/dist/axios.min.js";
document.head.appendChild(axiosModule);

// base url
let baseUrl = "http://localhost:3000";

// all url
let api = {
    ajaxTest: data => axios.get('/test', data)
}