import * as types from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_COMMENTS:
      return Object.assign({ ...state }, ...action.payload.map(item => ({ [item['id']]: item })));
    default:
      return state;
  }
}