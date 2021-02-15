import axios from 'axios';

const client = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

export const search = async (text) => {
  return client.post('/', text).then(handleResponse);
};

const handleResponse = (resp) => {
  if (resp && resp.data) {
    return resp.data;
  }
  return {};
};
