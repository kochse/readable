import { RECEIVE_POSTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.payload;
    default:
      return state;
  }
}