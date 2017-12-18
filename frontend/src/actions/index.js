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

export const receiveUpVoteComment = commentId => ({
  type: types.UPVOTE_COMMENT,
  payload: commentId,
});

export const receiveDownVoteComment = commentId => ({
  type: types.DOWNVOTE_COMMENT,
  payload: commentId,
});

export const receiveCreatePost = post => ({
  type: types.CREATE_POST,
  payload: post,
});

export const receiveUpdatePost = post => ({
  type: types.UPDATE_POST,
  payload: post,
});

export const receiveDeletePost = postId => ({
  type: types.DELETE_POST,
  payload: postId,
});

export const receiveCreateComment = comment => ({
  type: types.CREATE_COMMENT,
  payload: comment,
});

export const receiveUpdateComment = comment => ({
  type: types.UPDATE_COMMENT,
  payload: comment,
});

export const receiveDeleteComment = commentId => ({
  type: types.DELETE_COMMENT,
  payload: commentId,
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

export const upVoteComment = (commentId) => dispatch =>
  API.voteComment(commentId, 'upVote').then(() => dispatch(receiveUpVoteComment(commentId)));

export const downVoteComment = (commentId) => dispatch =>
  API.voteComment(commentId, 'downVote').then(() => dispatch(receiveDownVoteComment(commentId)));

export const createPost = post => dispatch =>
  API.createPost(post).then(() => dispatch(receiveCreatePost(post)));

export const updatePost = post => dispatch =>
  API.updatePost(post).then(() => dispatch(receiveUpdatePost(post)));

export const deletePost = postId => dispatch =>
  API.deletePost(postId).then(() => dispatch(receiveDeletePost(postId)));

export const createComment = comment => dispatch =>
  API.createComment(comment).then(() => dispatch(receiveCreateComment(comment)));

export const updateComment = comment => dispatch =>
  API.updateComment(comment).then(() => dispatch(receiveUpdateComment(comment)));

export const deleteComment = commentId => dispatch =>
  API.deleteComment(commentId).then(() => dispatch(receiveDeleteComment(commentId)));
