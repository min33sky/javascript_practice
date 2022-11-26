const axios = require('axios');

//? Dependency Injection
//? 클라이언트가 어떤 HTTP 모듈을 사용하는지 알 필요가 없다. / (Client doesn't need to know what HTTP module is used.)
//* fetchResource라는 클라이언트에 httpClient라는 서비스를 주입함.

const fetchResource = (httpClient) => (url) => {
  httpClient(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const httpClient = axios.create({
  baseURL: 'https://quotable.io',
  method: 'GET',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// 다른 서비스를 사용해도 fetchResource(클라이언트)는 해당 서비스의 구성을 알 필요가 없다. / (fetchResource(client) doesn't need to know the configuration of the service.)
const httpClient2 = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  method: 'GET',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const getData = fetchResource(httpClient);

getData('/random');
