// Constants
import {
  SIGN_IN_FETCHING,
  SIGN_IN_FETCHED,
  SIGN_IN_REJECTED,
  LOG_OUT
} from '../../constants';

const initialState = {
  fetching: false,
  isAuthorised: false,
  error: {}
};

export default function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case SIGN_IN_FETCHING: {
      return { ...state, fetching: true };
    }
    case SIGN_IN_FETCHED: {
      return { ...state, fetching: false, isAuthorised: true };
    }
    case SIGN_IN_REJECTED: {
      const { error } = action;
      return { ...state, fetching: false, ...error };
    }
    case LOG_OUT: {
      return { ...state, isAuthorised: false };
    }
    default:
      return state;
  }
}
