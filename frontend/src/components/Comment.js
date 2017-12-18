import React from 'react';

const Comment = ({ comment, upVoteComment, downVoteComment }) => {
  if (!comment) {
    return null;
  }
  return (
    <li className="list-group-item" key={comment.id}>
      <p>Score: {comment.voteScore}</p>
      <p>{comment.body}</p>
      <p>Author: {comment.author}</p>
      <div className="mb-2 btn-group" role="group">
        <button type="button" className="btn btn-success btn-sm" onClick={() => upVoteComment(comment.id)}>Upvote</button>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => downVoteComment(comment.id)}>Downvote</button>
      </div>
    </li>
  );
};

export default Comment;
