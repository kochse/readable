import React from 'react';

const Comment = ({ comment, upVoteComment, downVoteComment, editComment, deleteComment }) => {
  if (!comment) {
    return null;
  }
  return (
    <li className="list-group-item" key={comment.id}>
      <div className="mt-2 mb-2 d-flex justify-content-between">
        <p>Score: {comment.voteScore}</p>
        <div>
          <button onClick={() => editComment()}>edit</button>
          <button onClick={() => deleteComment(comment)}>delete</button>
        </div>
      </div>
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
