import * as types from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_COMMENTS:
      return Object.assign({ ...state }, ...action.payload.map(item => ({ [item['id']]: item })));
    case types.UPVOTE_COMMENT: {
      const comment = state[action.payload];
      return { ...state, [action.payload]: { ...comment, voteScore: comment.voteScore + 1 } };
    }
    case types.DOWNVOTE_COMMENT: {
      const comment = state[action.payload];
      return { ...state, [action.payload]: { ...comment, voteScore: comment.voteScore - 1 } };
    }
    default:
      return state;
  }
}