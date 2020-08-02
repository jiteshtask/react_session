import { fromJS } from 'immutable';
import { LOGIN, GET_CONTACT, LOG_OUT } from '../actions/auth_types';

const INITIAL_STATE = fromJS({
  isAuthenticated: false,
  contacts: [],
  contact_addedd : false
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN: {
      return fromJS({
        contact_addedd: true
      });
    }
    case GET_CONTACT: {
      return fromJS({
        contacts: action.payload.data
      });
    }
    default:
      break;
  }

  return state;
}
