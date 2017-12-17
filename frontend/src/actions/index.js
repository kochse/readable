import * as API from '../utils/api';
import * as types from './types';

export const receivePosts = posts => ({
  type: types.RECEIVE_POSTS,
  payload: posts,
});

export const receivePost = post => ({
  type: types.RECEIVE_POST,
  payload: post,
});

export const receiveComments = comments => ({
  type: types.RECEIVE_COMMENTS,
  payload: comments,
});

export const fetchPosts = () => dispatch =>
  API.fetchPosts().then(posts => dispatch(receivePosts(posts)));

export const fetchPost = (postId) => dispatch =>
  API.fetchPost(postId).then(post => dispatch(receivePost(post)));

export const fetchComments = (postId) => dispatch =>
  API.fetchComments(postId).then(comments => dispatch(receiveComments(comments)));
