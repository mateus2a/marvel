import axios from 'axios';
import generateUrlParamsMarvelApi from '../utils/generateUrlParamsMarvelApi';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: generateUrlParamsMarvelApi(),
});
