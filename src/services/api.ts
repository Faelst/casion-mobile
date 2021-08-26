import axios from 'axios'

const api = axios.create({
  baseURL: `https://casion-api.herokuapp.com/api`,
});

const apiGraphql = axios.create({
  baseURL: `https://casion-api.herokuapp.com/graphql`,
});

export {api , apiGraphql};