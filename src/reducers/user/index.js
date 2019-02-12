import { SIGN_IN_FETCHED, USER_UPDATED } from '../../constants';

const initialState = {
  userName: '',
  name: '',
  surname: '',
  phone: '',
  city: '',
  country: '',
  adress: ''
};

export default function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case USER_UPDATED:
    case SIGN_IN_FETCHED: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
