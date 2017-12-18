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
    case types.CREATE_POST: {
      const post = action.payload;
      return { ...state, [post.id]: { ...post } };
    }
    case types.UPDATE_POST: {
      const post = action.payload;
      return { ...state, [post.id]: { ...state[post.id], title: post.title, body: post.body } };
    }
    case types.DELETE_POST: {
      const postId = action.payload;
      return { ...state, [postId]: { ...state[postId], deleted: true } };
    }
    case types.CREATE_COMMENT: {
      const comment = action.payload;
      const parent = state[comment.parentId];
      return { ...state, [comment.parentId]: { ...parent, commentCount: parent.commentCount + 1 } };
    }
    case types.DELETE_COMMENT: {
      const comment = action.payload;
      const parent = state[comment.parentId];
      return { ...state, [comment.parentId]: { ...parent, commentCount: parent.commentCount - 1 } };
    }
    default:
      return state;
  }
}