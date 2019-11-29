import { authConstants } from '../_constants';

const initialState = {
  isFetchingSignUp: false,
  isFetchingSignIn: false,
  user: null,
  errorSignUp: null,
  errorSignIn: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case authConstants.SIGN_UP_REQUEST:
      return {
        ...state,
        isFetchingSignUp: true,
        errorSignUp: null,
      };
    case authConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetchingSignUp: false,
        user: action.payload,
        errorSignUp: null,
      };
    case authConstants.SIGN_UP_FAILURE:
      return {
        ...state,
        isFetchingSignUp: false,
        errorSignUp: action.payload,
      };
    case authConstants.SIGN_IN_REQUEST:
      return {
        ...state,
        isFetchingSignIn: true,
        errorSignIn: null,
      };
    case authConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        isFetchingSignIn: false,
        user: action.payload,
        errorSignIn: null,
      };
    case authConstants.SIGN_IN_FAILURE:
      return {
        ...state,
        isFetchingSignIn: false,
        errorSignIn: action.payload,
      };
    default:
      return state;
  }
}
