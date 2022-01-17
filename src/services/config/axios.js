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
  const token = localStorage.getItem("token");
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

const faker = axios.create({
  baseURL: `${rootApi}`,
  headers: {
    "Content-Type": "application/json",
  },
});

faker.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }

  return config;
});

faker.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error.response.data);
  }
);

export default { api, faker };



