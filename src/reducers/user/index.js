import { SIGN_IN_FETCHED, LOG_OUT, USER_UPDATE_FETCHED } from '../../constants';

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
    case USER_UPDATE_FETCHED:
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
