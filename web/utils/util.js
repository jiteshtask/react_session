import axios from 'axios';

import { domain } from '../config';
import { adminStore } from '../store';
import { INCREASE_REQUEST, DECREASE_REQUEST } from '../actions/action_types';



export const axiosInstnace = axios.create({
  baseURL: domain
});

axiosInstnace.interceptors.request.use(
  config => {
    adminStore.dispatch({ type: INCREASE_REQUEST });

    return config;
  },
  error => Promise.reject(error)
);

axiosInstnace.interceptors.response.use(
  response => {
    adminStore.dispatch({ type: DECREASE_REQUEST });
    return response;
  },
  error => {
    adminStore.dispatch({ type: DECREASE_REQUEST });

    if (error.response.status === 401) {
      deleteUserData();
      window.location.assign('/');
    }
    if (error.response.status === 400) {
      return Promise.reject(error.response.data.message);
    }
    return Promise.reject(error.response.data.details[0]);
  }
);
