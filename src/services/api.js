import axios from 'axios';

const client = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

client.defaults.timeout = 5000;

export const search = async (text) => {
  console.log(`searching...${text}`);
  return client.post('/', text).then(handleResponse);
};

const handleResponse = (resp) => {
  if (resp && resp.data) {
    return resp.data;
  }
  return {};
};
