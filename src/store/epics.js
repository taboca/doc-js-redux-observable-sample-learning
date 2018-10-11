import * as types from './actionTypes';
import { filter, delay, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';


export const flagFlip = action$ => action$.pipe(
  filter(action => action.type === types.ACTION_FLAG_1),
  delay(1000),
  mapTo({ type: types.ACTION_FLAG_2 })
);
