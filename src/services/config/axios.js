import axios from 'axios'

// axios.defaults.withCredentials = true

const rootApi = process.env.REACT_APP_API

const login = axios.create({
  baseURL: `${rootApi}/api`,
  headers: {
    "Content-Type": "application/json",
    "accept": "text/plain",
  },
});

const api = axios.create({
  baseURL: `${rootApi}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // const codeStatus = error.response.status
    // if(codeStatus == 500) {
    //   // sessionStorage.removeItem('token')
    //   // window.location.href = '/login'
    // }
    return Promise.reject(error.response);
  }
);

//////////////////////////////////
const jsonPlaceHolder = axios.create({
  baseURL: `${rootApi}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export {api, jsonPlaceHolder,login};



