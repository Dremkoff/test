import { push } from 'connected-react-router';

import { SIGN_IN_FETCHING, SIGN_IN_FETCHED, SIGN_IN_REJECTED } from '../constants';
import { singnInFunc } from '../utils';

export const signInAction = credentials => dispatch => {
  dispatch({
    type: SIGN_IN_FETCHING,
  })
  const response = singnInFunc(credentials);
  if ('error' in response) {
    dispatch({
      type: SIGN_IN_REJECTED,
      error: response,
    })
  }
  if ('user' in response) {
    dispatch({
      type: SIGN_IN_FETCHED,
      payload: { ...response },
    });
    dispatch(push('/en/profile'));
  }
}
