import * as API from '../utils/api';
import * as types from './types';

export const receivePosts = posts => ({
  type: types.RECEIVE_POSTS,
  payload: posts,
});

export const fetchPosts = () => dispatch =>
  API.fetchPosts().then(posts => dispatch(receivePosts(posts)));
