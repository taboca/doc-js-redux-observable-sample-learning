import storeFlags from './reducer';

import { applyMiddleware, combineReducers } from 'redux';

export const rootReducer = combineReducers({
  storeFlags,
});
