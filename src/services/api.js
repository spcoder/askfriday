import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:9090',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

client.defaults.timeout = 5000;

export const search = async (text) => {
  console.log(`searching...${text}`);
  return client.post('/test', text).then(handleResponse);
};

const handleResponse = (resp) => {
  if (resp && resp.data) {
    console.log('resp.data', resp.data);
    return resp.data;
  }
  return {};
};
