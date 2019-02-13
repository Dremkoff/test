import { SIGN_IN_FETCHED, USER_UPDATED, LOG_OUT } from '../../constants';

const initialState = {
  userName: '',
  name: '',
  surName: '',
  phone: '',
  city: '',
  country: '',
  address: ''
};

export default function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case USER_UPDATED:
    case SIGN_IN_FETCHED: {
      return { ...state, ...action.payload.user };
    }
    case LOG_OUT: {
      return initialState;
    }
    default:
      return state;
  }
}
