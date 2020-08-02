import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { appReducer } from './reducers';

const createStoreWithMiddleWare = applyMiddleware(ReduxThunk)(createStore);

export const appStore = createStoreWithMiddleWare(appReducer);