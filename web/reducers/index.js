import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth_reducer';
import error from './error_reducer';
import masterData from './master_data_reducer';



// client application reducer
export const appReducer = combineReducers({
  auth,
  error,
  form: formReducer, // donot change the name of the properties
  masterData
});