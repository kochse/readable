import React from 'react';

const Comment = ({ comment }) => {
  if (!comment) {
    return null;
  }
  return (
    <li className="list-group-item" key={comment.id}>
      <p>Score: {comment.voteScore}</p>
      <p>{comment.body}</p>
      <p>Author: {comment.author}</p>
    </li>
  );
};

export default Comment;
