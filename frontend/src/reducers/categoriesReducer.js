import * as types from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_CATEGORIES:
      return Object.assign({}, ...action.payload.map(item => ({ [item['path']]: item })));
    default:
      return state;
  }
}