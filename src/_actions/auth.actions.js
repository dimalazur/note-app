import { authConstants } from '../_constants';
import { authService } from '../_services';

function signUp(name, email, password, confirm, history) {
  const request = () => ({ type: authConstants.SIGN_UP_REQUEST });
  const success = payload => ({ type: authConstants.SIGN_UP_SUCCESS, payload });
  const failure = payload => ({ type: authConstants.SIGN_UP_FAILURE, payload });

  return (dispatch) => {
    dispatch(request());

    authService.signUp(name, email, password, confirm)
      .then(
        ({ headers, data }) => {
          if (headers['access-token']) {
            localStorage.setItem('access_token', JSON.stringify(headers['access-token']));
          }
          if (headers.client) {
            localStorage.setItem('client', JSON.stringify(headers.client));
          }
          if (headers.expiry) {
            localStorage.setItem('expiry', JSON.stringify(headers.expiry));
          }
          if (headers.uid) {
            localStorage.setItem('uid', JSON.stringify(headers.uid));
          }
          dispatch(success(data));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error.response.data));
        },
      );
  };
}

function signIn(email, password, history) {
  const request = () => ({ type: authConstants.SIGN_IN_REQUEST });
  const success = payload => ({ type: authConstants.SIGN_IN_SUCCESS, payload });
  const failure = payload => ({ type: authConstants.SIGN_IN_FAILURE, payload });

  return (dispatch) => {
    dispatch(request());

    authService.signIn(email, password)
      .then(
        ({ headers, data }) => {
          if (headers['access-token']) {
            localStorage.setItem('access_token', JSON.stringify(headers['access-token']));
          }
          if (headers.client) {
            localStorage.setItem('client', JSON.stringify(headers.client));
          }
          if (headers.expiry) {
            localStorage.setItem('expiry', JSON.stringify(headers.expiry));
          }
          if (headers.uid) {
            localStorage.setItem('uid', JSON.stringify(headers.uid));
          }
          dispatch(success(data));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error.response.data));
        },
      );
  };
}

export default {
  signUp,
  signIn,
};
