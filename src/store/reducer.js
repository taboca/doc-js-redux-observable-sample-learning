import * as types from './actionTypes';

const defaultState = {
  flag: false
}

export default function reduce(state = defaultState, action = {}) {
  switch (action.type) {
    case types.ACTION_FLAG_ON:
      return Object.assign({}, state, {
        flag : true,
      });
    default:
      return state;
  }
}
