import myFirstReducer from './reducer';

import { applyMiddleware, combineReducers } from 'redux';

export const rootReducer = combineReducers({
  myFirstReducer,
});
