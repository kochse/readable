import * as types from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_POSTS:
      return Object.assign({}, ...action.payload.map(item => ({ [item['id']]: item })));
    case types.RECEIVE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case types.UPVOTE_POST: {
      const post = state[action.payload];
      return { ...state, [action.payload]: { ...post, voteScore: post.voteScore + 1 } };
    }
    case types.DOWNVOTE_POST: {
      const post = state[action.payload];
      return { ...state, [action.payload]: { ...post, voteScore: post.voteScore - 1 } };
    }
    default:
      return state;
  }
}