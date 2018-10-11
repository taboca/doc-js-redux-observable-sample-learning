import { applyMiddleware, combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import storeFlags from './reducer';
import { flagFlip } from './epics';

export const rootReducer = combineReducers({
  storeFlags,
});

export const rootEpic = combineEpics(
  flagFlip,
);
