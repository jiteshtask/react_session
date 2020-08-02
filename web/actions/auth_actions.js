import axios from 'axios';

import { endPoints, domain } from '../config';
import {
  LOGIN,
  LOAD_AUTH_INFO,
  LOG_OUT,
  LOGIN_ERROR,
  GET_CONTACT,
  CLEAR_ERROR
} from './auth_types';
import { history } from '../routes/ClientRoutes';
import {
  axiosInstnace,
  getUserData,
  deleteUserData
} from '../utils/util';

export const addContactList = (contactObject) => async dispatch => {
  try {
    const response = await axios.post(`${domain}${endPoints.contact}`, contactObject);
    getContactList()
    dispatch({
      type: LOGIN,
      payload: response.data.data
    });
  } catch (err) {
    return dispatch({
      type: LOGIN_ERROR,
      payload: 'Something went wrong'
    });
  }
};

export const getContactList = () => async dispatch => {
  try {
    const response = await axios.get(`${domain}${endPoints.contact}`);
    debugger
    dispatch({
      type: GET_CONTACT,
      payload: response.data.data
    });
  } catch (err) {
    return dispatch({
      type: LOGIN_ERROR,
      payload: 'Something went wrong'
    });
  }
};

