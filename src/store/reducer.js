import * as types from './actionTypes';

const defaultState = {
  flag: 0
}

export default function reduce(state = defaultState, action = {}) {
  switch (action.type) {
    case types.ACTION_FLAG_1:
      return Object.assign({}, state, {
        flag : 1,
      });
    case types.ACTION_FLAG_2:
      return Object.assign({}, state, {
        flag : 2,
      });
    default:
      return state;
  }
}
