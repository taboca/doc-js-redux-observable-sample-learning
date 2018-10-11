import * as types from './actionTypes';
import { filter, delay, mapTo, bufferWhen } from 'rxjs/operators';
import { ofType } from 'redux-observable';


/*

export const flagFlip = action$ => action$.pipe(
  filter(action => action.type === types.ACTION_FLAG_1),
  bufferWhen((action) => {
    console.log(action);
    return action$.ofType(types.ACTION_FLAG_1);
  }),
  delay(5000),
  mapTo({ type: types.ACTION_FLAG_2 })
);

*/

export const flagFlip = function(action$) {
  return action$
    .ofType('ACTION_FLAG_1')
    .pipe(mapTo({ type: types.ACTION_FLAG_2 }));
}
