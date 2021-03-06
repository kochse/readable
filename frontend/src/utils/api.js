const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token) {
  // eslint-disable-next-line
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const fetchPosts = () => fetch(`${api}/posts`, { headers }).then(res => res.json());

export const fetchPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers }).then(res => res.json());

export const fetchComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers }).then(res => res.json());

export const votePost = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  }).then(res => res.json());

export const voteComment = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  }).then(res => res.json());

export const createPost = post => {
  const { id, timestamp, title, body, author, category } = post;
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, timestamp, title, body, author, category }),
  }).then(res => res.json());
};

export const updatePost = post => {
  const { id, title, body } = post;
  return fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  }).then(res => res.json());
};

export const deletePost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());

export const createComment = comment => {
  const { parentId, id, timestamp, body, author } = comment;
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, timestamp, body, author, parentId }),
  }).then(res => res.json());
};

export const updateComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body: comment.body }),
  }).then(res => res.json());

export const deleteComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
