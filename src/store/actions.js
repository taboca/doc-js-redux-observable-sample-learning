import * as types from './actionTypes';

/* Example of async with thunk.. */

export function command_setFlagOn() {
  return function (dispatch) {
    dispatch({
      type  : types.ACTION_FLAG_ON,
    });
  }
}
