import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post, upVotePost, downVotePost, editPost, deletePost }) => (
  <li className="list-group-item">
    <div className="mt-2 mb-2 d-flex justify-content-between">
      <span>Score: {post.voteScore}</span>
      <span>{new Date(post.timestamp).toDateString()}</span>
      <div>
        <Link to={`/${post.category}/${post.id}/update`}>
          <button>edit</button>
        </Link>
        <button onClick={() => deletePost(post.id)}>delete</button>
      </div>
    </div>
    <div className="mt-2 mb-2">
      <Link to={`/${post.category}/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
    </div>
    <div className="mb-2">
      <span>Author: {post.author}</span>{' '}
    </div>
    <div className="mb-2">
      <span>{post.commentCount} Comments</span>
    </div>
    <div className="mb-2 btn-group" role="group">
      <button type="button" className="btn btn-success" onClick={() => upVotePost(post.id)}>
        Upvote
      </button>
      <button type="button" className="btn btn-danger" onClick={() => downVotePost(post.id)}>
        Downvote
      </button>
    </div>
  </li>
);

export default PostItem;
