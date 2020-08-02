import { fromJS } from 'immutable';

import {
  LOAD_ADMIN_MASTER_DATA,
  INCREASE_REQUEST,
  DECREASE_REQUEST,
  UPDATE_LOCATION
} from '../actions/action_types';

const INITIAL_STATE = fromJS({
  accountTypes: [],
  searchProviders: [],
  vectors: [],
  requestCount: 0,
  userRoles: [
    { name: 'Research Analyst', value: 2 },
    { name: 'Enagagement Manager', value: 3 }
  ],
  locationUpdate: false
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_ADMIN_MASTER_DATA: {
      const { accountTypes, searchProviders, vectors } = action.payload;
      return state.merge({
        accountTypes,
        searchProviders,
        vectors
      });
    }
    case INCREASE_REQUEST: {
      const requestCount = state.get('requestCount');
      return state.set('requestCount', requestCount + 1);
    }
    case DECREASE_REQUEST: {
      const requestCount = state.get('requestCount');
      return state.set('requestCount', requestCount - 1);
    }
    case UPDATE_LOCATION: {
      return state.set('locationUpdate', !state.get('locationUpdate'));
    }
    default: {
      return state;
    }
  }
}
