import axios from 'axios';
import settings from '../settings';

axios.defaults.baseURL = settings.api_v1;

const signUp = (name, email, password, confirm) => (
  axios.post('/auth/', {
    name,
    email,
    password,
    confirm,
  })
);

const signIn = (email, password) => (
  axios.post('/auth/sign_in/', {
    email,
    password,
  })
);

export default {
  signUp,
  signIn,
};
