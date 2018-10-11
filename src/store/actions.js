import * as types from './actionTypes';

/* Example of async with thunk.. */

export function command_PinnableYoutube_paused_success(videoId, currentTime) {
  return function (dispatch) {
    dispatch({
      type  : types.ACTION_FLAG_ON,
    });
  }
}
