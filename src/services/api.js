import axios from 'axios'

const Api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

// add request interceptor 
Api.interceptors.request.use(
    function(config){
        // console.log('request interceptor',config);
        return config
    },
    function(error){
        // console.log('request error interceptor',error);
        return Promise.reject(error)
    }
)
// add responce interceptor 
Api.interceptors.response.use(
    function(response){
        // console.log('response interceptor',response);
        return response
    },
    function(error){
        // console.log('response error interceptor',error);
        return Promise.reject(error)
    }
)


export default Api