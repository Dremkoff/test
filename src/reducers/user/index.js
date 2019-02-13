import { SIGN_IN_FETCHED, USER_UPDATED } from '../../constants';

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
    default:
      return state;
  }
}
