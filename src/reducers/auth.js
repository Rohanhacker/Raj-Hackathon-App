import * as types from '../actions/types'

export const auth = (state = 'LOGOUT', { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return types.LOGIN;
    default:
      return state;
  }
};
