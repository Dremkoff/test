import { push } from 'connected-react-router';

import {
  SIGN_IN_FETCHING,
  SIGN_IN_FETCHED,
  SIGN_IN_REJECTED,
  LOG_OUT,
  USER_UPDATE_FETCHING,
  USER_UPDATE_FETCHED,
  USER_UPDATE_REJECTED
} from '../constants';
import { singnInFunc, updateProfileFunc } from '../utils';

export const signInAction = credentials => dispatch => {
  dispatch({
    type: SIGN_IN_FETCHING
  });
  singnInFunc(credentials)
    .then(response => {
      dispatch({
        type: SIGN_IN_FETCHED,
        payload: { ...response }
      });
      dispatch(push('/en/profile'));
    })
    .catch(error =>
      dispatch({
        type: SIGN_IN_REJECTED,
        error
      })
    );
};

export const logOutAction = () => ({
  type: LOG_OUT
});

export const updateProfile = data => dispatch => {
  dispatch({
    type: USER_UPDATE_FETCHING
  });
  updateProfileFunc(data)
    .then(response =>
      dispatch({
        type: USER_UPDATE_FETCHED,
        payload: { user: { ...response } }
      })
    )
    .catch(error =>
      dispatch({
        type: USER_UPDATE_REJECTED,
        error
      })
    );
};
