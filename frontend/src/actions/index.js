import * as API from '../utils/api';
import * as types from './types';

export const receiveCategories = categories => ({
  type: types.RECEIVE_CATEGORIES,
  payload: categories,
});

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

export const receiveUpVotePost = postId => ({
  type: types.UPVOTE_POST,
  payload: postId,
});

export const receiveDownVotePost = postId => ({
  type: types.DOWNVOTE_POST,
  payload: postId,
});

export const fetchCategories = () => dispatch =>
  API.fetchCategories().then(categories => dispatch(receiveCategories(categories)));

export const fetchPosts = () => dispatch =>
  API.fetchPosts().then(posts => dispatch(receivePosts(posts)));

export const fetchPost = (postId) => dispatch =>
  API.fetchPost(postId).then(post => dispatch(receivePost(post)));

export const fetchComments = (postId) => dispatch =>
  API.fetchComments(postId).then(comments => dispatch(receiveComments(comments)));

export const upVotePost = (postId) => dispatch =>
  API.votePost(postId, 'upVote').then(() => dispatch(receiveUpVotePost(postId)));

export const downVotePost = (postId) => dispatch =>
  API.votePost(postId, 'downVote').then(() => dispatch(receiveDownVotePost(postId)));
