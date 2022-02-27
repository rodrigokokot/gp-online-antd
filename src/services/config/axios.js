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
  // console.log(config);
  let method = "";
  method = config.method !== "post" ? "token" : "postToken2"
  const token = sessionStorage.getItem(method); 
  console.log(method)
  // const token = process.env.REACT_APP_TOKEN
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



