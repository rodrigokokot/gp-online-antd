import axios from 'axios'

// axios.defaults.withCredentials = true

const rootApi = process.env.REACT_APP_API

const api = axios.create({
  baseURL: `${rootApi}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token");
  const token = process.env.REACT_TOKEN
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
    return Promise.reject(error.response.data);
  }
);

//////////////////////////////////
const jsonPlaceHolder = axios.create({
  baseURL: `${rootApi}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export {api, jsonPlaceHolder};



