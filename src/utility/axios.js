import axios from 'axios';

const instance = axios.create({
    //baseURL:"http://103.50.205.60:8000/api/v1/",
    baseURL:"http://103.50.205.60:8001/api/v1/",
    //baseURL:"http://localhost:8001/api/v1/",
    //baseURL:"http://localhost:8000/api/v1/",

  // withCredentials: true,
  // crossDomain: true,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  //}
});
instance.defaults.withCredentials=true;

export default instance;