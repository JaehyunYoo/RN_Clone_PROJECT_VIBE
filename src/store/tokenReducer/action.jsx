import { GET_TOKEN } from '../types';
import { API_TOKEN, TOKEN_ID, TOKEN_SECRET } from '../../config/Api';
import base64 from 'base-64';
import axios from 'axios';

const AUTH = 'Basic ' + base64.encode(TOKEN_ID + ':' + TOKEN_SECRET);

export const token = (getToken) => {
  return {
    type: GET_TOKEN,
    payload: getToken,
  };
};

export const globalToken = () => async (dispatch) => {
  try {
    const responese = await axios(API_TOKEN, {
      method: 'POST',
      headers: {
        Authorization: AUTH,
      },
      data: 'grant_type=client_credentials',
    });
    dispatch(token(responese.data.access_token));
  } catch (msg) {
    console.log(msg);
  }
};

