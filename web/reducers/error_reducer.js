import { fromJS } from 'immutable';
import { LOGIN_ERROR, CLEAR_ERROR } from '../actions/auth_types';

const INITIAL_STATE = fromJS({
  loginError: ''
});
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_ERROR: {
      return fromJS({
        loginError: action.payload
      });
    }
    case CLEAR_ERROR: {
      return INITIAL_STATE;
    }
    default:
      break;
  }

  return state;
}
