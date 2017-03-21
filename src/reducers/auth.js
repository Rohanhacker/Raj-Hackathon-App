import * as types from '../actions/types'

export const auth = (state = 'LOGOUT', { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return types.LOGIN;
    case 'LOGOUT':
      return 'LOGOUT';
    default:
      return state;
  }
};
